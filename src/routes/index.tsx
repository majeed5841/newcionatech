import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, Search, Megaphone, Code2, MousePointerClick, Palette, Database,
  Smartphone, PenTool, Mail, LayoutDashboard, ShoppingCart, Bot, Sparkles,
  Rocket, ShieldCheck, HeartHandshake, Clock, LineChart, Users, Award,
  CheckCircle2, Star, Building2, Stethoscope, HardHat, Scale, Utensils, Car,
  GraduationCap, Landmark, Cpu, ChevronRight, TrendingUp, MapPin, BarChart3,
  Zap, Target, Globe, Play,
} from "lucide-react";
import { Reveal, Counter, TiltCard } from "../components/site/motion";
import { Testimonials } from "../components/site/Testimonials";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CIONA TECH LLC — Turning Ideas Into Digital Impact" },
      {
        name: "description",
        content:
          "CIONA TECH LLC is a Houston-based digital marketing & software development agency. SEO, Google Ads, Google Business Profile, web, apps, CRM, and AI solutions.",
      },
      { property: "og:title", content: "CIONA TECH LLC — Your Digital Growth Partner" },
      {
        property: "og:description",
        content: "SEO, Google Ads, Google Business Profile, Web, Apps, CRM & AI. Grow faster with Ciona Tech.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "CIONA TECH LLC",
          url: "/",
          telephone: "+1-254-870-0892",
          email: "info@cionatech.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Houston",
            addressRegion: "TX",
            addressCountry: "US",
          },
          slogan: "Turning Ideas Into Digital Impact",
          sameAs: [],
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <About />
      <Stats />
      <Services />
      <SeoBanner />
      <WhyUs />
      <Process />
      <Portfolio />
      <Industries />
      <Pricing />
      <Testimonials />
      <TechStack />
      <FAQ />
      <FinalCTA />
    </>
  );
}

/* ================== HERO ================== */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero pt-16 pb-24">
      {/* subtle grid */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      {/* animated blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-brand-green/25 blur-3xl blob" />
      <div className="pointer-events-none absolute top-40 right-0 h-96 w-96 rounded-full bg-brand-blue/25 blur-3xl blob" style={{ animationDelay: "-4s" }} />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-brand-teal/25 blur-3xl blob" style={{ animationDelay: "-8s" }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top ribbon */}
        <Reveal>
          <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-border bg-white/70 px-4 py-1.5 text-xs font-semibold text-foreground/80 shadow-card backdrop-blur">
            <span className="grid h-5 w-5 place-items-center rounded-full bg-gradient-brand">
              <Sparkles className="h-3 w-3 text-white" />
            </span>
            Welcome to CIONA TECH LLC — Your Digital Growth Partner
          </div>
        </Reveal>

        <div className="mt-8 text-center">
          <Reveal delay={1}>
            <h1 className="mx-auto max-w-5xl font-display text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Turning Ideas Into <br className="hidden sm:block" />
              <span className="shimmer-text">Digital Impact.</span>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              We help ambitious businesses grow through innovative digital
              marketing, SEO, Google Business Profile optimization, custom
              software, mobile apps, branding, CRM solutions, and
              high-performing websites that convert visitors into customers.
            </p>
          </Reveal>

          <Reveal delay={3}>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-white shadow-elegant transition hover:scale-[1.03]">
                Get Free Quote <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-6 py-3.5 text-sm font-semibold backdrop-blur transition hover:bg-white">
                Schedule Free Consultation
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-6 py-3.5 text-sm font-semibold backdrop-blur transition hover:bg-white">
                Explore Services
              </Link>
            </div>
          </Reveal>

          <Reveal delay={4}>
            <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm">
              <div className="flex items-center gap-1.5">
                <div className="flex text-highlight">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
                <span className="font-semibold">Trusted by Growing Businesses</span>
              </div>
              <span className="text-muted-foreground">•</span>
              <span><strong>250+</strong> Happy Clients</span>
              <span className="text-muted-foreground">•</span>
              <span><strong>92%</strong> SEO Success Rate</span>
              <span className="text-muted-foreground">•</span>
              <span><strong>100+</strong> Experts</span>
              <span className="text-muted-foreground">•</span>
              <span><strong>10+</strong> Years</span>
            </div>
          </Reveal>
        </div>

        {/* Interactive dashboard collage */}
        <div className="mt-16">
          <HeroDashboard />
        </div>

        {/* Scroll indicator */}
        <Reveal delay={2}>
          <div className="mt-14 flex flex-col items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
            <span>Scroll to explore</span>
            <div className="grid h-8 w-5 place-items-start rounded-full border-2 border-border p-1">
              <span className="block h-1.5 w-1 rounded-full bg-brand-blue bounce-down" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function HeroDashboard() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-1, 1], [4, -4]), { stiffness: 90, damping: 20 });
  const ry = useSpring(useTransform(mx, [-1, 1], [-4, 4]), { stiffness: 90, damping: 20 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 2);
    my.set(((e.clientY - r.top) / r.height - 0.5) * 2);
  };
  const onLeave = () => { mx.set(0); my.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ perspective: 1600 }}
      className="relative mx-auto max-w-6xl"
    >
      <motion.div
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        className="relative"
      >
        {/* Main analytics dashboard card */}
        <div className="relative overflow-hidden rounded-3xl border border-border bg-white shadow-elegant">
          <div className="flex items-center gap-2 border-b border-border bg-gradient-brand-soft px-5 py-3">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
            <div className="ml-3 flex items-center gap-2 text-xs font-medium text-foreground/70">
              <BarChart3 className="h-3.5 w-3.5" /> analytics.cionatech.com
            </div>
          </div>
          <div className="grid gap-4 p-5 sm:grid-cols-3">
            <MetricCard label="Organic Traffic" value="+312%" tone="green" icon={TrendingUp} />
            <MetricCard label="Qualified Leads" value="1,284" tone="blue" icon={Users} />
            <MetricCard label="Conversion Rate" value="8.7%" tone="teal" icon={Target} />
            <div className="sm:col-span-3">
              <ChartArea />
            </div>
          </div>
        </div>

        {/* Floating SEO ranking card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          style={{ transform: "translateZ(40px)" }}
          className="absolute -left-4 -bottom-6 hidden w-64 rounded-2xl glass-strong p-4 shadow-elegant sm:block float"
        >
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-brand text-white">
              <Search className="h-5 w-5" />
            </span>
            <div>
              <div className="text-xs text-muted-foreground">SEO Ranking</div>
              <div className="font-display text-lg font-bold text-foreground">#1 on Google</div>
            </div>
          </div>
          <div className="mt-3 space-y-1.5">
            {["Keyword: digital agency", "Keyword: seo houston", "Keyword: web design"].map((k, i) => (
              <div key={k} className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground truncate">{k}</span>
                <span className="font-semibold text-brand-green">▲ {[3,7,5][i]}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Google Business Profile floating card */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7 }}
          style={{ transform: "translateZ(60px)" }}
          className="absolute -right-4 -top-6 hidden w-64 rounded-2xl glass-strong p-4 shadow-elegant sm:block float"
        >
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-green/10 text-brand-green">
              <MapPin className="h-5 w-5" />
            </span>
            <div>
              <div className="text-xs text-muted-foreground">Google Business Profile</div>
              <div className="font-display text-sm font-bold text-foreground">4.9 ★ (238)</div>
            </div>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2 text-center text-[10px]">
            {[["Views", "12.4k"], ["Calls", "348"], ["Directions", "612"]].map(([l, v]) => (
              <div key={l} className="rounded-lg bg-brand-blue/5 p-2">
                <div className="font-display text-sm font-bold text-brand-blue">{v}</div>
                <div className="text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Growth widget bottom right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          style={{ transform: "translateZ(50px)" }}
          className="absolute -bottom-6 right-6 hidden w-48 rounded-2xl glass-strong p-4 shadow-elegant lg:block float"
        >
          <div className="text-xs text-muted-foreground">Revenue this quarter</div>
          <div className="mt-1 font-display text-2xl font-black text-gradient">$248k</div>
          <div className="mt-1 text-xs font-semibold text-brand-green">▲ 42% vs last Q</div>
          <div className="mt-3 flex items-end gap-1 h-10">
            {[30, 45, 38, 58, 62, 74, 88].map((h, i) => (
              <div key={i} className="w-2 rounded-t bg-gradient-brand" style={{ height: `${h}%` }} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function MetricCard({ label, value, tone, icon: Icon }: { label: string; value: string; tone: "green" | "blue" | "teal"; icon: React.ElementType }) {
  const bg = tone === "green" ? "bg-brand-green/10 text-brand-green" : tone === "blue" ? "bg-brand-blue/10 text-brand-blue" : "bg-brand-teal/10 text-brand-teal";
  return (
    <div className="rounded-2xl border border-border bg-white p-4">
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">{label}</span>
        <span className={`grid h-8 w-8 place-items-center rounded-lg ${bg}`}><Icon className="h-4 w-4" /></span>
      </div>
      <div className="mt-2 font-display text-2xl font-black">{value}</div>
      <div className="mt-1 text-xs text-brand-green">▲ Trending up</div>
    </div>
  );
}

function ChartArea() {
  const points = [10, 22, 18, 32, 28, 45, 40, 58, 54, 72, 68, 84];
  const max = 100;
  const w = 600, h = 140, step = w / (points.length - 1);
  const d = points.map((p, i) => `${i === 0 ? "M" : "L"} ${i * step} ${h - (p / max) * h}`).join(" ");
  const area = `${d} L ${w} ${h} L 0 ${h} Z`;
  return (
    <div className="rounded-2xl border border-border bg-white p-4">
      <div className="mb-2 flex items-center justify-between text-xs">
        <span className="font-semibold">Traffic Growth (last 12 weeks)</span>
        <span className="text-brand-green font-semibold">▲ 128%</span>
      </div>
      <svg viewBox={`0 0 ${w} ${h}`} className="h-32 w-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="areaG" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--brand-blue)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="var(--brand-blue)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineG" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--brand-green)" />
            <stop offset="100%" stopColor="var(--brand-blue)" />
          </linearGradient>
        </defs>
        <path d={area} fill="url(#areaG)" />
        <motion.path d={d} fill="none" stroke="url(#lineG)" strokeWidth={3} strokeLinecap="round"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.6, ease: "easeOut" }} />
      </svg>
    </div>
  );
}

/* ================== TRUSTED BY ================== */
function TrustedBy() {
  const logos = ["Acme", "Northwind", "Globex", "Initech", "Umbrella", "Stark", "Wayne", "Hooli", "Wonka", "Pied Piper"];
  const doubled = [...logos, ...logos];
  return (
    <section className="border-y border-border bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Trusted by growing brands across the United States
        </p>
        <div className="mt-6 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
          <div className="marquee flex w-[200%] gap-16">
            {doubled.map((l, i) => (
              <div key={i} className="shrink-0 font-display text-2xl font-bold text-muted-foreground/60">{l}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================== ABOUT ================== */
function About() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-center">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-blue">Your Growth, Our Mission</p>
          <h2 className="mt-3 font-display text-3xl font-black leading-tight sm:text-5xl">
            Welcome to Ciona Tech — <span className="text-gradient">Your Digital Growth Partner.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            We are 100+ skilled software engineers, marketers, and designers with
            10+ years of expertise, delivering exceptional products for clients
            worldwide. Believe it — because you've seen it, and the real numbers
            prove it.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              { t: "SEO Audit", d: "Deep technical + content audits", icon: Search },
              { t: "Keyword Research", d: "Data-driven topic strategy", icon: Target },
              { t: "Content Marketing", d: "Editorial that ranks & converts", icon: PenTool },
            ].map((it) => (
              <div key={it.t} className="gradient-border rounded-2xl bg-white p-4">
                <it.icon className="h-5 w-5 text-brand-blue" />
                <div className="mt-2 font-semibold text-foreground">{it.t}</div>
                <div className="text-xs text-muted-foreground">{it.d}</div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link to="/about" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-elegant transition hover:scale-[1.03]">
              Learn More <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <div className="grid gap-4">
            <div className="rounded-3xl border border-border bg-gradient-brand-soft p-6 shadow-card">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-brand-blue shadow-card"><Megaphone className="h-5 w-5" /></span>
                <h3 className="font-display text-lg font-bold">Digital Marketing</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Connecting businesses to customers through powerful, ROI-focused
                digital marketing campaigns.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-white p-6 shadow-card">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-green/10 text-brand-green"><Users className="h-5 w-5" /></span>
                <h3 className="font-display text-lg font-bold">Social Marketing</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Boosting visibility and engagement through creative social
                content, community, and paid campaigns.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-white p-6 shadow-card">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-teal/10 text-brand-teal"><Target className="h-5 w-5" /></span>
                <h3 className="font-display text-lg font-bold">Strategic Planning</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Shaping visions into achievable goals through disciplined,
                data-driven strategic planning.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ================== STATS ================== */
const stats = [
  { n: 250, s: "+", label: "Happy Clients" },
  { n: 35, s: "+", label: "Successful Projects" },
  { n: 100, s: "+", label: "Expert Engineers" },
  { n: 10, s: "+", label: "Years Experience" },
  { n: 8300, s: "+", label: "Hours Delivered" },
  { n: 92, s: "%", label: "SEO Success Rate" },
];

function Stats() {
  return (
    <section className="relative py-20">
      <div className="pointer-events-none absolute inset-0 bg-hero opacity-60" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i % 6}>
              <div className="rounded-2xl border border-border bg-white p-5 text-center shadow-card hover-lift">
                <div className="font-display text-3xl font-black text-gradient sm:text-4xl">
                  <Counter to={s.n} suffix={s.s} />
                </div>
                <div className="mt-2 text-xs font-medium text-muted-foreground">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================== SERVICES ================== */
const services = [
  { icon: Search, title: "Search Engine Optimization", desc: "Rank higher, drive qualified organic traffic, and grow authority.", tone: "green" as const },
  { icon: MapPin, title: "Google Business Profile", desc: "Dominate local search with a fully optimized GBP presence.", tone: "blue" as const },
  { icon: Megaphone, title: "Social Media Marketing", desc: "Content, community, and paid social that convert followers to buyers.", tone: "teal" as const },
  { icon: Code2, title: "Web Development", desc: "Blazing-fast, conversion-focused websites built to scale.", tone: "blue" as const },
  { icon: MousePointerClick, title: "Google Ads (PPC)", desc: "Profitable paid campaigns with ROI-obsessed optimization.", tone: "green" as const },
  { icon: Palette, title: "Graphic & Brand Design", desc: "Brand identity, interfaces, and visuals that stand out.", tone: "teal" as const },
  { icon: Smartphone, title: "App Development", desc: "Native & cross-platform iOS/Android apps with premium UX.", tone: "green" as const },
  { icon: Database, title: "CRM & ERP Development", desc: "Custom CRM/ERP platforms tailored to your workflow.", tone: "blue" as const },
  { icon: Bot, title: "AI & Automation", desc: "AI copilots, chatbots, and workflows that save hundreds of hours.", tone: "teal" as const },
  { icon: ShoppingCart, title: "E-commerce (Shopify & More)", desc: "Shopify, WooCommerce and custom stores built to convert 24/7.", tone: "green" as const },
  { icon: Mail, title: "Email Marketing", desc: "Lifecycle, transactional, and campaign email that drives revenue.", tone: "blue" as const },
  { icon: LayoutDashboard, title: "Business Consulting", desc: "Go-to-market, analytics, and growth strategy for scale-ups.", tone: "teal" as const },
];

function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-blue">Our Core Services</p>
        <h2 className="mt-3 font-display text-3xl font-black sm:text-5xl">
          Explore Our <span className="text-gradient">Exclusive Services</span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          Boost trust. Build authority. Every service is built to move the needle on
          your revenue, rankings, and brand equity.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => {
          const toneBg =
            s.tone === "green" ? "bg-brand-green/10 text-brand-green" :
            s.tone === "blue" ? "bg-brand-blue/10 text-brand-blue" :
            "bg-brand-teal/10 text-brand-teal";
          return (
            <Reveal key={s.title} delay={i % 3}>
              <TiltCard className="group h-full">
                <div className="gradient-border h-full rounded-3xl bg-white p-7 shadow-card transition hover:shadow-elegant">
                  <div className={`grid h-12 w-12 place-items-center rounded-2xl ${toneBg}`}>
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                  <Link to="/services" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue">
                    Read More <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </Link>
                </div>
              </TiltCard>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

/* ================== SEO BANNER ================== */
function SeoBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-brand-soft p-8 shadow-card sm:p-12">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-blue/20 blur-3xl blob" />
        <div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-brand-green/20 blur-3xl blob" style={{ animationDelay: "-5s" }} />
        <div className="relative grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-blue">Powered by SEO Optimization</p>
            <h2 className="mt-3 font-display text-3xl font-black sm:text-4xl">
              Expect More, <span className="text-gradient">Achieve More with SEO.</span>
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Bring your vision to life with our skilled software design and
              development team. Trusted by global clients, we deliver innovation
              that fuels growth and scales businesses seamlessly.
            </p>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-elegant transition hover:scale-[1.03]">
              Get a free quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-white p-6 text-center shadow-card">
              <div className="font-display text-4xl font-black text-gradient"><Counter to={250} suffix="+" /></div>
              <div className="mt-1 text-sm text-muted-foreground">Happy SEO Clients</div>
            </div>
            <div className="rounded-2xl border border-border bg-white p-6 text-center shadow-card">
              <div className="font-display text-4xl font-black text-gradient"><Counter to={92} suffix="%" /></div>
              <div className="mt-1 text-sm text-muted-foreground">SEO Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================== WHY US ================== */
const whyUs = [
  { icon: Users, title: "Dedicated Team", desc: "A senior pod aligned to your goals — no rotating juniors." },
  { icon: Rocket, title: "Fast Delivery", desc: "Ship weekly with predictable milestone-based sprints." },
  { icon: ShieldCheck, title: "Transparent Pricing", desc: "No hidden fees. Clear scope. Fixed or retainer options." },
  { icon: LineChart, title: "Data-Driven Strategy", desc: "Every decision is grounded in analytics and cohort data." },
  { icon: HeartHandshake, title: "Long-Term Partnership", desc: "We're in it for the compounding wins, not one-offs." },
  { icon: Clock, title: "24/7 Support", desc: "Global team means someone is always online for you." },
  { icon: Zap, title: "Latest Technologies", desc: "React, Next.js, AI, Cloud — modern stack, production-ready." },
  { icon: Award, title: "ROI-Focused Marketing", desc: "We measure revenue, not vanity metrics." },
];

function WhyUs() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-blue">Why Choose Us?</p>
          <h2 className="mt-3 font-display text-3xl font-black sm:text-5xl">
            We are the best <span className="text-gradient">Vision Agency in the US.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            100+ expert software engineers with 10 years of experience,
            delivering innovative, reliable, and superior digital products.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((w, i) => (
            <Reveal key={w.title} delay={i % 4}>
              <div className="h-full rounded-2xl border border-border bg-white p-5 shadow-card hover-lift">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-brand text-white">
                  <w.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-3 font-display font-bold">{w.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{w.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <Link to="/services" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-elegant transition hover:scale-[1.03]">
            Website Development
          </Link>
          <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold transition hover:bg-accent">
            Marketing Strategy &amp; Execution
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ================== PROCESS ================== */
const process = [
  { t: "Discovery", d: "Deep-dive workshops to align on goals and metrics." },
  { t: "Research", d: "Market, competitors, keywords, and audience insights." },
  { t: "Planning", d: "Roadmap, KPIs, and a tactical 90-day plan." },
  { t: "Strategy", d: "Channels, messaging, and measurement framework." },
  { t: "Design", d: "Wireframes, brand systems, and interactive prototypes." },
  { t: "Development", d: "Engineering with weekly demos and staging environments." },
  { t: "Testing", d: "QA, performance, and accessibility validation." },
  { t: "Launch", d: "Go-to-market push and monitored rollout." },
  { t: "Growth", d: "A/B tests, SEO iteration, and CRO on live traffic." },
  { t: "Support", d: "Ongoing partnership focused on compounding ROI." },
];

function Process() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-blue">Our Process</p>
        <h2 className="mt-3 font-display text-3xl font-black sm:text-5xl">From idea to impact in 10 steps</h2>
      </Reveal>

      <div className="relative mt-16">
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-brand-blue/40 to-transparent lg:block" />
        <div className="grid gap-6 lg:grid-cols-2">
          {process.map((p, i) => (
            <Reveal key={p.t} delay={i % 2}>
              <div className={`relative flex ${i % 2 === 1 ? "lg:justify-end" : ""}`}>
                <div className="w-full max-w-md rounded-2xl border border-border bg-white p-6 shadow-card hover-lift">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-brand font-display font-bold text-white">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-lg font-bold">{p.t}</h3>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{p.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================== PORTFOLIO ================== */
const works = [
  { title: "NovaHealth Rebrand", cat: "Websites", img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80" },
  { title: "LoftHaus E-commerce", cat: "Marketing", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=80" },
  { title: "Bright Legal CRM", cat: "CRM", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop&q=80" },
  { title: "Peakform SEO Growth", cat: "SEO", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80" },
  { title: "Zephyr Mobile App", cat: "Apps", img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80" },
  { title: "Kindred Brand Identity", cat: "Branding", img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&auto=format&fit=crop&q=80" },
];

function Portfolio() {
  const cats = ["All", "Websites", "Apps", "Branding", "SEO", "CRM", "Marketing"];
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? works : works.filter((w) => w.cat === active);
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-blue">Selected Work</p>
        <h2 className="mt-3 font-display text-3xl font-black sm:text-5xl">Case studies that speak for themselves</h2>
      </Reveal>

      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {cats.map((c) => (
          <button key={c} onClick={() => setActive(c)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${active === c ? "bg-gradient-brand text-white shadow-elegant" : "border border-border bg-white hover:bg-accent"}`}>
            {c}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((w, i) => (
          <Reveal key={w.title} delay={i % 3}>
            <div className="group relative overflow-hidden rounded-3xl border border-border shadow-card hover-lift">
              <img src={w.img} alt={w.title} className="h-64 w-full object-cover transition duration-700 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent opacity-90" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <div className="text-xs font-semibold uppercase tracking-widest opacity-80">{w.cat}</div>
                <div className="mt-1 font-display text-lg font-bold">{w.title}</div>
              </div>
              <div className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-brand-blue opacity-0 transition group-hover:opacity-100">
                <Play className="h-4 w-4 fill-current" />
              </div>
            </div>
          </Reveal>
        ))}
      </motion.div>
    </section>
  );
}

/* ================== INDUSTRIES ================== */
const industries = [
  { icon: Stethoscope, label: "Healthcare" },
  { icon: Stethoscope, label: "Dental" },
  { icon: HardHat, label: "Construction" },
  { icon: Building2, label: "Real Estate" },
  { icon: Scale, label: "Law Firms" },
  { icon: GraduationCap, label: "Education" },
  { icon: ShoppingCart, label: "Retail" },
  { icon: Landmark, label: "Finance" },
  { icon: Cpu, label: "Technology" },
  { icon: Utensils, label: "Restaurants" },
  { icon: HardHat, label: "Manufacturing" },
  { icon: Car, label: "Automotive" },
  { icon: Rocket, label: "Startups" },
  { icon: Globe, label: "Logistics" },
  { icon: ShoppingCart, label: "E-commerce" },
];

function Industries() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-[70rem] -translate-x-1/2 rounded-full bg-brand-blue/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-brand-green/20 blur-3xl blob" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-teal">Industries</p>
          <h2 className="mt-3 font-display text-3xl font-black sm:text-5xl">Experience across 15+ industries</h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {industries.map((it, i) => (
            <Reveal key={it.label} delay={i % 5}>
              <div className="glass-dark flex flex-col items-center gap-3 rounded-2xl p-6 text-center transition hover:-translate-y-1 hover:bg-white/10">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/10">
                  <it.icon className="h-6 w-6 text-brand-teal" />
                </div>
                <div className="text-sm font-semibold">{it.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================== PRICING ================== */
const plans = [
  {
    name: "Starter Plan", price: 400, cents: 99, tagline: "Great for local businesses starting out",
    features: [
      "GBP Listing Management",
      "Keyword Research",
      "Local Citations",
      "On Page SEO",
      "Technical SEO",
      "On Page Keyword Optimization",
    ],
    popular: false,
  },
  {
    name: "Momentum Plan", price: 450, cents: 99, tagline: "For brands ready to scale visibility",
    features: [
      "GBP Account Creation",
      "GBP Account Management",
      "Technical SEO",
      "On Page Keyword Optimization",
      "NAP Consistency",
      "Business Directory",
      "Business Card & QR Code",
      "Business Flyer",
      "Business YT Video",
    ],
    popular: true,
  },
  {
    name: "Pioneer Plan", price: 500, cents: 99, tagline: "Our full-stack growth engine",
    features: [
      "GBP Account Creation",
      "GBP Account Management",
      "Technical SEO",
      "On Page Keyword Optimization",
      "Local Citations",
      "NAP Consistency",
      "Business Directory",
      "Business Card & QR Code",
      "Business Flyer",
      "Business YT Video",
      "Social Media Management",
    ],
    popular: false,
  },
];

function Pricing() {
  const [yearly, setYearly] = useState(false);
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-blue">Eye-Catching Plans</p>
        <h2 className="mt-3 font-display text-3xl font-black sm:text-5xl">Our Pricing Plans</h2>
        <p className="mt-4 text-muted-foreground">
          Great design shouldn't be out of reach — our services cost less than half
          the price of a full-time in-house designer.
        </p>
        <div className="mt-6 inline-flex rounded-full border border-border bg-white p-1">
          <button onClick={() => setYearly(false)} className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${!yearly ? "bg-gradient-brand text-white" : "text-muted-foreground"}`}>Monthly</button>
          <button onClick={() => setYearly(true)} className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${yearly ? "bg-gradient-brand text-white" : "text-muted-foreground"}`}>Yearly <span className="ml-1 text-xs opacity-80">-15%</span></button>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {plans.map((p, i) => {
          const display = yearly ? Math.round(p.price * 0.85) : p.price;
          return (
            <Reveal key={p.name} delay={i}>
              <div className={`relative flex h-full flex-col rounded-3xl border p-8 shadow-card transition hover:shadow-elegant ${p.popular ? "border-brand-blue bg-white ring-2 ring-brand-blue/30" : "border-border bg-white"}`}>
                {p.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-brand px-3 py-1 text-xs font-bold uppercase text-white shadow-elegant">Most Popular</div>
                )}
                <div className="text-sm font-semibold uppercase tracking-widest text-brand-blue">{p.name}</div>
                <div className="mt-2 flex items-baseline">
                  <span className="font-display text-5xl font-black">${display}</span>
                  <span className="ml-1 font-display text-lg font-bold text-muted-foreground">.{p.cents}</span>
                  <span className="ml-2 text-sm font-medium text-muted-foreground">/ mo</span>
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{p.tagline}</div>
                <ul className="mt-6 space-y-3 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${p.popular ? "bg-gradient-brand text-white shadow-elegant hover:scale-[1.02]" : "border border-border hover:bg-accent"}`}>
                  Contact Us
                </Link>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}





/* ================== TECH STACK ================== */
const tech = ["React", "Next.js", "TypeScript", "Node.js", "Laravel", "Python", "Flutter", "Firebase", "AWS", "Google Cloud", "Docker", "MongoDB", "MySQL", "WordPress", "Shopify", "OpenAI"];

function TechStack() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-blue">Technology</p>
        <h2 className="mt-3 font-display text-3xl font-black sm:text-5xl">Modern stack, production-ready</h2>
      </Reveal>
      <div className="mt-12 flex flex-wrap justify-center gap-3">
        {tech.map((t, i) => (
          <Reveal key={t} delay={i % 6}>
            <div className="rounded-full border border-border bg-white px-5 py-2.5 text-sm font-semibold text-foreground/80 shadow-card hover-lift">
              {t}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ================== FAQ ================== */
const faqs = [
  { q: "How quickly can we get started?", a: "Most engagements kick off within 5–7 business days after our free discovery call." },
  { q: "Do you work with startups and enterprises?", a: "Yes. We serve funded startups, mid-market, and enterprise clients across 15+ industries." },
  { q: "How do you measure SEO success?", a: "Rankings, organic traffic, qualified leads, and revenue attribution. We report weekly." },
  { q: "Do you offer month-to-month contracts?", a: "Yes, most retainers are month-to-month after a 90-day initial engagement." },
  { q: "Do you build custom software or use templates?", a: "Both. We recommend the fastest, most cost-effective path for your goals." },
  { q: "Where is your team based?", a: "Our HQ is in Houston, TX with global engineering and creative teams." },
  { q: "Do you offer Google Business Profile management?", a: "Yes — GBP setup, optimization, posts, and review management are core services." },
  { q: "Can you handle both design and development?", a: "Absolutely. Our design and engineering pods ship together, end-to-end." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-blue">FAQ</p>
        <h2 className="mt-3 font-display text-3xl font-black sm:text-5xl">Frequently asked questions</h2>
      </Reveal>
      <div className="mt-10 space-y-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} className="overflow-hidden rounded-2xl border border-border bg-white shadow-card">
              <button onClick={() => setOpen(isOpen ? null : i)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left">
                <span className="font-display font-semibold">{f.q}</span>
                <ChevronRight className={`h-5 w-5 shrink-0 text-brand-blue transition ${isOpen ? "rotate-90" : ""}`} />
              </button>
              <motion.div initial={false} animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }} transition={{ duration: 0.3 }} className="overflow-hidden px-5">
                <p className="pb-5 text-sm text-muted-foreground">{f.a}</p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ================== FINAL CTA ================== */
function FinalCTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-ink p-10 text-white shadow-elegant sm:p-14">
          <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand-green/40 blur-3xl blob" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-brand-blue/40 blur-3xl blob" style={{ animationDelay: "-6s" }} />
          <div className="relative grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-teal">Turning bold ideas into powerful digital realities</p>
              <h2 className="mt-3 font-display text-3xl font-black sm:text-5xl">
                Let's Build Digital <span className="shimmer-text">Success Together.</span>
              </h2>
              <p className="mt-4 max-w-xl text-white/75">
                Partner with us to craft innovative digital solutions that elevate
                your brand, engage your audience, and drive measurable growth.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-semibold shadow-elegant transition hover:scale-[1.03]">
                Get Free Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold backdrop-blur transition hover:bg-white/10">
                Talk To An Expert
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold backdrop-blur transition hover:bg-white/10">
                Book Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* Prevent tree-shaker complaints on optional icons kept for future service pages */
void useEffect;
