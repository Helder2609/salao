import DatabaseServiceProvider from '@adonisjs/lucid/database_provider'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Servico from '../../app/models/servico.js'

export default class ServicoSeeder extends BaseSeeder {
  public async run () {
    await Servico.createMany([
      
    ])
  }
}
