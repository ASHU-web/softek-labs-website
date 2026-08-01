"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Zap, Target, BrainCircuit } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PricingFAQs } from "./Pricing/PricingFAQs";

export function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Clear pricing. Custom solutions.
          </h2>
          <p className="text-xl text-slate-600">
            Start small to solve immediate bottlenecks, or connect everything into a central hub.
          </p>
        </div>

        {/* 3-Tier Layout */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-24">
          
          {/* Tier 1: Core System */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-950 rounded-3xl p-8 border-2 border-blue-500 shadow-[0_0_40px_rgba(37,99,235,0.2)] flex flex-col relative transform lg:-translate-y-4"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase shadow-md">
              Most Popular
            </div>
            <div className="h-12 w-12 rounded-xl bg-blue-900/50 flex items-center justify-center text-blue-400 mb-6">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Core System</h3>
            <p className="text-slate-400 mb-6 h-12">Solve your biggest bottleneck first with a single custom module.</p>
            
            <div className="mb-8">
              <span className="text-4xl font-black text-white">₹4,999</span>
              <span className="text-slate-500">/mo</span>
              <p className="text-sm font-semibold text-blue-300 mt-2">+ One-Time Customisation Fee</p>
              <p className="text-xs text-slate-500 mt-1">Starting price per module</p>
            </div>

            <div className="space-y-4 mb-10 flex-1">
              {['Choose Inventory, CRM, OR Staff', 'Customised to your workflow', 'Basic reporting dashboards', 'Standard support'].map((feature, i) => (
                <div key={i} className="flex gap-3">
                  <Check className="h-5 w-5 text-blue-400 shrink-0" />
                  <span className="text-slate-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <Button className="w-full bg-blue-600 hover:bg-blue-500 text-white h-12 rounded-xl text-lg" asChild>
              <Link href="/submit-requirement">Start Core <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </motion.div>

          {/* Tier 2: Complete Hub */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl flex flex-col relative"
          >
            <div className="h-12 w-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 mb-6">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">The Complete Hub</h3>
            <p className="text-slate-500 mb-6 h-12">Connect every department perfectly into one unified software ecosystem.</p>
            
            <div className="mb-8">
              <span className="text-4xl font-black text-slate-900">₹14,999</span>
              <span className="text-slate-500">/mo</span>
              <p className="text-sm font-semibold text-slate-700 mt-2">+ One-Time Customisation Fee</p>
              <p className="text-xs text-slate-400 mt-1">Starting price for the suite</p>
            </div>

            <div className="space-y-4 mb-10 flex-1">
              {['All modules (Inventory, CRM, Staff, etc)', 'Deep inter-department workflows', 'Advanced Analytics & Traceability', 'Dedicated Account Manager'].map((feature, i) => (
                <div key={i} className="flex gap-3">
                  <Check className="h-5 w-5 text-slate-700 shrink-0" />
                  <span className="text-slate-700 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white h-12 rounded-xl text-lg" asChild>
              <Link href="/submit-requirement">Build Your Hub <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </motion.div>

          {/* Tier 3: AI Growth */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-8 border border-purple-100 shadow-xl flex flex-col relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 rounded-bl-full -z-10 opacity-50" />
            <div className="h-12 w-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 mb-6">
              <BrainCircuit className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">AI Growth Engine</h3>
            <p className="text-slate-500 mb-6 h-12">Independent marketing service to pump B2B leads into your system.</p>
            
            <div className="mb-8 flex items-baseline">
              <span className="text-4xl font-black text-slate-900">Custom</span>
            </div>

            <div className="space-y-4 mb-10 flex-1">
              {['AI-Generated Ad Creatives', 'Meta, Google & JioHotstar Ads', 'Automated Lead Qualification', 'Flows directly to Softek CRM'].map((feature, i) => (
                <div key={i} className="flex gap-3">
                  <Check className="h-5 w-5 text-purple-500 shrink-0" />
                  <span className="text-slate-700 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white h-12 rounded-xl text-lg" asChild>
              <Link href="/submit-requirement">Scale Leads <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </motion.div>

        </div>

        {/* FAQs */}
        <div className="max-w-4xl mx-auto">
          <PricingFAQs />
        </div>

        {/* Disclaimer */}
        <div className="max-w-4xl mx-auto mt-16 text-center border-t border-slate-200 pt-8">
          <p className="text-xs text-slate-500 leading-relaxed">
            All prices shown are indicative and exclusive of applicable taxes. Final pricing depends on the scale of your operations, integrations, data migration requirements, and custom workflows. 
          </p>
        </div>

      </div>
    </section>
  );
}
