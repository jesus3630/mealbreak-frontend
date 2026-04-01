import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Company } from '../../models/company.model';

const COLORS = ['#18958a','#e8704a','#8b5cf6','#06b6d4','#ec4899','#f59e0b','#10b981','#3b82f6','#ef4444','#14b8a6'];

@Component({
  selector: 'app-company-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <a class="card" [href]="cardUrl" target="_blank" rel="noopener noreferrer">
      <div class="card-top">
        <div class="card-logo" [style.background]="logoColor(company.name)">{{ initials(company.name) }}</div>
        <div class="card-info">
          <div class="card-name">{{ company.name }}</div>
          <div class="card-location">📍 {{ company.city && company.state ? company.city + ', ' + company.state : (company.state || 'Location N/A') }}</div>
        </div>
      </div>

      <div class="card-badges">
        @for (type of getTypes(); track type) {
          <span class="badge" [class.badge-guard]="type === 'Guard'" [class.badge-alarm]="type !== 'Guard'">{{ type }}</span>
        }
      </div>

      @if (company.employees && company.employees !== '0') {
        <div class="card-meta">👤 {{ company.employees }} employees</div>
      }

      <div class="card-footer">
        <div class="card-phone">{{ company.phone ? '☎ ' + company.phone : '—' }}</div>
        <div class="card-cta">
          @if (company.careersUrl) {
            <span class="cta-btn cta-careers">
              @if (company.jobCount > 0) { {{ company.jobCount }} Jobs Available }
              @else { 🌐 View Careers }
            </span>
          } @else if (company.website) {
            <span class="cta-btn cta-website">🌐 Visit Website</span>
          } @else {
            <span class="cta-btn cta-indeed">Search Jobs →</span>
          }
        </div>
      </div>
    </a>
  `,
  styles: [`
    .card {
      background: white; border-radius: var(--radius); padding: 20px;
      box-shadow: var(--shadow); transition: all 0.2s; cursor: pointer;
      border: 1px solid transparent; text-decoration: none; display: flex;
      flex-direction: column; color: var(--dark-text); gap: 10px;
    }
    .card:hover { transform: translateY(-3px); box-shadow: 0 8px 32px rgba(15,92,85,0.15); border-color: var(--teal); }
    .card-top { display: flex; align-items: center; gap: 12px; }
    .card-logo {
      width: 48px; height: 48px; border-radius: 10px; display: flex; align-items: center;
      justify-content: center; font-family: var(--font-h); font-size: 18px; font-weight: 800;
      color: white; flex-shrink: 0;
    }
    .card-name { font-family: var(--font-h); font-size: 13px; font-weight: 700; line-height: 1.3; }
    .card-location { font-size: 12px; color: var(--gray-text); margin-top: 2px; }
    .card-badges { display: flex; gap: 4px; flex-wrap: wrap; }
    .card-meta { font-size: 11px; color: var(--gray-text); }
    .card-footer {
      display: flex; justify-content: space-between; align-items: center;
      padding-top: 10px; border-top: 1px solid var(--gray-light); margin-top: auto;
    }
    .card-phone { font-size: 11px; color: var(--gray-text); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 150px; }
    .cta-btn { font-size: 12px; font-weight: 700; padding: 4px 10px; border-radius: 50px; white-space: nowrap; }
    .cta-careers { background: var(--coral); color: white; }
    .cta-website { background: var(--teal); color: white; }
    .cta-indeed { background: var(--teal); color: white; }
  `]
})
export class CompanyCardComponent {
  @Input() company!: Company;

  get cardUrl(): string {
    if (this.company.careersUrl) return this.company.careersUrl;
    if (this.company.website) return this.company.website;
    const q = encodeURIComponent(this.company.name);
    const l = this.company.state ? encodeURIComponent(this.company.state) : '';
    return `https://www.indeed.com/jobs?q=${q}&l=${l}`;
  }

  logoColor(name: string): string {
    let h = 0;
    for (const c of name) h = (h * 31 + c.charCodeAt(0)) % COLORS.length;
    return COLORS[h];
  }

  initials(name: string): string {
    return name.split(' ').filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  }

  getTypes(): string[] {
    if (!this.company.type) return [];
    return this.company.type.split(',').map(t => t.trim().charAt(0) + t.trim().slice(1).toLowerCase()).slice(0, 2);
  }
}
