import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <section class="hero hero--short">
      <div class="container">
        <div class="hero__inner">
          <div class="eyebrow">Pricing</div>
          <h1>Simple, <span>Transparent</span> Pricing</h1>
          <p class="hero__sub">Start free. No credit card required. Cancel any time. Scale as your team grows.</p>
        </div>
      </div>
      <div class="hero__wave"><svg viewBox="0 0 1440 60" preserveAspectRatio="none"><path d="M0,60 C360,0 1080,60 1440,20 L1440,60 Z" fill="#f7f9f8"/></svg></div>
    </section>

    <section class="section section--off-white">
      <div class="container">
        <div class="pricing-grid">

          <!-- STARTER -->
          <div class="pricing-card">
            <div class="pricing-card__name">Starter</div>
            <div class="pricing-card__price">$49<span>/mo</span></div>
            <div class="pricing-card__subtitle">Up to 25 employees</div>
            <ul class="pricing-features">
              <li>Real-time break monitoring</li>
              <li>Email alerts</li>
              <li>Top 10 states compliance library</li>
              <li>Monthly summary reports</li>
              <li>14-day free trial</li>
            </ul>
            <a routerLink="/contact" class="btn btn-ghost">Start Free Trial</a>
          </div>

          <!-- PROFESSIONAL -->
          <div class="pricing-card pricing-card--featured">
            <div class="pricing-card__badge"><span class="badge-popular">Most Popular</span></div>
            <div class="pricing-card__name">Professional</div>
            <div class="pricing-card__price">$129<span>/mo</span></div>
            <div class="pricing-card__subtitle">Up to 150 employees</div>
            <ul class="pricing-features">
              <li>Everything in Starter</li>
              <li>All 50 states library</li>
              <li>SMS + push alerts</li>
              <li>Audit-ready PDF/CSV exports</li>
              <li>Policy builder</li>
              <li>Integrations: ADP, Gusto, BambooHR</li>
              <li>Priority support</li>
            </ul>
            <a routerLink="/contact" class="btn btn-secondary">Start Free Trial</a>
          </div>

          <!-- ENTERPRISE -->
          <div class="pricing-card">
            <div class="pricing-card__name">Enterprise</div>
            <div class="pricing-card__price">Custom</div>
            <div class="pricing-card__subtitle">Unlimited employees</div>
            <ul class="pricing-features">
              <li>Everything in Professional</li>
              <li>Dedicated account manager</li>
              <li>Custom integrations</li>
              <li>99.9% SLA guarantee</li>
              <li>On-site training</li>
              <li>Custom reporting</li>
              <li>Legal team consultations</li>
            </ul>
            <a routerLink="/contact" class="btn btn-ghost">Contact Sales</a>
          </div>
        </div>

        <!-- FAQ -->
        <div class="faq-section">
          <h2 style="text-align:center;margin-bottom:2.5rem;">Frequently Asked Questions</h2>
          <div class="faq-list">
            @for (item of faqs; track item.q) {
            <div class="faq-item" (click)="item.open = !item.open">
              <div class="faq-trigger">
                <span>{{ item.q }}</span>
                <span class="faq-icon">{{ item.open ? '−' : '+' }}</span>
              </div>
              @if (item.open) {
                <div class="faq-body">{{ item.a }}</div>
              }
            </div>
            }
          </div>
        </div>
      </div>
    </section>

    <section class="cta-band">
      <div class="container" style="text-align:center;">
        <h2 style="color:white;margin-bottom:1rem;">Start Your Free Trial Today</h2>
        <p style="color:rgba(255,255,255,0.8);margin-bottom:2rem;">No credit card. No contracts. Cancel any time.</p>
        <a routerLink="/contact" class="btn btn-white">Get Started Free →</a>
      </div>
    </section>
  `,
  styles: [`
    .hero { background: linear-gradient(135deg, var(--color-dark) 0%, var(--color-teal-mid) 100%); position: relative; overflow: hidden; padding: 5rem 0 4rem; }
    .hero::before { content: ''; position: absolute; inset: 0; background-image: radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px); background-size: 28px 28px; pointer-events: none; }
    .hero__inner { position: relative; z-index: 1; text-align: center; max-width: 700px; margin: 0 auto; }
    .hero h1 { color: white; font-size: clamp(2rem,4vw,3rem); font-weight: 800; margin-bottom: 1rem; }
    .hero h1 span { color: var(--color-coral); }
    .hero__sub { font-size: 1.05rem; color: rgba(255,255,255,0.82); line-height: 1.7; margin: 0 auto; }
    .hero__wave { position: absolute; bottom: -1px; left: 0; right: 0; line-height: 0; }
    .hero__wave svg { width: 100%; height: 60px; }
    .eyebrow { display: inline-flex; align-items: center; gap: 0.5rem; font-family: var(--font-heading); font-size: 0.72rem; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: var(--color-yellow); margin-bottom: 1rem; }
    .eyebrow::before, .eyebrow::after { content: ''; display: block; width: 28px; height: 1px; background: var(--color-yellow); opacity: 0.7; }
    .pricing-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.5rem; align-items: start; max-width: 960px; margin: 0 auto 4rem; }
    .pricing-card { background: white; border-radius: var(--radius-md); padding: 2.25rem 2rem; box-shadow: var(--shadow-card); border: 2px solid var(--color-gray-light); transition: transform var(--transition),box-shadow var(--transition); position: relative; }
    .pricing-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-hover); }
    .pricing-card--featured { border-color: var(--color-teal-mid); transform: scale(1.03); box-shadow: 0 8px 40px rgba(24,149,138,0.2); }
    .pricing-card--featured:hover { transform: scale(1.03) translateY(-6px); }
    .pricing-card__badge { position: absolute; top: -14px; left: 50%; transform: translateX(-50%); white-space: nowrap; }
    .badge-popular { background: var(--color-yellow); color: var(--color-dark); font-family: var(--font-heading); font-size: 0.72rem; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase; padding: 0.3rem 0.9rem; border-radius: var(--radius-pill); }
    .pricing-card__name { font-family: var(--font-heading); font-size: 0.8rem; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: var(--color-teal-mid); margin-bottom: 0.5rem; }
    .pricing-card__price { font-family: var(--font-heading); font-size: 2.8rem; font-weight: 800; color: var(--color-dark); line-height: 1; margin-bottom: 0.25rem; }
    .pricing-card__price span { font-size: 1rem; font-weight: 600; color: var(--color-gray-text); }
    .pricing-card__subtitle { font-size: 0.88rem; color: var(--color-gray-text); margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid var(--color-gray-light); }
    .pricing-features { list-style: none; margin: 0 0 2rem; padding: 0; display: flex; flex-direction: column; gap: 0.6rem; }
    .pricing-features li { display: flex; align-items: flex-start; gap: 0.6rem; font-size: 0.88rem; color: var(--color-gray-text); }
    .pricing-features li::before { content: '✓'; color: var(--color-teal-mid); font-weight: 700; flex-shrink: 0; }
    .pricing-card .btn { width: 100%; justify-content: center; }
    .faq-section { max-width: 760px; margin: 0 auto; }
    .faq-list { display: flex; flex-direction: column; gap: 0.75rem; }
    .faq-item { border: 1px solid var(--color-gray-light); border-radius: var(--radius-md); background: white; overflow: hidden; cursor: pointer; }
    .faq-trigger { display: flex; justify-content: space-between; align-items: center; padding: 1.25rem 1.5rem; font-family: var(--font-heading); font-size: 0.95rem; font-weight: 700; color: var(--color-dark); }
    .faq-icon { font-size: 1.4rem; color: var(--color-teal-mid); font-weight: 400; flex-shrink: 0; }
    .faq-body { padding: 0 1.5rem 1.25rem; font-size: 0.9rem; color: var(--color-gray-text); line-height: 1.7; }
    .cta-band { background: linear-gradient(135deg, var(--color-teal-deep), var(--color-teal-mid)); padding: 5rem 0; }
    @media (max-width: 768px) { .pricing-grid { grid-template-columns: 1fr; } .pricing-card--featured { transform: none; } }
  `]
})
export class PricingComponent {
  faqs = [
    { q: 'Is there a free trial?', a: 'Yes — all plans include a 14-day free trial. No credit card required to start.', open: false },
    { q: 'Can I change plans later?', a: 'Absolutely. You can upgrade or downgrade your plan at any time from your account settings. Changes take effect on your next billing cycle.', open: false },
    { q: 'What states are covered?', a: 'All 50 states are included in the Professional and Enterprise plans. The Starter plan includes the top 10 states by workforce size.', open: false },
    { q: 'Does it integrate with our existing payroll software?', a: 'Yes. MealBreak integrates with ADP, Gusto, BambooHR, and several other popular platforms. Custom integrations are available on Enterprise.', open: false },
    { q: 'How does billing work?', a: 'Plans are billed monthly or annually. Annual billing saves 20%. You can cancel at any time with no cancellation fees.', open: false },
  ];
}
