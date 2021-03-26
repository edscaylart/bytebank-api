import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import ContactsService from 'App/Services/ContactsService';

export default class ContactsController {
  private contactsService = new ContactsService();

  public async index () {
    return this.contactsService.findAll();
  }

  public async show ({ params }: HttpContextContract) {
    const { id } = params

    return this.contactsService.findById(id);
  }
}
