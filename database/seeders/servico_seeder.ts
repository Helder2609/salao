import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Servico from '../../app/models/servico.js'

export default class ServicoSeeder extends BaseSeeder {
  public async run () {
    await Servico.createMany([
      {
        nome: 'Corte de Cabelo Masculino',
        descricao: 'Corte de cabelo masculino, incluindo lavagem e finalização.',
        preco: 30.00,
      },
      {
        nome: 'Manicure',
        descricao: 'Serviço de manicure, incluindo corte, lixamento e esmaltação das unhas das mãos.',
        preco: 25.00,
      },
      {
        nome: 'Pedicure',
        descricao: 'Serviço de pedicure, incluindo corte, lixamento e esmaltação das unhas dos pés.',
        preco: 30.00,
      },
    ])
  }
}
