import { Timestamp } from 'firebase/firestore';

interface ContactQuery {
  name: string;
  email: string;
  summary: string;
  submittedAt: Timestamp;
}

export type { ContactQuery };
