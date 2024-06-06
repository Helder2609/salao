import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, manyToMany, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations'
import TipoProduto from './tipo_produto.js'
import ProdutosHasServico from './produtos_has_servico.js'

export default class Produto extends BaseModel {
  @column({ isPrimary: true })
   declare id: number

  @column()
   declare nome: string

  @column()
   declare preco: number

  @column()
   declare tipoId: number

  @column()
  declare tamanho: string

  @column.dateTime({ autoCreate: true })
   declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @manyToMany(() => ProdutosHasServico)
   declare produtosHasServicos: ManyToMany<typeof ProdutosHasServico>

  @belongsTo(() => TipoProduto)
   declare tipoProduto: BelongsTo<typeof TipoProduto>
  
}
