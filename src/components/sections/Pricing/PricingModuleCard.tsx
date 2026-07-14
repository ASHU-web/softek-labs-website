"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface PricingModuleCardProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  module: any;
  isAnnual: boolean;
}

export function PricingModuleCard({ module, isAnnual }: PricingModuleCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = module.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden"
    >
      <div className="p-6 md:p-8 flex-1 flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <Icon className="h-5 w-5" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">{module.name}</h3>
        </div>
        
        <p className="text-slate-600 text-sm mb-6 min-h-[40px]">
          {module.shortDescription}
        </p>
        
        <div className="space-y-4 mb-6 flex-1">
          <div className="pb-4 border-b border-slate-100">
            <p className="text-sm font-medium text-slate-500 mb-1">
              One-time setup & customisation
            </p>
            <div className="flex items-baseline gap-1">
              {module.isStartingFrom && <span className="text-sm text-slate-500">Starting from</span>}
              <span className="text-2xl font-bold text-slate-900">₹{module.setupFee}</span>
            </div>
          </div>
          
          <div>
            <p className="text-sm font-medium text-slate-500 mb-1">
              Managed software plan
            </p>
            {module.monthlyPlan ? (
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-blue-600">
                  ₹{isAnnual ? module.annualPlan : module.monthlyPlan}
                </span>
                <span className="text-sm text-slate-500">
                  /{isAnnual ? 'year' : 'month'}
                </span>
              </div>
            ) : (
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-blue-600">
                  ₹{module.annualPlan}
                </span>
                <span className="text-sm text-slate-500">/year</span>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-3 mb-6">
          <p className="text-sm font-semibold text-slate-900">Included in the base plan:</p>
          <ul className="space-y-2">
            {module.features.map((feature: string, i: number) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          
          <AnimatePresence>
            {isExpanded && (
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="space-y-2 pt-1 overflow-hidden"
              >
                {module.expandableFeatures.map((feature: string, i: number) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
          
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-sm text-blue-600 font-medium flex items-center gap-1 hover:text-blue-700 transition-colors pt-2"
          >
            {isExpanded ? "Show less" : "View full details"} 
            <ChevronDown className={`h-4 w-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
          </button>
        </div>
        
        {module.additionalCosts && (
          <p className="text-xs text-slate-500 mb-6 bg-slate-50 p-3 rounded-lg border border-slate-100">
            {module.additionalCosts}
          </p>
        )}
        
        <div className="mt-auto">
          <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
            <Link href={`/submit-requirement?service=${encodeURIComponent(module.formValue)}`}>
              {module.ctaText}
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
