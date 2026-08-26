import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { Reveal } from "@/components/site/reveal";
import {
  Activity,
  Baby,
  CalendarHeart,
  Clock,
  Dna,
  FlaskConical,
  Flower2,
  HeartPulse,
  Mail,
  MapPin,
  Microscope,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Syringe,
  Users,
  Video,
  Home as HomeIcon,
  Truck,
  PlusCircle
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Treatments & Services | Dr. Priyanka Singh" },
      {
        name: "description",
        content: "Explore the comprehensive range of fertility care, pregnancy management, and gynecological treatments offered by Dr. Priyanka Singh.",
      },
    ],
  }),
  component: Services,
});

const serviceCategories = [
  {
    category: "Fertility & Reproductive Medicine",
    badge: "Advanced ART Procedures",
    description: "State-of-the-art treatments designed to help you start or grow your family with high success rates.",
    items: [
      {
        icon: FlaskConical,
        title: "IVF & ICSI Treatments",
        desc: "In-vitro fertilization and intracytoplasmic sperm injection are our signature fertility offerings. We use individualized stimulation protocols, advanced blastocyst culture, and careful embryo monitoring to ensure the best possible outcomes."
      },
      {
        icon: Syringe,
        title: "IUI (Intrauterine Insemination)",
        desc: "A reliable and cost-effective first-line fertility therapy. This procedure is carefully synchronized with your natural cycle or ovulation induction, offering a gentle pathway to conception."
      },
      {
        icon: Microscope,
        title: "Oocyte Retrieval, TESA & PESA",
        desc: "Specialized minor procedures for retrieving eggs and extracting sperm (Testicular/Percutaneous Epididymal Sperm Aspiration) directly, supporting complex IVF cases with male factor infertility."
      },
      {
        icon: Users,
        title: "Egg Donor Programs",
        desc: "Compassionate, fully screened egg donor solutions managed with the highest confidentiality and strict ethical standards for individuals and couples requiring donor oocytes."
      },
      {
        icon: Dna,
        title: "Fertility Preservation",
        desc: "Cryopreservation (freezing) of eggs, embryos, or sperm, allowing you to secure your reproductive options for medical reasons (like cancer therapies) or personal planning."
      },
      {
        icon: Stethoscope,
        title: "Infertility USG & Diagnostics",
        desc: "Precision diagnostic scans, including pelvic ultrasounds and follicular monitoring, to identify tubal patency, endometrial receptivity, and ovarian reserves."
      }
    ]
  },
  {
    category: "Pregnancy & Obstetrics",
    badge: "Maternal-Fetal Excellence",
    description: "Expert clinical support and monitoring to guide you safely from positive pregnancy test to delivery.",
    items: [
      {
        icon: HeartPulse,
        title: "High-Risk Pregnancy Care",
        desc: "Specialized clinical management and intensive monitoring for pregnancies complicated by gestational diabetes, chronic hypertension, preeclampsia, multiple gestations (twins/triplets), or a history of miscarriage."
      },
      {
        icon: CalendarHeart,
        title: "Normal & Painless Delivery",
        desc: "Our labor protocols prioritize natural births while offering epidural anesthesia for a painless and comfortable delivery experience, backed by continuous electronic fetal monitoring."
      },
      {
        icon: ShieldCheck,
        title: "Recurrent Pregnancy Loss (RPL)",
        desc: "Detailed diagnostic investigations (including immunological and genetic profiling) and tailored therapeutic support to prevent repeated miscarriages and ensure a healthy full-term pregnancy."
      },
      {
        icon: Baby,
        title: "Fetal Growth Monitoring",
        desc: "Advanced high-resolution ultrasound monitoring to evaluate fetal blood flow, track growth, assess amniotic fluid levels, and secure overall wellness inside the womb."
      }
    ]
  },
  {
    category: "Gynecological Care & Intimate Health",
    badge: "Empowering Women's Health",
    description: "Comprehensive medical and surgical solutions for conditions affecting women's health and wellness.",
    items: [
      {
        icon: Flower2,
        title: "PCOD & PCOS Treatment",
        desc: "Comprehensive lifestyle management, weight regulation therapies, hormonal balancing, and ovulation induction designed to restore cycles, improve metabolic health, and restore fertility."
      },
      {
        icon: Sparkles,
        title: "Advanced Cosmetic Gynecology",
        desc: "State-of-the-art non-surgical and surgical aesthetic solutions, including vaginal rejuvenation, labiaplasty, and PRP therapies to improve intimate comfort, functionality, and confidence."
      },
      {
        icon: Activity,
        title: "Endometriosis Care",
        desc: "Expert diagnosis and multi-modal treatment plans involving hormonal suppression, pain relief therapy, and advanced laparoscopic surgery to relieve chronic pelvic pain and improve fertility potential."
      },
      {
        icon: PlusCircle,
        title: "Female Vaccinations",
        desc: "Preventive immunizations crucial for women's long-term health, including the HPV vaccine for cervical cancer prevention, and Rubella vaccination before planning a pregnancy."
      },
      {
        icon: Microscope,
        title: "Laparoscopic Keyhole Surgery",
        desc: "Minimally invasive gynecological surgeries for removing ovarian cysts, uterine fibroids, and treating ectopic pregnancies, ensuring minimal scarring and rapid postoperative recovery."
      }
    ]
  },
  {
    category: "Support & Convenience Services",
    badge: "Accessible Care Anywhere",
    description: "At Radiance, we extend our clinical care right to your home with convenient supporting services.",
    items: [
      {
        icon: HomeIcon,
        title: "24/7 Home Sample Collection",
        desc: "Get all your blood and diagnostic tests completed from the comfort of your home. Our professional laboratory technicians visit your doorstep to collect samples at your convenience."
      },
      {
        icon: Truck,
        title: "Pharmacy Home Delivery",
        desc: "Avoid the hassle of pharmacy queues. We deliver your prescribed fertility medicines, prenatal vitamins, and general gynecology medications directly to your home with rapid turnaround."
      },
      {
        icon: Video,
        title: "Video Consultations",
        desc: "Consult with Dr. Priyanka Singh virtually from the comfort of your home. Ideal for follow-up appointments, report reviews, lifestyle counseling, and second opinions."
      },
      {
        icon: Stethoscope,
        title: "Second Opinion Services",
        desc: "Get a comprehensive diagnostic review of your previous treatment records, embryology reports, and scans to receive a clear, honest, and expert perspective on your options."
      }
    ]
  }
];

function Services() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="pb-32">
        {/* HERO SECTION - REDESIGNED FOR PREMIUM AESTHETIC */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary-soft/30 via-background to-accent-soft/20 py-24 lg:py-32 border-b border-border/50">
          <div className="pointer-events-none absolute -top-40 -right-40 size-[500px] rounded-full bg-primary/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 -left-40 size-[500px] rounded-full bg-accent/10 blur-3xl" />
          
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-12 items-center">
              <Reveal className="lg:col-span-7 text-left">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-primary uppercase">
                  <Sparkles className="size-3.5 animate-pulse" /> Radiance Services
                </span>
                <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-display leading-[1.1] text-foreground">
                  Our Treatments & <span className="text-gradient">Specialities</span>
                </h1>
                <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground">
                  Dr. Priyanka Singh delivers personalized, ethical healthcare, combining advanced clinical protocols with absolute transparency. Discover our clinical pathways below.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="/contact"
                    className="gradient-brand inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lift hover:-translate-y-0.5 transition-all"
                  >
                    <CalendarHeart className="size-4" /> Book Consultation
                  </a>
                  <a
                    href="#categories-container"
                    className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card/50 px-6 py-3 text-sm font-semibold text-primary hover:bg-primary-soft transition-all"
                  >
                    Explore Treatments
                  </a>
                </div>
              </Reveal>

              <Reveal className="lg:col-span-5 relative hidden lg:block" delay={150}>
                <div className="relative mx-auto w-full max-w-sm aspect-square">
                  <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-primary to-accent opacity-20 blur-xl animate-floaty" />
                  <div className="relative h-full w-full rounded-[2.5rem] bg-gradient-to-br from-card to-primary-soft/30 border border-border p-8 flex flex-col justify-between shadow-soft">
                    <div className="flex justify-between items-start">
                      <span className="grid size-12 place-items-center rounded-2xl bg-primary-soft text-primary">
                        <Activity className="size-6" />
                      </span>
                      <span className="text-xs font-bold text-accent tracking-wider uppercase bg-accent-soft px-3 py-1 rounded-full">
                        Clinical Care
                      </span>
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-display text-2xl text-primary">Patient-Centric Health Solutions</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Ethical, state-of-the-art diagnostics and therapies tailored meticulously to every individual family goal.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CATEGORIES SECTION */}
        <div id="categories-container" className="mx-auto max-w-7xl px-6 space-y-24 mt-24">
          {serviceCategories.map((cat, catIdx) => (
            <section key={cat.category} className="border-t border-border/80 pt-16">
              <div className="grid gap-12 lg:grid-cols-12">
                <Reveal className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
                  <span className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-accent uppercase">
                    {cat.badge}
                  </span>
                  <h2 className="mt-4 text-3xl font-display text-primary leading-tight">{cat.category}</h2>
                  <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                    {cat.description}
                  </p>
                </Reveal>

                <div className="lg:col-span-8 grid gap-6 md:grid-cols-2">
                  {cat.items.map((item, itemIdx) => {
                    const Icon = item.icon;
                    return (
                      <Reveal
                        key={item.title}
                        delay={itemIdx * 80}
                        className="group relative rounded-3xl border border-border bg-gradient-to-br from-card via-card to-primary-soft/10 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift hover:to-accent-soft/15 hover:border-primary/20"
                      >
                        <div className="flex items-center gap-4">
                          <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-primary-soft text-primary transition-transform duration-300 group-hover:scale-110">
                            <Icon className="size-5" />
                          </div>
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                        </div>
                        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                          {item.desc}
                        </p>
                      </Reveal>
                    );
                  })}
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* CTA BANNER */}
        <section className="mx-auto max-w-7xl px-6 mt-32">
          <Reveal>
            <div className="gradient-soft relative overflow-hidden rounded-[2.5rem] border border-border p-10 lg:p-16 text-center shadow-soft">
              <div className="pointer-events-none absolute -top-24 -right-16 size-80 rounded-full bg-accent/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -left-16 size-80 rounded-full bg-primary/20 blur-3xl" />
              <div className="relative max-w-xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-display text-primary">Need a Customized Treatment Plan?</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Book a consultation today to review your scans, discuss medical history, and outline the best path forward.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <a
                    href="/contact"
                    className="gradient-brand inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold text-primary-foreground shadow-lift hover:-translate-y-0.5 transition-all"
                  >
                    <CalendarHeart className="size-4" /> Book Appointment
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
