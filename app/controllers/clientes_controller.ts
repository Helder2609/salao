import Cliente from '../models/cliente.js'

export default class ClientesController {
    async index({ response }) {
        const clientes = await Cliente.all()
        return response.json(clientes)
    }

    async show({ params, response }) {
        const cliente = await Cliente.find(params.id)
        if (!cliente) {
            return response.status(404).json({ message: 'Cliente não encontrado' })
        }
        return response.json(cliente)
    }

    async store({ request, response }) {
        const data = request.only(['nome', 'email', 'telefone'])
        const cliente = await Cliente.create(data)
        return response.status(201).json(cliente)
    }

    async update({ params, request, response }) {
        const cliente = await Cliente.find(params.id)
        if (!cliente) {
            return response.status(404).json({ message: 'Cliente não encontrado' })
        }
        const data = request.only(['nome', 'email', 'telefone'])
        cliente.merge(data)
        await cliente.save()
        return response.status(200).json(cliente)
    }

    async destroy({ params, response }) {
        const cliente = await Cliente.find(params.id)
        if (!cliente) {
            return response.status(404).json({ message: 'Cliente não encontrado' })
        }
        await cliente.delete()
        return response.status(200).json({ message: 'Cliente deletado com sucesso' })
    }
}
