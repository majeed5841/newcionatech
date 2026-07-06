import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal, Counter, TiltCard } from "../components/site/motion";
import { Testimonials } from "../components/site/Testimonials";
import {
  CheckCircle2, Sparkles, Rocket, Crown, ArrowRight, Star, Clock,
  Shield, Users, TrendingUp, HelpCircle, Zap, Award, HandshakeIcon,
} from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Transparent Plans for Marketing & Development | CIONA TECH LLC" },
      { name: "description", content: "Simple, transparent pricing for digital marketing and software development. Starter, Momentum & Pioneer plans with no hidden fees, month-to-month, and senior-only teams." },
      { property: "og:title", content: "Pricing — CIONA TECH LLC" },
      { property: "og:description", content: "Three flexible plans built around your goals — SEO, ads, web, apps, CRM and more. Month-to-month, no lock-in." },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: PricingPage,
});

const plans = [
  {
    name: "Starter",
    icon: Sparkles,
    price: 999,
    tagline: "For emerging brands ready to build a professional online presence.",
    features: [
      "Landing site (up to 5 pages)",
      "On-page SEO setup + technical audit",
      "Google Business Profile optimization",
      "Blog & content strategy (2 posts/mo)",
      "Monthly analytics report",
      "Email support (24h response)",
    ],
    ideal: "Local businesses, solopreneurs, new brands",
    popular: false,
  },
  {
    name: "Momentum",
    icon: Rocket,
    price: 2499,
    tagline: "For growing companies scaling multi-channel demand.",
    features: [
      "Custom website (up to 15 pages)",
      "Full SEO + content plan (8 posts/mo)",
      "Google Ads management (up to $10k spend)",
      "Social media (2 platforms + community)",
      "Landing pages & CRO experiments",
      "Bi-weekly strategy calls",
      "Priority Slack support",
    ],
    ideal: "SMBs, DTC brands, funded startups",
    popular: true,
  },
  {
    name: "Pioneer",
    icon: Crown,
    price: 0,
    tagline: "For scale-ups & enterprises building compounding growth.",
    features: [
      "Custom web / app / CRM development",
      "SEO + Paid + Social + Email (full mix)",
      "AI, automation & workflow build",
      "Dedicated growth pod (5+ specialists)",
      "Executive reporting & QBRs",
      "24/7 SLA support & on-call engineering",
      "Custom analytics & data warehouse",
    ],
    ideal: "Series A+, mid-market, enterprise brands",
    popular: false,
  },
];

const addOns = [
  { name: "Brand identity system", price: "from $3,500", d: "Logo, palette, typography, guidelines" },
  { name: "Video & motion graphics", price: "from $1,200/mo", d: "Reels, ads, product videos, animation" },
  { name: "Conversion rate optimization", price: "from $1,800/mo", d: "A/B tests, heatmaps, funnel tuning" },
  { name: "eCommerce store build", price: "from $6,500", d: "Shopify or headless commerce" },
  { name: "AI chatbot & automation", price: "from $2,800", d: "GPT-powered assistants, workflows" },
  { name: "Content marketing pod", price: "from $2,000/mo", d: "Writers, editors, SEO strategist" },
];

const compareRows: { label: string; starter: string | boolean; momentum: string | boolean; pioneer: string | boolean }[] = [
  { label: "Dedicated account manager", starter: false, momentum: true, pioneer: true },
  { label: "Custom design system", starter: false, momentum: true, pioneer: true },
  { label: "SEO — technical + on-page", starter: true, momentum: true, pioneer: true },
  { label: "SEO — link building", starter: false, momentum: "8/mo", pioneer: "20+/mo" },
  { label: "Paid ads management", starter: false, momentum: "Up to $10k", pioneer: "Unlimited" },
  { label: "Blog content", starter: "2/mo", momentum: "8/mo", pioneer: "Custom" },
  { label: "Web / app development", starter: "Landing", momentum: "Full site", pioneer: "Custom apps" },
  { label: "CRM & automations", starter: false, momentum: "Basic", pioneer: "Advanced" },
  { label: "Reporting cadence", starter: "Monthly", momentum: "Bi-weekly", pioneer: "Weekly + live dashboards" },
  { label: "Support SLA", starter: "24h email", momentum: "Priority Slack", pioneer: "24/7 on-call" },
];

const faqs = [
  { q: "Are the prices really month-to-month?", a: "Yes. Every plan is month-to-month with a simple 30-day cancellation notice. We earn your business every month, not through long contracts." },
  { q: "What if I don't fit into a plan?", a: "That's the norm — most engagements are custom. Plans are starting points. Book a call and we'll scope pricing to your goals." },
  { q: "Do you offer performance-based pricing?", a: "For qualifying accounts we blend a base retainer with revenue-share on ads or SEO growth. Ask about our performance model on a call." },
  { q: "How fast can we start?", a: "Kickoff usually happens within 5–10 business days of contract signing. Momentum and Pioneer engagements start with a paid discovery sprint." },
  { q: "Who owns the work you produce?", a: "You do — 100%. Code, content, creative, and data all belong to you and are handed over with source files, credentials and documentation." },
  { q: "Do you work outside the United States?", a: "Yes. We serve clients in 20+ countries with English-fluent teams across three continents for 24/5 coverage." },
  { q: "What's included in the yearly discount?", a: "Paying annually gets you 15% off any monthly plan, priority onboarding, and a free brand or SEO audit worth $2,500." },
  { q: "Can we upgrade or downgrade at any time?", a: "Yes — plans are flexible. Most clients start on Starter or Momentum and expand as their traffic, pipeline and revenue grow." },
];

const guarantees = [
  { icon: Shield, t: "No lock-in contracts", d: "Month-to-month with 30-day notice. Cancel anytime." },
  { icon: HandshakeIcon, t: "You own everything", d: "Code, content, creative, accounts — all yours." },
  { icon: Zap, t: "Fast kickoff", d: "Start work within 5–10 business days of signing." },
  { icon: Award, t: "Senior-only pods", d: "No juniors billed as seniors. Ever." },
];

function PricingPage() {
  const [yearly, setYearly] = useState(false);
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero pb-20 pt-24">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-96 w-[60rem] -translate-x-1/2 rounded-full bg-brand-blue/25 blur-3xl blob" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-blue">Pricing</p>
            <h1 className="mt-3 font-display text-4xl font-black sm:text-6xl">
              Simple pricing. <span className="text-gradient">Real outcomes.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Three flexible starting points — every plan is tailored to your goals. Month-to-month,
              no hidden fees, and staffed by a senior team that treats your business like their own.
            </p>
            <div className="mt-8 inline-flex rounded-full border border-border bg-card p-1 shadow-card">
              <button onClick={() => setYearly(false)} className={`rounded-full px-5 py-2 text-sm font-semibold transition ${!yearly ? "bg-gradient-brand text-white shadow-elegant" : "text-muted-foreground"}`}>Monthly</button>
              <button onClick={() => setYearly(true)} className={`rounded-full px-5 py-2 text-sm font-semibold transition ${yearly ? "bg-gradient-brand text-white shadow-elegant" : "text-muted-foreground"}`}>
                Yearly <span className="ml-1 rounded-full bg-success/20 px-2 py-0.5 text-xs text-success">Save 15%</span>
              </button>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { n: 250, s: "+", l: "Clients" },
                { n: 92, s: "%", l: "Retention" },
                { n: 6, s: "×", l: "Avg. ROAS" },
                { n: 4.9, s: "/5", l: "Rating" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl border border-border bg-white/70 p-4 text-center backdrop-blur">
                  <div className="font-display text-2xl font-black text-gradient">
                    <Counter to={s.n} suffix={s.s} />
                  </div>
                  <div className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* PLAN CARDS */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i}>
              <TiltCard className={`relative flex h-full flex-col rounded-3xl border p-8 shadow-card transition hover:shadow-elegant ${p.popular ? "border-brand-blue bg-card ring-2 ring-brand-blue/30" : "border-border bg-card"}`}>
                {p.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-brand px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-elegant">
                    Most Popular
                  </div>
                )}
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand text-white shadow-glow">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <div className="text-sm font-semibold uppercase tracking-widest text-brand-blue">{p.name}</div>
                </div>
                <div className="mt-5 font-display text-5xl font-black">
                  {p.price === 0 ? "Custom" : `$${(yearly ? Math.round(p.price * 0.85) : p.price).toLocaleString()}`}
                  {p.price !== 0 && <span className="text-base font-medium text-muted-foreground">/mo</span>}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{p.tagline}</div>
                <div className="mt-4 rounded-xl bg-secondary/50 px-3 py-2 text-xs">
                  <span className="font-semibold">Ideal for:</span>{" "}
                  <span className="text-muted-foreground">{p.ideal}</span>
                </div>
                <ul className="mt-6 flex-1 space-y-3 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition ${
                    p.popular
                      ? "bg-gradient-brand text-white shadow-elegant hover:scale-[1.02]"
                      : "border border-border hover:border-brand-blue hover:text-brand-blue"
                  }`}
                >
                  Get Started <ArrowRight className="h-4 w-4" />
                </Link>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* GUARANTEES */}
      <section className="bg-hero py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {guarantees.map((g, i) => (
              <Reveal key={g.t} delay={i}>
                <div className="flex items-start gap-4 rounded-3xl border border-border bg-white p-6 shadow-card">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-brand-soft text-brand-blue">
                    <g.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold">{g.t}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{g.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-blue">Plan comparison</p>
            <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Feature by feature.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              A quick side-by-side view of what's included in each plan. Everything is fully customizable.
            </p>
          </div>
        </Reveal>
        <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-card shadow-card">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-sm">
              <thead>
                <tr className="bg-gradient-brand-soft text-left">
                  <th className="p-5 font-display text-base font-bold">Feature</th>
                  <th className="p-5 text-center font-display text-base font-bold">Starter</th>
                  <th className="p-5 text-center font-display text-base font-bold text-brand-blue">Momentum</th>
                  <th className="p-5 text-center font-display text-base font-bold">Pioneer</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-secondary/40"}>
                    <td className="p-4 font-medium">{row.label}</td>
                    {[row.starter, row.momentum, row.pioneer].map((v, j) => (
                      <td key={j} className="p-4 text-center text-muted-foreground">
                        {v === true ? <CheckCircle2 className="mx-auto h-5 w-5 text-success" /> : v === false ? <span className="text-muted-foreground/40">—</span> : v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ADD-ONS */}
      <section className="bg-hero py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-blue">Add-ons</p>
              <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Bolt on what you need.</h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Every plan can be extended with these popular add-on services.
              </p>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {addOns.map((a, i) => (
              <Reveal key={a.name} delay={i % 3}>
                <div className="h-full rounded-3xl border border-border bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-elegant">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-lg font-bold">{a.name}</h3>
                    <span className="whitespace-nowrap rounded-full bg-gradient-brand-soft px-3 py-1 text-xs font-bold text-brand-blue">{a.price}</span>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{a.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-blue">How it works</p>
            <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">From first call to first win.</h2>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { step: "01", t: "Discovery call", d: "A 30-minute deep dive into your goals, market and current stack." },
            { step: "02", t: "Custom proposal", d: "A tailored scope, plan and fixed pricing within 3 business days." },
            { step: "03", t: "Kickoff & sprint 1", d: "Team is assembled, tools are set up, first sprint starts in ~7 days." },
            { step: "04", t: "Weekly wins", d: "Shipping every sprint, reporting every week, learning every month." },
          ].map((p, i) => (
            <Reveal key={p.step} delay={i}>
              <div className="h-full rounded-3xl border border-border bg-card p-6 shadow-card">
                <div className="font-display text-4xl font-black text-gradient">{p.step}</div>
                <h3 className="mt-3 font-display text-lg font-bold">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-ink py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Users, l: "Clients served", v: "250+" },
              { icon: Star, l: "Average rating", v: "4.9/5" },
              { icon: TrendingUp, l: "Client retention", v: "92%" },
              { icon: Clock, l: "Avg. kickoff", v: "7 days" },
            ].map((s) => (
              <div key={s.l} className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <s.icon className="h-8 w-8 text-brand-teal" />
                <div>
                  <div className="font-display text-2xl font-black">{s.v}</div>
                  <div className="text-sm text-white/70">{s.l}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials title="What clients say about working with us" subtitle="Straight from the founders and operators we partner with." />

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-blue">FAQ</p>
            <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Pricing questions, answered.</h2>
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
            <h2 className="font-display text-4xl font-black sm:text-5xl">Not sure which plan is right?</h2>
            <p className="mx-auto mt-4 max-w-xl text-white/85">
              Book a free 30-minute consultation. We'll listen, ask smart questions and recommend the right starting point — no pressure.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-brand-blue shadow-card transition hover:scale-[1.03]">
                Book a free strategy call <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10">
                Explore services
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
