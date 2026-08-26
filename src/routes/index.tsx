import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Activity,
  Award,
  Baby,
  CalendarHeart,
  CheckCircle2,
  Clock,
  Dna,
  FlaskConical,
  Flower2,
  HeartPulse,
  MessageCircleHeart,
  Microscope,
  Phone,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  Syringe,
  Users,
  MapPin,
  Video,
  Home as HomeIcon,
  Truck,
  PlusCircle,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  Check,
} from "lucide-react";

import doctorProfile from "@/assets/doctor-profile.jpg";
import clinicLab from "@/assets/clinic-lab.jpg";
import coupleCare from "@/assets/couple-care.jpg";
import { Ear, MessageSquare, HandHeart } from "lucide-react";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { Reveal } from "@/components/site/reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Priyanka Singh | Fertility Specialist & Gynecologist" },
      {
        name: "description",
        content:
          "Dr. Priyanka Singh — fertility specialist, obstetrician and gynecologist offering IVF, IUI, high-risk pregnancy and women's health care with a patient-centric approach.",
      },
      { property: "og:title", content: "Dr. Priyanka Singh | Fertility & Women's Health" },
      {
        property: "og:description",
        content:
          "Compassionate fertility treatment, IVF, pregnancy care and advanced gynecology led by Dr. Priyanka Singh.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Home,
});

const ticker = [
  "Free initial fertility assessment",
  "IVF success rate 68%+",
  "Video consultations from home",
  "2400+ happy families",
  "Painless delivery programme",
  "24/7 pregnancy support line",
];

const treatmentsList = [
  {
    category: "Fertility Care",
    badge: "Advanced IVF & IUI",
    items: [
      { icon: FlaskConical, title: "IVF & ICSI Treatments", desc: "Advanced in-vitro fertilization and intracytoplasmic sperm injection with personalized stimulation protocols." },
      { icon: Syringe, title: "IUI (Intrauterine Insemination)", desc: "Gentle first-line fertility treatment with precise cycle timing and follicle monitoring." },
      { icon: Microscope, title: "Oocyte Retrieval, TESA & PESA", desc: "Specialized clinical procedures for egg collection and sperm extraction to assist fertilization." },
      { icon: Users, title: "Egg Donor Programs", desc: "Compassionate donor selection and clinical management for couples needing donor support." },
      { icon: Dna, title: "Fertility Preservation", desc: "Egg, embryo, and sperm freezing services for medical indications or planned parenthood." },
      { icon: Stethoscope, title: "Infertility USG & Diagnostics", desc: "Detailed, advanced diagnostic scanning to assess tubal patency and ovarian reserves." }
    ]
  },
  {
    category: "Pregnancy Care",
    badge: "Safe Motherhood",
    items: [
      { icon: HeartPulse, title: "High-Risk Pregnancy Care", desc: "Dedicated management for cases with gestational diabetes, hypertension, and medical complications." },
      { icon: CalendarHeart, title: "Normal & Painless Delivery", desc: "Comfortable, epidural-supported delivery program managed by our expert clinical team." },
      { icon: ShieldCheck, title: "Recurrent Pregnancy Loss (RPL)", desc: "Comprehensive diagnostic testing and hormonal/immunological support for multiple miscarriages." },
      { icon: Baby, title: "Fetal Growth Monitoring", desc: "Regular high-resolution scans and counseling to track baby's development and wellness." }
    ]
  },
  {
    category: "Women's Health",
    badge: "Women's Wellness",
    items: [
      { icon: Flower2, title: "PCOD & PCOS Treatment", desc: "Multidisciplinary approach focusing on hormone regulation, weight management, and ovulation care." },
      { icon: Sparkles, title: "Advanced Cosmetic Gynecology", desc: "Surgical and non-surgical procedures for intimate health rejuvenation, PRP, and labiaplasty." },
      { icon: Activity, title: "Endometriosis Care", desc: "Advanced pain management, hormonal therapies, and laparoscopic surgery for endometriosis." },
      { icon: PlusCircle, title: "Female Vaccinations", desc: "Essential preventive immunizations including HPV (Cervical Cancer) and Rubella vaccines." },
      { icon: Microscope, title: "Laparoscopic Keyhole Surgery", desc: "Minimally invasive operations for ovarian cysts, uterine fibroids, and diagnostic laparoscopy." }
    ]
  },
  {
    category: "Support & Convenience",
    badge: "Clinical Care at Home",
    items: [
      { icon: HomeIcon, title: "24/7 Home Sample Collection", desc: "Professional lab diagnostic services with blood/urine sample collection from your doorstep." },
      { icon: Truck, title: "Pharmacy Home Delivery", desc: "Get all your prescribed fertility and health medications delivered directly to your home." },
      { icon: Video, title: "Video Consultations", desc: "Review your reports, discuss plans, and consult Dr. Priyanka comfortably from home." },
      { icon: Stethoscope, title: "Second Opinion Services", desc: "Thorough review of previous reports and diagnostic profiles to guide optimal next steps." }
    ]
  }
];

const journeySteps = [
  {
    step: "01",
    phase: "Step 01 · Initial Intake",
    duration: "Day 1 · 45-60 Mins",
    title: "Comprehensive First Consultation",
    icon: Stethoscope,
    tagline: "Unrushed, empathetic listening & medical history review",
    desc: "A relaxed, in-depth conversation discussing your medical background, previous test results, emotional concerns, and specific goals without any rushed time pressure.",
    deliverables: [
      "Evaluation of past scans & medical history",
      "Detailed lifestyle, cycle & hormone intake",
      "Open discussion answering all your questions",
      "Recommendation of only essential tests"
    ],
    doctorQuote: "We listen first. Every couple's story is unique, and our first meeting is about understanding you, not pushing tests.",
    theme: {
      border: "border-teal-500/30",
      bgGradient: "from-teal-500/15 via-card to-emerald-500/10",
      accent: "text-teal-600 dark:text-teal-400",
      badge: "bg-teal-500/15 text-teal-700 dark:text-teal-300 border-teal-500/30",
      glow: "bg-teal-500/20"
    }
  },
  {
    step: "02",
    phase: "Step 02 · Precise Evaluation",
    duration: "Week 1 – 2",
    title: "Targeted Diagnostics & Scans",
    icon: Microscope,
    tagline: "Focused precision testing — zero unnecessary procedures",
    desc: "Targeted hormone evaluations, high-resolution ultrasound scans, semen analysis, and tubal patency assessments done under strict clinical protocols.",
    deliverables: [
      "High-resolution ultrasound & follicle tracking",
      "Hormone profile (AMH, Thyroid, Prolactin, FSH/LH)",
      "Computer-assisted semen analysis (CASA)",
      "Transparent breakdown of diagnostic findings"
    ],
    doctorQuote: "We perform only evidence-based investigations to pinpoint root causes quickly while avoiding unnecessary financial stress.",
    theme: {
      border: "border-sky-500/30",
      bgGradient: "from-sky-500/15 via-card to-blue-500/10",
      accent: "text-sky-600 dark:text-sky-400",
      badge: "bg-sky-500/15 text-sky-700 dark:text-sky-300 border-sky-500/30",
      glow: "bg-sky-500/20"
    }
  },
  {
    step: "03",
    phase: "Step 03 · Custom Strategy",
    duration: "Week 2 – 3",
    title: "Personalized Treatment Roadmap",
    icon: CalendarHeart,
    tagline: "Clear clinical milestones, transparent costs & timeline",
    desc: "Dr. Priyanka discusses your customized treatment blueprint — whether gentle ovulation induction, IUI, IVF, or laparoscopic correction — with fixed timelines and transparent costs.",
    deliverables: [
      "Customized roadmap tailored to your diagnosis",
      "Transparent fee breakdown with zero hidden costs",
      "Medication schedule & success probability",
      "Direct 24/7 coordinator support assignment"
    ],
    doctorQuote: "You will always know what to expect at every stage: the exact timeline, medications, and realistic success rates.",
    theme: {
      border: "border-indigo-500/30",
      bgGradient: "from-indigo-500/15 via-card to-purple-500/10",
      accent: "text-indigo-600 dark:text-indigo-400",
      badge: "bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 border-indigo-500/30",
      glow: "bg-indigo-500/20"
    }
  },
  {
    step: "04",
    phase: "Step 04 · Clinical Excellence",
    duration: "Week 3 – 6",
    title: "Advanced Assisted Treatment",
    icon: FlaskConical,
    tagline: "IUI, IVF, or surgery with continuous monitoring",
    desc: "Gentle ovarian stimulation, precision follicle tracking scans, state-of-the-art embryo culture in world-class labs, and painless embryo transfer guided by Dr. Priyanka.",
    deliverables: [
      "Personalized stimulation protocol for optimal safety",
      "Advanced embryology lab procedures (ICSI, Blastocyst)",
      "Painless ultrasound-guided embryo transfer",
      "Hormonal support and continuous WhatsApp updates"
    ],
    doctorQuote: "From monitoring each follicle to the embryo transfer, every procedure is personally overseen by Dr. Priyanka.",
    theme: {
      border: "border-purple-500/30",
      bgGradient: "from-purple-500/15 via-card to-pink-500/10",
      accent: "text-purple-600 dark:text-purple-400",
      badge: "bg-purple-500/15 text-purple-700 dark:text-purple-300 border-purple-500/30",
      glow: "bg-purple-500/20"
    }
  },
  {
    step: "05",
    phase: "Step 05 · Motherhood & Beyond",
    duration: "Months 1 – 9 & Delivery",
    title: "Positive Pregnancy Care & Delivery",
    icon: Baby,
    tagline: "Early scans, antenatal guidance & safe delivery",
    desc: "From your very first positive beta-hCG test and heartbeat confirmation scan through comprehensive antenatal monitoring to painless delivery.",
    deliverables: [
      "Early pregnancy viability & heartbeat sonography",
      "Trimester-by-trimester nutrition & fetal monitoring",
      "High-risk pregnancy safeguards & gestational care",
      "Normal & painless delivery planning with same doctor"
    ],
    doctorQuote: "Holding your healthy baby in your arms is the ultimate destination of our shared journey.",
    theme: {
      border: "border-rose-500/30",
      bgGradient: "from-rose-500/15 via-card to-amber-500/10",
      accent: "text-rose-600 dark:text-rose-400",
      badge: "bg-rose-500/15 text-rose-700 dark:text-rose-300 border-rose-500/30",
      glow: "bg-rose-500/20"
    }
  }
];

const stats = [
  { value: "14+", label: "Years of experience" },
  { value: "2400+", label: "Babies delivered" },
  { value: "68%", label: "IVF success rate" },
  { value: "4.9★", label: "Patient rating" },
];

const testimonials = [
  { name: "Sneha & Rahul", text: "After five years and two failed cycles elsewhere, Dr. Priyanka explained everything honestly. Our daughter is now eight months old.", tag: "IVF Success" },
  { name: "Meghana R.", text: "My PCOS was dismissed for years. The plan she designed changed my cycles, my energy and my confidence completely.", tag: "PCOS Care" },
  { name: "Aarti K.", text: "A high-risk twin pregnancy handled with such calm. She answered every late-night call herself.", tag: "Pregnancy" },
];

const faqs = [
  { q: "When should we consult a fertility specialist?", a: "After 12 months of trying (or 6 months if you are over 35), or earlier if you have irregular cycles, PCOS, endometriosis or a previous loss." },
  { q: "Is IVF painful?", a: "Most patients describe it as mildly uncomfortable. Injections use fine needles and egg retrieval is done under short anaesthesia." },
  { q: "Do you offer video consultations?", a: "Yes. Reviews, report discussions and follow-ups can be done online, with in-person visits scheduled only when needed." },
  { q: "How transparent is the cost?", a: "You receive a written estimate before starting any cycle, including medication ranges and possible add-ons." },
];

function SectionLabel({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-primary uppercase">
      <Sparkles className="size-3.5" /> {children}
    </span>
  );
}

function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeJourneyStep, setActiveJourneyStep] = useState(0);
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        {/* HERO */}
        <section id="home" className="gradient-soft relative overflow-hidden">
          <div className="pointer-events-none absolute -top-28 -left-24 size-96 rounded-full bg-primary/15 blur-3xl" />
          <div className="pointer-events-none absolute top-32 -right-20 size-96 rounded-full bg-accent/15 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:py-28">
            <Reveal>
              <SectionLabel>Fertility & Women's Health</SectionLabel>
              <h1 className="mt-6 text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
                Where hope becomes a <span className="text-gradient">heartbeat</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Dr. Priyanka Singh is a fertility specialist, obstetrician and gynecologist known for her
                patient-centric approach and dedication to advancing women's healthcare — from conception
                challenges to safe motherhood.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="gradient-brand inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5"
                >
                  <CalendarHeart className="size-4" /> Book Consultation
                </a>
                <a
                  href="#fertility"
                  className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-card px-7 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-primary-soft"
                >
                  Explore Treatments
                </a>
              </div>

              <dl className="mt-12 grid max-w-lg grid-cols-2 gap-6 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label}>
                    <dt className="font-display text-2xl text-primary">{s.value}</dt>
                    <dd className="mt-1 text-xs text-muted-foreground">{s.label}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={150} className="relative">
              <div className="relative mx-auto max-w-md">
                <div className="gradient-brand absolute -inset-3 rounded-[2.5rem] opacity-25 blur-2xl" />
                <img
                  src={doctorProfile}
                  alt="Dr. Priyanka Singh, fertility specialist and gynecologist"
                  width={1024}
                  height={1280}
                  className="relative rounded-[2rem] object-cover shadow-lift"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=1024";
                  }}
                />
                <div className="floaty absolute -bottom-6 -left-6 rounded-2xl bg-card p-4 shadow-soft">
                  <p className="flex items-center gap-2 text-sm font-semibold">
                    <Award className="size-4 text-accent" /> MD (OBG), Fellowship in RM
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">Reproductive Medicine Specialist</p>
                </div>
                <div className="absolute -top-5 -right-4 rounded-2xl bg-card px-4 py-3 shadow-soft">
                  <p className="flex items-center gap-1.5 text-sm font-semibold">
                    <Star className="size-4 fill-gold text-gold" /> 4.9 / 5
                  </p>
                  <p className="text-[11px] text-muted-foreground">1,200+ reviews</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* ticker */}
          <div className="gradient-deep overflow-hidden py-3 text-primary-foreground">
            <div className="marquee-track flex w-max gap-10 whitespace-nowrap text-sm">
              {[...ticker, ...ticker].map((t, i) => (
                <span key={i} className="flex items-center gap-2 opacity-90">
                  <Sparkles className="size-3.5" /> {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT THE DOCTOR (MATCHING ATTACHED IMAGE) */}
        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-14 lg:grid-cols-12 items-center">
            {/* Image Column Left */}
            <Reveal className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-lg lg:mx-0">
                <div className="gradient-brand absolute -inset-3 rounded-[2.5rem] opacity-20 blur-2xl" />
                <div className="aspect-[4/4.5] overflow-hidden rounded-[2.5rem] shadow-lift border border-border bg-card">
                  <img
                    src={coupleCare}
                    alt="Dr. Priyanka Singh Patient Care"
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* Floating Stat Badge */}
                <div className="floaty absolute -bottom-5 -right-5 rounded-2xl bg-card p-4 border border-border shadow-soft">
                  <p className="font-display text-2xl text-primary font-bold">98%</p>
                  <p className="text-xs text-muted-foreground font-medium">Patient satisfaction</p>
                </div>
              </div>
            </Reveal>

            {/* Content Column Right */}
            <Reveal className="lg:col-span-6" delay={100}>
              <SectionLabel>About The Doctor</SectionLabel>
              <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-display leading-[1.15] text-foreground">
                Advancing women's healthcare with <span className="text-primary">empathy</span> <span className="text-accent font-normal">first</span>
              </h2>
              <p className="mt-6 text-muted-foreground text-sm sm:text-base leading-relaxed">
                Dr. Priyanka Singh combines advanced reproductive medicine with a personal style of care. Every couple receives an honest assessment, a plan tailored to their body and budget, and a doctor who stays reachable through every step of the journey.
              </p>

              {/* 6-Item Checklist */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2 text-sm">
                {[
                  "Individualised IVF protocols",
                  "Same doctor at every visit",
                  "Transparent, written cost estimates",
                  "Evidence-based, no over-treatment",
                  "Emotional & nutritional support",
                  "Online follow-up consultations"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="size-5 text-primary shrink-0" />
                    <span className="text-foreground/90 font-medium text-xs sm:text-sm">{item}</span>
                  </div>
                ))}
              </div>

              {/* Call CTA Button */}
              <div className="mt-10">
                <a
                  href="tel:+917995574432"
                  className="inline-flex items-center gap-2.5 rounded-full bg-foreground text-background px-7 py-3.5 text-sm font-semibold hover:bg-foreground/90 transition-all shadow-md cursor-pointer"
                >
                  <Phone className="size-4 text-primary" /> Talk to Dr. Priyanka
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CARE PHILOSOPHY */}
        <section className="mx-auto max-w-7xl px-6 py-20 border-t border-border">
          <Reveal className="max-w-3xl mx-auto text-center">
            <SectionLabel>My Care Philosophy</SectionLabel>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-display text-foreground leading-tight">
              Medicine with <span className="text-gradient">Expertise.</span> Care with <span className="text-gradient">Empathy.</span>
            </h2>
            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-brand"></div>
            <p className="mt-4 text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Fertility and maternal healthcare is deeply personal. My practice is built on three core clinical commitments to ensure you feel supported, respected, and informed.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {/* Pillar 1: Listen First */}
            <Reveal delay={100}>
              <div className="group h-full rounded-3xl bg-card p-8 border border-border hover:border-primary/40 shadow-sm hover:shadow-soft transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="grid size-14 place-items-center rounded-2xl bg-primary-soft text-primary group-hover:scale-110 transition-transform duration-300">
                      <Ear className="size-7" strokeWidth={1.75} />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-primary bg-primary-soft px-3 py-1 rounded-full">
                      Pillar 01
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                    Listen First
                  </h3>
                  <p className="mt-2 text-xs font-semibold text-primary">
                    Understanding your story before prescribing.
                  </p>
                  <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Every individual's health history is unique. We give you all the time you need to share your concerns and previous challenges without rush.
                  </p>

                  <div className="mt-6 pt-5 border-t border-border space-y-2">
                    {[
                      "Unhurried initial consultations",
                      "Deep emotional & holistic support",
                      "Complete respect for your choices"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="text-primary font-bold">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Pillar 2: Explain Clearly */}
            <Reveal delay={200}>
              <div className="group h-full rounded-3xl bg-card p-8 border border-border hover:border-primary/40 shadow-sm hover:shadow-soft transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="grid size-14 place-items-center rounded-2xl bg-primary-soft text-primary group-hover:scale-110 transition-transform duration-300">
                      <MessageSquare className="size-7" strokeWidth={1.75} />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-primary bg-primary-soft px-3 py-1 rounded-full">
                      Pillar 02
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                    Explain Clearly
                  </h3>
                  <p className="mt-2 text-xs font-semibold text-primary">
                    Transparent facts with zero medical jargon.
                  </p>
                  <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    We demystify clinical reports and outline all treatment options with realistic success rates and clear written timelines so you make confident choices.
                  </p>

                  <div className="mt-6 pt-5 border-t border-border space-y-2">
                    {[
                      "Honest diagnostic evaluations",
                      "Transparent treatment roadmaps",
                      "Zero hidden fees or surprise costs"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="text-primary font-bold">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Pillar 3: Care Personally */}
            <Reveal delay={300}>
              <div className="group h-full rounded-3xl bg-card p-8 border border-border hover:border-primary/40 shadow-sm hover:shadow-soft transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="grid size-14 place-items-center rounded-2xl bg-accent-soft text-accent group-hover:scale-110 transition-transform duration-300">
                      <HandHeart className="size-7" strokeWidth={1.75} />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-accent bg-accent-soft px-3 py-1 rounded-full">
                      Pillar 03
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                    Care Personally
                  </h3>
                  <p className="mt-2 text-xs font-semibold text-accent">
                    Dedicated doctor continuity from start to baby.
                  </p>
                  <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    You are never passed around to junior doctors. Every consultation, scan, procedure, and delivery is managed personally by Dr. Priyanka Singh.
                  </p>

                  <div className="mt-6 pt-5 border-t border-border space-y-2">
                    {[
                      "1-on-1 doctor attention throughout",
                      "Customized ovarian stimulation plans",
                      "Seamless prenatal to delivery care"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="text-accent font-bold">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* AREAS OF EXPERTISE */}
        <section id="expertise" className="bg-muted/30 py-24 border-t border-border">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal className="text-center max-w-3xl mx-auto">
              <SectionLabel>My Areas of Expertise</SectionLabel>
              <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-display text-foreground">Specialized Care for Every Woman</h2>
              <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-brand"></div>
              <p className="mt-4 text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
                Comprehensive, evidence-based solutions designed around your unique health and reproductive goals.
              </p>
            </Reveal>

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* Card 01 - Fertility */}
              <Reveal delay={100}>
                <div className="group h-full rounded-3xl bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft border border-border hover:border-primary/40 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="grid size-14 place-items-center rounded-2xl bg-primary-soft text-primary transition-transform duration-300 group-hover:scale-110 shadow-sm">
                        <Baby className="size-7" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-primary-soft text-primary">
                        Fertility & IVF
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors leading-snug">
                      Fertility & Reproductive Medicine
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Advanced IVF, ICSI, IUI, fertility preservation, ovarian stimulation, and comprehensive diagnostic evaluation.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs font-semibold text-primary">
                    <span>Explore Fertility Care</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </Reveal>

              {/* Card 02 - Pregnancy */}
              <Reveal delay={200}>
                <div className="group h-full rounded-3xl bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft border border-border hover:border-primary/40 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="grid size-14 place-items-center rounded-2xl bg-accent-soft text-accent transition-transform duration-300 group-hover:scale-110 shadow-sm">
                        <HeartPulse className="size-7" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-accent-soft text-accent">
                        Motherhood
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors leading-snug">
                      Pregnancy & Obstetric Care
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Complete antenatal care, high-risk pregnancy monitoring, normal and painless delivery, and postpartum support.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs font-semibold text-accent">
                    <span>Motherhood Care</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </Reveal>

              {/* Card 03 - Gynecological */}
              <Reveal delay={300}>
                <div className="group h-full rounded-3xl bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft border border-border hover:border-primary/40 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="grid size-14 place-items-center rounded-2xl bg-primary-soft text-primary transition-transform duration-300 group-hover:scale-110 shadow-sm">
                        <Flower2 className="size-7" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-primary-soft text-primary">
                        Women's Health
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors leading-snug">
                      Gynecological Care
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      PCOS/PCOD management, menstrual irregularities, endometriosis treatment, hormonal health, and adolescent care.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs font-semibold text-primary">
                    <span>Gynecology Solutions</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </Reveal>

              {/* Card 04 - Advanced Gynecology */}
              <Reveal delay={400}>
                <div className="group h-full rounded-3xl bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft border border-border hover:border-primary/40 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="grid size-14 place-items-center rounded-2xl bg-accent-soft text-accent transition-transform duration-300 group-hover:scale-110 shadow-sm">
                        <Activity className="size-7" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-accent-soft text-accent">
                        Specialized
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors leading-snug">
                      Advanced Gynecology & Surgery
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Minimally invasive laparoscopic surgery, hysteroscopy, cosmetic gynecology rejuvenation, and female wellness.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs font-semibold text-accent">
                    <span>Advanced Procedures</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* OUR LABORATORY (MATCHING ATTACHED IMAGE) */}
        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-14 lg:grid-cols-12 items-center">
            {/* Left Content Column */}
            <Reveal className="lg:col-span-6">
              <SectionLabel>Our Laboratory</SectionLabel>
              <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-display leading-[1.15] text-foreground">
                Technology that quietly raises your <span className="text-primary">chanc</span><span className="text-accent">es</span>
              </h2>
              <p className="mt-6 text-muted-foreground text-sm sm:text-base leading-relaxed">
                A dedicated embryology suite with round-the-clock environmental control, so every embryo grows in conditions as close to the human body as science allows.
              </p>

              {/* 4 Cards 2x2 Grid */}
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {[
                  { title: "Time-lapse incubators", desc: "Uninterrupted embryo monitoring" },
                  { title: "ISO Class-5 air", desc: "HEPA-filtered clean-room lab" },
                  { title: "Vitrification freezing", desc: ">95% embryo survival on thaw" },
                  { title: "Electronic witnessing", desc: "Zero sample mix-up protocol" }
                ].map((item, idx) => (
                  <div key={idx} className="rounded-2xl bg-card p-5 border border-border shadow-sm hover:border-primary/40 hover:shadow-soft transition-all">
                    <h3 className="font-semibold text-foreground text-sm sm:text-base">{item.title}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Right Image Column */}
            <Reveal className="lg:col-span-6" delay={150}>
              <div className="relative mx-auto max-w-lg lg:mx-0">
                <div className="gradient-soft absolute -inset-3 rounded-[2.5rem] opacity-40 blur-2xl" />
                <div className="aspect-[4/3] overflow-hidden rounded-[2.5rem] shadow-lift border border-border bg-card">
                  <img
                    src={clinicLab}
                    alt="Embryology Laboratory at Radiance"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* TREATMENTS & SERVICES */}
        <section id="treatments" className="mx-auto max-w-7xl px-6 py-24 border-t border-border">
          <Reveal className="text-center max-w-3xl mx-auto">
            <SectionLabel>Treatments & Services</SectionLabel>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-display text-foreground">Comprehensive Healthcare Offerings</h2>
            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-brand"></div>
            <p className="mt-6 text-muted-foreground text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              From advanced clinical fertility programs to supportive home care services, Dr. Priyanka Singh provides a full spectrum of health solutions.
            </p>
          </Reveal>

          {/* Tabs header */}
          <div className="mt-12 flex flex-wrap justify-center gap-3 border-b border-border pb-6">
            {treatmentsList.map((cat, idx) => (
              <button
                key={cat.category}
                onClick={() => setActiveTab(idx)}
                className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  activeTab === idx
                    ? "gradient-brand text-primary-foreground shadow-lift scale-105"
                    : "bg-card text-muted-foreground border border-border hover:border-primary/30 hover:text-primary"
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>

          {/* Active Tab Content */}
          <div className="mt-12">
            <Reveal key={activeTab} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {treatmentsList[activeTab].items.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="group rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft hover:border-primary/40 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-4">
                        <div className="grid size-13 shrink-0 place-items-center rounded-2xl bg-primary-soft text-primary transition-transform duration-300 group-hover:scale-110 shadow-sm">
                          <Icon className="size-6" />
                        </div>
                        <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors leading-snug">
                          {item.title}
                        </h3>
                      </div>
                      <p className="mt-4 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs text-primary font-medium">
                      <span>Learn more details</span>
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </div>
                  </div>
                );
              })}
            </Reveal>
          </div>
        </section>

        {/* WHY CHOOSE DR. PRIYANKA SINGH */}
        <section className="bg-gradient-to-b from-primary-soft/15 via-card/50 to-transparent py-24 border-t border-border">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal className="text-center max-w-3xl mx-auto">
              <SectionLabel>Clinical Distinction</SectionLabel>
              <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-display text-foreground leading-[1.15]">
                Why Choose <span className="text-gradient">Dr. Priyanka Singh</span>
              </h2>
              <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-brand"></div>
              <p className="mt-4 text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                Reproductive medicine and maternal health require specialized clinical training, high precision, and unwavering empathy. Here is how Dr. Priyanka delivers superior patient outcomes.
              </p>
            </Reveal>

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Award,
                  badge: "Fellowship Trained",
                  title: "Reproductive Medicine Fellowship",
                  desc: "Specialized ART training at Oasis Fertility Centre with extensive hands-on expertise in advanced IVF, ICSI, and blastocyst culture.",
                  iconBg: "bg-primary-soft text-primary",
                  badgeBg: "bg-primary-soft text-primary",
                  highlight: "Mastery in ART Protocols"
                },
                {
                  icon: Users,
                  badge: "Doctor Continuity",
                  title: "1-on-1 Direct Doctor Care",
                  desc: "You consult, scan, undergo embryo transfer, and deliver with Dr. Priyanka herself — never handed off to rotating assistants.",
                  iconBg: "bg-accent-soft text-accent",
                  badgeBg: "bg-accent-soft text-accent",
                  highlight: "Same Doctor Every Visit"
                },
                {
                  icon: ShieldCheck,
                  badge: "Complex Cases",
                  title: "High-Risk Pregnancy & RPL",
                  desc: "Proven track record in managing recurrent pregnancy losses, failed IVF cycles, gestational diabetes, and advanced maternal age.",
                  iconBg: "bg-primary-soft text-primary",
                  badgeBg: "bg-primary-soft text-primary",
                  highlight: "Specialized High-Risk Care"
                },
                {
                  icon: Sparkles,
                  badge: "100% Transparency",
                  title: "Ethical & Transparent Advice",
                  desc: "Zero unnecessary investigations or hidden costs. Written treatment estimates and truthful success likelihoods from day one.",
                  iconBg: "bg-accent-soft text-accent",
                  badgeBg: "bg-accent-soft text-accent",
                  highlight: "Zero Hidden Fees"
                }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.title} delay={idx * 90}>
                    <div className="group h-full rounded-3xl border border-border bg-card p-7 hover:shadow-soft hover:border-primary/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-6">
                          <div className={`grid size-14 place-items-center rounded-2xl ${item.iconBg} transition-transform duration-300 group-hover:scale-110 shadow-sm`}>
                            <Icon className="size-7" />
                          </div>
                          <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${item.badgeBg}`}>
                            {item.badge}
                          </span>
                        </div>
                        <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors leading-snug">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                          {item.desc}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs font-semibold text-primary">
                        <span>{item.highlight}</span>
                        <span className="transition-transform group-hover:translate-x-1">✓</span>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* YOUR JOURNEY - INTERACTIVE STAGE SHOWCASE */}
        <section id="journey" className="mx-auto max-w-7xl px-6 py-24">
          <Reveal className="max-w-3xl mx-auto text-center">
            <SectionLabel>Your Journey</SectionLabel>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-display text-foreground">
              A Structured Roadmap to <span className="text-gradient">Motherhood</span>
            </h2>
            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-brand"></div>
            <p className="mt-4 text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Every step is intentional, evidence-based, and guided personally by Dr. Priyanka Singh. Click each milestone below to explore what happens.
            </p>
          </Reveal>

          {/* Stepper Navigation Nodes */}
          <div className="mt-14 overflow-x-auto pb-4 -mx-6 px-6 sm:mx-0 sm:px-0">
            <div className="min-w-[700px] lg:min-w-full">
              <div className="relative grid grid-cols-5 gap-3">
                {/* Connecting background progress track */}
                <div className="pointer-events-none absolute top-7 left-12 right-12 h-1 bg-border z-0 hidden sm:block">
                  <div
                    className="h-full gradient-brand transition-all duration-500 rounded-full"
                    style={{ width: `${(activeJourneyStep / (journeySteps.length - 1)) * 100}%` }}
                  />
                </div>

                {journeySteps.map((step, idx) => {
                  const Icon = step.icon;
                  const isActive = activeJourneyStep === idx;
                  const isPassed = activeJourneyStep > idx;
                  return (
                    <button
                      key={step.step}
                      onClick={() => setActiveJourneyStep(idx)}
                      className={`group relative z-10 flex flex-col items-center text-center p-3 rounded-2xl transition-all duration-300 cursor-pointer ${
                        isActive
                          ? "bg-card shadow-lift border border-primary/30 scale-105"
                          : "hover:bg-card/60 opacity-80 hover:opacity-100"
                      }`}
                    >
                      {/* Node circle */}
                      <div
                        className={`size-14 rounded-2xl grid place-items-center font-display font-bold text-base transition-all duration-300 shadow-sm ${
                          isActive
                            ? "gradient-brand text-primary-foreground shadow-lift ring-4 ring-primary/20 scale-110"
                            : isPassed
                            ? "bg-primary-soft text-primary border border-primary/30"
                            : "bg-muted text-muted-foreground border border-border"
                        }`}
                      >
                        <Icon className="size-6" />
                      </div>

                      <span className="mt-3 text-[11px] font-bold tracking-wider uppercase text-primary">
                        {step.phase.split(" · ")[0]}
                      </span>
                      <span className={`mt-1 text-xs font-semibold line-clamp-1 ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
                        {step.title.split(" ")[0]} {step.title.split(" ")[1] || ""}
                      </span>
                      <span className="mt-1 text-[10px] text-muted-foreground/80 px-2 py-0.5 rounded-full bg-muted/60">
                        {step.duration}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Active Step Detailed Spotlight Card */}
          <div className="mt-8">
            <Reveal key={activeJourneyStep}>
              {(() => {
                const current = journeySteps[activeJourneyStep];
                const Icon = current.icon;
                return (
                  <div className={`relative overflow-hidden rounded-[2.5rem] border ${current.theme.border} bg-gradient-to-br ${current.theme.bgGradient} p-8 sm:p-12 lg:p-14 shadow-lift transition-all duration-500`}>
                    <div className={`pointer-events-none absolute -top-32 -right-32 size-[400px] rounded-full ${current.theme.glow} blur-3xl`} />
                    <div className="pointer-events-none absolute -bottom-32 -left-32 size-[400px] rounded-full bg-primary/10 blur-3xl" />

                    <div className="relative grid gap-10 lg:grid-cols-12 items-center">
                      {/* Left details */}
                      <div className="lg:col-span-7 space-y-6">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider border ${current.theme.badge}`}>
                            <Icon className="size-3.5" /> {current.phase}
                          </span>
                          <span className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground bg-card/80 border border-border px-3 py-1 rounded-full">
                            <Clock className="size-3.5 text-primary" /> {current.duration}
                          </span>
                        </div>

                        <div>
                          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display text-foreground font-semibold leading-tight">
                            {current.title}
                          </h3>
                          <p className={`mt-2 text-sm sm:text-base font-medium ${current.theme.accent}`}>
                            {current.tagline}
                          </p>
                        </div>

                        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                          {current.desc}
                        </p>

                        {/* Deliverables checklist */}
                        <div className="pt-2">
                          <p className="text-xs font-bold uppercase tracking-wider text-foreground mb-3">
                            Key Milestones & Clinical Focus:
                          </p>
                          <div className="grid gap-2.5 sm:grid-cols-2">
                            {current.deliverables.map((item, idx) => (
                              <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-card/70 border border-border/80 text-xs sm:text-sm">
                                <span className="grid size-5 place-items-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-bold shrink-0 mt-0.5">
                                  ✓
                                </span>
                                <span className="text-muted-foreground leading-snug">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right Doctor quote card & Navigation */}
                      <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
                        <div className="rounded-3xl bg-card/90 border border-border/90 p-7 shadow-soft backdrop-blur relative overflow-hidden">
                          <div className="absolute top-4 right-4 text-primary/10">
                            <Quote className="size-16" />
                          </div>
                          <div className="flex items-center gap-3 mb-4">
                            <div className="size-10 rounded-full overflow-hidden border border-primary/30 shadow-sm shrink-0">
                              <img src={doctorProfile} alt="Dr. Priyanka" className="w-full h-full object-cover" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-foreground">Dr. Priyanka Singh</p>
                              <p className="text-[11px] text-muted-foreground">Clinical Director</p>
                            </div>
                          </div>
                          <blockquote className="text-xs sm:text-sm text-muted-foreground italic leading-relaxed relative z-10">
                            "{current.doctorQuote}"
                          </blockquote>
                        </div>

                        {/* Step Carousel Navigation Controls */}
                        <div className="flex items-center justify-between gap-4 pt-2">
                          <button
                            disabled={activeJourneyStep === 0}
                            onClick={() => setActiveJourneyStep((prev) => Math.max(0, prev - 1))}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-card text-xs font-semibold text-foreground hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-sm cursor-pointer"
                          >
                            <ArrowLeft className="size-4" /> Previous Step
                          </button>

                          <span className="text-xs font-bold text-muted-foreground">
                            {activeJourneyStep + 1} of {journeySteps.length}
                          </span>

                          <button
                            disabled={activeJourneyStep === journeySteps.length - 1}
                            onClick={() => setActiveJourneyStep((prev) => Math.min(journeySteps.length - 1, prev + 1))}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full gradient-brand text-xs font-semibold text-primary-foreground hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-lift cursor-pointer"
                          >
                            Next Step <ArrowRight className="size-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </Reveal>
          </div>

          {/* Quick Overview 5-Grid Mini Roadmap Cards */}
          <div className="mt-8 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {journeySteps.map((j, i) => {
              const Icon = j.icon;
              const isSelected = activeJourneyStep === i;
              return (
                <button
                  key={j.step}
                  onClick={() => setActiveJourneyStep(i)}
                  className={`text-left rounded-2xl border p-4 transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? `bg-gradient-to-br ${j.theme.bgGradient} ${j.theme.border} shadow-lift scale-102`
                      : "bg-card/80 border-border hover:border-primary/30 hover:bg-card"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-lg font-bold text-primary/40">{j.step}</span>
                    <Icon className={`size-4 ${isSelected ? j.theme.accent : "text-muted-foreground"}`} />
                  </div>
                  <h4 className="mt-2 text-xs font-semibold text-foreground line-clamp-1">{j.title}</h4>
                  <p className="mt-1 text-[11px] text-muted-foreground line-clamp-1">{j.duration}</p>
                </button>
              );
            })}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="gradient-deep relative overflow-hidden py-24 text-primary-foreground">
          <div className="pointer-events-none absolute -top-20 left-1/3 size-96 rounded-full bg-accent/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 right-1/4 size-96 rounded-full bg-primary/20 blur-3xl" />
          
          <div className="relative mx-auto max-w-7xl px-6 text-center lg:text-left">
            <Reveal className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] uppercase backdrop-blur">
                <MessageCircleHeart className="size-3.5 text-accent" /> Patient Stories
              </span>
              <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-display leading-tight">Journeys That Ended in Joy</h2>
              <p className="mt-3 text-primary-foreground/80 text-sm sm:text-base">
                Real experiences shared by parents and patients treated by Dr. Priyanka Singh.
              </p>
            </Reveal>

            {/* Testimonials Autoscrolling Marquee */}
            <div className="mt-14 overflow-hidden py-6 -mx-6 px-6">
              <div className="flex w-max gap-6 animate-marquee-track hover:[animation-play-state:paused]">
                {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((t, i) => (
                  <figure key={i} className="w-[320px] sm:w-[420px] shrink-0 rounded-3xl bg-white/10 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:bg-white/15 border border-white/20 shadow-2xl flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between">
                        <Quote className="size-8 opacity-75 text-accent" />
                        <div className="flex items-center gap-1 text-gold text-xs font-bold">
                          {"★".repeat(5)}
                        </div>
                      </div>
                      <blockquote className="mt-5 text-sm leading-relaxed opacity-95 italic">"{t.text}"</blockquote>
                    </div>
                    <figcaption className="mt-6 flex items-center justify-between text-sm pt-4 border-t border-white/15">
                      <div className="flex items-center gap-3">
                        <div className="size-9 rounded-full bg-accent/30 grid place-items-center font-bold text-white text-xs border border-white/20">
                          {t.name.charAt(0)}
                        </div>
                        <span className="font-semibold text-white">{t.name}</span>
                      </div>
                      <span className="rounded-full bg-accent/25 border border-accent/40 px-3 py-1 text-[11px] font-semibold text-accent-foreground shadow-sm">{t.tag}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-4xl px-6 py-24">
          <Reveal className="text-center">
            <SectionLabel>Questions & Answers</SectionLabel>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-display text-foreground">Answers Before You Ask</h2>
            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-brand"></div>
          </Reveal>
          <div className="mt-12 space-y-4">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 70}>
                <details className="group rounded-3xl border border-primary/15 bg-gradient-to-r from-card via-card to-primary-soft/10 p-6 transition-all duration-300 open:border-primary/40 open:shadow-lift">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-foreground text-base sm:text-lg">
                    {f.q}
                    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-primary-soft text-primary transition-transform duration-300 group-open:rotate-45 font-bold">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-xs sm:text-sm leading-relaxed text-muted-foreground border-t border-border/50 pt-4">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </section>

        {/* BOOK A CONSULTATION / CTA SECTION - COMPLETELY REDESIGNED */}
        <section id="contact" className="mx-auto max-w-7xl px-6 pb-24">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary-soft/40 via-card to-accent-soft/30 border border-primary/20 p-8 sm:p-12 lg:p-16 shadow-lift">
              <div className="pointer-events-none absolute -top-32 -right-32 size-[450px] rounded-full bg-accent/15 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-32 -left-32 size-[450px] rounded-full bg-primary/15 blur-3xl" />

              <div className="relative grid gap-12 lg:grid-cols-12 items-center">
                {/* Left Column: Direct Consultation Info */}
                <div className="lg:col-span-6 space-y-6">
                  <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-primary uppercase border border-primary/20">
                    <Sparkles className="size-3.5" /> Direct Consultation
                  </span>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display leading-tight text-foreground">
                    Book an Appointment with <span className="text-gradient">Dr. Priyanka Singh</span>
                  </h2>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    Take the first step towards compassionate, expert care. Schedule your visit at Radiance Speciality Clinics to discuss your health, scans, and treatments in a warm, confidential setting.
                  </p>

                  <div className="space-y-4 pt-2">
                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-card/80 border border-border shadow-sm">
                      <div className="grid size-12 place-items-center rounded-xl bg-primary-soft text-primary shrink-0">
                        <Phone className="size-5" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Direct Appointment Line</p>
                        <a href="tel:+917995574432" className="text-base font-semibold text-primary hover:underline">
                          +91 7995574432
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-card/80 border border-border shadow-sm">
                      <div className="grid size-12 place-items-center rounded-xl bg-accent-soft text-accent shrink-0">
                        <Clock className="size-5" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">OPD Timings</p>
                        <p className="text-sm font-semibold text-foreground">Mon – Sat: 9:00 AM – 9:00 PM</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-card/80 border border-border shadow-sm">
                      <div className="grid size-12 place-items-center rounded-xl bg-primary-soft text-primary shrink-0">
                        <MapPin className="size-5" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Clinic Location</p>
                        <p className="text-sm font-semibold text-foreground">Bachupally, Medchal Malkajgiri, Hyderabad</p>
                        <p className="text-[11px] text-accent font-medium mt-0.5">Above Dominos Pizza · Pagadala Pride</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Quick Booking Form */}
                <div className="lg:col-span-6">
                  <div className="rounded-3xl bg-card/95 border border-primary/20 p-8 shadow-2xl backdrop-blur-sm">
                    <h3 className="text-xl font-display text-primary font-semibold mb-1">Schedule Appointment Slot</h3>
                    <p className="text-xs text-muted-foreground mb-6">Our patient care coordinator will call you back within a few hours to confirm your timing.</p>

                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        alert("Thank you! Your appointment request has been submitted. Our team will call you at +91 7995574432 shortly.");
                      }}
                      className="space-y-4"
                    >
                      <div>
                        <label className="block text-xs font-semibold text-muted-foreground uppercase mb-1">Your Full Name</label>
                        <input
                          required
                          type="text"
                          placeholder="e.g. Anitha Sharma"
                          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary transition-colors"
                        />
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="block text-xs font-semibold text-muted-foreground uppercase mb-1">Phone Number</label>
                          <input
                            required
                            type="tel"
                            placeholder="Mobile number"
                            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-muted-foreground uppercase mb-1">Specialty Service</label>
                          <select className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary transition-colors">
                            <option>Fertility & IVF Consultation</option>
                            <option>Pregnancy Care / Antenatal</option>
                            <option>PCOS / Ovulation Care</option>
                            <option>Cosmetic Gynecology</option>
                            <option>Laparoscopic Keyhole Surgery</option>
                            <option>General Gynecology</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-muted-foreground uppercase mb-1">Brief Medical Concern (Optional)</label>
                        <textarea
                          rows={3}
                          placeholder="Tell us briefly about your concern or preferred appointment day..."
                          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary transition-colors resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full gradient-brand inline-flex items-center justify-center gap-2 rounded-xl px-6 py-4 text-sm font-semibold text-primary-foreground shadow-lift hover:-translate-y-0.5 transition-all mt-2 cursor-pointer"
                      >
                        <CalendarHeart className="size-5" /> Request Appointment Slot
                      </button>

                      <div className="flex items-center justify-center gap-2 pt-2 text-[11px] text-muted-foreground">
                        <ShieldCheck className="size-4 text-emerald-500" /> 100% Confidential Patient Care
                      </div>
                    </form>
                  </div>
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
