import { useState } from "react";
import { Section } from "@/components/common/section";
import { Button } from "@/components/ui/button";
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
        <div className="max-w-3xl space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-neutral-950 dark:text-white leading-tight">
            Let's Build Something Exceptional.
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Have a project in mind, looking to hire an aspiring full-stack developer, or want to collaborate on Odoo ERP solutions? Let's align on scope, timeline, and technical specifications.
          </p>
        </div>

        {/* 2-Column Grid: Form (Left) & Contact Sidebar (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-6 border-t border-neutral-200/80 dark:border-neutral-800">
          
          {/* LEFT: Contact Form */}
          <div className="lg:col-span-8 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 sm:p-8 shadow-sm transition-colors">
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

          {/* RIGHT: Contact Details & Connect Links */}
          <div className="lg:col-span-4 space-y-8 pl-0 lg:pl-4">
            
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
                  <img src="https://cdn.simpleicons.org/github/181717" alt="GitHub" className="w-4 h-4 dark:invert" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white transition-colors"
                >
                  <img src="https://cdn.simpleicons.org/linkedin/0A66C2" alt="LinkedIn" className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* 3. Availability Indicator */}
            <div className="space-y-2 pt-6 border-t border-neutral-100 dark:border-neutral-800">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400">
                // AVAILABILITY
              </span>
              <div className="flex items-center gap-2 text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Open for Junior/Mid Developer Roles & Projects</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </Section>
  );
}
