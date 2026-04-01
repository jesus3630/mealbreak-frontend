import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { UserService } from '../../core/services/user.service';
import { Alert } from '../../shared/models/alert.model';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container page-wrap" style="padding-top:40px;">
      <h1 class="page-title">My Profile</h1>

      @if (user()) {
        <div class="profile-grid">

          <!-- USER INFO -->
          <div class="card">
            <h3>Account</h3>
            <div class="info-row"><span>Name</span><strong>{{ user()?.name || '—' }}</strong></div>
            <div class="info-row"><span>Email</span><strong>{{ user()?.email }}</strong></div>
            <div class="info-row"><span>Member since</span><strong>{{ user()?.createdAt | date:'mediumDate' }}</strong></div>
            <button class="btn btn-primary btn-sm" style="margin-top:16px;" (click)="auth.logout()">Logout</button>
          </div>

          <!-- SAVED COMPANIES -->
          <div class="card">
            <h3>Saved Companies</h3>
            @if (!user()?.savedCompanies?.length) {
              <p class="empty-text">No saved companies yet. Browse the job search to save companies.</p>
            } @else {
              <p>{{ user()?.savedCompanies?.length }} saved companies</p>
            }
          </div>

          <!-- SAVED SEARCHES -->
          <div class="card">
            <h3>Saved Searches</h3>
            @if (!user()?.savedSearches?.length) {
              <p class="empty-text">No saved searches yet.</p>
            } @else {
              @for (s of user()?.savedSearches; track s) {
                <div class="tag">{{ s }}</div>
              }
            }
          </div>

          <!-- JOB ALERTS -->
          <div class="card full-width">
            <h3>Job Alerts</h3>
            <p class="sub-text">Get notified when new jobs match your criteria.</p>

            <form class="alert-form" (ngSubmit)="createAlert()">
              <input type="text" [(ngModel)]="newAlert.state" name="state" placeholder="State (e.g. TX)" />
              <input type="text" [(ngModel)]="newAlert.zip" name="zip" placeholder="ZIP code" />
              <input type="text" [(ngModel)]="newAlert.jobTitle" name="title" placeholder="Job title keyword" />
              <button type="submit" class="btn btn-teal btn-sm">+ Add Alert</button>
            </form>

            <div class="alerts-list">
              @for (alert of alerts(); track alert.id) {
                <div class="alert-row">
                  <div>
                    @if (alert.state) { <span class="tag">{{ alert.state }}</span> }
                    @if (alert.zip) { <span class="tag">{{ alert.zip }}</span> }
                    @if (alert.jobTitle) { <span class="tag">{{ alert.jobTitle }}</span> }
                  </div>
                  <button class="del-btn" (click)="deleteAlert(alert.id)">✕</button>
                </div>
              }
            </div>
          </div>

        </div>
      }
    </div>
  `,
  styles: [`
    .page-title { font-family: var(--font-h); font-size: 28px; font-weight: 800; margin-bottom: 28px; }
    .profile-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px,1fr)); gap: 20px; }
    .card { background: white; border-radius: var(--radius); padding: 24px; box-shadow: var(--shadow); }
    .full-width { grid-column: 1 / -1; }
    h3 { font-family: var(--font-h); font-size: 16px; font-weight: 700; margin-bottom: 16px; color: var(--dark-text); }
    .info-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid var(--gray-light); font-size: 14px; color: var(--gray-text); }
    .info-row strong { color: var(--dark-text); }
    .empty-text, .sub-text { font-size: 13px; color: var(--gray-text); }
    .sub-text { margin-bottom: 16px; }
    .tag { display: inline-block; background: var(--gray-light); color: var(--dark-text); padding: 4px 10px; border-radius: 50px; font-size: 12px; font-weight: 600; margin: 3px; }
    .alert-form { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 16px; }
    .alert-form input { padding: 8px 12px; border-radius: 8px; border: 1.5px solid var(--gray-light); font-size: 13px; outline: none; width: 150px; }
    .alert-form input:focus { border-color: var(--teal); }
    .alerts-list { display: flex; flex-direction: column; gap: 10px; }
    .alert-row { display: flex; align-items: center; justify-content: space-between; padding: 10px; background: var(--off-white); border-radius: 8px; }
    .del-btn { background: none; border: none; cursor: pointer; color: var(--gray-text); font-size: 14px; }
    .del-btn:hover { color: #e74c3c; }
  `]
})
export class ProfileComponent implements OnInit {
  auth = inject(AuthService);
  user = this.auth.currentUser;
  alerts = signal<Alert[]>([]);
  newAlert: Partial<Alert> = {};

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getAlerts().subscribe(a => this.alerts.set(a));
  }

  createAlert() {
    if (!this.newAlert.state && !this.newAlert.zip && !this.newAlert.jobTitle) return;
    this.userService.createAlert(this.newAlert).subscribe(a => {
      this.alerts.update(list => [...list, a]);
      this.newAlert = {};
    });
  }

  deleteAlert(id: number) {
    this.userService.deleteAlert(id).subscribe(() => {
      this.alerts.update(list => list.filter(a => a.id !== id));
    });
  }
}
