import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import TransactionsService from 'App/Services/TransactionsService';
import TransactionValidator from 'App/Validators/TransactionValidator';

export default class TransactionsController {
  private transactionsService = new TransactionsService();

  public async index () {
    return this.transactionsService.findAll();
  }

  public async show ({ params }: HttpContextContract) {
    const { id } = params

    return this.transactionsService.findById(id);
  }

  public async store ({ request }: HttpContextContract) {
    const contact = await request.validate(TransactionValidator)

    return this.transactionsService.create(contact);
  }
}
