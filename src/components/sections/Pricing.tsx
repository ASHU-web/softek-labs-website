"use client";

import { useState } from "react";
import { PricingTabs } from "./Pricing/PricingTabs";
import { PricingModuleCard } from "./Pricing/PricingModuleCard";
import { PricingSuiteCard } from "./Pricing/PricingSuiteCard";
import { PricingEnterpriseCard } from "./Pricing/PricingEnterpriseCard";
import { PricingBundleBuilder } from "./Pricing/PricingBundleBuilder";
import { PricingIncludes } from "./Pricing/PricingIncludes";
import { PricingAdditionalCosts } from "./Pricing/PricingAdditionalCosts";
import { PricingFAQs } from "./Pricing/PricingFAQs";
import { individualModules } from "@/data/pricing";

export function Pricing() {
  const [activeTab, setActiveTab] = useState<"individual" | "suite" | "enterprise">("individual");
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="py-16 md:py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm text-blue-600 w-fit mb-4 font-semibold tracking-wide uppercase">
            Flexible Software Pricing
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6 text-balance">
            Choose Only the Software Your Business Needs
          </h2>
          <p className="text-lg md:text-xl text-slate-600 mb-6 text-balance">
            Start with one module and add more as your business grows. Every solution is customised according to your workflows, team structure, reporting requirements, and operational needs.
          </p>
          <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 text-sm font-medium px-4 py-2 rounded-lg inline-block shadow-sm">
            Each module works independently. You do not need to purchase the complete suite.
          </div>
        </div>

        <PricingTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Billing Toggle (Only for individual and suite tabs) */}
        {(activeTab === "individual" || activeTab === "suite") && (
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm font-medium ${!isAnnual ? "text-slate-900" : "text-slate-500"}`}>
              Monthly billing
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-7 w-14 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              style={{ backgroundColor: isAnnual ? '#2563eb' : '#cbd5e1' }}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                  isAnnual ? "translate-x-8" : "translate-x-1"
                }`}
              />
            </button>
            <div className="flex items-center gap-2">
              <span className={`text-sm font-medium ${isAnnual ? "text-slate-900" : "text-slate-500"}`}>
                Annual billing
              </span>
              {isAnnual && (
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-green-100 text-green-800">
                  Save up to 2 months
                </span>
              )}
            </div>
          </div>
        )}

        {/* Tab Content */}
        {activeTab === "individual" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {individualModules.map((module) => (
              <PricingModuleCard key={module.id} module={module} isAnnual={isAnnual} />
            ))}
          </div>
        )}

        {activeTab === "suite" && (
          <PricingSuiteCard isAnnual={isAnnual} />
        )}

        {activeTab === "enterprise" && (
          <PricingEnterpriseCard />
        )}

        {/* Builder Section */}
        <PricingBundleBuilder />
        
        {/* Supporting Sections */}
        <PricingIncludes />
        <PricingAdditionalCosts />
        <PricingFAQs />

        {/* Disclaimer */}
        <div className="max-w-4xl mx-auto mt-12 text-center border-t border-slate-200 pt-8">
          <p className="text-xs text-slate-500 leading-relaxed">
            All prices shown are indicative and exclusive of applicable taxes. Final pricing depends on the number of users, employees, warehouses, locations, products, records, integrations, reports, data migration requirements, support level, and custom workflows. Third-party service and hardware charges are billed separately.
          </p>
        </div>
      </div>
    </section>
  );
}
