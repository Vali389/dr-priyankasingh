import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
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
  CalendarHeart,
  Send,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book Appointment & Contact | Dr. Priyanka Singh" },
      {
        name: "description",
        content:
          "Book a consultation or appointment with Dr. Priyanka Singh at Radiance Speciality Clinics in Bachupally, Hyderabad. Instant confirmation on WhatsApp.",
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
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    service: "Fertility & IVF Consultation",
    date: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = "Please enter your full name.";
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = "Name must be at least 2 characters.";
    }

    const cleanPhone = formData.phone.replace(/\D/g, "");
    if (!formData.phone.trim()) {
      errs.phone = "Please enter your contact mobile number.";
    } else if (cleanPhone.length < 10) {
      errs.phone = "Please enter a valid 10-digit mobile number.";
    }

    if (!formData.service) {
      errs.service = "Please select a service.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      toast.error("Please fill in all required fields correctly.");
      return;
    }

    setIsSubmitting(true);
    toast.success("Validation successful! Opening WhatsApp to send your request...");

    const messageText =
      `*New Appointment Request - Dr. Priyanka Singh Clinic*\n\n` +
      `👤 *Patient Name:* ${formData.fullName.trim()}\n` +
      `📞 *Phone Number:* ${formData.phone.trim()}\n` +
      `🩺 *Service Requested:* ${formData.service}\n` +
      `📅 *Preferred Timing:* ${formData.date.trim() || "Earliest Available"}\n` +
      `📝 *Notes / History:* ${formData.message.trim() || "N/A"}\n\n` +
      `Please let me know the available time slot. Thank you!`;

    const whatsappUrl = `https://wa.me/917995574432?text=${encodeURIComponent(messageText)}`;

    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setIsSubmitting(false);
    }, 600);
  };

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
              Schedule your confidential consultation with Dr. Priyanka Singh. Fill out the form below to instantly connect with our clinic desk on WhatsApp, or reach out directly by call.
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
                      <a
                        href="tel:+917995574432"
                        className="block text-primary font-semibold text-lg hover:underline mt-1"
                      >
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
                      <a
                        href="mailto:radiancespecialityclinics@gmail.com"
                        className="block text-primary font-semibold hover:underline mt-1"
                      >
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
                        Flat No: 201, B-Block, Sree Hanuman's Pagadala Pride,
                        <br />
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
                  <h4 className="text-sm font-semibold tracking-wider text-muted-foreground uppercase mb-4">
                    Connect With Radiance
                  </h4>
                  <div className="flex gap-3">
                    {[
                      { Icon: Facebook, href: "https://www.facebook.com/radiancespecialityclinics/" },
                      { Icon: Instagram, href: "https://www.instagram.com/radiancespecialityclinics/" },
                      {
                        Icon: Youtube,
                        href: "https://www.youtube.com/@radianceclinics-dr.rajeshvasam/videos",
                      },
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
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-2xl font-display text-primary">Request an Appointment</h2>
                  <span className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                    <CheckCircle2 className="size-3.5" /> WhatsApp Connected
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  Fill in your details below. Once verified, your request will be prepared and sent directly to our clinic WhatsApp desk for quick confirmation.
                </p>

                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase mb-1.5">
                      Full Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Anitha Sharma"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: "" });
                      }}
                      className={`w-full rounded-xl border ${
                        errors.fullName ? "border-destructive ring-1 ring-destructive" : "border-border"
                      } bg-background px-4 py-3 text-sm outline-none focus:border-primary transition-colors`}
                    />
                    {errors.fullName && (
                      <p className="flex items-center gap-1.5 text-xs text-destructive mt-1.5 font-medium">
                        <AlertCircle className="size-3.5 shrink-0" /> {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground uppercase mb-1.5">
                        Phone Number <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: "" });
                        }}
                        className={`w-full rounded-xl border ${
                          errors.phone ? "border-destructive ring-1 ring-destructive" : "border-border"
                        } bg-background px-4 py-3 text-sm outline-none focus:border-primary transition-colors`}
                      />
                      {errors.phone && (
                        <p className="flex items-center gap-1.5 text-xs text-destructive mt-1.5 font-medium">
                          <AlertCircle className="size-3.5 shrink-0" /> {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Specialty Service */}
                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground uppercase mb-1.5">
                        Service Needed <span className="text-destructive">*</span>
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => {
                          setFormData({ ...formData, service: e.target.value });
                          if (errors.service) setErrors({ ...errors, service: "" });
                        }}
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary transition-colors"
                      >
                        <option>Fertility & IVF Consultation</option>
                        <option>Pregnancy Care / Antenatal</option>
                        <option>PCOS & Ovulation Induction</option>
                        <option>Cosmetic Gynecology</option>
                        <option>Laparoscopic Keyhole Surgery</option>
                        <option>General Gynecological Care</option>
                        <option>Second Opinion / Review Reports</option>
                      </select>
                    </div>
                  </div>

                  {/* Preferred Timing */}
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase mb-1.5">
                      Preferred Date or Timing (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Tomorrow morning or Saturday after 4 PM"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase mb-1.5">
                      Brief Message or Concerns (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Briefly describe your symptoms, history, or any previous scans..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full gradient-brand inline-flex items-center justify-center gap-2 rounded-xl px-6 py-4 text-sm font-semibold text-primary-foreground shadow-lift hover:-translate-y-0.5 transition-all mt-2 cursor-pointer disabled:opacity-50"
                  >
                    <Send className="size-4" />
                    {isSubmitting ? "Opening WhatsApp..." : "Submit & Send to WhatsApp"}
                  </button>

                  <p className="text-center text-[11px] text-muted-foreground pt-1">
                    Your information is kept 100% confidential. Click above to open WhatsApp directly with Dr. Priyanka Singh's clinic desk.
                  </p>
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
