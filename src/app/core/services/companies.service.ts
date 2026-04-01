import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Company, CompaniesResponse } from '../../shared/models/company.model';

@Injectable({ providedIn: 'root' })
export class CompaniesService {
  private api = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getCompanies(filters: { state?: string; zip?: string; search?: string; page?: number; limit?: number } = {}) {
    let params = new HttpParams();
    if (filters.state) params = params.set('state', filters.state);
    if (filters.zip) params = params.set('zip', filters.zip);
    if (filters.search) params = params.set('search', filters.search);
    if (filters.page) params = params.set('page', filters.page.toString());
    if (filters.limit) params = params.set('limit', filters.limit.toString());
    return this.http.get<CompaniesResponse>(`${this.api}/companies`, { params });
  }

  getCompany(id: number) {
    return this.http.get<Company>(`${this.api}/companies/${id}`);
  }

  getStates() {
    return this.http.get<string[]>(`${this.api}/companies/states`);
  }

  updateCareersUrl(id: number, careersUrl: string) {
    return this.http.patch<Company>(`${this.api}/companies/${id}/careers-url`, { careersUrl });
  }
}
