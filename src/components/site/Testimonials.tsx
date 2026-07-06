import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { testimonials } from "../../data/testimonials";
import { Reveal } from "./motion";

export function Testimonials({ title = "What Our Clients Say", subtitle = "Real reviews from real business owners we've helped grow." }: { title?: string; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-brand-teal/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-blue">Testimonials</p>
            <h2 className="mt-3 font-display text-3xl font-black sm:text-4xl">{title}</h2>
            <p className="mt-4 text-muted-foreground">{subtitle}</p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.business} delay={i % 3}>
              <motion.div
                whileHover={{ y: -6 }}
                className="group relative h-full rounded-3xl border border-border bg-white p-7 shadow-card transition hover:shadow-elegant"
              >
                <Quote className="absolute right-6 top-6 h-8 w-8 text-brand-blue/15" />
                <div className="flex items-center gap-1 text-highlight">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-5 text-sm leading-relaxed text-foreground/80">"{t.comment}"</p>
                <div className="mt-6 flex items-center gap-3 border-t border-border/70 pt-5">
                  <div className={`grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br ${t.color} font-display text-sm font-bold text-white shadow-glow`}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-display text-sm font-bold">{t.business}</p>
                    <p className="text-xs text-muted-foreground">
                      {t.name ? `${t.name} · ` : ""}
                      {t.role ?? "Client"}
                    </p>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
