import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <section class="hero hero--short">
      <div class="container">
        <div class="hero__inner">
          <div class="eyebrow">Contact Us</div>
          <h1>Get in Touch or <span>Start Your Free Trial</span></h1>
          <p class="hero__sub">Have questions? Want a demo? Ready to start? We're here to help.</p>
        </div>
      </div>
      <div class="hero__wave"><svg viewBox="0 0 1440 60" preserveAspectRatio="none"><path d="M0,60 C360,0 1080,60 1440,20 L1440,60 Z" fill="#ffffff"/></svg></div>
    </section>

    <section class="section section--white" id="demo-form">
      <div class="container">
        <div class="contact-grid">

          <!-- FORM -->
          <div class="contact-form-wrap">
            <h2>Request a Demo or Free Trial</h2>
            <p style="color:var(--color-gray-text);margin-bottom:2rem;">Fill out the form and our team will reach out within one business day.</p>

            @if (submitted) {
              <div class="success-msg">
                <strong>✅ Message sent!</strong> We'll be in touch within one business day.
              </div>
            } @else {
              <form (ngSubmit)="submit()">
                <div class="form-row">
                  <div class="field">
                    <label>First Name</label>
                    <input type="text" [(ngModel)]="form.firstName" name="firstName" placeholder="Jane" required />
                  </div>
                  <div class="field">
                    <label>Last Name</label>
                    <input type="text" [(ngModel)]="form.lastName" name="lastName" placeholder="Smith" required />
                  </div>
                </div>
                <div class="field">
                  <label>Work Email</label>
                  <input type="email" [(ngModel)]="form.email" name="email" placeholder="jane@company.com" required />
                </div>
                <div class="field">
                  <label>Company</label>
                  <input type="text" [(ngModel)]="form.company" name="company" placeholder="Your Company Name" />
                </div>
                <div class="field">
                  <label>Number of Employees</label>
                  <select [(ngModel)]="form.employees" name="employees">
                    <option value="">Select range</option>
                    <option>1–25</option>
                    <option>26–100</option>
                    <option>101–500</option>
                    <option>500+</option>
                  </select>
                </div>
                <div class="field">
                  <label>Message (optional)</label>
                  <textarea [(ngModel)]="form.message" name="message" rows="4" placeholder="Tell us about your compliance needs..."></textarea>
                </div>
                <button type="submit" class="btn btn-primary" style="width:100%;justify-content:center;">
                  Request Demo / Start Free Trial
                </button>
              </form>
            }
          </div>

          <!-- INFO -->
          <div class="contact-info">
            <div class="info-card">
              <div class="info-icon">📧</div>
              <div class="info-label">Email</div>
              <div class="info-value">hello&#64;mealbreak.io</div>
            </div>
            <div class="info-card">
              <div class="info-icon">📞</div>
              <div class="info-label">Phone</div>
              <div class="info-value">(800) 555-0100</div>
            </div>
            <div class="info-card">
              <div class="info-icon">🕐</div>
              <div class="info-label">Support Hours</div>
              <div class="info-value">Mon–Fri, 8am–6pm CT</div>
            </div>
            <div class="trust-block">
              <div class="trust-item">✓ 14-day free trial</div>
              <div class="trust-item">✓ No credit card required</div>
              <div class="trust-item">✓ Setup in under 5 minutes</div>
              <div class="trust-item">✓ Cancel any time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero { background: linear-gradient(135deg, var(--color-dark) 0%, var(--color-teal-mid) 100%); position: relative; overflow: hidden; padding: 5rem 0 4rem; }
    .hero::before { content: ''; position: absolute; inset: 0; background-image: radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px); background-size: 28px 28px; pointer-events: none; }
    .hero__inner { position: relative; z-index: 1; text-align: center; max-width: 700px; margin: 0 auto; }
    .hero h1 { color: white; font-size: clamp(2rem,4vw,3rem); font-weight: 800; margin-bottom: 1rem; }
    .hero h1 span { color: var(--color-coral); }
    .hero__sub { font-size: 1.05rem; color: rgba(255,255,255,0.82); line-height: 1.7; }
    .hero__wave { position: absolute; bottom: -1px; left: 0; right: 0; line-height: 0; }
    .hero__wave svg { width: 100%; height: 60px; }
    .eyebrow { display: inline-flex; align-items: center; gap: 0.5rem; font-family: var(--font-heading); font-size: 0.72rem; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: var(--color-yellow); margin-bottom: 1rem; }
    .eyebrow::before, .eyebrow::after { content: ''; display: block; width: 28px; height: 1px; background: var(--color-yellow); opacity: 0.7; }
    .contact-grid { display: grid; grid-template-columns: 1.4fr 1fr; gap: 4rem; align-items: start; }
    h2 { font-family: var(--font-heading); color: var(--color-dark); margin-bottom: 0.5rem; }
    .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
    .field { margin-bottom: 1.25rem; }
    label { display: block; font-size: 0.85rem; font-weight: 600; color: var(--color-dark); margin-bottom: 0.4rem; font-family: var(--font-heading); }
    input, select, textarea { width: 100%; padding: 0.75rem 1rem; border-radius: var(--radius-sm); border: 1.5px solid var(--color-gray-light); font-size: 0.9rem; outline: none; transition: border 0.2s; font-family: var(--font-body); background: white; }
    input:focus, select:focus, textarea:focus { border-color: var(--color-teal-mid); }
    textarea { resize: vertical; }
    .success-msg { background: rgba(24,149,138,0.1); border: 1px solid var(--color-teal-mid); border-radius: var(--radius-md); padding: 1.5rem; color: var(--color-teal-deep); font-size: 1rem; }
    .info-card { background: var(--color-off-white); border-radius: var(--radius-md); padding: 1.5rem; margin-bottom: 1rem; border: 1px solid var(--color-gray-light); }
    .info-icon { font-size: 1.5rem; margin-bottom: 0.5rem; }
    .info-label { font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: var(--color-gray-text); margin-bottom: 0.25rem; font-family: var(--font-heading); }
    .info-value { font-size: 0.95rem; font-weight: 600; color: var(--color-dark); }
    .trust-block { margin-top: 1.5rem; display: flex; flex-direction: column; gap: 0.6rem; }
    .trust-item { display: flex; align-items: center; gap: 0.5rem; font-size: 0.88rem; color: var(--color-gray-text); }
    @media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr; } .form-row { grid-template-columns: 1fr; } }
  `]
})
export class ContactComponent {
  submitted = false;
  form = { firstName: '', lastName: '', email: '', company: '', employees: '', message: '' };

  submit() {
    // In production this would POST to /api/contact
    this.submitted = true;
  }
}
