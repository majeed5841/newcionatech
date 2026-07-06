import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  MapPin, Star, Search, Camera, MessageSquare, TrendingUp, Shield, Phone,
  CheckCircle2, ArrowRight, Sparkles, BarChart3, Users, Clock, Award,
  Target, Zap, Globe, ThumbsUp, HelpCircle, Calendar, Mail,
} from "lucide-react";
export const Route = createFileRoute("/src/routes/services/google-business-profile")({
  head: () => ({
    meta: [
      { title: "Google Business Profile Optimization Services | CIONA TECH LLC" },
      { name: "description", content: "Rank #1 in Google Maps and the local 3-pack. Full GBP optimization, review management, posts, Q&A, and local SEO that drives calls, visits, and revenue." },
      { property: "og:title", content: "Google Business Profile Optimization Services | CIONA TECH LLC" },
      { property: "og:description", content: "Dominate local search with a fully optimized Google Business Profile. Managed by senior local SEO specialists." },
    ],
    links: [{ rel: "canonical", href: "/services/google-business-profile" }],
  }),
  component: GBPPage,
});
const stats = [
  { value: "3.2x", label: "More Calls" },
  { value: "#1", label: "Map Pack Rankings" },
  { value: "450%", label: "Profile Views" },
  { value: "5★", label: "Avg. Rating" },
];
const problems = [
  { title: "Invisible in Maps", desc: "Your business doesn't show up when nearby customers search for what you sell." },
  { title: "Low Rating & Few Reviews", desc: "Weak social proof kills trust before customers ever call." },
  { title: "Outdated Information", desc: "Wrong hours, missing services, and stale photos push customers to competitors." },
  { title: "Zero Engagement", desc: "No posts, no Q&A responses, no updates — Google deprioritizes inactive profiles." },
];
const services = [
  { icon: Search, title: "Full Profile Audit", desc: "60-point deep audit covering NAP, categories, attributes, media, reviews, and competitors." },
  { icon: Target, title: "Category & Keyword Optimization", desc: "Primary + secondary categories, service keywords, and geo-modifiers tuned for the map pack." },
  { icon: Camera, title: "Photo & Video Strategy", desc: "Geotagged photos, 360° imagery, product shots, and short video that boost engagement." },
  { icon: MessageSquare, title: "Review Generation & Response", desc: "Automated review requests + on-brand replies to every review, positive or negative." },
  { icon: Zap, title: "Weekly GBP Posts", desc: "Offers, updates, and events posted weekly to keep your profile fresh and active." },
  { icon: HelpCircle, title: "Q&A Management", desc: "Seed the top questions, monitor daily, and answer with SEO-optimized responses." },
  { icon: Shield, title: "Suspension Recovery", desc: "Fast reinstatement support if your profile is suspended, disabled, or hijacked." },
  { icon: BarChart3, title: "Monthly Reporting", desc: "Rankings, calls, direction requests, website clicks — the metrics that matter." },
];
const process = [
  { step: "01", title: "Discovery & Audit", desc: "We audit your GBP, competitors, and top local keywords in the first 48 hours." },
  { step: "02", title: "Strategy & Setup", desc: "Category mapping, keyword strategy, review funnel, and posting calendar built." },
  { step: "03", title: "Optimization Sprint", desc: "Rewrite description, upload media, structure services, fix citations across 60+ directories." },
  { step: "04", title: "Ongoing Management", desc: "Weekly posts, daily Q&A, review responses, and monthly performance reviews." },
  { step: "05", title: "Growth & Scale", desc: "Expand to multiple locations, service areas, and secondary categories as you rank." },
];
const results = [
  { metric: "Local Pack Rankings", before: "Not ranking", after: "#1–3 for 40+ keywords" },
  { metric: "Monthly Calls", before: "12 calls/mo", after: "180+ calls/mo" },
  { metric: "Direction Requests", before: "8/mo", after: "220/mo" },
  { metric: "Reviews", before: "6 (3.9★)", after: "127 (4.9★)" },
];
const industries = ["Restaurants & Cafés", "Medical & Dental", "Home Services", "Auto Repair", "Law Firms", "Real Estate", "Retail Stores", "Beauty & Salons"];
const faqs = [
  { q: "How long until I see results in Google Maps?", a: "Most clients see meaningful ranking movement within 30–60 days. Competitive markets can take 90–120 days for top-3 map pack positions." },
  { q: "Do you help get more reviews?", a: "Yes. We set up automated SMS + email review funnels, train your team on the ask, and respond to every review with an on-brand reply." },
  { q: "What if my profile gets suspended?", a: "We handle full reinstatement — appeal documentation, category corrections, and re-verification. Most suspensions are recovered in 3–14 days." },
  { q: "Can you manage multiple locations?", a: "Absolutely. We manage everything from single-location businesses to 500+ location franchises using bulk-verified GBP Manager." },
  { q: "Do I need a website for GBP to work?", a: "No, but a fast local landing page dramatically boosts rankings, click-through rate, and conversion. We can build one if needed." },
  { q: "What's included in the monthly report?", a: "Keyword rankings, map pack positions, call volume, direction requests, website clicks, photo views, review growth, and competitor benchmarks." },
];
function GBPPage() {
  return (
    <div className="pt-24">
      {/* 1. HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-brand-soft opacity-60" />
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-brand-blue/20 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-brand-cyan/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-widest text-brand-blue backdrop-blur">
              <MapPin className="h-3.5 w-3.5" /> Local SEO • Google Maps • GBP
            </div>
            <h1 className="font-display text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Google Business Profile{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">Optimization Services</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Rank in the local 3-pack, capture ready-to-buy customers, and turn Google Maps into your #1 lead source.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-bold text-white shadow-elegant transition hover:scale-105">
                Get Free GBP Audit <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="tel:+10000000000" className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-7 py-3.5 text-sm font-bold backdrop-blur transition hover:bg-white">
                <Phone className="h-4 w-4" /> Talk to Local SEO Expert
              </a>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl border border-border bg-white/60 p-4 backdrop-blur">
                  <div className="bg-gradient-brand bg-clip-text font-display text-3xl font-black text-transparent">{s.value}</div>
                  <div className="mt-1 text-xs font-medium text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      {/* 2. PROBLEMS */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-blue">The Problem</p>
          <h2 className="mt-3 font-display text-3xl font-black sm:text-4xl">Why your GBP isn't bringing in customers</h2>
          <p className="mt-4 text-muted-foreground">46% of all Google searches have local intent. If you're not in the map pack, you're invisible to your best customers.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {problems.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-white p-6 shadow-card">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-red-50 text-red-500">✕</div>
              <h3 className="mt-4 font-display text-lg font-bold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      {/* 3. SERVICES INCLUDED */}
      <section className="bg-gradient-to-b from-transparent via-brand-blue/5 to-transparent py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-blue">What's Included</p>
            <h2 className="mt-3 font-display text-3xl font-black sm:text-4xl">Everything you need to dominate local search</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="group rounded-2xl border border-border bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-elegant">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand text-white shadow-elegant transition group-hover:scale-110">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* 4. PROCESS */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-blue">Our Process</p>
          <h2 className="mt-3 font-display text-3xl font-black sm:text-4xl">A proven 5-step GBP growth system</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {process.map((p, i) => (
            <motion.div key={p.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="relative rounded-2xl border border-border bg-white p-6 shadow-card">
              <div className="bg-gradient-brand bg-clip-text font-display text-4xl font-black text-transparent">{p.step}</div>
              <h3 className="mt-2 font-display text-base font-bold">{p.title}</h3>
              <p className="mt-2 text-xs text-muted-foreground">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      {/* 5. RESULTS TABLE */}
      <section className="bg-gradient-brand py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-white/80">Real Results</p>
            <h2 className="mt-3 font-display text-3xl font-black sm:text-4xl">Before → After: What clients typically see in 90 days</h2>
          </div>
          <div className="mt-12 overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur">
            <div className="grid grid-cols-3 gap-4 border-b border-white/20 p-5 text-xs font-bold uppercase tracking-widest text-white/70">
              <div>Metric</div><div>Before</div><div>After 90 Days</div>
            </div>
            {results.map((r) => (
              <div key={r.metric} className="grid grid-cols-3 gap-4 border-b border-white/10 p-5 last:border-0">
                <div className="font-bold">{r.metric}</div>
                <div className="text-white/70">{r.before}</div>
                <div className="font-bold text-white">✓ {r.after}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 6. INDUSTRIES */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-blue">Industries We Serve</p>
          <h2 className="mt-3 font-display text-3xl font-black sm:text-4xl">Local businesses we've helped rank #1</h2>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {industries.map((ind) => (
            <div key={ind} className="rounded-full border border-border bg-white px-5 py-2.5 text-sm font-semibold shadow-card">
              {ind}
            </div>
          ))}
        </div>
      </section>
      {/* 7. WHY US */}
      <section className="bg-gradient-brand-soft py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-brand-blue">Why CIONA TECH</p>
              <h2 className="mt-3 font-display text-3xl font-black sm:text-4xl">Senior local SEO specialists — not junior VAs</h2>
              <p className="mt-4 text-muted-foreground">Every account is managed by a Google-certified local SEO expert with 5+ years of GBP experience. No cookie-cutter templates, no offshoring, no shortcuts.</p>
              <ul className="mt-6 space-y-3">
                {[
                  "Google-certified local SEO specialists",
                  "Dedicated account manager & Slack channel",
                  "Transparent monthly reporting dashboard",
                  "Month-to-month — no long contracts",
                  "White-hat only — Google policy compliant",
                  "100% ownership: you keep all assets",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" />
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Award, label: "Google Partner" },
                { icon: Users, label: "500+ Profiles Managed" },
                { icon: Star, label: "4.9★ Client Rating" },
                { icon: Clock, label: "48hr Response SLA" },
                { icon: TrendingUp, label: "3.2x Avg. Call Lift" },
                { icon: Globe, label: "Multi-Location Ready" },
              ].map((b) => (
                <div key={b.label} className="rounded-2xl border border-border bg-white p-5 text-center shadow-card">
                  <b.icon className="mx-auto h-6 w-6 text-brand-blue" />
                  <div className="mt-2 text-sm font-bold">{b.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* 8. PRICING */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-blue">Pricing Plans</p>
          <h2 className="mt-3 font-display text-3xl font-black sm:text-4xl">Simple, transparent GBP pricing</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { name: "Starter", price: "$299", tag: "Single location", features: ["Full profile audit + setup", "Category & keyword optimization", "2 GBP posts / month", "Monthly review responses", "Basic monthly report"] },
            { name: "Growth", price: "$599", tag: "Most popular", popular: true, features: ["Everything in Starter", "4 GBP posts / month", "Review generation funnel", "Q&A seeding & management", "Photo/video uploads", "Advanced ranking report"] },
            { name: "Scale", price: "$1,299", tag: "Multi-location / competitive", features: ["Everything in Growth", "Weekly GBP posts", "Local citation building (60+)", "Competitor tracking", "Suspension recovery included", "Dedicated account manager"] },
          ].map((p) => (
            <div key={p.name} className={`relative rounded-3xl border p-8 shadow-card ${p.popular ? "border-brand-blue bg-gradient-brand text-white shadow-elegant" : "border-border bg-white"}`}>
              {p.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1 text-xs font-bold text-brand-blue shadow-card">MOST POPULAR</div>}
              <div className={`text-xs font-bold uppercase tracking-widest ${p.popular ? "text-white/80" : "text-brand-blue"}`}>{p.tag}</div>
              <h3 className="mt-2 font-display text-2xl font-black">{p.name}</h3>
              <div className="mt-4 font-display text-4xl font-black">{p.price}<span className={`text-base font-medium ${p.popular ? "text-white/70" : "text-muted-foreground"}`}>/mo</span></div>
              <ul className="mt-6 space-y-2">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${p.popular ? "text-white" : "text-brand-blue"}`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition ${p.popular ? "bg-white text-brand-blue hover:scale-105" : "bg-gradient-brand text-white hover:scale-105"}`}>
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>
      {/* 9. FAQ */}
      <section className="bg-gradient-to-b from-transparent via-brand-blue/5 to-transparent py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-blue">FAQ</p>
            <h2 className="mt-3 font-display text-3xl font-black sm:text-4xl">Questions we hear every week</h2>
          </div>
          <div className="mt-12 space-y-4">
            {faqs.map((f, i) => (
              <motion.details key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="group rounded-2xl border border-border bg-white p-6 shadow-card">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-base font-bold">
                  <span className="flex items-center gap-3"><HelpCircle className="h-5 w-5 text-brand-blue" /> {f.q}</span>
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-brand-soft text-brand-blue transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-sm text-muted-foreground">{f.a}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>
      {/* 10. CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-brand p-10 text-center text-white shadow-elegant sm:p-16">
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="relative">
            <Sparkles className="mx-auto h-8 w-8" />
            <h2 className="mt-4 font-display text-3xl font-black sm:text-4xl lg:text-5xl">Ready to own the local map pack?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/80">Get a free 60-point Google Business Profile audit + a 90-day growth roadmap. No obligation.</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-brand-blue shadow-elegant transition hover:scale-105">
                Get Free Audit <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="tel:+10000000000" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-bold backdrop-blur transition hover:bg-white/20">
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <a href="mailto:hello@cionatech.com" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-bold backdrop-blur transition hover:bg-white/20">
                <Mail className="h-4 w-4" /> Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}