import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import AgendamentosHasServico from './agendamentos_has_servico.js'

export default class Agendamento extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare cliente: string // Adiciona a coluna 'cliente'

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => AgendamentosHasServico)
   declare agendamentosHasServico: BelongsTo<typeof this.AgendamentosHasServico>
}
