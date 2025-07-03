import { DataValidationError } from '@/errors';
import { ContactQuery } from '../dto/ContactQuery';
import { ContactRepo } from '../repository/ContactRepo';

export class ContactService {
  constructor(private contactRepo = new ContactRepo()) {}

  private validate(query: Omit<ContactQuery, 'submittedAt'>) {
    const { name, email, summary } = query;
    if (name == null || name.trim() === '') {
      throw new DataValidationError('Name cannot be empty');
    }
    if (email == null || !email.includes('@')) {
      throw new DataValidationError('Invalid email address');
    }
    if (summary == null || summary.trim().length < 10) {
      throw new DataValidationError('Message must be at least 10 characters');
    }
  }

  /**
   * Submits a contact query.
   * @param query - The contact query to submit.
   * @returns The ID of the submitted query document.
   * @throws Error if the email is invalid.
   */
  public async submitContactData(query: Omit<ContactQuery, 'submittedAt'>): Promise<string> {
    this.validate(query);
    return this.contactRepo.addDocumentToCollection(query);
  }

  /**
   * Retrieves all contact queries.
   * @returns An array of all contact queries.
   */
  public async getAllContactQueries(): Promise<ContactQuery[]> {
    return this.contactRepo.getAllDocuments();
  }
}
