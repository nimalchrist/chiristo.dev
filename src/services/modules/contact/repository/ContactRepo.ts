import { collection, addDoc, getDocs, Timestamp } from 'firebase/firestore';
import { db } from '../../../firebase/firestore';
import { ContactQuery } from '../dto/ContactQuery';
import { ServiceCommunicationError } from '@/errors';

export class ContactRepo {
  private collection = collection(db, 'VisitorQueries');

  /**
   * Adds a new document to the "VisitorQueries" collection.
   * @param query - The contact query to add.
   * @returns The ID of the newly created document.
   */
  async addDocumentToCollection(query: Omit<ContactQuery, 'submittedAt'>): Promise<string> {
    try {
      const docRef = await addDoc(this.collection, {
        ...query,
        submittedAt: Timestamp.now(),
      });
      return docRef.id;
    } catch {
      throw new ServiceCommunicationError('Failed to save contact query');
    }
  }

  /**
   * Retrieves all documents from the "VisitorQueries" collection.
   * @returns An array of contact queries with their IDs.
   */
  async getAllDocuments(): Promise<ContactQuery[]> {
    try {
      const snap = await getDocs(this.collection);
      return snap.docs.map((doc) => ({ id: doc.id, ...(doc.data() as ContactQuery) }));
    } catch {
      throw new ServiceCommunicationError('Failed to load contact queries');
    }
  }

  // TODO: update, delete, getById
}
