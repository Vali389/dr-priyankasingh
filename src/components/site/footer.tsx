import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { Link } from "@tanstack/react-router";

const columns = [
  {
    title: "Fertility Care",
    items: [
      { label: "IVF & ICSI Treatments", href: "/services" },
      { label: "IUI (Intrauterine Insemination)", href: "/services" },
      { label: "Oocyte Retrieval, TESA/PESA", href: "/services" },
      { label: "Egg Donor Programs", href: "/services" },
      { label: "Fertility Preservation", href: "/services" },
    ],
  },
  {
    title: "Women's Health",
    items: [
      { label: "High-Risk Pregnancy", href: "/services" },
      { label: "Normal & Painless Delivery", href: "/services" },
      { label: "Advanced Cosmetic Gynecology", href: "/services" },
      { label: "PCOD & PCOS Treatment", href: "/services" },
      { label: "Female Vaccinations", href: "/services" },
    ],
  },
  {
    title: "Quick Links",
    items: [
      { label: "About Dr. Priyanka", href: "/about" },
      { label: "Our Services & Treatments", href: "/services" },
      { label: "Clinic Location", href: "/#location" },
      { label: "FAQs", href: "/#faq" },
      { label: "Book Appointment", href: "/contact" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="gradient-deep relative overflow-hidden text-primary-foreground">
      <div className="pointer-events-none absolute -top-24 -right-16 size-72 rounded-full bg-accent/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-0 size-80 rounded-full bg-primary/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_repeat(3,1fr)]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid size-12 place-items-center rounded-2xl bg-primary-foreground/15 text-lg font-semibold backdrop-blur">
                PS
              </span>
              <span>
                <span className="block font-display text-xl">Dr. Priyanka Singh</span>
                <span className="text-xs tracking-[0.16em] uppercase opacity-75">Fertility & Women's Health</span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed opacity-85">
              Compassionate, evidence-based fertility and gynecological care — supporting every woman from her first
              consultation to the moment she holds her baby.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { Icon: Facebook, href: "https://www.facebook.com/radiancespecialityclinics/" },
                { Icon: Instagram, href: "https://www.instagram.com/radiancespecialityclinics/" },
                { Icon: Youtube, href: "https://www.youtube.com/@radianceclinics-dr.rajeshvasam/videos" },
                { Icon: Mail, href: "mailto:radiancespecialityclinics@gmail.com" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Social link"
                  className="grid size-10 place-items-center rounded-xl bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/25"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm tracking-[0.16em] uppercase opacity-80">{col.title}</h4>
              <ul className="mt-4 space-y-2.5 text-sm opacity-85">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <Link to={item.href} className="transition-opacity hover:opacity-60">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-4 border-t border-primary-foreground/15 pt-8 text-sm opacity-85 sm:grid-cols-3">
          <p className="flex items-center gap-2">
            <MapPin className="size-4" /> Flat 201, Pagadala Pride, Bachupally, Hyderabad
          </p>
          <a href="tel:+917995574432" className="flex items-center gap-2 hover:opacity-75">
            <Phone className="size-4" /> +91 7995574432
          </a>
          <a href="mailto:radiancespecialityclinics@gmail.com" className="flex items-center gap-2 hover:opacity-75">
            <Mail className="size-4" /> radiancespecialityclinics@gmail.com
          </a>
        </div>

        <p className="mt-8 text-xs opacity-65">
          © {new Date().getFullYear()} Dr. Priyanka Singh Fertility & Women's Health Clinic. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
