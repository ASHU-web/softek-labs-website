"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, PackagePlus, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { individualModules } from "@/data/pricing";

export function PricingBundleBuilder() {
  const [selectedModules, setSelectedModules] = useState<string[]>([]);

  const toggleModule = (id: string) => {
    setSelectedModules(prev => 
      prev.includes(id) 
        ? prev.filter(m => m !== id)
        : [...prev, id]
    );
  };

  const calculateTotalSetup = () => {
    return selectedModules.reduce((total, id) => {
      const mod = individualModules.find(m => m.id === id);
      if (mod && mod.setupFee) {
        // Remove commas and parse to integer
        const fee = parseInt(mod.setupFee.replace(/,/g, ''), 10);
        return total + fee;
      }
      return total;
    }, 0);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const totalSetup = calculateTotalSetup();
  const formValues = selectedModules.map(id => individualModules.find(m => m.id === id)?.formValue).join(",");

  return (
    <section id="build-bundle" className="mt-16 md:mt-24 pt-16 md:pt-24 border-t border-slate-200">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-50 text-blue-600 mb-6">
            <PackagePlus className="h-8 w-8" />
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Build Your Own Software Bundle
          </h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Select the modules your business needs and request a customised bundled quotation.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-4 sm:p-6 md:p-10 mb-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {individualModules.map((module) => {
              const isSelected = selectedModules.includes(module.id);
              const Icon = module.icon;
              
              return (
                <div
                  key={module.id}
                  onClick={() => toggleModule(module.id)}
                  className={`cursor-pointer rounded-xl p-4 border-2 transition-all flex items-start gap-3 ${
                    isSelected 
                      ? 'border-blue-600 bg-blue-50' 
                      : 'border-slate-100 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div className={`h-6 w-6 rounded flex items-center justify-center shrink-0 mt-0.5 ${
                    isSelected ? 'bg-blue-600' : 'bg-slate-100 border border-slate-300'
                  }`}>
                    {isSelected && <Check className="h-4 w-4 text-white" />}
                  </div>
                  <div>
                    <h4 className={`font-semibold text-sm ${isSelected ? 'text-blue-900' : 'text-slate-700'}`}>
                      {module.name}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-slate-50 rounded-2xl p-4 sm:p-6 md:p-8 border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1 w-full">
              {selectedModules.length > 0 ? (
                <>
                  <p className="text-sm font-semibold text-slate-500 mb-2 uppercase tracking-wide">
                    {selectedModules.length} Modules Selected
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedModules.map(id => {
                      const mod = individualModules.find(m => m.id === id);
                      return (
                        <span key={id} className="text-xs font-medium bg-white border border-slate-200 px-3 py-1 rounded-full text-slate-700">
                          {mod?.name}
                        </span>
                      );
                    })}
                  </div>
                  <div className="flex items-baseline gap-2 text-slate-900 mb-2">
                    <span className="text-sm text-slate-500">Indicative Setup Value:</span>
                    <span className="text-2xl md:text-3xl font-bold">{formatCurrency(totalSetup)}</span>
                  </div>
                  <p className="text-sm text-green-600 font-medium bg-green-50 inline-block px-3 py-1 rounded-full">
                    Multi-module bundle benefits may apply
                  </p>
                </>
              ) : (
                <div className="text-slate-500 text-center md:text-left py-4">
                  Select modules above to see indicative value.
                </div>
              )}
            </div>
            
            <div className="w-full md:w-auto shrink-0 flex flex-col gap-3">
              <Button 
                size="lg" 
                className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white" 
                disabled={selectedModules.length === 0}
                asChild={selectedModules.length > 0}
              >
                {selectedModules.length > 0 ? (
                  <Link href={`/submit-requirement?service=${encodeURIComponent(formValues)}`}>
                    Request Bundle Quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                ) : (
                  <span>Request Bundle Quote <ArrowRight className="ml-2 h-4 w-4" /></span>
                )}
              </Button>
            </div>
          </div>
        </div>
        
        <p className="text-center text-sm text-slate-500">
          Final bundle pricing will be shared after understanding integrations, users, workflows, and customisation requirements.
        </p>
      </div>
    </section>
  );
}
