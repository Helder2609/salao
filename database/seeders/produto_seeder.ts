import Produto from '#models/produto'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Produto.createMany([
      {
        nome: 'Shampoo Hidratante',
        descricao: 'Shampoo hidratante para cabelos secos e danificados.',
        preco: 35.99,
        tamanho: '250ml', // Adicionei o tamanho conforme o modelo
        tipoProdutoId: 1, // Defina o tipo de produto conforme o relacionamento
      },
      {
        nome: 'Máscara Capilar Reparadora',
        descricao: 'Máscara capilar para reparação intensa de cabelos danificados.',
        preco: 25.99,
        tamanho: '200ml', // Adicionei o tamanho conforme o modelo
        tipoProdutoId: 1, // Defina o tipo de produto conforme o relacionamento
      },
      {
        nome: 'Esmalte Vermelho',
        descricao: 'Esmalte vermelho intenso de longa duração.',
        preco: 10.50,
        tamanho: '10ml', // Adicionei o tamanho conforme o modelo
        tipoProdutoId: 2, // Defina o tipo de produto conforme o relacionamento
      },
    ])
  }
}