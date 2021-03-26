import Transaction from "App/Models/Transaction";
import ContactsService from "./ContactsService";

export default class TransactionsService {
  private contactsService = new ContactsService();

  public async findAll () {
    return Transaction.query().preload('contact')
  }

  public async findById (id: number) {
    return Transaction
      .query()
      .where({ id })
      .preload('contact')
      .first();
  }

  public async create (data) {
    const { value, contact } = data;

    let contactId;
    try {
      const registeredContact = await this.contactsService.findByAgCC(
        contact.agency,
        contact.account_number
      )
      contactId = registeredContact.id
    } catch (e) {
      const newContact = await this.contactsService.create(contact)
      contactId = newContact.id;
    }

    const transaction = await Transaction.create({ value, contactId});

    return this.findById(transaction.id)
  }
}
