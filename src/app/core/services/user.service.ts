import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Alert } from '../../shared/models/alert.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  private api = environment.apiUrl;

  constructor(private http: HttpClient) {}

  saveCompany(companyId: number) {
    return this.http.post<number[]>(`${this.api}/users/saved-companies/${companyId}`, {});
  }

  unsaveCompany(companyId: number) {
    return this.http.delete<number[]>(`${this.api}/users/saved-companies/${companyId}`);
  }

  saveSearch(search: string) {
    return this.http.post<string[]>(`${this.api}/users/saved-searches`, { search });
  }

  getAlerts() {
    return this.http.get<Alert[]>(`${this.api}/alerts`);
  }

  createAlert(data: Partial<Alert>) {
    return this.http.post<Alert>(`${this.api}/alerts`, data);
  }

  deleteAlert(id: number) {
    return this.http.delete(`${this.api}/alerts/${id}`);
  }
}
