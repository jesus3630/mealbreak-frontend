import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { AuthResponse, User } from '../../shared/models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private api = environment.apiUrl;
  currentUser = signal<User | null>(null);

  constructor(private http: HttpClient, private router: Router) {
    const token = localStorage.getItem('token');
    if (token) this.loadProfile();
  }

  register(email: string, password: string, name?: string) {
    return this.http.post<AuthResponse>(`${this.api}/auth/register`, { email, password, name }).pipe(
      tap(res => this.setSession(res))
    );
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponse>(`${this.api}/auth/login`, { email, password }).pipe(
      tap(res => this.setSession(res))
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.currentUser.set(null);
    this.router.navigate(['/']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return !!this.getToken();
  }

  private setSession(res: AuthResponse) {
    localStorage.setItem('token', res.token);
    this.currentUser.set(res.user);
  }

  private loadProfile() {
    this.http.get<User>(`${this.api}/users/me`).subscribe({
      next: user => this.currentUser.set(user),
      error: () => localStorage.removeItem('token'),
    });
  }
}
