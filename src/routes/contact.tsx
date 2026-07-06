import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal, Counter, TiltCard } from "../components/site/motion";
import { Testimonials } from "../components/site/Testimonials";
import {
  Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageCircle, Calendar,
  Shield, Zap, HelpCircle, ArrowRight, Users, Star, HandshakeIcon, Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact CIONA TECH LLC — Free Strategy Call in Houston, TX" },
      { name: "description", content: "Get in touch with CIONA TECH LLC in Houston, TX. Call +1 (254) 870-0892, email info@cionatech.com, or book a free 30-minute strategy call this week." },
      { property: "og:title", content: "Contact CIONA TECH LLC" },
      { property: "og:description", content: "Book a free strategy call with a senior consultant. We respond within 1 business day." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const services = [
  "SEO & Content",
  "Google Ads (PPC)",
  "Social Media Marketing",
  "Web Development",
  "App Development",
  "CRM & Automation",
  "Branding & Design",
  "Content Marketing",
  "Full-service growth",
  "Not sure yet",
];

const budgets = ["Under $2,500 / mo", "$2,500 – $7,500 / mo", "$7,500 – $20,000 / mo", "$20,000+ / mo", "Project-based"];

const reasons = [
  { icon: Zap, t: "Fast replies", d: "Every inquiry gets a real human response within 1 business day." },
  { icon: Shield, t: "No pushy sales", d: "Just an honest conversation about your goals — no scripts, no pressure." },
  { icon: HandshakeIcon, t: "Senior consultant", d: "Your first call is with a strategist, not a sales rep or account manager." },
  { icon: Sparkles, t: "Free audit optional", d: "Ask for a complimentary SEO, ads or website audit worth $2,500." },
];

const faqs = [
  { q: "How quickly will you respond?", a: "We reply to every message within 1 business day — often within a few hours during Houston business hours (Mon–Fri, 9am–7pm CT)." },
  { q: "Is the initial consultation really free?", a: "Yes. Your first 30-minute call is completely free, with no obligation. We use it to understand your goals and see if we're the right partner." },
  { q: "What should I prepare for the first call?", a: "Nothing formal. Come with your goals, current challenges and any questions. If you have analytics access or a current site to review, that helps us go deeper." },
  { q: "Do you work with businesses outside the US?", a: "Absolutely. We serve clients in 20+ countries, with English-fluent teams across the Americas, Europe and Asia for 24/5 coverage." },
  { q: "Can we sign an NDA before sharing details?", a: "Of course. We're happy to send a mutual NDA before you share anything sensitive — just mention it in your message." },
  { q: "What's your minimum engagement?", a: "Retainers start at $999/mo (Starter plan). Custom projects typically start at $6,500. See our pricing page for details." },
];

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero pb-20 pt-24">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-96 w-[60rem] -translate-x-1/2 rounded-full bg-brand-blue/25 blur-3xl blob" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-blue">Contact</p>
            <h1 className="mt-3 font-display text-4xl font-black sm:text-6xl">
              Let's build something <span className="text-gradient">remarkable.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Tell us where you are and where you want to be. A senior consultant will
              reply within 1 business day with clear next steps — no scripts, no pressure.
            </p>
          </Reveal>

          <Reveal delay={1}>
            <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { icon: Clock, l: "Reply time", v: "< 1 day" },
                { icon: Users, l: "Clients", v: "250+" },
                { icon: Star, l: "Rating", v: "4.9/5" },
                { icon: Calendar, l: "Kickoff", v: "7 days" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl border border-border bg-white/70 p-4 text-center backdrop-blur">
                  <s.icon className="mx-auto h-5 w-5 text-brand-blue" />
                  <div className="mt-2 font-display text-xl font-black text-gradient">{s.v}</div>
                  <div className="mt-0.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTACT INFO + FORM */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <div className="flex h-full flex-col gap-6">
              <TiltCard className="rounded-3xl border border-border bg-card p-8 shadow-card">
                <h2 className="font-display text-2xl font-bold">Get in touch</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Full-service digital agency headquartered in Houston, TX — serving clients worldwide.
                </p>
                <ul className="mt-8 space-y-5 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-blue/10 text-brand-blue"><Phone className="h-5 w-5" /></span>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-muted-foreground">Phone</div>
                      <a href="tel:+12548700892" className="font-semibold hover:text-brand-blue">+1 (254) 870-0892</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-teal/15 text-brand-teal"><Mail className="h-5 w-5" /></span>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                      <a href="mailto:info@cionatech.com" className="font-semibold hover:text-brand-blue">info@cionatech.com</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-success/15 text-success"><MapPin className="h-5 w-5" /></span>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-muted-foreground">Location</div>
                      <div className="font-semibold">Houston, Texas, USA</div>
                      <div className="text-xs text-muted-foreground">Serving clients in 20+ countries</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-highlight/15 text-highlight"><Clock className="h-5 w-5" /></span>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-muted-foreground">Office Hours</div>
                      <div className="font-semibold">Mon – Fri, 9:00 AM – 7:00 PM CT</div>
                      <div className="text-xs text-muted-foreground">24/5 global support for retainer clients</div>
                    </div>
                  </li>
                </ul>
              </TiltCard>

              <div className="grid grid-cols-2 gap-4">
                <a href="tel:+12548700892" className="flex items-center gap-3 rounded-2xl border border-border bg-gradient-brand p-4 text-white shadow-elegant transition hover:scale-[1.02]">
                  <Phone className="h-5 w-5" />
                  <div>
                    <div className="text-[11px] uppercase tracking-wider opacity-80">Call now</div>
                    <div className="text-sm font-bold">Talk to us</div>
                  </div>
                </a>
                <a href="https://wa.me/12548700892" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-2xl border border-border bg-white p-4 shadow-card transition hover:border-success hover:text-success">
                  <MessageCircle className="h-5 w-5 text-success" />
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-muted-foreground">WhatsApp</div>
                    <div className="text-sm font-bold">Chat now</div>
                  </div>
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="rounded-3xl border border-border bg-card p-8 shadow-card"
            >
              <h2 className="font-display text-2xl font-bold">Send us a message</h2>
              <p className="mt-2 text-sm text-muted-foreground">A senior consultant will reply within 1 business day.</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Field label="Full Name" name="name" required />
                <Field label="Work Email" name="email" type="email" required />
                <Field label="Company" name="company" />
                <Field label="Phone" name="phone" type="tel" />
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Service Interest</label>
                  <select className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/30">
                    {services.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Monthly Budget</label>
                  <select className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/30">
                    {budgets.map((b) => <option key={b}>{b}</option>)}
                  </select>
                </div>
              </div>
              <div className="mt-4">
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Tell us about your project</label>
                <textarea rows={5} className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/30" placeholder="Goals, timeline, current stack, anything we should know…" />
              </div>
              <label className="mt-4 flex items-start gap-2 text-xs text-muted-foreground">
                <input type="checkbox" className="mt-0.5" defaultChecked />
                <span>I agree to be contacted about my inquiry. We never share your info — see our privacy policy.</span>
              </label>
              <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-white shadow-elegant transition hover:scale-[1.01] sm:w-auto">
                <Send className="h-4 w-4" /> Send Message
              </button>
              {sent && (
                <div className="mt-4 flex items-center gap-2 rounded-xl border border-success/30 bg-success/10 px-4 py-3 text-sm text-success">
                  <CheckCircle2 className="h-4 w-4" /> Thanks! We'll be in touch within one business day.
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </section>

      {/* WHY CONTACT US */}
      <section className="bg-hero py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-blue">Why reach out</p>
              <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">A conversation worth having.</h2>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r, i) => (
              <Reveal key={r.t} delay={i}>
                <TiltCard className="h-full rounded-3xl border border-border bg-white p-6 shadow-card">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-brand text-white shadow-glow">
                    <r.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold">{r.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{r.d}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-blue">Visit us</p>
              <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Headquartered in Houston.</h2>
              <p className="mt-4 text-muted-foreground">
                Our HQ is in the heart of Houston, Texas — a global business hub where energy,
                healthcare and tech converge. Prefer remote? Most of our engagements start
                and stay virtual, with the same quality of collaboration.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { n: 100, s: "+", l: "Team members" },
                  { n: 20, s: "+", l: "Countries served" },
                  { n: 24, s: "/5", l: "Coverage" },
                ].map((s) => (
                  <div key={s.l} className="rounded-2xl border border-border bg-card p-4 text-center shadow-card">
                    <div className="font-display text-2xl font-black text-gradient">
                      <Counter to={s.n} suffix={s.s} />
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-border shadow-elegant">
              <iframe
                title="CIONA TECH LLC — Houston, Texas"
                src="https://www.google.com/maps?q=Houston,+Texas&output=embed"
                width="100%"
                height="380"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block"
              />
            </div>
          </div>
        </Reveal>
      </section>

      <Testimonials title="Loved by teams like yours" subtitle="A few kind words from partners we've worked with." />

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-blue">FAQ</p>
            <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Before you send that message.</h2>
          </div>
        </Reveal>
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i % 3}>
              <details className="group rounded-2xl border border-border bg-card p-5 shadow-card transition hover:border-brand-blue/40">
                <summary className="flex cursor-pointer items-start justify-between gap-4">
                  <span className="flex items-start gap-3">
                    <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" />
                    <span className="font-display text-base font-bold">{f.q}</span>
                  </span>
                  <span className="text-brand-blue transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 pl-8 text-sm text-muted-foreground">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-brand p-10 text-center text-white shadow-elegant sm:p-14">
            <h2 className="font-display text-4xl font-black sm:text-5xl">Prefer to skip the form?</h2>
            <p className="mx-auto mt-4 max-w-xl text-white/85">
              Give us a call or book a time on our calendar — we'll do the rest.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="tel:+12548700892" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-brand-blue shadow-card transition hover:scale-[1.03]">
                <Phone className="h-4 w-4" /> +1 (254) 870-0892
              </a>
              <Link to="/pricing" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10">
                See pricing <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
      />
    </div>
  );
}
