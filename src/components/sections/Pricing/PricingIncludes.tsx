"use client";

import { managedPlanIncludes } from "@/data/pricing";

export function PricingIncludes() {
  return (
    <section className="mt-16 md:mt-24">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">
          Every Managed Plan Includes
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {managedPlanIncludes.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div key={i} className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col items-center text-center hover:border-blue-300 hover:shadow-sm transition-all group">
                <div className="h-10 w-10 bg-slate-50 text-slate-600 rounded-lg flex items-center justify-center mb-3 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium text-slate-800 leading-snug">{feature.title}</span>
              </div>
            );
          })}
        </div>
        
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center">
          <p className="text-sm text-slate-600 max-w-3xl mx-auto leading-relaxed">
            The managed software plan keeps your system hosted, secured, maintained, backed up, and supported. Major new modules or custom feature development are quoted separately.
          </p>
        </div>
      </div>
    </section>
  );
}
