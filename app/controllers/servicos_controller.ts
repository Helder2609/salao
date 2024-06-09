import Servico from '../models/servico.js'

export default class ServicosController {
    async index({ response }) {
        const servicos = await Servico.all()
        return response.json(servicos)
    }

    async show({ params, response }) {
        const servico = await Servico.find(params.id)
        if (!servico) {
            return response.status(404).json({ message: 'Serviço não encontrado' })
        }
        return response.json(servico)
    }

    async store({ request, response }) {
        const data = request.only(['nome', 'descricao', 'preco'])
        const servico = await Servico.create(data)
        return response.status(201).json(servico)
    }

    async update({ params, request, response }) {
        const servico = await Servico.find(params.id)
        if (!servico) {
            return response.status(404).json({ message: 'Serviço não encontrado' })
        }
        const data = request.only(['nome', 'descricao', 'preco'])
        servico.merge(data)
        await servico.save()
        return response.status(200).json(servico)
    }

    async destroy({ params, response }) {
        const servico = await Servico.find(params.id)
        if (!servico) {
            return response.status(404).json({ message: 'Serviço não encontrado' })
        }
        await servico.delete()
        return response.status(200).json({ message: 'Serviço deletado com sucesso' })
    }
}
