import FormaPagamento from '#models/forma_pagamento'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await FormaPagamento.createMany([
      {
        tipo: 'Cartão de Crédito',
        descricao: 'Pagamento através de cartão de crédito.',
      },
      {
        tipo: 'Cartão de Débito',
        descricao: 'Pagamento através de cartão de débito.',
      },
      {
        tipo: 'Dinheiro',
        descricao: 'Pagamento em dinheiro.',
      },
      {
        tipo: 'Pix',
        descricao: 'O Pix é um método de pagamento instantâneo do Banco Central do Brasil que permite transferências e pagamentos rápidos e seguros, sem a necessidade de cartões físicos. As transações podem ser feitas a qualquer hora, todos os dias da semana, e o dinheiro é transferido instantaneamente entre contas bancárias.'
      },
      {
        tipo: 'Transferência Bancária',
        descricao: 'Pagamento por transferência bancária.',
      },
    ])
  }
}