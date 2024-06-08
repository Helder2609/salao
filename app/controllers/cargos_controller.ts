// import type { HttpContext } from '@adonisjs/core/http'
import Cargo from '../models/cargo.js'

export default class CargosController {
    async index({ response }) {
        const cargos = await Cargo.all()
        return response.json(cargos)
    }

    async show({ params, response }) {
        const cargo = await Cargo.find(params.id)
        if (!cargo) {
            return response.status(404).json({ message: 'Cargo não encontrado' })
        }
        return response.json(cargo)
    }

    async store({ request, response }) {
        const data = request.only(['nome', 'descricao'])
        const cargo = await Cargo.create(data)
        return response.status(201).json(cargo)
    }

    async update({ params, request, response }) {
        const cargo = await Cargo.find(params.id)
        if (!cargo) {
            return response.status(404).json({ message: 'Cargo não encontrado' })
        }
        const data = request.only(['nome', 'descricao'])
        cargo.merge(data)
        await cargo.save()
        return response.status(200).json(cargo)
    }

    async destroy({ params, response }) {
        const cargo = await Cargo.find(params.id)
        if (!cargo) {
            return response.status(404).json({ message: 'Cargo não encontrado' })
        }
        await cargo.delete()
        return response.status(200).json({ message: 'Cargo deletado com sucesso' })
    }
}
