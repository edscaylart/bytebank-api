import Contact from 'App/Models/Contact';

export default class ContactsService {
  public async findAll () {
    return Contact.all()
  }

  public async findById (id: number) {
    return Contact.find(id);
  }

  public async findByAgCC (agency: number, accountNumber: number) {
    return Contact
      .query()
      .where({ agency, accountNumber })
      .firstOrFail();
  }

  public async create (data) {
    return Contact.create(data);
  }
}
