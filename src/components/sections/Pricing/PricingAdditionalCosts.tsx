"use client";

import { additionalCosts } from "@/data/pricing";
import { PlusCircle } from "lucide-react";

export function PricingAdditionalCosts() {
  return (
    <section className="mt-16 md:mt-24">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
          Services Quoted Separately
        </h3>
        
        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8">
          <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-6">
            {additionalCosts.map((cost, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                <PlusCircle className="h-4 w-4 text-slate-400 mt-0.5 shrink-0" />
                <span>{cost}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
