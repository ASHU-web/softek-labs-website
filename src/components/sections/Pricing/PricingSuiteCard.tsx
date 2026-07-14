"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { businessSuite } from "@/data/pricing";

interface PricingSuiteCardProps {
  isAnnual: boolean;
}

export function PricingSuiteCard({ isAnnual }: PricingSuiteCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl border border-slate-700 shadow-xl overflow-hidden relative max-w-5xl mx-auto"
    >
      <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-blue-400 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl shadow-md z-10">
        {businessSuite.badge}
      </div>
      
      <div className="flex flex-col lg:flex-row">
        {/* Header & Pricing Area */}
        <div className="p-8 md:p-12 lg:w-5/12 border-b lg:border-b-0 lg:border-r border-slate-700 flex flex-col justify-center relative">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full pointer-events-none" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-xl bg-blue-900/50 text-blue-400 border border-blue-800 flex items-center justify-center">
                <Building className="h-6 w-6" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">{businessSuite.name}</h3>
            </div>
            
            <p className="text-slate-300 text-sm mb-8 leading-relaxed">
              {businessSuite.shortDescription}
            </p>
            
            <div className="space-y-6 mb-8 bg-slate-950/50 p-6 rounded-2xl border border-slate-800">
              <div>
                <p className="text-sm font-medium text-slate-400 mb-1">
                  One-time setup & customisation
                </p>
                <div className="flex items-baseline gap-1 text-white">
                  <span className="text-sm text-slate-400">Starting from</span>
                  <span className="text-3xl font-bold">₹{businessSuite.setupFee}</span>
                </div>
              </div>
              
              <div>
                <p className="text-sm font-medium text-slate-400 mb-1">
                  Managed software plan
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-blue-400">
                    ₹{isAnnual ? businessSuite.annualPlan : businessSuite.monthlyPlan}
                  </span>
                  <span className="text-sm text-slate-400">
                    /{isAnnual ? 'year' : 'month'}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
                <Link href={`/submit-requirement?service=${encodeURIComponent(businessSuite.formValue)}`}>
                  {businessSuite.ctaText}
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Features Area */}
        <div className="p-8 md:p-12 lg:w-7/12 bg-slate-800/50 flex flex-col">
          <h4 className="text-lg font-bold text-white mb-6">Everything included in the suite:</h4>
          
          <div className="grid md:grid-cols-2 gap-x-6 gap-y-4 mb-8 flex-1">
            <div className="space-y-4">
              {businessSuite.features.map((feature: string, i: number) => (
                <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="h-5 w-5 text-blue-400 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {businessSuite.expandableFeatures.map((feature: string, i: number) => (
                <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="h-5 w-5 text-green-400 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 rounded-xl p-5 border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4 mt-auto">
            <div>
              <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold mb-1">Value Comparison</p>
              <div className="flex gap-4">
                <div>
                  <span className="text-slate-500 text-xs block">Individual Modules:</span>
                  <span className="text-slate-300 line-through text-sm">{businessSuite.comparison.individualValue}</span>
                </div>
                <div>
                  <span className="text-slate-500 text-xs block">Bundle Setup:</span>
                  <span className="text-green-400 font-bold text-sm">{businessSuite.comparison.bundleSetup}</span>
                </div>
              </div>
            </div>
            <Button variant="outline" className="w-full sm:w-auto border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white" asChild>
              <a href="#build-bundle">{businessSuite.secondaryCtaText}</a>
            </Button>
          </div>
          
          <p className="text-center text-slate-400 text-sm mt-6">
            Need only two or three modules? We can create a customised bundle based on your requirements.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
