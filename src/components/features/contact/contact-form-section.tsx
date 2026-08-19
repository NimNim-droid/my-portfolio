import { useState } from "react";
import { Section } from "@/components/common/section";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/common/scroll-reveal";
import { 
  ArrowRight, 
  CheckCircle2, 
  Mail, 
  MapPin
} from "lucide-react";

export function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Section className="py-16 md:py-24 max-w-6xl transition-colors">
      <div className="space-y-12">
        
        {/* Header Title & Subtitle */}
        <ScrollReveal direction="up" distance={20}>
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-neutral-950 dark:text-white leading-tight">
              Let's Build Something Exceptional.
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Have a project in mind, looking to hire an aspiring full-stack developer, or want to collaborate on Odoo ERP solutions? Let's align on scope, timeline, and technical specifications.
            </p>
          </div>
        </ScrollReveal>

        {/* 2-Column Grid: Form (Left) & Contact Sidebar (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-6 border-t border-neutral-200/80 dark:border-neutral-800">
          
          {/* LEFT: Contact Form (Scroll Reveal) */}
          <div className="lg:col-span-8">
            <ScrollReveal direction="up" delay={100} distance={24}>
              <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-sm transition-colors">
                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 flex items-center justify-center mx-auto shadow-sm">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-950 dark:text-white">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-md mx-auto">
                      Thank you for reaching out, <strong className="text-neutral-900 dark:text-white">{formData.name}</strong>. I will get back to you at <strong className="text-neutral-900 dark:text-white">{formData.email}</strong> within 24 hours.
                    </p>
                    <Button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", email: "", subject: "", message: "" });
                      }}
                      variant="secondary"
                      size="sm"
                      className="mt-4 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Row 1: Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
                          NAME
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full h-11 px-3.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950 text-neutral-950 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-600 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white focus:bg-white dark:focus:bg-neutral-950 transition-all"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
                          EMAIL
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="e.g. john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full h-11 px-3.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950 text-neutral-950 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-600 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white focus:bg-white dark:focus:bg-neutral-950 transition-all"
                        />
                      </div>
                    </div>

                    {/* Row 2: Subject */}
                    <div className="space-y-2">
                      <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
                        SUBJECT
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Project Inquiry / Job Opportunity"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full h-11 px-3.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950 text-neutral-950 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-600 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white focus:bg-white dark:focus:bg-neutral-950 transition-all"
                      />
                    </div>

                    {/* Row 3: Message */}
                    <div className="space-y-2">
                      <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
                        MESSAGE
                      </label>
                      <textarea
                        required
                        rows={5}
                        placeholder="Tell me about your project, timeline, and goals..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full p-3.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950 text-neutral-950 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-600 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white focus:bg-white dark:focus:bg-neutral-950 transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="md"
                      className="rounded-md bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-200 font-medium text-xs tracking-wider uppercase px-6 h-11 shadow-sm gap-2"
                    >
                      <span>Send Message</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Button>

                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT: Contact Details & Connect Links (Scroll Reveal) */}
          <div className="lg:col-span-4 space-y-8 pl-0 lg:pl-4">
            <ScrollReveal direction="up" delay={200} distance={24}>
              <div className="space-y-8">
                
                {/* 1. Contact Details */}
                <div className="space-y-3">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400">
                    CONTACT DETAILS
                  </span>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-xs text-neutral-500 block">Email</span>
                      <a
                        href="mailto:nimneri2006@gmail.com"
                        className="font-medium text-neutral-900 dark:text-white hover:underline inline-flex items-center gap-1.5"
                      >
                        <Mail className="w-3.5 h-3.5 text-neutral-600 dark:text-neutral-400" />
                        nimneri2006@gmail.com
                      </a>
                    </div>

                    <div>
                      <span className="text-xs text-neutral-500 block">Phone / WhatsApp</span>
                      <a
                        href="tel:+639539863209"
                        className="font-mono text-xs font-medium text-neutral-900 dark:text-white hover:underline block"
                      >
                        +63 953 986 3209
                      </a>
                    </div>

                    <div>
                      <span className="text-xs text-neutral-500 block">Location</span>
                      <p className="font-medium text-neutral-900 dark:text-white inline-flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-neutral-600 dark:text-neutral-400" />
                        Cebu City, Philippines
                      </p>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400 pl-5">Available for Remote / Hybrid</p>
                    </div>
                  </div>
                </div>

                {/* 2. Connect Socials */}
                <div className="space-y-3 pt-6 border-t border-neutral-100 dark:border-neutral-800">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400">
                    CONNECT
                  </span>
                  <div className="space-y-2.5 text-sm font-medium">
                    <a
                      href="https://github.com/NimNim-droid"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white transition-colors"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      <span>GitHub</span>
                    </a>
                    <a
                      href="https://linkedin.com/in/nimrod-cambalon"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white transition-colors"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>

                {/* 3. Availability Indicator */}
                <div className="space-y-2 pt-6 border-t border-neutral-100 dark:border-neutral-800">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-neutral-400">
                    // AVAILABILITY
                  </span>
                  <div className="flex items-center gap-2 text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Open for Junior/Mid Developer Roles & Projects</span>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </Section>
  );
}
