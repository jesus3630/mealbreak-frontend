import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- HERO -->
    <section class="hero">
      <div class="container">
        <div class="hero__inner">
          <div class="eyebrow">NEW — California AB 1512 Compliance Module</div>
          <h1>Never Miss a <span>Meal Break</span><br>Violation Again</h1>
          <p class="hero__sub">MealBreak automates compliance tracking, alerts managers in real time, and generates audit-ready reports — so your team stays protected and your business stays legal.</p>
          <div class="hero__ctas">
            <a routerLink="/contact" class="btn btn-primary btn-lg">Start Free Trial</a>
            <a href="#features-overview" class="btn btn-ghost-white btn-lg">See How It Works</a>
          </div>
        </div>
      </div>
      <div class="hero__wave">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,60 C360,0 1080,60 1440,20 L1440,60 Z" fill="#f7f9f8"/>
        </svg>
      </div>
    </section>

    <!-- PROOF BAR -->
    <section class="proof-bar">
      <div class="container">
        <p class="proof-bar__label">Trusted by compliance teams across the country</p>
        <div class="proof-bar__logos">
          <span class="proof-logo">SecureStaff Pro</span>
          <span class="proof-logo">GuardianHR</span>
          <span class="proof-logo">ComplianceFirst</span>
          <span class="proof-logo">WorkSafe Inc.</span>
          <span class="proof-logo">TrustLayer</span>
        </div>
      </div>
    </section>

    <!-- FEATURES OVERVIEW -->
    <section class="section section--white" id="features-overview">
      <div class="container">
        <div class="section-header">
          <div class="eyebrow" style="color:var(--color-teal-mid);--eyebrow-color:var(--color-teal-mid);">Why MealBreak</div>
          <h2>Compliance Built for the Real World</h2>
          <p>From real-time monitoring to one-click audit exports — every tool your HR and operations team needs to stay compliant, always.</p>
        </div>
        <div class="features-grid">
          <div class="card card--feature">
            <div class="card__icon card__icon--coral">⚡</div>
            <div class="card__title">Real-Time Alerts</div>
            <p class="card__desc">Notify managers the moment a break is missed or cut short — before violations occur.</p>
            <a routerLink="/features" class="card__link">Learn more →</a>
          </div>
          <div class="card card--feature">
            <div class="card__icon card__icon--teal">⚖️</div>
            <div class="card__title">50-State Law Library</div>
            <p class="card__desc">Pre-loaded rules for all 50 states, updated automatically as laws change.</p>
            <a routerLink="/features" class="card__link">Learn more →</a>
          </div>
          <div class="card card--feature">
            <div class="card__icon card__icon--coral">📋</div>
            <div class="card__title">Audit-Ready Reports</div>
            <p class="card__desc">One-click PDF and CSV exports formatted for labor board review and legal defense.</p>
            <a routerLink="/features" class="card__link">Learn more →</a>
          </div>
          <div class="card card--feature">
            <div class="card__icon card__icon--teal">📱</div>
            <div class="card__title">Employee Self-Service</div>
            <p class="card__desc">Workers log breaks on any device — no app download required. Simple and fast.</p>
            <a routerLink="/features" class="card__link">Learn more →</a>
          </div>
          <div class="card card--feature">
            <div class="card__icon card__icon--coral">🛠️</div>
            <div class="card__title">Policy Builder</div>
            <p class="card__desc">Create custom break schedules by role, shift length, or department in minutes.</p>
            <a routerLink="/features" class="card__link">Learn more →</a>
          </div>
          <div class="card card--feature">
            <div class="card__icon card__icon--teal">🔗</div>
            <div class="card__title">Integrations</div>
            <p class="card__desc">Connects with ADP, Gusto, BambooHR and your existing payroll and scheduling stack.</p>
            <a routerLink="/features" class="card__link">Learn more →</a>
          </div>
        </div>
      </div>
    </section>

    <!-- STATS BAR -->
    <section class="stats-bar">
      <div class="container">
        <div class="stats-bar__inner">
          <div class="stat-item"><div class="stat-item__number">50+</div><div class="stat-item__label">States Covered</div></div>
          <div class="stat-item"><div class="stat-item__number">10K+</div><div class="stat-item__label">Breaks Tracked Daily</div></div>
          <div class="stat-item"><div class="stat-item__number">99.9%</div><div class="stat-item__label">Uptime SLA</div></div>
          <div class="stat-item"><div class="stat-item__number">&lt;5 min</div><div class="stat-item__label">Setup Time</div></div>
        </div>
      </div>
    </section>

    <!-- HOW IT WORKS -->
    <section class="section section--off-white" id="how-it-works">
      <div class="container">
        <div class="section-header">
          <div class="eyebrow teal-eyebrow">How It Works</div>
          <h2>Up and Running in Minutes</h2>
          <p>No IT team needed. No complex setup. Just connect, configure, and let MealBreak handle the rest.</p>
        </div>
        <div class="steps">
          <div class="step">
            <div class="step__number">1</div>
            <div class="step__title">Connect Your Systems</div>
            <p class="step__desc">Link your scheduling, HR, or payroll software. We support ADP, Gusto, BambooHR and more.</p>
          </div>
          <div class="step">
            <div class="step__number">2</div>
            <div class="step__title">Set Your Break Policies</div>
            <p class="step__desc">Configure break rules by state, role, or shift length. Our policy wizard walks you through every requirement.</p>
          </div>
          <div class="step">
            <div class="step__number">3</div>
            <div class="step__title">MealBreak Does the Rest</div>
            <p class="step__desc">Real-time monitoring, automatic alerts, and audit-ready reports — generated without any manual work from your team.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- TESTIMONIAL -->
    <section class="section section--white">
      <div class="container">
        <div class="testimonial">
          <div class="stars">
            <div class="star"></div><div class="star"></div><div class="star"></div>
            <div class="star"></div><div class="star"></div>
          </div>
          <span class="testimonial__quote-mark">"</span>
          <p class="testimonial__text">MealBreak eliminated our manual break tracking entirely. We went from three near-violations per week to zero in 30 days. The audit export alone saved us 12 hours the last time we had a labor board inquiry.</p>
          <div class="testimonial__author">Director of HR Operations</div>
          <div class="testimonial__company">Regional Security Services Firm — 200+ employees, California</div>
        </div>
      </div>
    </section>

    <!-- PRICING TEASER -->
    <section class="section section--off-white">
      <div class="container">
        <div class="section-header">
          <div class="eyebrow teal-eyebrow">Pricing</div>
          <h2>Simple, Transparent Pricing</h2>
          <p>Start free. No credit card required. Scale as your team grows.</p>
        </div>
        <div class="pricing-grid">
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
          <div class="pricing-card pricing-card--featured">
            <div class="pricing-card__badge"><span class="badge badge--popular">Most Popular</span></div>
            <div class="pricing-card__name">Professional</div>
            <div class="pricing-card__price">$129<span>/mo</span></div>
            <div class="pricing-card__subtitle">Up to 150 employees</div>
            <ul class="pricing-features">
              <li>Everything in Starter</li>
              <li>All 50 states library</li>
              <li>SMS + push alerts</li>
              <li>Audit-ready PDF/CSV exports</li>
              <li>Policy builder</li>
              <li>Integrations (ADP, Gusto)</li>
            </ul>
            <a routerLink="/contact" class="btn btn-secondary">Start Free Trial</a>
          </div>
          <div class="pricing-card">
            <div class="pricing-card__name">Enterprise</div>
            <div class="pricing-card__price">Custom</div>
            <div class="pricing-card__subtitle">Unlimited employees</div>
            <ul class="pricing-features">
              <li>Everything in Professional</li>
              <li>Dedicated account manager</li>
              <li>Custom integrations</li>
              <li>SLA guarantee</li>
              <li>On-site training</li>
            </ul>
            <a routerLink="/contact" class="btn btn-ghost">Contact Sales</a>
          </div>
        </div>
        <div style="text-align:center;margin-top:2rem;">
          <a routerLink="/pricing" class="btn btn-ghost" style="color:var(--color-teal-mid);border-color:var(--color-teal-mid);">See Full Pricing Details →</a>
        </div>
      </div>
    </section>

    <!-- FINAL CTA -->
    <section class="cta-band">
      <div class="container" style="text-align:center;">
        <h2 style="color:white;margin-bottom:1rem;">Ready to Eliminate Compliance Risk?</h2>
        <p style="color:rgba(255,255,255,0.8);margin-bottom:2rem;font-size:1.05rem;">Join hundreds of employers who trust MealBreak to keep them protected.</p>
        <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;">
          <a routerLink="/contact" class="btn btn-white">Start Free Trial</a>
          <a routerLink="/contact" class="btn btn-ghost-white">Request a Demo</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* HERO */
    .hero { background: linear-gradient(135deg, var(--color-dark) 0%, var(--color-teal-mid) 100%); position: relative; overflow: hidden; padding: 7rem 0 6rem; }
    .hero::before { content: ''; position: absolute; inset: 0; background-image: radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px); background-size: 28px 28px; pointer-events: none; }
    .hero__inner { position: relative; z-index: 1; text-align: center; max-width: 800px; margin: 0 auto; }
    .hero h1 { color: white; font-size: clamp(2.2rem,5vw,3.5rem); font-weight: 800; margin-bottom: 1.25rem; }
    .hero h1 span { color: var(--color-coral); }
    .hero__sub { font-size: clamp(1rem,2vw,1.2rem); color: rgba(255,255,255,0.82); line-height: 1.7; max-width: 600px; margin: 0 auto 2.5rem; }
    .hero__ctas { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
    .hero__wave { position: absolute; bottom: -1px; left: 0; right: 0; line-height: 0; }
    .hero__wave svg { width: 100%; height: 60px; }
    .eyebrow { display: inline-flex; align-items: center; gap: 0.5rem; font-family: var(--font-heading); font-size: 0.72rem; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: var(--color-yellow); margin-bottom: 1rem; }
    .eyebrow::before, .eyebrow::after { content: ''; display: block; width: 28px; height: 1px; background: var(--color-yellow); opacity: 0.7; }
    .teal-eyebrow { color: var(--color-teal-mid); }
    .teal-eyebrow::before, .teal-eyebrow::after { background: var(--color-teal-mid); }
    /* PROOF BAR */
    .proof-bar { background: var(--color-off-white); padding: 2rem 0; border-bottom: 1px solid var(--color-gray-light); }
    .proof-bar__label { font-size: 0.78rem; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: var(--color-gray-text); text-align: center; margin-bottom: 1.25rem; }
    .proof-bar__logos { display: flex; align-items: center; justify-content: center; gap: 3rem; flex-wrap: wrap; }
    .proof-logo { opacity: 0.4; filter: grayscale(100%); font-family: var(--font-heading); font-weight: 700; font-size: 1rem; color: var(--color-gray-text); }
    /* FEATURES */
    .features-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 2rem; }
    .card--feature { display: flex; flex-direction: column; gap: 0.75rem; }
    .card__icon { width: 52px; height: 52px; border-radius: var(--radius-sm); display: flex; align-items: center; justify-content: center; margin-bottom: 0.5rem; font-size: 1.5rem; }
    .card__icon--teal { background: rgba(24,149,138,0.12); }
    .card__icon--coral { background: rgba(232,112,74,0.12); }
    .card__title { font-family: var(--font-heading); font-size: 1.05rem; font-weight: 700; color: var(--color-dark); margin: 0; }
    .card__desc { font-size: 0.9rem; color: var(--color-gray-text); line-height: 1.6; margin: 0; }
    .card__link { font-family: var(--font-heading); font-size: 0.82rem; font-weight: 700; color: var(--color-teal-mid); text-transform: uppercase; letter-spacing: 0.5px; margin-top: auto; }
    .card__link:hover { color: var(--color-coral); }
    /* STATS */
    .stats-bar { background: var(--color-dark); padding: 2.5rem 0; }
    .stats-bar__inner { display: grid; grid-template-columns: repeat(4,1fr); gap: 1rem; text-align: center; }
    .stat-item__number { font-family: var(--font-heading); font-size: 2.2rem; font-weight: 800; color: var(--color-coral); line-height: 1; margin-bottom: 0.3rem; }
    .stat-item__label { font-size: 0.82rem; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase; color: rgba(255,255,255,0.6); }
    /* STEPS */
    .steps { display: grid; grid-template-columns: repeat(3,1fr); gap: 2rem; position: relative; }
    .steps::before { content: ''; position: absolute; top: 36px; left: calc(16.6% + 36px); right: calc(16.6% + 36px); height: 2px; background: repeating-linear-gradient(90deg, var(--color-teal-light) 0, var(--color-teal-light) 8px, transparent 8px, transparent 16px); }
    .step { text-align: center; position: relative; z-index: 1; }
    .step__number { width: 72px; height: 72px; border-radius: 50%; background: var(--color-coral); color: white; font-family: var(--font-heading); font-size: 1.6rem; font-weight: 800; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.25rem; box-shadow: 0 4px 16px rgba(232,112,74,0.3); }
    .step__title { font-family: var(--font-heading); font-size: 1.05rem; font-weight: 700; color: var(--color-dark); margin-bottom: 0.5rem; }
    .step__desc { font-size: 0.9rem; color: var(--color-gray-text); line-height: 1.6; }
    /* TESTIMONIAL */
    .testimonial { max-width: 700px; margin: 0 auto; text-align: center; }
    .testimonial__quote-mark { font-size: 5rem; line-height: 0.8; color: var(--color-teal-light); font-family: Georgia,serif; margin-bottom: 1rem; display: block; }
    .testimonial__text { font-size: clamp(1rem,2vw,1.2rem); font-style: italic; color: var(--color-dark); line-height: 1.75; margin-bottom: 1.5rem; }
    .testimonial__author { font-family: var(--font-heading); font-weight: 700; font-size: 0.9rem; color: var(--color-teal-mid); }
    .testimonial__company { font-size: 0.82rem; color: var(--color-gray-text); margin-top: 0.2rem; }
    .stars { display: flex; justify-content: center; gap: 0.2rem; margin-bottom: 1.25rem; }
    .star { width: 18px; height: 18px; background: var(--color-yellow); clip-path: polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%); }
    /* PRICING */
    .pricing-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.5rem; align-items: start; max-width: 900px; margin: 0 auto 2.5rem; }
    .pricing-card { background: white; border-radius: var(--radius-md); padding: 2.25rem 2rem; box-shadow: var(--shadow-card); border: 2px solid var(--color-gray-light); transition: transform var(--transition),box-shadow var(--transition); position: relative; }
    .pricing-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-hover); }
    .pricing-card--featured { border-color: var(--color-teal-mid); transform: scale(1.03); box-shadow: 0 8px 40px rgba(24,149,138,0.2); }
    .pricing-card--featured:hover { transform: scale(1.03) translateY(-6px); }
    .pricing-card__badge { position: absolute; top: -14px; left: 50%; transform: translateX(-50%); white-space: nowrap; }
    .badge--popular { background: var(--color-yellow); color: var(--color-dark); font-family: var(--font-heading); font-size: 0.72rem; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase; padding: 0.3rem 0.9rem; border-radius: var(--radius-pill); }
    .pricing-card__name { font-family: var(--font-heading); font-size: 0.8rem; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: var(--color-teal-mid); margin-bottom: 0.5rem; }
    .pricing-card__price { font-family: var(--font-heading); font-size: 2.8rem; font-weight: 800; color: var(--color-dark); line-height: 1; margin-bottom: 0.25rem; }
    .pricing-card__price span { font-size: 1rem; font-weight: 600; color: var(--color-gray-text); }
    .pricing-card__subtitle { font-size: 0.88rem; color: var(--color-gray-text); margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid var(--color-gray-light); }
    .pricing-features { list-style: none; margin: 0 0 2rem; padding: 0; display: flex; flex-direction: column; gap: 0.6rem; }
    .pricing-features li { display: flex; align-items: flex-start; gap: 0.6rem; font-size: 0.88rem; color: var(--color-gray-text); line-height: 1.4; }
    .pricing-features li::before { content: '✓'; color: var(--color-teal-mid); font-weight: 700; font-size: 0.9rem; flex-shrink: 0; }
    .pricing-card .btn { width: 100%; justify-content: center; }
    /* CTA BAND */
    .cta-band { background: linear-gradient(135deg, var(--color-teal-deep), var(--color-teal-mid)); padding: 5rem 0; }
    /* RESPONSIVE */
    @media (max-width: 900px) {
      .features-grid, .pricing-grid { grid-template-columns: repeat(2,1fr); }
      .steps { grid-template-columns: 1fr; }
      .steps::before { display: none; }
      .stats-bar__inner { grid-template-columns: repeat(2,1fr); }
    }
    @media (max-width: 600px) {
      .features-grid, .pricing-grid { grid-template-columns: 1fr; }
      .stats-bar__inner { grid-template-columns: repeat(2,1fr); }
    }
  `]
})
export class HomeComponent {}
