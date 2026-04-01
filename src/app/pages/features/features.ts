import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="hero hero--short">
      <div class="container">
        <div class="hero__inner">
          <div class="eyebrow">Features</div>
          <h1>Everything You Need to <span>Stay Compliant</span></h1>
          <p class="hero__sub">MealBreak gives HR and compliance teams a complete toolkit — from real-time monitoring to state-specific policy management and audit-ready documentation.</p>
          <div class="hero__ctas">
            <a routerLink="/contact" class="btn btn-primary btn-lg">Start Free Trial</a>
            <a routerLink="/pricing" class="btn btn-ghost-white btn-lg">View Pricing</a>
          </div>
        </div>
      </div>
      <div class="hero__wave"><svg viewBox="0 0 1440 60" preserveAspectRatio="none"><path d="M0,60 C360,0 1080,60 1440,20 L1440,60 Z" fill="#ffffff"/></svg></div>
    </section>

    <!-- MONITORING -->
    <section class="section section--white" id="monitoring">
      <div class="container">
        <div class="feature-detail">
          <div class="feature-detail__content">
            <div class="eyebrow coral-eyebrow">Monitoring &amp; Alerts</div>
            <h2>Know the Moment Something Goes Wrong</h2>
            <p>MealBreak monitors every active shift in real time and instantly notifies the right person when a break is missed, late, or cut short — before it becomes a violation.</p>
            <ul class="feature-list">
              <li>Real-time break monitoring across all active shifts</li>
              <li>Manager push notifications via email and SMS</li>
              <li>Configurable alert thresholds — warn at 5 min, escalate at 15</li>
              <li>Shift supervisor dashboard with live employee status</li>
              <li>Automatic escalation chains for unacknowledged alerts</li>
            </ul>
          </div>
          <div class="ui-mockup">
            <div class="ui-mockup__bar">
              <div class="dot" style="background:#e8704a"></div>
              <div class="dot" style="background:#e8af4b;margin-left:4px"></div>
              <div class="dot" style="background:#18958a;margin-left:4px"></div>
              <span class="bar-label">Live Dashboard</span>
            </div>
            <div class="ui-mockup__body">
              <div class="mock-heading">Today's Alerts</div>
              <div class="alert-card alert-card--warning"><span>⚠️</span><div><strong>Break Overdue — Line 3</strong><span>Sarah M. — 18 min past scheduled break</span></div></div>
              <div class="alert-card alert-card--ok"><span>✅</span><div><strong>Break Completed — Warehouse A</strong><span>David R. — 30 min break logged on time</span></div></div>
              <div class="alert-card alert-card--warning"><span>⚠️</span><div><strong>Short Break — Front Desk</strong><span>Mia T. — Break ended 12 min early</span></div></div>
              <div class="alert-card alert-card--ok"><span>✅</span><div><strong>All Clear — Shift 2</strong><span>8 of 8 employees breaks compliant</span></div></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- COMPLIANCE -->
    <section class="section section--off-white" id="compliance">
      <div class="container">
        <div class="feature-detail feature-detail--reversed">
          <div class="feature-detail__content">
            <div class="eyebrow teal-eyebrow">Compliance Engine</div>
            <h2>Pre-Built Rules for Every State</h2>
            <p>Stop worrying about which state requires what. MealBreak's compliance engine comes pre-loaded with every state's break laws and automatically applies the correct rules.</p>
            <ul class="feature-list">
              <li>All 50 states' break laws pre-loaded and maintained</li>
              <li>Auto-applies correct rules based on employee work location</li>
              <li>Covers meal periods, rest breaks, and minor labor laws</li>
              <li>Legal team-reviewed quarterly with change notifications</li>
              <li>California AB 1512, New York, Texas, Florida — all covered</li>
            </ul>
          </div>
          <div class="ui-mockup">
            <div class="ui-mockup__bar"><span class="bar-label">State Compliance Map</span></div>
            <div class="ui-mockup__body">
              <div class="state-grid">
                <div class="state-card"><div class="state-name">California</div><div class="state-rule">30-min meal / 6+ hr shift</div><div class="state-sub">AB 1512 compliant</div></div>
                <div class="state-card"><div class="state-name">New York</div><div class="state-rule">30-min lunch / 6+ hr shift</div><div class="state-sub">NYLL §162</div></div>
                <div class="state-card"><div class="state-name">Texas</div><div class="state-rule">Federal FLSA rules apply</div><div class="state-sub">Auto-configured</div></div>
                <div class="state-card"><div class="state-name">+47 More</div><div class="state-rule">All states covered</div><div class="state-sub">Auto-updated</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- REPORTING -->
    <section class="section section--white" id="reporting">
      <div class="container">
        <div class="section-header">
          <div class="eyebrow">Reporting &amp; Audit Defense</div>
          <h2>Reports That Stand Up in Court</h2>
          <p>When a labor board inquiry arrives, you need documentation that's complete, accurate, and immediately accessible. MealBreak keeps it ready at all times.</p>
        </div>
        <div class="cards-grid">
          <div class="card"><div class="card__icon card__icon--teal">📊</div><div class="card__title">Break History Report</div><p class="card__desc">Full per-employee break log for any date range. Filter by department, shift, or location. Export to PDF or CSV instantly.</p></div>
          <div class="card"><div class="card__icon card__icon--coral">🚨</div><div class="card__title">Violation Summary</div><p class="card__desc">All flagged incidents with timestamps, manager response logs, and resolution notes — documented and defensible.</p></div>
          <div class="card"><div class="card__icon card__icon--teal">🗂️</div><div class="card__title">Audit Package Export</div><p class="card__desc">One-click PDF formatted for DOL and state labor board submission. Includes all required supporting documentation.</p></div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-band">
      <div class="container" style="text-align:center;">
        <h2 style="color:white;margin-bottom:1rem;">Ready to See It in Action?</h2>
        <p style="color:rgba(255,255,255,0.8);margin-bottom:2rem;">Start your free trial today. No credit card required.</p>
        <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;">
          <a routerLink="/contact" class="btn btn-white">Start Free Trial</a>
          <a routerLink="/pricing" class="btn btn-ghost-white">View Pricing</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero { background: linear-gradient(135deg, var(--color-dark) 0%, var(--color-teal-mid) 100%); position: relative; overflow: hidden; padding: 5rem 0 4rem; }
    .hero::before { content: ''; position: absolute; inset: 0; background-image: radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px); background-size: 28px 28px; pointer-events: none; }
    .hero__inner { position: relative; z-index: 1; text-align: center; max-width: 800px; margin: 0 auto; }
    .hero h1 { color: white; font-size: clamp(2rem,4vw,3rem); font-weight: 800; margin-bottom: 1.25rem; }
    .hero h1 span { color: var(--color-coral); }
    .hero__sub { font-size: 1.05rem; color: rgba(255,255,255,0.82); line-height: 1.7; max-width: 580px; margin: 0 auto 2rem; }
    .hero__ctas { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
    .hero__wave { position: absolute; bottom: -1px; left: 0; right: 0; line-height: 0; }
    .hero__wave svg { width: 100%; height: 60px; }
    .eyebrow { display: inline-flex; align-items: center; gap: 0.5rem; font-family: var(--font-heading); font-size: 0.72rem; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: var(--color-yellow); margin-bottom: 1rem; }
    .eyebrow::before, .eyebrow::after { content: ''; display: block; width: 28px; height: 1px; background: currentColor; opacity: 0.7; }
    .coral-eyebrow { color: var(--color-coral); }
    .teal-eyebrow { color: var(--color-teal-mid); }
    .feature-detail { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
    .feature-detail--reversed { direction: rtl; }
    .feature-detail--reversed > * { direction: ltr; }
    .feature-list { list-style: none; padding: 0; margin: 1.5rem 0 0; display: flex; flex-direction: column; gap: 0.6rem; }
    .feature-list li { display: flex; align-items: flex-start; gap: 0.6rem; font-size: 0.9rem; color: var(--color-gray-text); }
    .feature-list li::before { content: '✓'; color: var(--color-teal-mid); font-weight: 700; flex-shrink: 0; margin-top: 0.05rem; }
    .ui-mockup { background: var(--color-dark); border-radius: 12px; overflow: hidden; box-shadow: 0 16px 48px rgba(10,72,64,0.3); }
    .ui-mockup__bar { background: rgba(255,255,255,0.08); padding: 0.75rem 1rem; display: flex; align-items: center; }
    .dot { width: 10px; height: 10px; border-radius: 50%; }
    .bar-label { color: rgba(255,255,255,0.6); font-size: 0.78rem; margin-left: auto; font-family: var(--font-heading); }
    .ui-mockup__body { padding: 1.25rem; display: flex; flex-direction: column; gap: 0.6rem; }
    .mock-heading { font-family: var(--font-heading); font-size: 0.75rem; font-weight: 700; color: var(--color-gray-text); text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 0.25rem; }
    .alert-card { display: flex; align-items: flex-start; gap: 0.75rem; padding: 0.75rem; border-radius: 8px; }
    .alert-card--warning { background: rgba(232,112,74,0.12); }
    .alert-card--ok { background: rgba(24,149,138,0.12); }
    .alert-card div { display: flex; flex-direction: column; gap: 2px; }
    .alert-card strong { font-size: 0.82rem; color: white; font-family: var(--font-heading); }
    .alert-card span { font-size: 0.75rem; color: rgba(255,255,255,0.6); }
    .state-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; }
    .state-card { background: rgba(24,149,138,0.1); border-radius: 8px; padding: 0.9rem; border: 1px solid var(--color-teal-light); }
    .state-name { font-size: 0.7rem; font-weight: 700; color: var(--color-teal-mid); font-family: var(--font-heading); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 0.25rem; }
    .state-rule { font-size: 0.8rem; color: var(--color-dark); }
    .state-sub { font-size: 0.7rem; color: var(--color-gray-text); }
    .cards-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 2rem; }
    .card__icon { width: 52px; height: 52px; border-radius: 6px; display: flex; align-items: center; justify-content: center; margin-bottom: 0.5rem; font-size: 1.5rem; }
    .card__icon--teal { background: rgba(24,149,138,0.12); }
    .card__icon--coral { background: rgba(232,112,74,0.12); }
    .card__title { font-family: var(--font-heading); font-size: 1.05rem; font-weight: 700; color: var(--color-dark); margin-bottom: 0.5rem; }
    .card__desc { font-size: 0.9rem; color: var(--color-gray-text); line-height: 1.6; margin: 0; }
    .cta-band { background: linear-gradient(135deg, var(--color-teal-deep), var(--color-teal-mid)); padding: 5rem 0; }
    @media (max-width: 768px) {
      .feature-detail, .feature-detail--reversed { grid-template-columns: 1fr; direction: ltr; }
      .cards-grid { grid-template-columns: 1fr; }
    }
  `]
})
export class FeaturesComponent {}
