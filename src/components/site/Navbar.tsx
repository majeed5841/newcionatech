import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, Search, MapPin, Share2, MousePointerClick, Code2, Database, Smartphone, Palette, PenTool, Sparkles, ArrowRight } from "lucide-react";
import logoUrl from "../../assets/ciona-logo.png";

const megaGroups = [
  {
    title: "Digital Marketing",
    items: [
      { to: "/services/seo", label: "SEO", icon: Search, desc: "Rank higher, capture demand" },
      { to: "/services/google-business-profile", label: "Google Business Profile", icon: MapPin, desc: "Own the local map pack" },
      { to: "/services/google-ads", label: "Google Ads (PPC)", icon: MousePointerClick, desc: "Instant, predictable ROAS" },
      { to: "/services/social-media-marketing", label: "Social Media Marketing", icon: Share2, desc: "Grow an audience that buys" },
      { to: "/services/content-marketing", label: "Content Marketing", icon: PenTool, desc: "Content that ranks & converts" },
    ],
  },
  {
    title: "Development",
    items: [
      { to: "/services/website-development", label: "Website Development", icon: Code2, desc: "Fast, SEO-first websites" },
      { to: "/services/crm-development", label: "CRM Development", icon: Database, desc: "Custom CRMs & automation" },
      { to: "/services/mobile-app-development", label: "App Development", icon: Smartphone, desc: "iOS, Android & cross-platform" },
    ],
  },
  {
    title: "Creative",
    items: [
      { to: "/services/graphic-designing", label: "Graphic Designing", icon: Palette, desc: "Brand identity & marketing creative" },
    ],
  },
] as const;

const primaryLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/pricing", label: "Pricing" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [mega, setMega] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong shadow-card" : "bg-transparent"
      }`}
      onMouseLeave={() => setMega(false)}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img src={logoUrl} alt="CIONA TECH LLC" className="h-9 w-auto" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          <Link to="/" className="relative rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition hover:text-foreground" activeOptions={{ exact: true }}>
            Home
          </Link>
          <Link to="/about" className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition hover:text-foreground">About</Link>

          {/* Mega menu trigger */}
          <div className="relative" onMouseEnter={() => setMega(true)}>
            <button
              onClick={() => setMega((v) => !v)}
              className="inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition hover:text-foreground"
            >
              Services <ChevronDown className={`h-4 w-4 transition ${mega ? "rotate-180" : ""}`} />
            </button>
          </div>

          <Link to="/portfolio" className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition hover:text-foreground">Portfolio</Link>
          <Link to="/pricing" className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition hover:text-foreground">Pricing</Link>
          <Link to="/contact" className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition hover:text-foreground">Contact</Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white shadow-elegant transition hover:scale-[1.03] sm:inline-flex"
          >
            Get Free Quote
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-border lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* MEGA MENU */}
      <div
        className={`absolute inset-x-0 top-full hidden overflow-hidden transition-all duration-300 lg:block ${
          mega ? "max-h-[600px] opacity-100" : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 pb-6 sm:px-6 lg:px-8">
          <div className="glass-strong grid gap-6 rounded-3xl p-6 shadow-elegant md:grid-cols-4">
            {megaGroups.map((g) => (
              <div key={g.title}>
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-brand-blue">{g.title}</p>
                <div className="space-y-1">
                  {g.items.map((it) => (
                    <Link
                      key={it.to}
                      to={it.to}
                      onClick={() => setMega(false)}
                      className="group flex items-start gap-3 rounded-xl p-2.5 transition hover:bg-gradient-brand-soft"
                    >
                      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white text-brand-blue shadow-card transition group-hover:bg-gradient-brand group-hover:text-white">
                        <it.icon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm font-bold">{it.label}</p>
                        <p className="text-xs text-muted-foreground">{it.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div className="rounded-2xl bg-gradient-brand p-5 text-white">
              <Sparkles className="h-5 w-5" />
              <p className="mt-3 font-display text-lg font-bold">Not sure what you need?</p>
              <p className="mt-1 text-xs text-white/80">Book a free 30-min strategy call and we'll build a roadmap for you.</p>
              <Link to="/contact" onClick={() => setMega(false)} className="mt-4 inline-flex items-center gap-1 rounded-full bg-white px-4 py-2 text-xs font-bold text-brand-blue">
                Book Free Call <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="h-0.5 w-full bg-transparent">
        <div className="h-full bg-gradient-brand transition-[width] duration-150" style={{ width: `${progress}%` }} />
      </div>

      {/* MOBILE */}
      {open && (
        <div className="lg:hidden">
          <div className="glass-strong mx-4 mb-4 max-h-[80vh] overflow-y-auto rounded-2xl p-4">
            <div className="flex flex-col gap-1">
              {primaryLinks.map((l) => (
                <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="rounded-lg px-4 py-3 text-sm font-medium text-foreground/80 hover:bg-accent">
                  {l.label}
                </Link>
              ))}
              <button
                onClick={() => setMobileServices((v) => !v)}
                className="flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-foreground/80 hover:bg-accent"
              >
                Services <ChevronDown className={`h-4 w-4 transition ${mobileServices ? "rotate-180" : ""}`} />
              </button>
              {mobileServices && (
                <div className="ml-2 space-y-3 border-l border-border pl-3">
                  {megaGroups.map((g) => (
                    <div key={g.title}>
                      <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-brand-blue">{g.title}</p>
                      {g.items.map((it) => (
                        <Link key={it.to} to={it.to} onClick={() => setOpen(false)} className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-foreground/80 hover:bg-accent">
                          <it.icon className="h-4 w-4 text-brand-blue" /> {it.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
              <Link to="/contact" onClick={() => setOpen(false)} className="mt-2 rounded-xl bg-gradient-brand px-4 py-3 text-center text-sm font-semibold text-white">
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
