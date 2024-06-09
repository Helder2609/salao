import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, manyToMany, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations'
import FuncionariosController from '../controllers/funcionarios_controller.js'
import CargosController from '../controllers/cargos_controller.js'

export default class Funcionario extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare cargo: string

  @column()
  declare salario: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @manyToMany(() => FuncionariosController)
  declare funcionarios: ManyToMany<typeof FuncionarioController>

  @belongsTo(() => CargosController)
  declare cargoRelacionado: BelongsTo<typeof CargosController>
}
