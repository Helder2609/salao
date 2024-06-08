import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Funcionario from '../../app/models/funcionario.js'

export default class FuncionarioSeeder extends BaseSeeder {
  public async run () {
    await Funcionario.createMany([
      {
        nome: 'Pedro Santos',
        cargo: 'Desenvolvedor',
        salario: 5000,
      },
      {
        nome: 'Ana Souza',
        cargo: 'Analista de Qualidade',
        salario: 6000,
      },
    ])
  }
}
