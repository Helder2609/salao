import Funcionario from "../models/funcionario.js"

export default class FuncionariosController {
    async index({ response }) {
        const funcionarios = await Funcionario.all()
        return response.json(funcionarios)
    }

    async show({ params, response }) {
        const funcionario = await Funcionario.find(params.id)
        if (!funcionario) {
            return response.status(404).json({ message: 'Funcionário não encontrado' })
        }
        return response.json(funcionario)
    }

    async store({ request, response }) {
        const data = request.only(['nome', 'cargo', 'salario'])
        const funcionario = await Funcionario.create(data)
        return response.status(201).json(funcionario)
    }

    async update({ params, request, response }) {
        const funcionario = await Funcionario.find(params.id)
        if (!funcionario) {
            return response.status(404).json({ message: 'Funcionário não encontrado' })
        }
        const data = request.only(['nome', 'cargo', 'salario'])
        funcionario.merge(data)
        await funcionario.save()
        return response.status(200).json(funcionario)
    }

    async destroy({ params, response }) {
        const funcionario = await Funcionario.find(params.id)
        if (!funcionario) {
            return response.status(404).json({ message: 'Funcionário não encontrado' })
        }
        await funcionario.delete()
        return response.status(200).json({ message: 'Funcionário deletado com sucesso' })
    }
}
