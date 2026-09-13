import React, { useState } from 'react';
import { MapPin, Navigation, Send, CheckCircle2, Clock } from 'lucide-react';
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

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Prahlad Bhagat Ji Jhajjar Rd opposite Agarwal Metal Works AERD Society Rewari'
  )}`;

  return (
    <section id="visit-us" className="py-16 lg:py-24 bg-stone-900/60 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-500 block mb-2">
            Location & Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-100 tracking-tight">
            Visit Our Rewari Showroom
          </h2>
          <div className="h-1 w-16 bg-amber-600 rounded-full mt-3 mb-4" />
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Our physical showroom is conveniently situated on Jhajjar Road in Rewari, directly opposite Agarwal Metal Works. Visit us to inspect dimensions, gauge thickness, and live modular kitchen displays.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Location Credentials & Interactive Map */}
          <div className="lg:col-span-7 space-y-6">
            {/* Address & Hours Card */}
            <div className="p-6 rounded-lg bg-stone-900 border border-stone-800 space-y-5 shadow-sm">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded bg-stone-950 border border-stone-800 text-amber-500 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-serif font-bold text-stone-100 mb-1">
                    Showroom Address
                  </h3>
                  <p className="text-sm font-medium text-amber-400">
                    {businessInfo.name}
                  </p>
                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mt-0.5">
                    {businessInfo.address.street}, {businessInfo.address.landmark}, {businessInfo.address.locality}, {businessInfo.address.city}, Haryana
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-800 flex items-start gap-3.5">
                <div className="p-2.5 rounded bg-stone-950 border border-stone-800 text-amber-500 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-stone-200 uppercase tracking-wider mb-0.5">
                    Visiting Hours
                  </h3>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    Open during standard daily market retail hours. On-floor assistance available for household selections and wedding trousseau consultations.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded text-xs font-semibold uppercase tracking-wider bg-amber-600 hover:bg-amber-500 text-stone-950 transition-colors flex items-center justify-center gap-2"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Open Directions on Google Maps</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-lg overflow-hidden border border-stone-800 bg-stone-950 aspect-[16/9] shadow-sm">
              <iframe
                title="Prahlad Bhagat Ji Location Map"
                src="https://maps.google.com/maps?q=Jhajjar+Road+Rewari+Haryana&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: In-Store Visitor Inquiry Form */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-lg bg-stone-900 border border-stone-800 space-y-6 shadow-sm">
              <div className="space-y-1.5">
                <span className="text-xs font-semibold text-amber-500 uppercase tracking-wider block">
                  Showroom Inquiries
                </span>
                <h3 className="text-xl font-serif font-bold text-stone-100">
                  Plan Your In-Store Visit
                </h3>
                <p className="text-xs text-stone-400">
                  Submit what departments or utensil combinations you are planning to inspect.
                </p>
              </div>

              {submitted ? (
                <div className="py-10 text-center space-y-3 rounded bg-stone-950 border border-stone-800 p-6">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 mx-auto flex items-center justify-center border border-amber-500/30">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-serif font-bold text-stone-100">
                    Inquiry Logged
                  </h4>
                  <p className="text-xs text-stone-300 leading-relaxed max-w-xs mx-auto">
                    Thank you, <span className="font-semibold text-amber-400">{formState.name}</span>. Your inquiry regarding <span className="text-stone-200">{formState.department}</span> has been noted. Please visit our showroom on Jhajjar Rd, Rewari.
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
                    className="mt-3 px-3.5 py-1.5 rounded text-xs font-semibold uppercase tracking-wider bg-stone-800 hover:bg-stone-700 text-stone-300 border border-stone-700"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-stone-300 mb-1.5">
                      Your Name <span className="text-amber-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      placeholder="e.g. Rajesh Sharma"
                      className="w-full px-3.5 py-2.5 rounded bg-stone-950 border border-stone-800 focus:border-amber-600 focus:outline-none text-sm text-stone-100 placeholder-stone-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-stone-300 mb-1.5">
                      Phone Number / Contact <span className="text-amber-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formState.contact}
                      onChange={(e) =>
                        setFormState({ ...formState, contact: e.target.value })
                      }
                      placeholder="e.g. 98XXXXXXXX"
                      className="w-full px-3.5 py-2.5 rounded bg-stone-950 border border-stone-800 focus:border-amber-600 focus:outline-none text-sm text-stone-100 placeholder-stone-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-stone-300 mb-1.5">
                      Department of Interest
                    </label>
                    <select
                      value={formState.department}
                      onChange={(e) =>
                        setFormState({ ...formState, department: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded bg-stone-950 border border-stone-800 focus:border-amber-600 focus:outline-none text-sm text-stone-100"
                    >
                      <option value="Cookware & Bartan">Cookware & Stainless Steel Bartan</option>
                      <option value="Brass & Copper Utensils">Brass & Copper Sacred Utensils</option>
                      <option value="Modular Kitchen Appliances">Built-in Kitchen Appliances (Chimneys & Hobs)</option>
                      <option value="Dinnerware & Crockery">Dinnerware, Crockery & Teaware</option>
                      <option value="Wedding & Trousseau Sets">Wedding Trousseau & Kitchen Setup</option>
                      <option value="Decorative Metalware">Decorative Brassware & Gifts</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-stone-300 mb-1.5">
                      Specific Requirements (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      placeholder="Mention preferred sizes, heavy-gauge steel requirements, or pooja thali details..."
                      className="w-full px-3.5 py-2.5 rounded bg-stone-950 border border-stone-800 focus:border-amber-600 focus:outline-none text-sm text-stone-100 placeholder-stone-600"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded text-xs font-semibold uppercase tracking-wider bg-amber-600 hover:bg-amber-500 text-stone-950 transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
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
