// import type { HttpContext } from '@adonisjs/core/http'
import Agendamento from '../models/agendamento.js'


export default class AgendamentosController {
  async index({ response }) {
    const agendamentos = await Agendamento.all()
    return response.json(agendamentos)
  }

  async show({ params, response }) {
    const agendamento = await Agendamento.find(params.id)
    if (!Agendamento) {
      return response.status(404).json({ message: 'Agendamento não encontrado' })
    }
    return response.json(agendamento)
  }

  async store({ request, response }) {
    const data = request.only(['cliente', 'data', 'hora'])
    const agendamento = await Agendamento.create(data)
    return response.status(201).json(agendamento)
  }

  async update({ params, request, response }) {
    const agendamento = await Agendamento.find(params.id)
    if (!agendamento) {
      return response.status(404).json({ message: 'Agendamento não encontrado' })
    }
    const data = request.only(['cliente', 'data', 'hora'])
    agendamento.merge(data)
    await agendamento.save()
    return response.status(200).json(agendamento)
  }

  async destroy({ params, response }) {
    const agendamento = await Agendamento.find(params.id)
    if (!agendamento) {
      return response.status(404).json({ message: 'Agendamento não encontrado' })
    }
    await agendamento.delete()
    return response.status(200).json({ message: 'Agendamento deletado com sucesso' })
  }
}
