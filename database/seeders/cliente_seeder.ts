import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Cliente from '../../app/models/cliente.js'

export default class ClienteSeeder extends BaseSeeder {
  public async run () {
    await Cliente.createMany([
      {
        nome: 'João Silva',
        email: 'joao@example.com',
        telefone: '(11) 99999-9999',
      },
      {
        nome: 'Maria Oliveira',
        email: 'maria@example.com',
        telefone: '(11) 88888-8888',
      },
    ])
  }
}
