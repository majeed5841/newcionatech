import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal, Counter, TiltCard, ParallaxY } from "../components/site/motion";
import { Testimonials } from "../components/site/Testimonials";
import {
  Target, Eye, Heart, ArrowRight, Sparkles, Rocket, Shield, Users, Award, Globe2,
  Zap, TrendingUp, HandshakeIcon, Lightbulb, CheckCircle2, Building2, Code2, LineChart,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About CIONA TECH LLC — Digital Growth Partner in Houston, TX" },
      { name: "description", content: "Meet CIONA TECH LLC — a Houston-based digital agency of 100+ engineers, marketers & designers delivering measurable growth for 250+ clients across 20+ countries." },
      { property: "og:title", content: "About CIONA TECH LLC" },
      { property: "og:description", content: "Our story, mission, values, culture, and the team building digital success stories from Houston, Texas." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: Target, t: "Outcomes over output", d: "We measure our work by the revenue, pipeline and rankings we move — not the number of tasks we ship." },
  { icon: Shield, t: "Radical transparency", d: "Live dashboards, clear reporting and honest conversations. No hidden fees, no vanity metrics." },
  { icon: Sparkles, t: "Craft in everything", d: "From a landing page to a full CRM, every pixel and every line of code is built to last." },
  { icon: Rocket, t: "Bias for speed", d: "We ship in weeks — not quarters — and iterate based on real data, not opinions." },
  { icon: HandshakeIcon, t: "Client-first partnership", d: "You get a senior team that acts like an in-house extension of your business." },
  { icon: Lightbulb, t: "Learn, teach, improve", d: "Continuous learning is in our DNA — we bring new plays to your business every month." },
];

const journey = [
  { year: "2015", title: "The idea", d: "Two founders — one marketer, one engineer — built CIONA TECH around a simple belief: marketing and engineering should never be separate teams." },
  { year: "2017", title: "First 25 clients", d: "Local Houston brands trust us with SEO and small websites. We start ranking clients #1 on Google Maps within 90 days." },
  { year: "2019", title: "National expansion", d: "We open remote pods and start serving clients in 12 states. Full-stack web development becomes our second pillar." },
  { year: "2021", title: "AI & automation practice", d: "Launched a dedicated AI/automation studio — CRMs, chatbots, and workflow platforms for scaling businesses." },
  { year: "2023", title: "250+ clients", d: "Cross the 250-client milestone across 20+ countries and 15+ industries. Team grows past 100 specialists." },
  { year: "2026", title: "Today", d: "A senior, remote-first team delivering full-service growth: SEO, ads, web, apps, CRM, design and content — under one roof." },
];

const differentiators = [
  { icon: Zap, t: "Senior-only pods", d: "No juniors billed at senior rates. Every engagement is staffed with specialists who've shipped in your industry." },
  { icon: LineChart, t: "Data + design together", d: "Growth marketers sit next to designers and engineers, so ideas turn into revenue faster." },
  { icon: Globe2, t: "Global footprint, local roots", d: "Headquartered in Houston with teammates across the Americas, Europe and Asia — 24/5 coverage." },
  { icon: Code2, t: "Own our tech stack", d: "React, Next.js, TanStack, Node, Postgres, AWS — modern, maintainable, and yours to keep." },
];

const industries = [
  "Healthcare", "Legal & Professional Services", "Real Estate", "eCommerce",
  "SaaS & Startups", "Home Services", "Education", "Finance & FinTech",
  "Hospitality", "Manufacturing", "Non-Profit", "Local Retail",
];

const team = [
  { name: "Growth Strategy", role: "SEO, PPC, Analytics", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80" },
  { name: "Engineering", role: "Web, Mobile, CRM", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80" },
  { name: "Design & Brand", role: "UI/UX, Identity, Content", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80" },
  { name: "Client Success", role: "Account & Delivery", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80" },
];

const awards = [
  "Top Digital Marketing Agency — Clutch 2024",
  "Best Local SEO Firm — UpCity 2024",
  "Google Partner (Premier Tier)",
  "Meta Business Partner",
  "HubSpot Solutions Partner",
  "AWS Select Consulting Partner",
];

function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero pb-24 pt-24">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-96 w-[60rem] -translate-x-1/2 rounded-full bg-brand-blue/25 blur-3xl blob" />
        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-blue">About CIONA TECH LLC</p>
            <h1 className="mt-3 font-display text-4xl font-black sm:text-6xl">
              We build <span className="text-gradient">digital growth engines</span> for ambitious brands.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
              CIONA TECH LLC is a Houston-based digital agency that combines marketing, design and modern
              engineering to help 250+ companies win online — from local businesses to funded startups
              and enterprise brands across 20+ countries.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-elegant transition hover:scale-[1.03]">
                Work with us
              </Link>
              <Link to="/portfolio" className="rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold transition hover:border-brand-blue hover:text-brand-blue">
                See our work
              </Link>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { n: 10, s: "+", l: "Years" },
                { n: 250, s: "+", l: "Clients" },
                { n: 100, s: "+", l: "Specialists" },
                { n: 20, s: "+", l: "Countries" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl border border-border bg-white/70 p-5 text-center backdrop-blur">
                  <div className="font-display text-3xl font-black text-gradient">
                    <Counter to={s.n} suffix={s.s} />
                  </div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* STORY */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <ParallaxY offset={30}>
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&auto=format&fit=crop&q=80"
                alt="CIONA TECH team collaborating in the Houston office"
                className="rounded-3xl border border-border shadow-elegant"
              />
            </ParallaxY>
          </Reveal>
          <Reveal delay={1}>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-blue">Our story</p>
            <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">A decade of shipping growth.</h2>
            <p className="mt-4 text-muted-foreground">
              CIONA TECH LLC was founded on a simple idea: businesses deserve a partner who
              understands both marketing and modern engineering. Since day one we've paired
              performance strategists with senior engineers so ideas ship fast — and
              actually move revenue.
            </p>
            <p className="mt-4 text-muted-foreground">
              Today, our 100+ specialists serve clients in 20+ countries across 15+ industries —
              from funded startups to enterprise brands, and hundreds of local businesses right here
              in Texas. We're proud of the work, prouder of the partnerships.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { n: 92, s: "%", l: "SEO win rate" },
                { n: 6, s: "×", l: "Avg. ROAS" },
                { n: 4.9, s: "/5", l: "Client rating" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl border border-border bg-card p-4 text-center shadow-card">
                  <div className="font-display text-2xl font-black text-gradient">
                    <Counter to={s.n} suffix={s.s} />
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* MISSION / VISION / VALUES cards */}
      <section className="bg-hero py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-blue">What drives us</p>
              <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Mission, vision, values.</h2>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { icon: Target, t: "Mission", d: "Empower every ambitious business with the tools, strategy and team to win online — measurably, transparently, and sustainably." },
              { icon: Eye, t: "Vision", d: "Be the world's most trusted growth partner — where world-class marketing meets modern engineering under one roof." },
              { icon: Heart, t: "Values", d: "Client outcomes first. Radical transparency. Craftsmanship in everything we ship. People over process." },
            ].map((v, i) => (
              <Reveal key={v.t} delay={i}>
                <TiltCard className="h-full rounded-3xl border border-border bg-card p-8 shadow-card">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-brand text-white shadow-glow">
                    <v.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold">{v.t}</h3>
                  <p className="mt-3 text-muted-foreground">{v.d}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES GRID */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-blue">Our principles</p>
            <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Six values we live by, every day.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              These aren't posters on a wall — they're the operating system for how we hire,
              plan, ship, and treat every client relationship.
            </p>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.t} delay={i % 3}>
              <div className="h-full rounded-3xl border border-border bg-card p-7 shadow-card transition hover:-translate-y-1 hover:shadow-elegant">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-brand-soft text-brand-blue">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold">{v.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* JOURNEY TIMELINE */}
      <section className="bg-ink py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-blue">Our journey</p>
              <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">From two founders to a global team.</h2>
            </div>
          </Reveal>
          <div className="relative mt-16 mx-auto max-w-4xl">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-white/15 md:left-1/2" />
            <div className="space-y-10">
              {journey.map((j, i) => (
                <Reveal key={j.year} delay={i % 3}>
                  <div className={`relative flex flex-col gap-4 md:flex-row md:items-center ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className="md:w-1/2 md:px-10">
                      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                        <div className="text-sm font-black text-brand-teal">{j.year}</div>
                        <h3 className="mt-1 font-display text-xl font-bold">{j.title}</h3>
                        <p className="mt-2 text-sm text-white/70">{j.d}</p>
                      </div>
                    </div>
                    <div className="absolute left-4 h-4 w-4 -translate-x-1/2 rounded-full bg-gradient-brand shadow-glow md:left-1/2" />
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY US / DIFFERENTIATORS */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-blue">Why teams choose us</p>
            <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">A different kind of agency partner.</h2>
            <p className="mt-4 text-muted-foreground">
              Most agencies bolt marketing onto engineering — or vice versa. We were built the
              other way around. Every engagement is staffed by a senior pod: strategist,
              designer, engineer and account lead, working as one team from day one.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Senior specialists, no juniors billed as seniors",
                "Weekly demos and live dashboards",
                "Fixed sprint pricing — no scope-creep surprises",
                "You own everything we build",
                "24/5 coverage across three continents",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {differentiators.map((d, i) => (
              <Reveal key={d.t} delay={i}>
                <TiltCard className="h-full rounded-3xl border border-border bg-card p-6 shadow-card">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand text-white shadow-glow">
                    <d.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold">{d.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{d.d}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-hero py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-blue">The team</p>
              <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Four pods. One mission.</h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                We organize around outcomes, not departments. Every client gets a cross-functional
                pod drawn from our four core disciplines.
              </p>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((t, i) => (
              <Reveal key={t.name} delay={i}>
                <TiltCard className="group overflow-hidden rounded-3xl border border-border bg-white shadow-card">
                  <div className="relative h-52 overflow-hidden">
                    <img src={t.img} alt={t.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-bold">{t.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-blue">Industries we serve</p>
            <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Trusted across 15+ verticals.</h2>
          </div>
        </Reveal>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {industries.map((i) => (
            <span key={i} className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium shadow-card transition hover:border-brand-blue hover:text-brand-blue">
              {i}
            </span>
          ))}
        </div>
      </section>

      {/* AWARDS */}
      <section className="bg-hero py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-blue">Awards & partners</p>
              <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Recognized by the industry.</h2>
            </div>
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {awards.map((a, i) => (
              <Reveal key={a} delay={i % 3}>
                <div className="flex items-center gap-3 rounded-2xl border border-border bg-white p-5 shadow-card">
                  <Award className="h-6 w-6 shrink-0 text-brand-blue" />
                  <span className="text-sm font-semibold">{a}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Testimonials title="Loved by teams like yours" subtitle="A few kind words from partners we've worked with." />

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-brand p-10 text-center text-white shadow-elegant sm:p-14">
            <Building2 className="mx-auto h-10 w-10 opacity-80" />
            <h2 className="mt-4 font-display text-4xl font-black sm:text-5xl">Let's build something great together.</h2>
            <p className="mx-auto mt-4 max-w-xl text-white/85">
              Book a free 30-minute strategy call with a senior consultant this week. No pitch — just an honest conversation about your growth.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-brand-blue shadow-card transition hover:scale-[1.03]">
                Book a free call <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10">
                Explore our work
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
