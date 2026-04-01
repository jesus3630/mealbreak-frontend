export interface User {
  id: number;
  email: string;
  name?: string;
  state?: string;
  zip?: string;
  savedCompanies?: number[];
  savedSearches?: string[];
  createdAt: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}
