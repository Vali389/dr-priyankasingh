import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { Reveal } from "@/components/site/reveal";
import { Award, BookOpen, Heart, GraduationCap, ShieldCheck } from "lucide-react";
import doctorProfile from "@/assets/doctor-profile.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Dr. Priyanka Singh | Fertility Specialist" },
      {
        name: "description",
        content: "Learn more about Dr. Priyanka Singh, her qualifications, experience, and empathetic approach to women's healthcare and fertility.",
      },
    ],
  }),
  component: About,
});

function SectionLabel({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-primary uppercase">
      {children}
    </span>
  );
}

function About() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="pb-32">
        {/* HEADER HERO - REDESIGNED FOR PREMIUM AESTHETIC */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary-soft/30 via-background to-accent-soft/20 py-24 border-b border-border/50">
          <div className="pointer-events-none absolute -top-40 -right-40 size-[500px] rounded-full bg-primary/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 -left-40 size-[500px] rounded-full bg-accent/10 blur-3xl" />
          
          <div className="relative mx-auto max-w-7xl px-6 text-center">
            <Reveal>
              <SectionLabel>About The Director</SectionLabel>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-display leading-[1.1] text-foreground">
                Dr. Priyanka <span className="text-gradient">Singh</span>
              </h1>
              <p className="text-xl text-primary mt-4 font-medium tracking-wide">
                MD (OBG) · Fellowship in Reproductive Medicine (Oasis Fertility)
              </p>
            </Reveal>
          </div>
        </section>

        {/* PROFILE SECTION */}
        <section className="mx-auto max-w-7xl px-6 mt-16">
          <div className="grid gap-14 lg:grid-cols-12 items-start">
            <Reveal className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:mx-0">
                <div className="gradient-brand absolute -inset-3 rounded-[2.5rem] opacity-20 blur-2xl animate-floaty" />
                <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-lift border border-border bg-card">
                  <img
                    src={doctorProfile}
                    alt="Dr. Priyanka Singh"
                    className="h-full w-full object-cover bg-muted"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=1024";
                    }}
                  />
                </div>
                <div className="floaty absolute -bottom-6 -right-6 rounded-2xl bg-card p-4 border border-border shadow-soft">
                  <p className="flex items-center gap-2 text-sm font-semibold">
                    <Award className="size-4 text-accent" /> Director & Co-Founder
                  </p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">Radiance Speciality Clinics</p>
                </div>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-7" delay={100}>
              <h2 className="text-3xl font-display text-primary leading-tight">Empowering Women's Health Journeys</h2>
              
              <div className="mt-6 space-y-6 text-muted-foreground leading-relaxed text-sm sm:text-base">
                <p>
                  Dr. Priyanka Singh is a highly skilled fertility specialist, obstetrician, and gynecologist, co-founder, and director of Radiance Speciality Clinics. Dedicated to providing comprehensive and compassionate care to women, she has established herself as a trusted name in reproductive medicine and advanced gynecology.
                </p>
                <p>
                  Her academic journey was marked by top academic honors, graduating with her MBBS in 2017, followed by her MD in Obstetrics and Gynecology (2019-2022). She then completed an intensive Fellowship in Reproductive Medicine at Oasis Fertility Centre, Hyderabad (2024), mastering modern procedures like IVF, ICSI, and oocyte retrieval.
                </p>
                <p>
                  Prior to establishing Radiance, Dr. Priyanka gained invaluable clinical experience working at premium healthcare institutions including Kokilaben Dhirubhai Ambani Hospital and Cloudnine Hospital (2022-2024). She specializes in advanced treatments including high-risk pregnancy management, recurrent pregnancy loss (RPL), PCOS/PCOD, and cosmetic gynecology.
                </p>
              </div>

              <div className="mt-12 grid gap-6 sm:grid-cols-2">
                <div className="rounded-3xl border border-border bg-gradient-to-br from-card via-card to-primary-soft/20 p-6 shadow-soft">
                  <div className="flex items-center gap-3">
                    <div className="grid size-10 place-items-center rounded-xl bg-primary-soft text-primary">
                      <GraduationCap className="size-5" />
                    </div>
                    <h3 className="font-semibold text-foreground">Education</h3>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <li>• MBBS (Top Academic Honors)</li>
                    <li>• MD in Obstetrics & Gynecology</li>
                    <li>• Fellowship in Reproductive Medicine (Oasis)</li>
                    <li>• Advanced Training in Gynecological Endoscopy</li>
                  </ul>
                </div>

                <div className="rounded-3xl border border-border bg-gradient-to-br from-card via-card to-accent-soft/25 p-6 shadow-soft">
                  <div className="flex items-center gap-3">
                    <div className="grid size-10 place-items-center rounded-xl bg-accent-soft text-accent">
                      <ShieldCheck className="size-5" />
                    </div>
                    <h3 className="font-semibold text-foreground">Expertise</h3>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <li>• IVF, IUI & ICSI Procedures</li>
                    <li>• Oocyte Retrieval, TESA & PESA</li>
                    <li>• High-Risk Pregnancy & RPL</li>
                    <li>• Cosmetic Gynecology & Endoscopy</li>
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CLINICAL TIMELINE */}
        <section className="bg-muted/30 py-24 mt-24 border-t border-b border-border/50">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal className="text-center max-w-3xl mx-auto mb-16">
              <SectionLabel>Clinical Journey</SectionLabel>
              <h2 className="mt-4 text-3xl font-display text-primary">Academic & Career Timeline</h2>
              <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-primary/20"></div>
            </Reveal>

            <div className="relative border-l border-border max-w-3xl mx-auto pl-6 sm:pl-8 space-y-12">
              {[
                { year: "2017", title: "MBBS Graduation", desc: "Graduated with top academic honors and awards." },
                { year: "2019 – 2022", title: "MD in Obstetrics & Gynecology", desc: "Completed intensive postgraduate medical residency in Maharashtra." },
                { year: "2022 – 2024", title: "Hospital Clinical Practice", desc: "Served as clinical consultant at Kokilaben Dhirubhai Ambani Hospital and Cloudnine Hospital." },
                { year: "2024", title: "Fellowship in Reproductive Medicine", desc: "Acquired advanced specialization in ART / IVF clinical management at Oasis Fertility Centre." },
                { year: "Present", title: "Director at Radiance Speciality Clinics", desc: "Co-Founded Radiance to deliver state-of-the-art fertility solutions and comprehensive maternal care." }
              ].map((item, idx) => (
                <Reveal key={item.year} delay={idx * 80} className="relative">
                  <span className="absolute -left-[39px] sm:-left-[47px] top-1.5 grid size-6 place-items-center rounded-full bg-primary text-[10px] font-bold text-white ring-4 ring-background shadow-sm">
                    ●
                  </span>
                  <div className="p-5 rounded-3xl border border-border/80 bg-gradient-to-br from-card via-card to-primary-soft/10 hover:shadow-soft transition-all duration-300">
                    <span className="text-xs font-bold text-accent tracking-wider uppercase bg-accent-soft px-3 py-1 rounded-full">
                      {item.year}
                    </span>
                    <h3 className="font-semibold text-foreground mt-3">{item.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mx-auto max-w-7xl px-6 mt-24">
          <div className="rounded-[2.5rem] bg-gradient-to-br from-card via-card to-accent-soft/10 p-10 lg:p-16 border border-border shadow-soft">
            <div className="grid gap-12 lg:grid-cols-2">
              <Reveal>
                <div className="flex items-center gap-4 mb-6">
                  <div className="grid size-12 place-items-center rounded-2xl bg-primary-soft text-primary shadow-sm">
                    <Heart className="size-6" />
                  </div>
                  <h2 className="text-2xl font-display text-primary">Our Mission</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  To provide evidence-based, ethical, and compassionate reproductive and gynecological care. We strive to make advanced treatments accessible while maintaining the highest standards of clinical excellence and patient safety.
                </p>
              </Reveal>
              
              <Reveal delay={100}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="grid size-12 place-items-center rounded-2xl bg-accent-soft text-accent shadow-sm">
                    <BookOpen className="size-6" />
                  </div>
                  <h2 className="text-2xl font-display text-primary">Our Vision</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  To be a beacon of hope and a center of excellence for women's healthcare, where every patient feels supported, informed, and confident in their journey to wellness and motherhood.
                </p>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
