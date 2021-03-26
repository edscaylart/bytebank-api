import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Contacts extends BaseSchema {
  protected tableName = 'contacts'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name').notNullable()
      table.string('document')
      table.integer('agency')
      table.integer('account_number')
      table.timestamps(true)

      table.unique(['agency', 'account_number'])
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
