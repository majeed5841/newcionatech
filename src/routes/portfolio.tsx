import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Filter, TrendingUp, Users, Target, Award } from "lucide-react";
import { Reveal, TiltCard, Counter } from "../components/site/motion";
import { Testimonials } from "../components/site/Testimonials";
import { projects, portfolioCategories } from "../data/portfolio";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio & Case Studies — Our Work | CIONA TECH LLC" },
      { name: "description", content: "Explore CIONA TECH LLC case studies across SEO, web, apps, CRM, ads, branding, and content — with measurable results." },
      { property: "og:title", content: "Our Work — CIONA TECH LLC" },
      { property: "og:description", content: "Case studies with real results across every service line." },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  const [filter, setFilter] = useState("All");
  const list = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero pb-24 pt-24">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-[60rem] -translate-x-1/2 rounded-full bg-brand-blue/15 blur-3xl blob" />
        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-blue">Portfolio & Case Studies</p>
            <h1 className="mt-4 font-display text-4xl font-black sm:text-6xl">
              Our work <span className="text-gradient">speaks for itself.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
              A curated look at the digital products, campaigns, and brands we've built with ambitious teams around the world.
            </p>
          </Reveal>
          <Reveal delay={1}>
            <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { icon: Award, to: 250, suffix: "+", label: "Projects Delivered" },
                { icon: Users, to: 180, suffix: "+", label: "Happy Clients" },
                { icon: TrendingUp, to: 92, suffix: "%", label: "Success Rate" },
                { icon: Target, to: 6, suffix: "×", label: "Avg. ROAS" },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl border border-border bg-white/70 p-5 backdrop-blur">
                  <s.icon className="mx-auto h-5 w-5 text-brand-blue" />
                  <p className="mt-2 font-display text-3xl font-black text-gradient">
                    <Counter to={s.to} suffix={s.suffix} />
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FILTERS */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          {portfolioCategories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                filter === c
                  ? "bg-gradient-brand text-white shadow-elegant"
                  : "border border-border bg-white text-foreground hover:border-brand-blue hover:text-brand-blue"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* GRID */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((p, i) => (
              <motion.div
                key={p.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: (i % 3) * 0.05 }}
              >
                <TiltCard className="group h-full overflow-hidden rounded-3xl border border-border bg-white shadow-card transition hover:shadow-elegant">
                  <div className="relative h-56 overflow-hidden">
                    <img src={p.image} alt={p.client} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                    <div className={`absolute inset-0 bg-gradient-to-t ${p.gradient} opacity-60 mix-blend-multiply`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                    <p className="absolute bottom-4 left-4 right-4 font-display text-xl font-black text-white drop-shadow">{p.client}</p>
                    <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-blue backdrop-blur">{p.category}</span>
                    <span className="absolute left-4 top-4 rounded-full bg-ink/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur">{p.timeline}</span>
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">{p.industry}</p>
                    <h3 className="mt-2 font-display text-lg font-bold">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.services.map((s) => (
                        <span key={s} className="rounded-full bg-secondary px-2.5 py-1 text-[10px] font-semibold text-foreground/70">{s}</span>
                      ))}
                    </div>
                    <div className="mt-5 grid grid-cols-2 gap-2">
                      {p.results.map((r) => (
                        <div key={r.label} className="rounded-xl bg-gradient-brand-soft p-3">
                          <p className="font-display text-lg font-black text-gradient">{r.value}</p>
                          <p className="text-[10px] font-semibold uppercase text-muted-foreground">{r.label}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 border-t border-border pt-4">
                      <p className="text-xs"><span className="font-semibold">Problem:</span> <span className="text-muted-foreground">{p.problem}</span></p>
                      <p className="mt-2 text-xs"><span className="font-semibold">Solution:</span> <span className="text-muted-foreground">{p.solution}</span></p>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <Testimonials title="Kind words from clients" subtitle="What partners say after working with the CIONA TECH team." />

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-brand p-10 text-center text-white shadow-elegant sm:p-14">
          <h2 className="font-display text-4xl font-black sm:text-5xl">Start your success story today.</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/85">Tell us where you are, where you want to be, and we'll build the roadmap.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-brand-blue shadow-card transition hover:scale-[1.03]">
            Request a free consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
