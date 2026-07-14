"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { pricingFaqs } from "@/data/pricing";

export function PricingFAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mt-16 md:mt-24 pb-12 border-b border-slate-200">
      <div className="max-w-3xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">
          Frequently Asked Questions
        </h3>
        
        <div className="space-y-4">
          {pricingFaqs.map((faq, i) => (
            <div 
              key={i}
              className={`border rounded-xl overflow-hidden transition-colors ${openIndex === i ? 'border-blue-300 bg-blue-50/50' : 'border-slate-200 bg-white hover:border-slate-300'}`}
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span className="font-semibold text-slate-900 pr-4">{faq.q}</span>
                <ChevronDown className={`h-5 w-5 text-slate-400 shrink-0 transition-transform ${openIndex === i ? 'rotate-180 text-blue-600' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-4 pt-0 text-slate-600 text-sm leading-relaxed border-t border-blue-100 mt-2 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
