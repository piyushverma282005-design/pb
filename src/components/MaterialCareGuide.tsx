import React, { useState } from 'react';
import { CheckCircle, Info, Flame } from 'lucide-react';
import { materialCareGuides } from '../data/shopData';
import { MaterialCareInfo } from '../types/shop';

export const MaterialCareGuide: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>(materialCareGuides[0].id);

  const currentGuide: MaterialCareInfo =
    materialCareGuides.find((g) => g.id === activeTabId) || materialCareGuides[0];

  return (
    <section id="care-guide" className="py-16 lg:py-24 bg-stone-950 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-500 block mb-2">
            Material Knowledge & Care
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-100 tracking-tight">
            Traditional Metalware & Cookware Guide
          </h2>
          <div className="h-1 w-16 bg-amber-600 rounded-full mt-3 mb-4" />
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Understanding the physical properties of traditional metals and food-grade stainless steel ensures proper culinary usage and long-lasting maintenance.
          </p>
        </div>

        {/* Material Selection Tabs */}
        <div className="flex items-center gap-2 mb-8 flex-wrap">
          {materialCareGuides.map((guide) => {
            const isActive = guide.id === activeTabId;
            return (
              <button
                key={guide.id}
                type="button"
                onClick={() => setActiveTabId(guide.id)}
                className={`px-4 py-2 rounded text-xs font-medium transition-colors border ${
                  isActive
                    ? 'bg-amber-600 text-stone-950 font-semibold border-amber-600'
                    : 'bg-stone-900 text-stone-300 border-stone-800 hover:bg-stone-800'
                }`}
              >
                {guide.materialName}
              </button>
            );
          })}
        </div>

        {/* Material Information Card */}
        <div className="rounded-lg bg-stone-900 border border-stone-800 overflow-hidden shadow-sm">
          <div className="p-6 sm:p-8 border-b border-stone-800">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-500 block mb-1">
              {currentGuide.subtitle}
            </span>
            <h3 className="text-2xl font-serif font-bold text-stone-100">
              {currentGuide.materialName}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-stone-800">
            {/* Characteristics */}
            <div className="p-6 space-y-3">
              <div className="flex items-center gap-2 text-stone-200">
                <Info className="w-4 h-4 text-amber-500" />
                <h4 className="text-xs font-semibold uppercase tracking-wider">
                  Physical Characteristics
                </h4>
              </div>
              <div className="space-y-2">
                {currentGuide.characteristics.map((item, idx) => (
                  <p key={idx} className="text-xs text-stone-300 leading-relaxed">
                    • {item}
                  </p>
                ))}
              </div>
            </div>

            {/* Traditional Usage */}
            <div className="p-6 space-y-3">
              <div className="flex items-center gap-2 text-stone-200">
                <Flame className="w-4 h-4 text-amber-500" />
                <h4 className="text-xs font-semibold uppercase tracking-wider">
                  Traditional Culinary Use
                </h4>
              </div>
              <div className="space-y-2">
                {currentGuide.traditionalUsage.map((item, idx) => (
                  <p key={idx} className="text-xs text-stone-300 leading-relaxed">
                    • {item}
                  </p>
                ))}
              </div>
            </div>

            {/* Care & Maintenance */}
            <div className="p-6 space-y-3">
              <div className="flex items-center gap-2 text-stone-200">
                <CheckCircle className="w-4 h-4 text-amber-500" />
                <h4 className="text-xs font-semibold uppercase tracking-wider">
                  Care & Cleaning Procedures
                </h4>
              </div>
              <div className="space-y-2">
                {currentGuide.careAndMaintenance.map((item, idx) => (
                  <p key={idx} className="text-xs text-stone-300 leading-relaxed">
                    • {item}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="p-4 bg-stone-950/70 border-t border-stone-800 text-[11px] text-stone-400">
            Note: For brass cooking utensils used with acidic foods (such as curd or tomatoes), traditional tin-coating (kalai) is recommended. Inquire with our showroom staff in Rewari for specific usage advice.
          </div>
        </div>
      </div>
    </section>
  );
};
