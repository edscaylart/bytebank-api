import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class TransactionValidator {
  constructor (protected ctx: HttpContextContract) {
  }

  public schema = schema.create({
    value: schema.number(),
    contact: schema.object().members({
      id: schema.number.optional(),
      name: schema.string(),
      document: schema.string(),
      agency: schema.number(),
      account_number: schema.number()
    }),
  })

  public messages = {}
}
