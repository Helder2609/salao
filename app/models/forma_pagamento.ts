import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations'
import ClientesController from '../controllers/clientes_controller.js'

export default class FormaPagamento extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare tipo: string

  @column()
  declare descricao: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @manyToMany(() => ClientesController)
  declare clientesController: ManyToMany <typeof ClientesController>
}
