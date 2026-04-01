import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule],
  template: `
    <div class="auth-page">
      <div class="auth-card">
        <h2>Welcome back</h2>
        <p class="sub">Sign in to your MealBreak account</p>
        @if (error) { <div class="error-msg">{{ error }}</div> }
        <form (ngSubmit)="submit()">
          <div class="field">
            <label>Email</label>
            <input type="email" [(ngModel)]="email" name="email" placeholder="you@email.com" required />
          </div>
          <div class="field">
            <label>Password</label>
            <input type="password" [(ngModel)]="password" name="password" placeholder="••••••••" required />
          </div>
          <button type="submit" class="btn btn-teal" style="width:100%;justify-content:center;" [disabled]="loading">
            {{ loading ? 'Signing in...' : 'Sign In' }}
          </button>
        </form>
        <p class="switch">Don't have an account? <a routerLink="/register">Sign up</a></p>
      </div>
    </div>
  `,
  styles: [`
    .auth-page { display: flex; align-items: center; justify-content: center; min-height: calc(100vh - 64px); padding: 20px; }
    .auth-card { background: white; border-radius: var(--radius); padding: 40px; width: 100%; max-width: 420px; box-shadow: var(--shadow); }
    h2 { font-family: var(--font-h); font-size: 24px; font-weight: 800; color: var(--dark-text); margin-bottom: 6px; }
    .sub { color: var(--gray-text); font-size: 14px; margin-bottom: 24px; }
    .field { margin-bottom: 16px; }
    label { display: block; font-size: 13px; font-weight: 600; color: var(--dark-text); margin-bottom: 6px; }
    input {
      width: 100%; padding: 11px 14px; border-radius: 8px; border: 1.5px solid var(--gray-light);
      font-size: 14px; outline: none; transition: border 0.2s;
    }
    input:focus { border-color: var(--teal); }
    .error-msg { background: #fdf0eb; color: #c55a2e; padding: 10px 14px; border-radius: 8px; font-size: 13px; margin-bottom: 16px; }
    .switch { margin-top: 20px; text-align: center; font-size: 13px; color: var(--gray-text); }
    .switch a { color: var(--teal); font-weight: 600; }
  `]
})
export class LoginComponent {
  email = '';
  password = '';
  error = '';
  loading = false;

  constructor(private auth: AuthService, private router: Router) {}

  submit() {
    this.loading = true;
    this.error = '';
    this.auth.login(this.email, this.password).subscribe({
      next: () => this.router.navigate(['/jobs']),
      error: (e) => { this.error = e.error?.message || 'Login failed'; this.loading = false; }
    });
  }
}
