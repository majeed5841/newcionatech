import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal, TiltCard } from "../components/site/motion";
import { Testimonials } from "../components/site/Testimonials";
import { ArrowRight } from "lucide-react";
import { services } from "../data/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — SEO, Ads, Web, Apps, CRM & AI | CIONA TECH LLC" },
      { name: "description", content: "Full-service digital marketing and software development: SEO, Google Ads, social, web, apps, CRM, design, and content marketing." },
      { property: "og:title", content: "Services — CIONA TECH LLC" },
      { property: "og:description", content: "Everything you need to grow: strategy, marketing, design, and engineering under one roof." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-hero py-24">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-96 w-[60rem] -translate-x-1/2 rounded-full bg-brand-blue/25 blur-3xl blob" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-blue">Services</p>
            <h1 className="mt-3 font-display text-4xl font-black sm:text-5xl">
              Everything you need to <span className="text-gradient">grow online.</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Strategy, marketing, design, and engineering — under one roof.
              Handpicked senior specialists working as an extension of your team.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i % 3}>
              <TiltCard className="group h-full rounded-3xl border border-border bg-white p-7 shadow-card transition hover:shadow-elegant">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-brand text-white shadow-glow">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold">{s.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue">
                  Explore {s.name.split(" ")[0]} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      <Testimonials />
    </>
  );
}
