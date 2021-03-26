import { DateTime } from 'luxon'
import { BaseModel, column, computed, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Transaction from './Transaction'

export default class Contact extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public document: string

  @column()
  public agency: number

  @column()
  public accountNumber: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Transaction)
  public transactions: HasMany<typeof Transaction>

  @computed()
  public get nameInitials () {
    return this.initials
  }

  public get initials () {
    const [first, last] = this.name.split(' ')
    return `${first.charAt(0)}${last.charAt(0)}`
  }
}
