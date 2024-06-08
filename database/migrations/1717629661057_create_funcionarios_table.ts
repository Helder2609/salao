import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'funcionarios'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome', 255).notNullable() // Adiciona a coluna 'nome'
      table.string('cargo', 255).notNullable() // Adiciona a coluna 'cargo'
      table.decimal('salario').notNullable() // Adiciona a coluna 'salario'

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
