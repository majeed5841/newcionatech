import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import logoUrl from "../../assets/ciona-logo.png";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-brand" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[70rem] -translate-x-1/2 rounded-full bg-brand-teal/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="inline-flex">
              <img src={logoUrl} alt="CIONA TECH LLC" className="h-10 w-auto" />
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Your Digital Growth Partner. We turn ideas into digital impact through
              SEO, marketing, web, apps, and AI-driven solutions.
            </p>
            <div className="mt-5 flex gap-2">
              {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition hover:border-brand-blue hover:text-brand-blue">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-foreground">Our Services</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Search Engine Optimization</li>
              <li>Social Media Marketing</li>
              <li>Google Business Profile</li>
              <li>Web Development</li>
              <li>Google Ads (PPC)</li>
              <li>App Development</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-foreground">Company</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {[["/about", "About"], ["/services", "Services"], ["/pricing", "Pricing"], ["/contact", "Contact"]].map(([to, label]) => (
                <li key={to}><Link to={to} className="text-muted-foreground transition hover:text-brand-blue">{label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-foreground">Contact Us</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                <span>Houston, Texas, USA</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
                <a href="tel:+12548700892" className="hover:text-brand-blue">+1 (254) 870-0892</a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-teal" />
                <a href="mailto:info@cionatech.com" className="hover:text-brand-blue">info@cionatech.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-gradient-brand-soft p-5 text-sm text-foreground/80">
          <p className="font-semibold text-foreground">SMS Notifications</p>
          <p className="mt-1 text-xs leading-relaxed">
            CIONA TECH LLC may send you SMS messages regarding account updates,
            service alerts, delivery status, security notifications, or
            promotional offers. Message frequency varies. Message &amp; data rates
            may apply. Reply <strong>STOP</strong> to opt out or <strong>HELP</strong> for assistance, or email
            info@cionatech.com.
          </p>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} CIONA TECH LLC. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-blue">Privacy Policy</a>
            <a href="#" className="hover:text-brand-blue">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
