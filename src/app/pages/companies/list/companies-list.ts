import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CompaniesService } from '../../../core/services/companies.service';
import { Company } from '../../../shared/models/company.model';

const COLORS = ['#18958a','#e8704a','#8b5cf6','#06b6d4','#ec4899','#f59e0b','#10b981','#3b82f6','#ef4444','#14b8a6'];

@Component({
  selector: 'app-companies-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <!-- HERO -->
    <div class="dir-hero">
      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-bottom:16px;">
        <div class="hero-count">{{ total() > 0 ? (total() | number) + (activeTab() === 'jobs' ? ' Open Positions' : ' Guard Companies') : 'Loading...' }}</div>
      </div>
      <h1>{{ activeTab() === 'jobs' ? 'Security Guard Jobs' : 'Guard Company Directory' }}</h1>
      <p>{{ activeTab() === 'jobs' ? 'Browse open positions at licensed security guard companies near you.' : 'Browse licensed guard and patrol companies. Find open positions directly on their careers pages.' }}</p>
      <div class="search-bar-wrap">
        <div class="search-input-wrap">
          <span class="search-icon">🔍</span>
          <input type="text" [placeholder]="activeTab() === 'jobs' ? 'Search jobs or companies...' : 'Search companies...'" [(ngModel)]="search" (ngModelChange)="onSearch()" />
        </div>
        <select [(ngModel)]="stateFilter" (ngModelChange)="onSearch()">
          <option value="">All States</option>
          @for (s of states(); track s) { <option [value]="s">{{ s }}</option> }
        </select>
        <input class="zip-input" type="text" placeholder="Filter by ZIP..." [(ngModel)]="zipFilter" (ngModelChange)="onSearch()" />
      </div>
    </div>

    <!-- TABS -->
    <div class="tabs-nav">
      <div class="tabs-inner">
        <button class="tab-btn" [class.active]="activeTab()==='jobs'" (click)="switchTab('jobs')">
          💼 Job Listings
        </button>
        <button class="tab-btn" [class.active]="activeTab()==='companies'" (click)="switchTab('companies')">
          🏢 All Companies
        </button>
      </div>
    </div>

    <!-- CONTENT -->
    <div class="main">
      <div class="results-row">
        @if (!loading()) {
          <span class="results-count">Showing <strong>{{ companies().length }}</strong> of <strong>{{ total() | number }}</strong> {{ activeTab() === 'jobs' ? 'companies with open jobs' : 'companies' }}</span>
        }
      </div>

      @if (loading()) {
        <div class="companies-grid">
          @for (i of skeleton; track i) { <div class="skeleton-card" [class.job-skeleton]="activeTab()==='jobs'"></div> }
        </div>
      } @else if (companies().length === 0) {
        <div class="empty-state">
          <div class="icon">🔍</div>
          <h3>No {{ activeTab() === 'jobs' ? 'open positions' : 'companies' }} found</h3>
          <p>Try adjusting your search or filters.</p>
        </div>
      } @else if (activeTab() === 'jobs') {
        <!-- JOB LISTINGS -->
        <div class="jobs-list">
          @for (c of companies(); track c.id) {
            <a class="job-card" [href]="cardUrl(c)" target="_blank" rel="noopener noreferrer">
              <div class="job-card-left">
                <div class="card-logo" [style.background]="logoColor(c.name)">{{ initials(c.name) }}</div>
                <div class="job-info">
                  <div class="job-title">Security Guard Positions</div>
                  <div class="job-company">{{ c.name }}</div>
                  <div class="job-meta">
                    <span class="job-location">📍 {{ location(c) }}</span>
                    <span class="job-emp">💼 {{ c.jobCount > 0 ? c.jobCount + ' jobs available' : 'Hiring' }}</span>
                  </div>
                </div>
              </div>
              <div class="job-card-right">
                <div class="job-count-badge">
                  @if (c.jobCount > 0) {
                    <span class="badge-open">{{ c.jobCount }} open</span>
                  } @else {
                    <span class="badge-hiring">Hiring</span>
                  }
                </div>
                <span class="job-apply-btn">Apply →</span>
              </div>
            </a>
          }
        </div>
      } @else {
        <!-- COMPANY CARDS -->
        <div class="companies-grid">
          @for (c of companies(); track c.id) {
            <a class="company-card" [href]="cardUrl(c)" target="_blank" rel="noopener noreferrer">
              <div class="card-top">
                <div class="card-logo" [style.background]="logoColor(c.name)">{{ initials(c.name) }}</div>
                <div style="min-width:0;flex:1;">
                  <div class="card-name">{{ c.name }}</div>
                  <div class="card-location">📍 {{ location(c) }}</div>
                </div>
              </div>
              <div style="margin-bottom:8px;">
                @for (t of getTypes(c); track t) {
                  <span class="card-type" [class.patrol]="t==='Guard'" [class.alarm]="t!=='Guard'">{{ t }}</span>
                }
              </div>
              @if (c.employees && c.employees !== '0') {
                <div class="card-meta">👤 {{ c.employees }} emp</div>
              }
              <div class="card-footer">
                <div class="card-contact">{{ c.phone ? '☎ ' + c.phone : '—' }}</div>
                <span [class]="ctaClass(c)">{{ ctaLabel(c) }}</span>
              </div>
            </a>
          }
        </div>
      }

      <!-- PAGINATION -->
      @if (totalPages() > 1) {
        <div class="pagination">
          <button class="page-btn arrow" (click)="goPage(currentPage()-1)" [disabled]="currentPage()===1">‹</button>
          @for (p of pageRange(); track p) {
            <button class="page-btn" [class.active]="p===currentPage()" (click)="goPage(p)">{{ p }}</button>
          }
          <button class="page-btn arrow" (click)="goPage(currentPage()+1)" [disabled]="currentPage()===totalPages()">›</button>
          <span class="page-info">Page {{ currentPage() }} of {{ totalPages() }}</span>
        </div>
      }
    </div>
  `,
  styles: [`
    .dir-hero {
      background: linear-gradient(135deg, #0a4840 0%, #18958a 100%);
      padding: 56px 5% 48px; text-align: center;
    }
    .hero-count {
      display: inline-block; background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.2);
      border-radius: 50px; padding: 6px 20px; font-size: 13px; font-weight: 700;
      color: #e8af4b; letter-spacing: 1px; font-family: var(--font-heading);
    }
    h1 { font-family: var(--font-heading); font-size: clamp(28px,4vw,42px); font-weight: 800; color: white; margin-bottom: 10px; }
    .dir-hero p { font-size: 15px; color: rgba(255,255,255,0.8); margin-bottom: 28px; max-width: 560px; margin-left: auto; margin-right: auto; }
    .search-bar-wrap { max-width: 700px; margin: 0 auto; display: flex; gap: 10px; flex-wrap: wrap; justify-content: center; }
    .search-input-wrap { flex: 1; position: relative; min-width: 220px; }
    .search-icon { position: absolute; left: 16px; top: 50%; transform: translateY(-50%); font-size: 16px; }
    .search-input-wrap input { width: 100%; padding: 13px 16px 13px 44px; border-radius: 50px; border: none; font-size: 14px; outline: none; box-shadow: 0 4px 20px rgba(0,0,0,0.15); }
    select, .zip-input { padding: 13px 16px; border-radius: 50px; border: none; font-size: 13px; font-weight: 600; background: white; color: #1a2e2b; cursor: pointer; outline: none; box-shadow: 0 4px 20px rgba(0,0,0,0.15); min-width: 130px; }

    /* TABS NAV */
    .tabs-nav { background: white; border-bottom: 1px solid #e8eeec; position: sticky; top: 0; z-index: 10; }
    .tabs-inner { max-width: 1200px; margin: 0 auto; padding: 0 5%; display: flex; gap: 4px; }
    .tab-btn {
      padding: 14px 24px; font-family: var(--font-heading); font-size: 13px; font-weight: 700;
      border: none; background: none; cursor: pointer; color: #4a6360;
      border-bottom: 3px solid transparent; margin-bottom: -1px; transition: all 0.2s;
    }
    .tab-btn:hover { color: #18958a; }
    .tab-btn.active { color: #18958a; border-bottom-color: #18958a; }

    .main { max-width: 1200px; margin: 0 auto; padding: 32px 5%; }
    .results-row { display: flex; align-items: center; justify-content: flex-end; margin-bottom: 24px; }
    .results-count { font-size: 13px; color: #4a6360; }
    .results-count strong { color: #1a2e2b; }

    /* SKELETON */
    .skeleton-card { height: 200px; background: white; border-radius: 12px; box-shadow: 0 4px 20px rgba(15,92,85,0.10); animation: pulse 1.5s infinite; }
    .skeleton-card.job-skeleton { height: 88px; border-radius: 10px; }
    @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.5} }

    /* JOB LISTINGS */
    .jobs-list { display: flex; flex-direction: column; gap: 10px; margin-bottom: 32px; }
    .job-card {
      background: white; border-radius: 10px; padding: 18px 20px;
      box-shadow: 0 2px 12px rgba(15,92,85,0.08); border: 1px solid #e8eeec;
      display: flex; align-items: center; justify-content: space-between; gap: 16px;
      text-decoration: none; color: #1a2e2b; transition: all 0.2s;
    }
    .job-card:hover { transform: translateY(-2px); box-shadow: 0 6px 24px rgba(15,92,85,0.14); border-color: #18958a; }
    .job-card-left { display: flex; align-items: center; gap: 14px; min-width: 0; flex: 1; }
    .job-info { min-width: 0; }
    .job-title { font-family: var(--font-heading); font-size: 15px; font-weight: 700; color: #1a2e2b; margin-bottom: 2px; }
    .job-company { font-size: 13px; color: #18958a; font-weight: 600; margin-bottom: 4px; }
    .job-meta { display: flex; gap: 12px; flex-wrap: wrap; }
    .job-location, .job-emp { font-size: 12px; color: #4a6360; }
    .job-card-right { display: flex; flex-direction: column; align-items: flex-end; gap: 8px; flex-shrink: 0; }
    .badge-open { background: #dff2f0; color: #0f5c55; font-size: 12px; font-weight: 700; padding: 4px 10px; border-radius: 50px; }
    .badge-hiring { background: #fdf0eb; color: #c55a2e; font-size: 12px; font-weight: 700; padding: 4px 10px; border-radius: 50px; }
    .job-apply-btn { font-size: 13px; font-weight: 700; color: white; background: #e8704a; padding: 8px 18px; border-radius: 50px; white-space: nowrap; }

    /* COMPANY CARDS */
    .companies-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px,1fr)); gap: 16px; margin-bottom: 32px; }
    .company-card {
      background: white; border-radius: 12px; padding: 20px;
      box-shadow: 0 4px 20px rgba(15,92,85,0.10); transition: all 0.2s; cursor: pointer;
      border: 1px solid transparent; text-decoration: none;
      display: flex; flex-direction: column; color: #1a2e2b;
    }
    .company-card:hover { transform: translateY(-3px); box-shadow: 0 8px 32px rgba(15,92,85,0.15); border-color: #18958a; }
    .card-top { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
    .card-logo { width: 48px; height: 48px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-family: var(--font-heading); font-size: 18px; font-weight: 800; color: white; flex-shrink: 0; }
    .card-name { font-family: var(--font-heading); font-size: 13px; font-weight: 700; color: #1a2e2b; line-height: 1.3; }
    .card-location { font-size: 12px; color: #4a6360; margin-top: 2px; }
    .card-type { display: inline-block; padding: 3px 10px; border-radius: 50px; font-size: 11px; font-weight: 700; margin-right: 4px; }
    .patrol { background: #dff2f0; color: #0f5c55; }
    .alarm { background: #fdf0eb; color: #c55a2e; }
    .card-meta { font-size: 11px; color: #4a6360; margin-bottom: 8px; }
    .card-footer { display: flex; justify-content: space-between; align-items: center; padding-top: 10px; border-top: 1px solid #e8eeec; margin-top: auto; }
    .card-contact { font-size: 11px; color: #4a6360; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 170px; }
    .cta-careers { font-size: 12px; font-weight: 700; color: white; background: #e8704a; padding: 4px 10px; border-radius: 50px; white-space: nowrap; }
    .cta-website { font-size: 12px; font-weight: 700; color: white; background: #e8704a; padding: 4px 10px; border-radius: 50px; white-space: nowrap; }
    .cta-indeed { font-size: 12px; font-weight: 700; color: white; background: #18958a; padding: 4px 10px; border-radius: 50px; white-space: nowrap; }

    .empty-state { text-align: center; padding: 80px 20px; color: #4a6360; }
    .icon { font-size: 48px; margin-bottom: 16px; }
    .empty-state h3 { font-family: var(--font-heading); font-size: 18px; color: #1a2e2b; margin-bottom: 8px; }

    .pagination { display: flex; justify-content: center; align-items: center; gap: 6px; margin-top: 8px; }
    .page-btn { width: 36px; height: 36px; border-radius: 8px; border: none; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s; background: white; color: #1a2e2b; box-shadow: 0 4px 20px rgba(15,92,85,0.10); }
    .page-btn:hover { background: #18958a; color: white; }
    .page-btn.active { background: #18958a; color: white; }
    .page-btn:disabled { opacity: 0.4; cursor: not-allowed; }
    .page-btn.arrow { font-size: 16px; }
    .page-info { font-size: 13px; color: #4a6360; margin: 0 8px; }
    @media (max-width: 600px) {
      .companies-grid { grid-template-columns: 1fr; }
      .job-card { flex-direction: column; align-items: flex-start; }
      .job-card-right { flex-direction: row; align-items: center; width: 100%; justify-content: space-between; }
    }
  `]
})
export class CompaniesListComponent implements OnInit {
  companies = signal<Company[]>([]);
  states = signal<string[]>([]);
  total = signal(0);
  totalPages = signal(0);
  currentPage = signal(1);
  loading = signal(true);
  activeTab = signal<'jobs' | 'companies'>('jobs');
  skeleton = [1,2,3,4,5,6,7,8];

  search = '';
  stateFilter = '';
  zipFilter = '';
  private searchTimeout: any;

  constructor(private companiesService: CompaniesService) {}

  ngOnInit() {
    this.companiesService.getStates().subscribe(s => this.states.set(s));
    this.load();
  }

  switchTab(tab: 'jobs' | 'companies') {
    this.activeTab.set(tab);
    this.currentPage.set(1);
    this.load();
  }

  load() {
    this.loading.set(true);
    this.companiesService.getCompanies({
      state: this.stateFilter,
      zip: this.zipFilter,
      search: this.search,
      page: this.currentPage(),
      limit: 24,
      hasJobs: this.activeTab() === 'jobs',
    }).subscribe(res => {
      this.companies.set(res.data);
      this.total.set(res.total);
      this.totalPages.set(res.pages);
      this.loading.set(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  onSearch() {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => { this.currentPage.set(1); this.load(); }, 300);
  }

  goPage(p: number) {
    if (p < 1 || p > this.totalPages()) return;
    this.currentPage.set(p);
    this.load();
  }

  pageRange(): number[] {
    const total = this.totalPages(), cur = this.currentPage();
    let start = Math.max(1, cur - 2), end = Math.min(total, start + 4);
    if (end - start < 4) start = Math.max(1, end - 4);
    const range = [];
    for (let i = start; i <= end; i++) range.push(i);
    return range;
  }

  logoColor(name: string): string {
    let h = 0;
    for (const c of name) h = (h * 31 + c.charCodeAt(0)) % COLORS.length;
    return COLORS[h];
  }

  initials(name: string): string {
    return name.split(' ').filter(Boolean).slice(0,2).map(w => w[0]).join('').toUpperCase();
  }

  location(c: Company): string {
    return [c.city, c.state].filter(Boolean).join(', ') || 'Location N/A';
  }

  getTypes(c: Company): string[] {
    if (!c.type) return [];
    return c.type.split(',').map(t => t.trim().charAt(0) + t.trim().slice(1).toLowerCase()).slice(0,2);
  }

  cardUrl(c: Company): string {
    if (c.careersUrl) return c.careersUrl;
    if (c.website) return c.website;
    const q = encodeURIComponent(c.name);
    const l = c.state ? encodeURIComponent(c.state) : '';
    return `https://www.indeed.com/jobs?q=${q}&l=${l}`;
  }

  ctaLabel(c: Company): string {
    if (c.careersUrl) return c.jobCount > 0 ? `${c.jobCount} Jobs Available` : '🌐 View Careers';
    if (c.website) return '🌐 Visit Website';
    return 'Search Jobs →';
  }

  ctaClass(c: Company): string {
    if (c.careersUrl) return 'cta-careers';
    if (c.website) return 'cta-website';
    return 'cta-indeed';
  }
}
