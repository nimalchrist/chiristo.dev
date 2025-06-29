import { ContactQuery } from "../dto/ContactQuery";
import { ContactRepo } from "../repository/ContactRepo";

export class ContactService {
    constructor(private contactRepo = new ContactRepo()) {

    }
    /**
     * Submits a contact query.
     * @param query - The contact query to submit.
     * @returns The ID of the submitted query document.
     * @throws Error if the email is invalid.
     */
    public async submitContactData(query: Omit<ContactQuery, "submittedAt">): Promise<string> {
        console.log("Writing to Firestore:", query);

        // TODO: Add validation logic for query
        if (!query.email.includes("@")) {
            throw new Error("Invalid email");
        }
        return this.contactRepo.addDocumentToCollection(query);
    }

    /**
     * Retrieves all contact queries.
     * @returns An array of all contact queries.
     */
    public async getAllContactQueries(): Promise<ContactQuery[]> {
        return this.contactRepo.getAllDocuments()
    }
}
