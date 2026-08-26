import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { Reveal } from "@/components/site/reveal";
import {
  Clock,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Facebook,
  Instagram,
  Youtube,
  CalendarHeart
} from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Dr. Priyanka Singh" },
      {
        name: "description",
        content: "Book an appointment or consult Dr. Priyanka Singh at Radiance Speciality Clinics in Bachupally, Hyderabad.",
      },
    ],
  }),
  component: Contact,
});

function SectionLabel({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-primary uppercase">
      <Sparkles className="size-3.5" /> {children}
    </span>
  );
}

function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="pt-24 pb-32">
        <section className="mx-auto max-w-7xl px-6 py-16">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel>Get In Touch</SectionLabel>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-display leading-[1.15]">
              Let's Start Your <span className="text-gradient">Journey</span> Together
            </h1>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Have questions or want to schedule a consultation? Fill out the form below, or reach out directly via call or email. Our team will verify your slot shortly.
            </p>
          </Reveal>

          <div className="grid gap-12 lg:grid-cols-2 items-start mt-8">
            {/* Direct Contact Info */}
            <Reveal>
              <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
                <h2 className="text-2xl font-display text-primary mb-6">Clinic Information</h2>
                
                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex gap-4 items-start">
                    <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-primary-soft text-primary">
                      <Phone className="size-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Phone Number</h3>
                      <p className="text-sm text-muted-foreground mt-1">Call for appointments & queries:</p>
                      <a href="tel:+917995574432" className="block text-primary font-semibold text-lg hover:underline mt-1">
                        +91 7995574432
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4 items-start">
                    <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-primary-soft text-primary">
                      <Mail className="size-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email Address</h3>
                      <p className="text-sm text-muted-foreground mt-1">Send us your medical profiles or scans:</p>
                      <a href="mailto:radiancespecialityclinics@gmail.com" className="block text-primary font-semibold hover:underline mt-1">
                        radiancespecialityclinics@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex gap-4 items-start">
                    <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-primary-soft text-primary">
                      <MapPin className="size-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Clinic Address</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground mt-1">
                        Flat No: 201, B-Block, Sree Hanuman's Pagadala Pride,<br />
                        Bachupally, Medchal Malkajgiri Dist, Telangana - 500090.
                      </p>
                      <p className="text-xs font-semibold text-accent mt-2">
                        Landmark: Above Dominos Pizza
                      </p>
                      <a 
                        href="https://maps.app.goo.gl/Mr6E1aXrxxtD85XZ7" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-primary font-semibold hover:underline mt-3"
                      >
                        View on Google Maps →
                      </a>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex gap-4 items-start">
                    <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-primary-soft text-primary">
                      <Clock className="size-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Clinic Timings</h3>
                      <p className="text-sm text-muted-foreground mt-1">Working Days & Hours:</p>
                      <p className="font-medium text-foreground mt-1">
                        Monday – Saturday : 9:00 AM – 9:00 PM
                      </p>
                      <p className="text-xs text-rose-500 font-semibold mt-1">
                        Sunday : Closed
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Connect */}
                <div className="mt-8 pt-8 border-t border-border">
                  <h4 className="text-sm font-semibold tracking-wider text-muted-foreground uppercase mb-4">Connect With Radiance</h4>
                  <div className="flex gap-3">
                    {[
                      { Icon: Facebook, href: "https://www.facebook.com/radiancespecialityclinics/" },
                      { Icon: Instagram, href: "https://www.instagram.com/radiancespecialityclinics/" },
                      { Icon: Youtube, href: "https://www.youtube.com/@radianceclinics-dr.rajeshvasam/videos" }
                    ].map(({ Icon, href }, i) => (
                      <a
                        key={i}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="grid size-11 place-items-center rounded-2xl bg-muted transition-colors hover:bg-primary-soft hover:text-primary"
                      >
                        <Icon className="size-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Booking Appointment Form */}
            <Reveal delay={100}>
              <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
                <h2 className="text-2xl font-display text-primary mb-2">Request an Appointment</h2>
                <p className="text-sm text-muted-foreground mb-6">
                  Fill in the details below and our patient care coordinator will contact you to finalize a convenient slot.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Thank you! Our patient coordinator will call you shortly to confirm your appointment slot.");
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase mb-1.5">Full Name</label>
                    <input
                      required
                      placeholder="Your full name"
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground uppercase mb-1.5">Phone Number</label>
                      <input
                        required
                        type="tel"
                        placeholder="Your contact number"
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground uppercase mb-1.5">Service Needed</label>
                      <select className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary transition-colors">
                        <option>Fertility Consultation</option>
                        <option>Pregnancy Care / Antenatal</option>
                        <option>PCOS & Ovulation Ind.</option>
                        <option>Cosmetic Gynecology</option>
                        <option>Laparoscopic Keyhole Surgery</option>
                        <option>General Gynecological Care</option>
                        <option>Support/Other Service</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase mb-1.5">Brief Message</label>
                    <textarea
                      rows={4}
                      placeholder="Explain your concern briefly (e.g. medical history or scans to discuss)"
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full gradient-brand inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5 mt-2"
                  >
                    <CalendarHeart className="size-4" /> Request Appointment Slot
                  </button>
                </form>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
