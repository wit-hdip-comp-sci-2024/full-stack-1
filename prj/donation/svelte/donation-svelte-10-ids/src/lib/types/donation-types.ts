export interface Session {
  name: string;
  _id: string;
  token: string;
}

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  _id?: string;
}

export interface Candidate {
  firstName: string;
  lastName: string;
  office: string;
  _id: string;
}

export interface Donation {
  amount: number;
  method: string;
  candidate: Candidate | string;
  donor: User | string;
  lat?: number;
  lng?: number;
  _id?: string;
}

export interface DataSet {
  labels: string[];
  datasets: [{ values: number[] }];
}

export interface DonationService {
  signup(user: User): Promise<boolean>;
  login(email: string, password: string): Promise<Session | null>;
  donate(donation: Donation): Promise<Donation | false>;
  getCandidates(): Promise<Candidate[]>;
  getDonations(candidateId?: string): Promise<Donation[]>;
}
