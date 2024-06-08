import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Agendamento from '../../app/models/agendamento.js'

export default class AgendamentoSeeder extends BaseSeeder {
  public async run () {
    await Agendamento.createMany([
      {
      cliente: "Helder"
      }
    ])
  }
}
