import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Transactions extends BaseSchema {
  protected tableName = 'transactions'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('contact_id').notNullable()
      table.double('value').notNullable()
      table.timestamps(true)

      table.foreign('contact_id')
        .references('id')
        .inTable('contacts')
        .onDelete('cascade')
        .onUpdate('cascade')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
