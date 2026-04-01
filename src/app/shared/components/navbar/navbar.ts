import { Component, HostListener, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <nav class="nav" [class.nav--scrolled]="scrolled()">
      <div class="container">
        <div class="nav__inner">

          <!-- Logo -->
          <a routerLink="/" class="nav__logo">
            <div class="nav__logo-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
                <rect x="2.5" y="1.5" width="1.2" height="4.5" rx="0.6"/>
                <rect x="4.5" y="1.5" width="1.2" height="4.5" rx="0.6"/>
                <rect x="6.5" y="1.5" width="1.2" height="4.5" rx="0.6"/>
                <rect x="4.1" y="6" width="2" height="12" rx="1"/>
                <ellipse cx="14.1" cy="4.5" rx="2.4" ry="3"/>
                <rect x="13.1" y="7" width="2" height="11" rx="1"/>
              </svg>
            </div>
            <span class="nav__logo-text">Meal<span class="logo-break">Break</span></span>
          </a>

          <!-- Links -->
          <ul class="nav__links">
            <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Home</a></li>
            <li><a routerLink="/features" routerLinkActive="active">Features</a></li>
            <li><a routerLink="/pricing" routerLinkActive="active">Pricing</a></li>
            <li><a routerLink="/contact" routerLinkActive="active">Contact</a></li>
          </ul>

          <!-- Actions -->
          <div class="nav__actions">
            <a routerLink="/jobs" class="btn btn-primary btn-sm" style="background:var(--color-coral);border-color:var(--color-coral);">Job Search</a>
            @if (auth.currentUser()) {
              <a routerLink="/profile" class="btn btn-ghost btn-sm">My Profile</a>
            } @else {
              <a routerLink="/contact" class="btn btn-ghost btn-sm">Free Trial</a>
            }
          </div>

          <!-- Hamburger -->
          <button class="nav__hamburger" (click)="mobileOpen.set(true)" aria-label="Open menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div class="nav__mobile" [class.open]="mobileOpen()">
      <button class="nav__mobile-close" (click)="mobileOpen.set(false)">&times;</button>
      <a routerLink="/" (click)="mobileOpen.set(false)">Home</a>
      <a routerLink="/features" (click)="mobileOpen.set(false)">Features</a>
      <a routerLink="/pricing" (click)="mobileOpen.set(false)">Pricing</a>
      <a routerLink="/contact" (click)="mobileOpen.set(false)">Contact</a>
      <a routerLink="/jobs" (click)="mobileOpen.set(false)">Job Search</a>
      <a routerLink="/contact" class="btn btn-ghost-white" (click)="mobileOpen.set(false)">Request Demo</a>
      <a routerLink="/contact" class="btn btn-primary" (click)="mobileOpen.set(false)">Start Free Trial</a>
    </div>
  `,
  styles: [`
    .nav {
      position: sticky; top: 0; z-index: 100; width: 100%;
      padding: 1.25rem 0; transition: background var(--transition), box-shadow var(--transition), padding var(--transition);
      background: var(--color-dark);
    }
    .nav--scrolled { background: var(--color-white); box-shadow: 0 2px 20px rgba(15,92,85,0.1); padding: 0.85rem 0; }
    .nav__inner { display: flex; align-items: center; justify-content: space-between; gap: 2rem; }
    .nav__logo { display: flex; align-items: center; gap: 0.6rem; text-decoration: none; flex-shrink: 0; }
    .nav__logo-icon {
      width: 36px; height: 36px; background: linear-gradient(135deg,#f07a55,#d4623e);
      border-radius: 10px; display: flex; align-items: center; justify-content: center;
      box-shadow: 0 2px 10px rgba(232,112,74,0.40); flex-shrink: 0;
    }
    .nav__logo-text { font-family: var(--font-heading); font-size: 1.25rem; font-weight: 800; color: white; letter-spacing: -0.4px; transition: color var(--transition); }
    .logo-break { opacity: 0.72; font-weight: 700; }
    .nav--scrolled .nav__logo-text { color: var(--color-dark); }
    .nav__links { display: flex; align-items: center; gap: 0; list-style: none; margin: 0; padding: 0; }
    .nav__links a { padding: 0.5rem 0.65rem; font-family: var(--font-heading); font-size: 0.8rem; font-weight: 600; color: rgba(255,255,255,0.85); border-radius: var(--radius-sm); transition: all var(--transition); text-decoration: none; }
    .nav__links a:hover, .nav__links a.active { color: white; background: rgba(255,255,255,0.12); }
    .nav--scrolled .nav__links a { color: var(--color-gray-text); }
    .nav--scrolled .nav__links a:hover, .nav--scrolled .nav__links a.active { color: var(--color-teal-mid); background: rgba(24,149,138,0.08); }
    .nav__actions { display: flex; align-items: center; gap: 0.5rem; flex-shrink: 0; }
    .nav__actions .btn-ghost { color: rgba(255,255,255,0.85); border-color: rgba(255,255,255,0.5); }
    .nav__actions .btn-ghost:hover { background: rgba(255,255,255,0.15); color: white; border-color: white; }
    .nav--scrolled .nav__actions .btn-ghost { color: var(--color-teal-mid); border-color: var(--color-teal-mid); }
    .nav--scrolled .nav__actions .btn-ghost:hover { background: var(--color-teal-mid); color: white; }
    .nav__hamburger { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; padding: 0.5rem; border-radius: var(--radius-sm); }
    .nav__hamburger span { display: block; width: 24px; height: 2px; background: white; border-radius: 2px; transition: all 0.3s; }
    .nav--scrolled .nav__hamburger span { background: var(--color-dark); }
    .nav__mobile {
      display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0;
      background: var(--color-dark); z-index: 99; flex-direction: column;
      align-items: center; justify-content: center; gap: 1.5rem;
      opacity: 0; pointer-events: none; transition: opacity 0.3s;
    }
    .nav__mobile.open { display: flex; opacity: 1; pointer-events: all; }
    .nav__mobile a { font-family: var(--font-heading); font-size: 1.5rem; font-weight: 700; color: white; }
    .nav__mobile a:hover { color: var(--color-yellow); }
    .nav__mobile .btn { margin-top: 1rem; }
    .nav__mobile-close { position: absolute; top: 1.5rem; right: 1.5rem; background: none; border: none; color: white; font-size: 2rem; cursor: pointer; }
    @media (max-width: 768px) {
      .nav__links, .nav__actions { display: none; }
      .nav__hamburger { display: flex; }
    }
  `]
})
export class NavbarComponent {
  auth = inject(AuthService);
  scrolled = signal(false);
  mobileOpen = signal(false);

  @HostListener('window:scroll')
  onScroll() { this.scrolled.set(window.scrollY > 20); }
}
