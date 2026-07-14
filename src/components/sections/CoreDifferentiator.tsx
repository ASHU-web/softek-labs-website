"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export function CoreDifferentiator() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Your Business Is Unique. Your Software Should Be Too.
          </h2>
          <p className="text-lg text-slate-600">
            Stop forcing your employees to learn complex generic software. We build systems that naturally fit your existing operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100">
              <div className="h-12 w-12 rounded-full bg-red-50 flex items-center justify-center">
                <X className="h-6 w-6 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Generic Software</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Predefined modules and features",
                "Fixed workflows that cannot change",
                "Limited role-based permissions",
                "Cluttered with unnecessary features",
                "Difficult for employees to use",
                "Business adjusts to the software"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600">
                  <X className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border-2 border-blue-500 bg-white p-8 shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              OUR APPROACH
            </div>
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100">
              <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center">
                <Check className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Softek Labs</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Custom modules built from scratch",
                "Workflow-specific development",
                "Advanced role-based permissions",
                "Only relevant, required features",
                "Simple, mobile-friendly interface",
                "Software adjusts to the business"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-900 font-medium">
                  <Check className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
