export interface Company {
  id: number;
  name: string;
  city?: string;
  state?: string;
  zip?: string;
  phone?: string;
  type?: string;
  employees?: string;
  license?: string;
  expires?: string;
  website?: string;
  careersUrl?: string;
  jobCount: number;
  jobCountUpdatedAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CompaniesResponse {
  data: Company[];
  total: number;
  page: number;
  limit: number;
  pages: number;
}
