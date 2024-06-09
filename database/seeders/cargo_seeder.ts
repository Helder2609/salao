import Cargo from '#models/cargo'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Cargo.createMany([
      {
        nome: 'Cabeleireiro',
        descricao: 'Responsável por cortes, colorações e tratamentos capilares.',
      },
      {
        nome: 'Esteticista',
        descricao: 'Responsável por tratamentos faciais, corporais e terapias de beleza.',
      },
      {
        nome: 'Manicure e Pedicure',
        descricao: 'Responsável por cuidados com as unhas das mãos e dos pés.',
      },
    ])
  }
}