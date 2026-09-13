import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Navigation,
  Send,
  CheckCircle2,
  Sparkles,
  Building2,
  Clock,
  MessageSquare,
} from 'lucide-react';
import { businessInfo } from '../data/shopData';

export const VisitUs: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    contact: '',
    department: 'Cookware & Bartan',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.contact.trim()) return;
    setSubmitted(true);
  };

  const googleMapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Prahlad Bhagat Ji Jhajjar Rd opposite Agarwal Metal Works AERD Society Rewari'
  )}`;

  return (
    <section id="visit-us" className="py-20 lg:py-28 relative overflow-hidden bg-surface-dark/60">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-metallic-copper/10 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-metallic-brass/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-card border border-surface-border mb-4">
            <Building2 className="w-3.5 h-3.5 text-metallic-brass" />
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Physical Store Location
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-100 tracking-tight">
            Visit Our Showroom
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-metallic-brass to-metallic-copper mx-auto rounded-full mt-3 mb-4" />
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Experience our extensive physical inventory firsthand on the showroom floor in Rewari. Inspect gauge thickness, brass polishes, and live modular kitchen displays.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Store Details & Real Photo Banner */}
          <div className="lg:col-span-6 space-y-6">
            {/* Showroom Reception Visual Card */}
            <div className="rounded-2xl overflow-hidden bg-surface-card border border-surface-border shadow-card-dark relative group">
              <div className="aspect-[16/10] overflow-hidden bg-surface-darker relative">
                <img
                  src="/images/shop/reception-lounge.webp"
                  alt="PRAHLAD BHAGAT JI Customer Reception and Lounge in Rewari"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-darker via-transparent to-transparent opacity-80" />
                <span className="absolute bottom-4 left-4 px-3.5 py-1.5 rounded-xl bg-surface-darker/85 backdrop-blur-md border border-white/10 text-xs text-metallic-brass font-medium flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-metallic-copper" />
                  <span>Showroom Hospitality & Consultation Desk</span>
                </span>
              </div>
            </div>

            {/* Verified Physical Address Card */}
            <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-surface-border space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-metallic-brass/10 border border-metallic-brass/30 text-metallic-brass shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-serif font-bold text-slate-100">
                    Showroom Address
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-medium">
                    {businessInfo.name}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {businessInfo.address.street}, {businessInfo.address.landmark}, {businessInfo.address.locality}, {businessInfo.address.city}, Haryana
                  </p>
                </div>
              </div>

              {/* Verified Hours / Visit Guidance */}
              <div className="flex items-start gap-4 pt-4 border-t border-surface-border/60">
                <div className="p-3 rounded-xl bg-surface-darker border border-surface-border text-metallic-copper shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1 text-xs sm:text-sm">
                  <span className="font-semibold text-slate-200 block">
                    Visiting Hours
                  </span>
                  <p className="text-slate-400">
                    Open throughout standard market hours. Visitors from Rewari, Jhajjar, and surrounding regions are welcome for on-floor consultations.
                  </p>
                </div>
              </div>

              {/* Google Maps Direction CTA */}
              <div className="pt-2">
                <a
                  href={googleMapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-xl font-semibold uppercase tracking-wider text-xs bg-gradient-to-r from-metallic-brass via-metallic-brass-light to-metallic-copper text-surface-darker shadow-glow-brass hover:shadow-glow-copper transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Open Directions on Google Maps</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Showroom Inquiry Form */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-surface-border space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-metallic-copper">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Direct Inquiry Dispatch</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-100">
                  Plan Your In-Store Visit
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Let us know what departments or utensil combinations you wish to inspect ahead of your visit.
                </p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4 rounded-xl bg-surface-darker/60 border border-metallic-brass/40 p-6"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/30">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-serif font-bold text-slate-100">
                    Inquiry Received
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-metallic-brass">{formState.name}</span>. Your request regarding <span className="text-slate-200">{formState.department}</span> has been logged. Please visit our showroom on Jhajjar Rd, Rewari for on-floor assistance.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({
                        name: '',
                        contact: '',
                        department: 'Cookware & Bartan',
                        message: '',
                      });
                    }}
                    className="mt-4 px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider bg-surface-card hover:bg-surface-border text-slate-300 border border-surface-border"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-slate-300 mb-1.5">
                      Your Name <span className="text-metallic-copper">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full px-4 py-3 rounded-xl bg-surface-darker border border-surface-border focus:border-metallic-brass focus:ring-1 focus:ring-metallic-brass text-sm text-slate-100 placeholder-slate-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-slate-300 mb-1.5">
                      Phone Number / Contact <span className="text-metallic-copper">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formState.contact}
                      onChange={(e) =>
                        setFormState({ ...formState, contact: e.target.value })
                      }
                      placeholder="e.g. 98XXXXXXXX"
                      className="w-full px-4 py-3 rounded-xl bg-surface-darker border border-surface-border focus:border-metallic-brass focus:ring-1 focus:ring-metallic-brass text-sm text-slate-100 placeholder-slate-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-slate-300 mb-1.5">
                      Department of Interest
                    </label>
                    <select
                      value={formState.department}
                      onChange={(e) =>
                        setFormState({ ...formState, department: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-surface-darker border border-surface-border focus:border-metallic-brass focus:ring-1 focus:ring-metallic-brass text-sm text-slate-100 transition-colors"
                    >
                      <option value="Cookware & Bartan">Cookware & Stainless Steel Bartan</option>
                      <option value="Brass & Copper Utensils">Brass & Copper Sacred Utensils</option>
                      <option value="Modular Kitchen Appliances">Built-in Appliances (Chimneys & Hobs)</option>
                      <option value="Dinnerware & Crockery">Dinnerware, Crockery & Teaware</option>
                      <option value="Wedding & Trousseau Sets">Wedding Trousseau & Kitchen Setup</option>
                      <option value="Decorative Metalware">Decorative Brassware & Gifts</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-slate-300 mb-1.5">
                      Specific Items or Questions (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      placeholder="Mention sizes, heavy-gauge requirements, or specific pooja items you are looking for..."
                      className="w-full px-4 py-3 rounded-xl bg-surface-darker border border-surface-border focus:border-metallic-brass focus:ring-1 focus:ring-metallic-brass text-sm text-slate-100 placeholder-slate-500 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl font-semibold uppercase tracking-wider text-xs bg-gradient-to-r from-metallic-brass via-metallic-brass-light to-metallic-copper text-surface-darker shadow-glow-brass hover:shadow-glow-copper transition-all flex items-center justify-center gap-2 active:scale-95"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Showroom Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
