"use client";

import { motion } from "framer-motion";
import { ShieldAlert, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { enterpriseCustom } from "@/data/pricing";

export function PricingEnterpriseCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden max-w-5xl mx-auto"
    >
      <div className="flex flex-col lg:flex-row">
        {/* Header & Pricing Area */}
        <div className="p-8 md:p-12 lg:w-5/12 border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-col justify-center bg-slate-50">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-12 w-12 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0">
              <ShieldAlert className="h-6 w-6" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">{enterpriseCustom.name}</h3>
          </div>
          
          <p className="text-slate-600 text-sm mb-8 leading-relaxed">
            {enterpriseCustom.shortDescription}
          </p>
          
          <div className="space-y-6 mb-8 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div>
              <p className="text-sm font-medium text-slate-500 mb-1">
                Custom development
              </p>
              <div className="flex items-baseline gap-1 text-slate-900">
                <span className="text-sm text-slate-500">Starting from</span>
                <span className="text-3xl font-bold">₹{enterpriseCustom.setupFee}</span>
              </div>
            </div>
            
            <div>
              <p className="text-sm font-medium text-slate-500 mb-1">
                Managed support
              </p>
              <div className="flex items-baseline gap-1">
                <span className="text-sm text-slate-500">Starting from</span>
                <span className="text-2xl font-bold text-slate-900">
                  ₹{enterpriseCustom.monthlyPlan}
                </span>
                <span className="text-sm text-slate-500">/month</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Button size="lg" className="w-full bg-slate-900 hover:bg-slate-800 text-white" asChild>
              <Link href={`/submit-requirement?service=${encodeURIComponent(enterpriseCustom.formValue)}`}>
                {enterpriseCustom.ctaText}
              </Link>
            </Button>
          </div>
        </div>

        {/* Features Area */}
        <div className="p-8 md:p-12 lg:w-7/12 flex flex-col justify-center">
          <h4 className="text-lg font-bold text-slate-900 mb-6">Potential requirements include:</h4>
          
          <div className="grid md:grid-cols-2 gap-x-6 gap-y-4">
            <div className="space-y-4">
              {enterpriseCustom.features.map((feature: string, i: number) => (
                <div key={i} className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-slate-900 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {enterpriseCustom.expandableFeatures.map((feature: string, i: number) => (
                <div key={i} className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-slate-900 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
