export interface Alert {
  id: number;
  state?: string;
  zip?: string;
  companyName?: string;
  jobTitle?: string;
  active: boolean;
  createdAt: string;
}
