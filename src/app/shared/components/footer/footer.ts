import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer__grid">
          <div class="footer__brand">
            <div class="footer__logo">
              <div class="nav__logo-icon" style="width:32px;height:32px;background:linear-gradient(135deg,#f07a55,#d4623e);border-radius:8px;display:flex;align-items:center;justify-content:center;">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="white">
                  <rect x="2.5" y="1.5" width="1.2" height="4.5" rx="0.6"/>
                  <rect x="4.5" y="1.5" width="1.2" height="4.5" rx="0.6"/>
                  <rect x="6.5" y="1.5" width="1.2" height="4.5" rx="0.6"/>
                  <rect x="4.1" y="6" width="2" height="12" rx="1"/>
                  <ellipse cx="14.1" cy="4.5" rx="2.4" ry="3"/>
                  <rect x="13.1" y="7" width="2" height="11" rx="1"/>
                </svg>
              </div>
              <span class="footer__logo-text">Meal<span style="opacity:0.72;">Break</span></span>
            </div>
            <p class="footer__tagline">Automated meal break compliance for modern employers.</p>
            <p class="footer__copy">© 2025 ProtaTECH, Inc.</p>
          </div>
          <div class="footer__col">
            <div class="footer__heading">Product</div>
            <a routerLink="/features">Features</a>
            <a routerLink="/pricing">Pricing</a>
            <a routerLink="/jobs">Job Search</a>
          </div>
          <div class="footer__col">
            <div class="footer__heading">Company</div>
            <a routerLink="/contact">Contact</a>
            <a routerLink="/contact">Request Demo</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer { background: var(--color-dark); padding: 4rem 0 2rem; }
    .footer__grid { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 3rem; margin-bottom: 3rem; }
    .footer__logo { display: flex; align-items: center; gap: 0.6rem; margin-bottom: 1rem; }
    .footer__logo-text { font-family: var(--font-heading); font-size: 1.2rem; font-weight: 800; color: white; }
    .footer__tagline { font-size: 0.88rem; color: rgba(255,255,255,0.55); line-height: 1.6; margin-bottom: 0.5rem; }
    .footer__copy { font-size: 0.78rem; color: rgba(255,255,255,0.3); }
    .footer__heading { font-family: var(--font-heading); font-size: 0.72rem; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: rgba(255,255,255,0.4); margin-bottom: 1rem; }
    .footer__col { display: flex; flex-direction: column; gap: 0.75rem; }
    .footer__col a { font-size: 0.88rem; color: rgba(255,255,255,0.65); transition: color 0.2s; }
    .footer__col a:hover { color: white; }
    @media (max-width: 600px) { .footer__grid { grid-template-columns: 1fr; gap: 2rem; } }
  `]
})
export class FooterComponent {}
