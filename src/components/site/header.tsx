import { useEffect, useState } from "react";
import { Menu, Phone, X, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Journey", href: "/#journey" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="gradient-deep hidden md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-2 text-xs text-primary-foreground/90">
          <p className="flex items-center gap-2">
            <Sparkles className="size-3.5" /> Free first fertility assessment for new patients
          </p>
          <div className="flex items-center gap-5">
            <span>Mon – Sat · 9:00 AM – 9:00 PM</span>
            <a href="tel:+917995574432" className="font-semibold hover:opacity-80">
              +91 7995574432
            </a>
          </div>
        </div>
      </div>

      <div
        className={`transition-all duration-300 ${
          scrolled ? "bg-card/90 shadow-soft backdrop-blur-xl" : "bg-card/60 backdrop-blur-md"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-3">
            <span className="gradient-brand grid size-11 place-items-center rounded-2xl text-lg font-semibold text-primary-foreground shadow-soft">
              PS
            </span>
            <span className="leading-tight">
              <span className="block font-display text-lg font-semibold">Dr. Priyanka Singh</span>
              <span className="block text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
                Fertility · Obstetrics · Gynecology
              </span>
            </span>
          </Link>

          <ul className="hidden items-center gap-7 lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  to={l.href}
                  className="relative text-sm font-medium text-foreground/80 transition-colors hover:text-primary after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-primary after:transition-all hover:after:w-full"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Link
              to="/#contact"
              className="gradient-brand hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5 sm:inline-flex"
            >
              <Phone className="size-4" /> Book Appointment
            </Link>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="grid size-10 place-items-center rounded-xl border border-border bg-card lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="border-t border-border bg-card px-6 py-4 lg:hidden">
            <ul className="grid gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    to={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-2.5 text-sm font-medium hover:bg-muted"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
