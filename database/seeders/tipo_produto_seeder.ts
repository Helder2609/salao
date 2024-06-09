import TipoProduto from '#models/tipo_produto'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await TipoProduto.createMany([
      {
        nome: 'Shampoo',
      },
      {
        nome: 'Condicionador',
      },
      {
        nome: 'Máscara Capilar',
      },
      {
        nome: 'Óleo Capilar',
      },
      {
        nome: 'Finalizador',
      },
      {
        nome: 'Coloração',
      },
      {
        nome: 'Descolorante',
      },
      {
        nome: 'Esmalte',
      },
      {
        nome: 'Base',
      },
      {
        nome: 'Top Coat',
      },
    ])
  }
}