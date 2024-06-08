import FormaPagamento from '../models/forma_pagamento.js'

export default class FormaPagamentosController {
  async index({ response }) {
    const formasPagamento = await FormaPagamento.all()
    return response.json(formasPagamento)
  }

  async show({ params, response }) {
    const formaPagamento = await FormaPagamentosController.find(params.id)
    if (!formaPagamento) {
      return response.status(404).json({ message: 'Forma de pagamento não encontrada' })
    }
    return response.json(formaPagamento)
  }

  async store({ request, response }) {
    const data = request.only(['tipo', 'descricao'])
    const formaPagamento = await FormaPagamento.create(data)
    return response.status(201).json(formaPagamento)
  }

  async update({ params, request, response }) {
    const formaPagamento = await FormaPagamento.find(params.id)
    if (!formaPagamento) {
      return response.status(404).json({ message: 'Forma de pagamento não encontrada' })
    }
    const data = request.only(['tipo', 'descricao'])
    formaPagamento.merge(data)
    await formaPagamento.save()
    return response.status(200).json(formaPagamento)
  }

  async destroy({ params, response }) {
    const formaPagamento = await FormaPagamento.find(params.id)
    if (!formaPagamento) {
      return response.status(404).json({ message: 'Forma de pagamento não encontrada' })
    }
    await formaPagamento.delete()
    return response.status(200).json({ message: 'Forma de pagamento deletada com sucesso' })
  }
}
