import { collection, addDoc, getDocs, Timestamp } from "firebase/firestore";
import { db } from "../../../firebase/firestore";
import { ContactQuery } from "../dto/ContactQuery";

export class ContactRepo {
    private collection = collection(db, "VisitorQueries");

    /**
     * Adds a new document to the "VisitorQueries" collection.
     * @param query - The contact query to add.
     * @returns The ID of the newly created document.
     */
    async addDocumentToCollection(query: Omit<ContactQuery, "submittedAt">): Promise<string> {
        console.log('DB instance:', db);
        const docRef = await addDoc(this.collection, {
            ...query,
            submittedAt: Timestamp.now(),
        });
        return docRef.id;
    }

    /**
     * Retrieves all documents from the "VisitorQueries" collection.
     * @returns An array of contact queries with their IDs.
     */
    async getAllDocuments(): Promise<ContactQuery[]> {
        const snap = await getDocs(this.collection);
        return snap.docs.map(doc => ({ id: doc.id, ...(doc.data() as ContactQuery) }));
    }

    // TODO: update, delete, getById
}