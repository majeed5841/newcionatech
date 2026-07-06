import { Link } from "@tanstack/react-router";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowRight, CheckCircle2, XCircle, Sparkles, Rocket, ShieldCheck, TrendingUp,
  Users, Award, Zap, Target, Star, Phone, Calendar, ChevronRight, Quote,
  Building2, Stethoscope, HardHat, Scale, Utensils, Car, GraduationCap, Landmark, Cpu, ShoppingBag,
  HeartPulse, Factory, Home, Clock, MessageCircle, PlayCircle,
} from "lucide-react";
import { useState } from "react";
import { Reveal, TiltCard, Counter } from "./motion";
import { Testimonials } from "./Testimonials";
import type { ServiceContent } from "../../data/services";
import { services } from "../../data/services";
import { getLongForm } from "../../data/services-longform";
import { projects } from "../../data/portfolio";

const industryIcons: Record<string, any> = {
  Healthcare: HeartPulse, Construction: HardHat, "Real Estate": Home, "Law Firms": Scale,
  Restaurants: Utensils, Retail: ShoppingBag, Education: GraduationCap, Finance: Landmark,
  Technology: Cpu, Automotive: Car, Manufacturing: Factory, "Dental Clinics": Stethoscope,
  Startups: Rocket, "E-Commerce": ShoppingBag,
};

const whyUsIcons = [Users, Award, Zap, Target, ShieldCheck, TrendingUp, Sparkles, Rocket];

const tocSections = [
  { id: "overview", label: "Overview" },
  { id: "what", label: "What we do" },
  { id: "benefits", label: "Benefits" },
  { id: "process", label: "Process" },
  { id: "compare", label: "Why us" },
  { id: "results", label: "Results" },
  { id: "faq", label: "FAQ" },
];

export function ServicePage({ service }: { service: ServiceContent }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const Icon = service.icon;
  const featured = projects.slice(0, 6);
  const longForm = getLongForm(service.slug);
  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 6);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });
  const allFaqs = [...service.faqs, ...(longForm?.extraFaqs ?? [])];

  return (
    <>
      {/* Reading progress bar */}
      <motion.div
        style={{ scaleX: progress, transformOrigin: "0% 50%" }}
        className="fixed inset-x-0 top-0 z-50 h-1 bg-gradient-brand"
        aria-hidden
      />

      {/* Breadcrumb + in-page nav */}
      <nav aria-label="Breadcrumb" className="sticky top-0 z-40 border-b border-border bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <ol className="flex items-center gap-2 text-xs text-muted-foreground">
            <li><Link to="/" className="hover:text-brand-blue">Home</Link></li>
            <li aria-hidden><ChevronRight className="h-3 w-3" /></li>
            <li><Link to="/services" className="hover:text-brand-blue">Services</Link></li>
            <li aria-hidden><ChevronRight className="h-3 w-3" /></li>
            <li className="font-semibold text-foreground">{service.name}</li>
          </ol>
          <div className="hidden gap-1 text-xs md:flex">
            {tocSections.map((t) => (
              <a key={t.id} href={`#${t.id}`} className="rounded-full px-3 py-1.5 font-medium text-muted-foreground transition hover:bg-secondary hover:text-foreground">
                {t.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* 1. HERO */}
      <section id="overview" className="relative overflow-hidden bg-hero pb-24 pt-16">
        {/* Mesh gradient background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/4 h-[32rem] w-[32rem] rounded-full bg-brand-green/15 blur-3xl blob" />
          <div className="absolute -bottom-32 right-0 h-[36rem] w-[36rem] rounded-full bg-brand-blue/20 blur-3xl blob" style={{ animationDelay: "-4s" }} />
          <div className="absolute top-1/3 right-1/3 h-64 w-64 rounded-full bg-brand-teal/15 blur-3xl blob" style={{ animationDelay: "-2s" }} />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-4 py-1.5 text-xs font-semibold text-brand-blue backdrop-blur">
                <Sparkles className="h-3.5 w-3.5" /> {service.hero.eyebrow}
              </div>
              <h1 className="mt-5 font-display text-4xl font-black leading-[1.05] sm:text-5xl lg:text-6xl">
                {service.hero.headline} <span className="text-gradient">{service.hero.highlight}</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground">{service.hero.subheadline}</p>

              {/* Trust chips */}
              <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                <div className="flex items-center gap-1 text-highlight">
                  {Array.from({ length: 5 }).map((_, i) => (<Star key={i} className="h-3.5 w-3.5 fill-current" />))}
                </div>
                <span className="font-semibold text-foreground">4.9/5</span>
                <span aria-hidden>•</span>
                <span>250+ clients</span>
                <span aria-hidden>•</span>
                <span>10+ years</span>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-white shadow-elegant transition hover:scale-[1.03]">
                  Get Free {service.hero.eyebrow.split(" ")[0]} Audit
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
                <a href="tel:+12548700892" className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3.5 text-sm font-semibold text-foreground transition hover:border-brand-blue hover:text-brand-blue">
                  <Phone className="h-4 w-4" /> +1 (254) 870-0892
                </a>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {service.hero.stats.map((s, i) => (
                  <Reveal key={s.label} delay={i}>
                    <div className="rounded-2xl border border-border bg-white/70 p-4 backdrop-blur transition hover:-translate-y-1 hover:shadow-card">
                      <p className="font-display text-2xl font-black text-gradient">{s.value}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={1}>
            <TiltCard className="relative mx-auto max-w-lg">
              <div className="relative rounded-[2rem] border border-border bg-white p-8 shadow-elegant">
                <div className="flex items-center justify-between">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-brand text-white shadow-glow">
                    <Icon className="h-7 w-7" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-success/10 px-3 py-1 text-xs font-semibold text-success">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-success" /> Live
                  </span>
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold">{service.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{service.hero.tagline}</p>
                <div className="mt-6 space-y-3">
                  {service.what.points.slice(0, 4).map((p) => (
                    <div key={p.title} className="flex items-start gap-3 rounded-xl bg-gradient-brand-soft p-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
                      <div>
                        <p className="text-sm font-semibold">{p.title}</p>
                        <p className="text-xs text-muted-foreground">{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -12, 0] }} transition={{ duration: 4, repeat: Infinity }}
                className="absolute -right-4 -top-4 rounded-2xl border border-border bg-white p-3 shadow-card"
              >
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-brand-green" />
                  <span className="text-xs font-semibold">+287% growth</span>
                </div>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 rounded-2xl border border-border bg-white p-3 shadow-card"
              >
                <div className="flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5 text-brand-blue" />
                  <span className="text-xs font-semibold">Kickoff in 7 days</span>
                </div>
              </motion.div>
            </TiltCard>
          </Reveal>
        </div>
      </section>

      {/* LOGO / TRUST STRIP */}
      <section className="border-y border-border bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Trusted by 250+ brands across 20+ countries
          </p>
          <div className="mt-6 grid grid-cols-2 gap-6 opacity-70 sm:grid-cols-3 md:grid-cols-6">
            {["EZ Notary", "Dream Homes", "Ablaze Tree", "Cozy Place", "South Jersey", "Coastal Cafe"].map((n) => (
              <div key={n} className="text-center font-display text-sm font-bold tracking-tight text-muted-foreground">
                {n}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 1b. LONG-FORM OVERVIEW */}
      {longForm && (
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-border shadow-elegant">
              <img
                src={longForm.heroImage}
                alt={`${service.name} — CIONA TECH LLC`}
                loading="lazy"
                className="h-[280px] w-full object-cover sm:h-[420px]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-ink/70 via-ink/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
                <p className="max-w-2xl font-display text-2xl font-black text-white drop-shadow sm:text-3xl">
                  {service.short}
                </p>
              </div>
            </div>
          </Reveal>
          <div className="mt-16 grid gap-10 lg:grid-cols-3">
            {longForm.overview.map((sec, i) => (
              <Reveal key={sec.heading} delay={i % 3}>
                <article className="h-full rounded-3xl border border-border bg-white p-8 shadow-card transition hover:-translate-y-1 hover:shadow-elegant">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-brand-soft font-display text-xs font-black text-brand-blue">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-4 font-display text-xl font-black">{sec.heading}</h2>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{sec.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* 2. WHAT WE DO */}
      <section id="what" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-blue">What we do</p>
            <h2 className="mt-3 font-display text-3xl font-black sm:text-4xl">{service.what.title}</h2>
            <p className="mt-5 text-lg text-muted-foreground">{service.what.intro}</p>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue">
              Talk to a specialist <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {service.what.points.map((p, i) => (
              <Reveal key={p.title} delay={i % 2}>
                <div className="h-full rounded-2xl border border-border bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-elegant">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-brand-soft text-brand-blue">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY IT MATTERS */}
      <section className="bg-gradient-brand-soft py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-blue">Why it matters</p>
              <h2 className="mt-3 font-display text-3xl font-black sm:text-4xl">Real outcomes for real businesses.</h2>
              <p className="mt-4 text-muted-foreground">
                {service.name} isn't a nice-to-have — it's how modern businesses win. Here's what changes when it's done right.
              </p>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.matters.map((m, i) => (
              <Reveal key={m} delay={i % 3}>
                <div className="glass-strong flex items-center gap-4 rounded-2xl p-5 transition hover:-translate-y-1 hover:shadow-elegant">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-brand text-white shadow-glow">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <p className="font-display font-bold">{m}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BENEFITS */}
      <section id="benefits" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-blue">Benefits</p>
            <h2 className="mt-3 font-display text-3xl font-black sm:text-4xl">What you get with CIONA TECH.</h2>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {service.benefits.map((b, i) => (
            <Reveal key={b.title} delay={i % 4}>
              <TiltCard className="group h-full rounded-3xl border border-border bg-white p-6 shadow-card transition hover:shadow-elegant">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-brand text-white shadow-glow">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 5. WHY US */}
      <section id="compare" className="relative overflow-hidden bg-hero py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-blue">Why CIONA TECH LLC</p>
              <h2 className="mt-3 font-display text-3xl font-black sm:text-4xl">Trusted by ambitious brands. Built for measurable growth.</h2>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.whyUs.map((w, i) => {
              const IconEl = whyUsIcons[i % whyUsIcons.length];
              return (
                <Reveal key={w} delay={i % 3}>
                  <div className="group flex items-center gap-4 rounded-2xl border border-border bg-white p-5 shadow-card transition hover:-translate-y-1 hover:shadow-elegant">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-brand-soft text-brand-blue transition group-hover:scale-110 group-hover:bg-gradient-brand group-hover:text-white">
                      <IconEl className="h-5 w-5" />
                    </div>
                    <p className="font-display text-sm font-bold">{w}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. PROCESS TIMELINE */}
      <section id="process" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-blue">Our Process</p>
            <h2 className="mt-3 font-display text-3xl font-black sm:text-4xl">A proven, transparent workflow.</h2>
            <p className="mt-4 text-muted-foreground">Weekly demos, live dashboards, zero surprises.</p>
          </div>
        </Reveal>
        <div className="relative mt-14">
          <div className="pointer-events-none absolute left-4 top-2 hidden h-full w-0.5 bg-gradient-brand md:left-1/2 md:block md:-translate-x-1/2" />
          <div className="space-y-8">
            {service.process.map((p, i) => (
              <Reveal key={p.title} delay={i % 2}>
                <div className={`relative flex flex-col gap-4 md:flex-row md:items-center ${i % 2 === 0 ? "md:justify-start" : "md:flex-row-reverse"}`}>
                  <div className="md:w-1/2 md:px-8">
                    <div className={`rounded-2xl border border-border bg-white p-6 shadow-card transition hover:shadow-elegant ${i % 2 === 0 ? "md:text-right" : ""}`}>
                      <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">Step {i + 1}</p>
                      <h3 className="mt-2 font-display text-xl font-bold">{p.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 top-6 grid h-9 w-9 place-items-center rounded-full bg-gradient-brand font-display text-xs font-black text-white shadow-glow md:left-1/2 md:-translate-x-1/2">
                    {i + 1}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. COMPARISON */}
      <section className="bg-gradient-brand-soft py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-blue">Why we're different</p>
              <h2 className="mt-3 font-display text-3xl font-black sm:text-4xl">Traditional agency <span className="text-muted-foreground">vs</span> CIONA TECH LLC</h2>
            </div>
          </Reveal>
          <div className="mt-14 overflow-hidden rounded-3xl border border-border bg-white shadow-elegant">
            <div className="grid grid-cols-2 border-b border-border bg-gradient-brand-soft">
              <div className="p-5 text-center">
                <p className="font-display text-sm font-bold text-muted-foreground">Traditional Agency</p>
              </div>
              <div className="p-5 text-center">
                <p className="font-display text-sm font-bold text-gradient">CIONA TECH LLC</p>
              </div>
            </div>
            {service.compare.map((c, i) => (
              <Reveal key={c.bad} delay={i % 2}>
                <div className={`grid grid-cols-2 transition ${i % 2 ? "bg-secondary/30" : ""}`}>
                  <div className="flex items-center gap-3 p-5">
                    <XCircle className="h-5 w-5 shrink-0 text-destructive" />
                    <span className="text-sm text-muted-foreground line-through">{c.bad}</span>
                  </div>
                  <div className="flex items-center gap-3 border-l border-border p-5">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-success" />
                    <span className="text-sm font-semibold">{c.good}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. DELIVERABLES / WHAT'S INCLUDED */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-blue">What's included</p>
            <h2 className="mt-3 font-display text-3xl font-black sm:text-4xl">Every engagement ships with:</h2>
            <p className="mt-5 text-muted-foreground">
              Full transparency across scope, timeline and deliverables. You always know what's shipping this week — and what's next.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { icon: Clock, l: "Kickoff", v: "7 days" },
                { icon: ShieldCheck, l: "SLA", v: "24/5" },
                { icon: Award, l: "Rating", v: "4.9/5" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl border border-border bg-card p-4 text-center shadow-card">
                  <s.icon className="mx-auto h-5 w-5 text-brand-blue" />
                  <div className="mt-2 font-display text-lg font-black">{s.v}</div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="rounded-3xl border border-border bg-white p-8 shadow-elegant">
              <ul className="space-y-3">
                {[
                  "Dedicated senior specialist assigned to your account",
                  "Custom strategy roadmap tailored to your goals",
                  "Weekly reporting with live analytics dashboard",
                  "Bi-weekly strategy call + async Slack channel",
                  "Full source files, credentials & documentation",
                  "Onboarding, training & handover included",
                  "Month-to-month engagement — no lock-in",
                  "100% ownership of everything we produce",
                ].map((d) => (
                  <li key={d} className="flex items-start gap-3 rounded-xl bg-gradient-brand-soft/60 p-3 text-sm">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
              <Link to="/pricing" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-3 text-sm font-semibold text-white shadow-elegant transition hover:scale-[1.02]">
                See pricing plans <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 9. INDUSTRIES */}
      <section className="bg-gradient-brand-soft py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-blue">Industries</p>
              <h2 className="mt-3 font-display text-3xl font-black sm:text-4xl">Serving businesses across every sector.</h2>
            </div>
          </Reveal>
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {service.industries.map((ind, i) => {
              const IconEl = industryIcons[ind] || Building2;
              return (
                <Reveal key={ind} delay={i % 4}>
                  <motion.div whileHover={{ y: -4 }} className="group rounded-2xl border border-border bg-white p-5 text-center shadow-card transition hover:shadow-elegant">
                    <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand-soft text-brand-blue transition group-hover:bg-gradient-brand group-hover:text-white">
                      <IconEl className="h-6 w-6" />
                    </div>
                    <p className="mt-3 font-display text-sm font-bold">{ind}</p>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. TOOLS */}
      <section className="bg-hero py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-blue">Technologies & Tools</p>
              <h2 className="mt-3 font-display text-3xl font-black sm:text-4xl">Best-in-class tools. Certified pros.</h2>
              <p className="mt-4 text-muted-foreground">The same stack top agencies rely on — set up, tuned and owned by us.</p>
            </div>
          </Reveal>
          <div className="mt-14 flex flex-wrap justify-center gap-3">
            {service.tools.map((t, i) => (
              <Reveal key={t} delay={i % 5}>
                <div className="glass-strong rounded-full px-5 py-2.5 text-sm font-semibold text-foreground shadow-card transition hover:-translate-y-0.5 hover:shadow-elegant">
                  {t}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 11. PORTFOLIO PREVIEW */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-blue">Recent Work</p>
              <h2 className="mt-3 font-display text-3xl font-black sm:text-4xl">Case studies you can measure.</h2>
            </div>
            <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-brand-blue hover:text-brand-blue">
              View all work <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i % 3}>
              <TiltCard className="group h-full overflow-hidden rounded-3xl border border-border bg-white shadow-card transition hover:shadow-elegant">
                <div className="relative h-44 overflow-hidden">
                  <img src={p.image} alt={p.client} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${p.gradient} opacity-60 mix-blend-multiply`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                  <p className="absolute bottom-4 left-4 right-4 font-display text-xl font-black text-white drop-shadow">{p.client}</p>
                  <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-blue backdrop-blur">{p.category}</span>
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">{p.industry}</p>
                  <h3 className="mt-2 font-display text-lg font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {p.results.slice(0, 2).map((r) => (
                      <div key={r.label} className="rounded-xl bg-gradient-brand-soft p-3">
                        <p className="font-display text-lg font-black text-gradient">{r.value}</p>
                        <p className="text-[10px] font-semibold uppercase text-muted-foreground">{r.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 12. TESTIMONIALS */}
      <Testimonials />

      {/* 13. RESULTS DASHBOARD */}
      <section id="results" className="bg-gradient-brand py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl font-black sm:text-4xl">Results that speak louder than pitch decks.</h2>
              <p className="mt-4 text-white/80">Across every service line, our numbers tell the story.</p>
            </div>
          </Reveal>
          <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {[
              { to: 250, suffix: "+", label: "Happy Clients" },
              { to: 350, suffix: "+", label: "Projects" },
              { to: 92, suffix: "%", label: "Success Rate" },
              { to: 99, suffix: "%", label: "Satisfaction" },
              { to: 100, suffix: "+", label: "Experts" },
            ].map((s) => (
              <Reveal key={s.label}>
                <div className="rounded-3xl border border-white/15 bg-white/5 p-6 text-center backdrop-blur transition hover:-translate-y-1 hover:bg-white/10">
                  <p className="font-display text-4xl font-black">
                    <Counter to={s.to} suffix={s.suffix} />
                  </p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-white/70">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 13b. MARKET CONTEXT */}
      {longForm && (
        <section className="bg-ink py-20 text-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-5 lg:items-center lg:px-8">
            <Reveal className="lg:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-teal">Market context</p>
              <h2 className="mt-3 font-display text-3xl font-black sm:text-4xl">{longForm.marketContext.heading}</h2>
            </Reveal>
            <Reveal delay={1} className="lg:col-span-3">
              <p className="text-base leading-relaxed text-white/80">{longForm.marketContext.body}</p>
            </Reveal>
          </div>
        </section>
      )}

      {/* 13c. DEEP DIVE PILLARS */}
      {longForm && (
        <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-blue">Inside the program</p>
              <h2 className="mt-3 font-display text-3xl font-black sm:text-4xl">The pillars behind every engagement.</h2>
              <p className="mt-4 text-muted-foreground">A closer look at how we ship results across each part of the discipline.</p>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {longForm.deepDive.map((sec, i) => (
              <Reveal key={sec.heading} delay={i % 2}>
                <article className="h-full rounded-3xl border border-border bg-white p-8 shadow-card transition hover:-translate-y-1 hover:shadow-elegant">
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand font-display text-sm font-black text-white shadow-glow">{i + 1}</span>
                    <h3 className="font-display text-lg font-black">{sec.heading}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{sec.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* 13d. INDUSTRY NOTES + CASE SNIPPET */}
      {longForm && (
        <section className="bg-gradient-brand-soft py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-blue">Industry angles</p>
              <h2 className="mt-3 font-display text-3xl font-black sm:text-4xl">How this plays out per industry.</h2>
              <ul className="mt-8 space-y-4">
                {longForm.industryNotes.map((n) => (
                  <li key={n.industry} className="rounded-2xl border border-border bg-white p-5 shadow-card">
                    <p className="font-display text-sm font-black text-brand-blue">{n.industry}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{n.note}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={1}>
              <div className="relative overflow-hidden rounded-3xl border border-border bg-white p-8 shadow-elegant">
                <Quote className="absolute right-6 top-6 h-16 w-16 text-brand-blue/10" />
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">Case snippet</p>
                <h3 className="mt-3 font-display text-2xl font-black">{longForm.caseSnippet.client}</h3>
                <div className="mt-6 space-y-4 text-sm">
                  <div>
                    <p className="text-xs font-semibold uppercase text-muted-foreground">Challenge</p>
                    <p className="mt-1 text-foreground">{longForm.caseSnippet.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase text-muted-foreground">Solution</p>
                    <p className="mt-1 text-foreground">{longForm.caseSnippet.solution}</p>
                  </div>
                  <div className="rounded-2xl bg-gradient-brand p-4 text-white">
                    <p className="text-xs font-semibold uppercase tracking-widest opacity-80">Result</p>
                    <p className="mt-1 font-display font-bold">{longForm.caseSnippet.result}</p>
                  </div>
                </div>
                <Link to="/portfolio" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue">
                  See full portfolio <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* 13e. PRICING HINT */}
      {longForm && (
        <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-blue">Packages</p>
              <h2 className="mt-3 font-display text-3xl font-black sm:text-4xl">Flexible plans for every stage.</h2>
              <p className="mt-4 text-muted-foreground">Every engagement is scoped and priced transparently after a free consultation.</p>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {longForm.pricingHint.map((p, i) => (
              <Reveal key={p.plan} delay={i % 3}>
                <TiltCard className="flex h-full flex-col rounded-3xl border border-border bg-white p-8 shadow-card transition hover:shadow-elegant">
                  <p className="font-display text-lg font-black">{p.plan}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-brand-blue">{p.best}</p>
                  <ul className="mt-6 flex-1 space-y-2 text-sm">
                    {p.includes.map((inc) => (
                      <li key={inc} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/pricing" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue">
                    See pricing <ArrowRight className="h-4 w-4" />
                  </Link>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* 14. FAQ */}
      <section id="faq" className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-blue">FAQ</p>
            <h2 className="mt-3 font-display text-3xl font-black sm:text-4xl">Frequently asked questions.</h2>
            <p className="mt-4 text-muted-foreground">Everything you need to know before we start.</p>
          </div>
        </Reveal>
        <div className="mt-12 space-y-3">
          {allFaqs.map((f, i) => (
            <Reveal key={f.q} delay={i % 3}>
              <div className={`overflow-hidden rounded-2xl border bg-white shadow-card transition ${openFaq === i ? "border-brand-blue/40" : "border-border"}`}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-display font-bold">{f.q}</span>
                  <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-brand-soft text-brand-blue transition ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === i ? "auto" : 0, opacity: openFaq === i ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                </motion.div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 15. EXPLORE MORE SERVICES */}
      <section className="bg-hero py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-blue">Explore more services</p>
              <h2 className="mt-3 font-display text-3xl font-black sm:text-4xl">Everything under one roof.</h2>
              <p className="mt-4 text-muted-foreground">One accountable partner across marketing, engineering, and creative — so your growth doesn't stall between vendors.</p>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.map((s, i) => {
              const SIcon = s.icon;
              return (
                <Reveal key={s.slug} delay={i % 3}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="group flex h-full flex-col rounded-3xl border border-border bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-elegant"
                  >
                    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-brand text-white shadow-glow">
                      <SIcon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-black">{s.name}</h3>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.short}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue">
                      Explore <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 16. FINAL CTA */}
      <section className="relative mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-brand p-10 text-white shadow-elegant sm:p-14">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl blob" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl blob" style={{ animationDelay: "-4s" }} />
          <div className="relative mx-auto max-w-3xl text-center">
            <PlayCircle className="mx-auto h-12 w-12 opacity-80" />
            <h2 className="mt-4 font-display text-4xl font-black sm:text-5xl">Ready to grow your business?</h2>
            <p className="mt-4 text-lg text-white/85">
              Book a free 30-minute {service.hero.eyebrow} strategy call with a senior consultant this week. No pitch — just an honest conversation about your growth.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-brand-blue shadow-card transition hover:scale-[1.03]">
                Get Free Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20">
                <Calendar className="h-4 w-4" /> Book Free Consultation
              </Link>
              <a href="tel:+12548700892" className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20">
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <a href="https://wa.me/12548700892" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
