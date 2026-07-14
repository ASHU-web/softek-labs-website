"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { UserPlus, FileText, ShoppingCart, CheckSquare, PackageSearch, Truck, CheckCircle } from "lucide-react";

const workflowSteps = [
  { id: 1, label: "Lead", icon: UserPlus, desc: "New enquiry received and assigned." },
  { id: 2, label: "Quotation", icon: FileText, desc: "Custom pricing generated based on requirements." },
  { id: 3, label: "Sales Order", icon: ShoppingCart, desc: "Order confirmed by the customer." },
  { id: 4, label: "Allocation", icon: CheckSquare, desc: "System checks stock and reserves quantities." },
  { id: 5, label: "Loading Order", icon: PackageSearch, desc: "Warehouse receives picking instructions." },
  { id: 6, label: "Dispatch", icon: Truck, desc: "Goods are packed, loaded and vehicle leaves." },
  { id: 7, label: "Delivery", icon: CheckCircle, desc: "Proof of delivery uploaded and order closed." }
];

export function WorkflowVisualisation() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="py-16 md:py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-slate-900" />
      
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            From Enquiry to Dispatch—Everything Connected
          </h2>
          <p className="text-lg text-slate-300">
            A single system where data flows naturally from one department to the next without manual re-entry.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Mobile View: Vertical List */}
          <div className="flex flex-col gap-4 lg:hidden">
            {workflowSteps.map((step) => (
              <div key={step.id} className="flex gap-4 items-start bg-slate-800 p-4 rounded-xl border border-slate-700">
                <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                  <step.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{step.label}</h4>
                  <p className="text-slate-300 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop View: Interactive Timeline */}
          <div className="hidden lg:block relative pt-12 pb-24">
            <div className="absolute top-[88px] left-0 right-0 h-1 bg-slate-700 rounded-full" />
            <motion.div 
              className="absolute top-[88px] left-0 h-1 bg-blue-500 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${((activeStep - 1) / (workflowSteps.length - 1)) * 100}%` }}
              transition={{ duration: 0.3 }}
            />

            <div className="flex justify-between relative z-10">
              {workflowSteps.map((step) => (
                <div 
                  key={step.id}
                  className="flex flex-col items-center group cursor-pointer w-32"
                  onMouseEnter={() => setActiveStep(step.id)}
                >
                  <motion.div 
                    className={`h-16 w-16 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 ${activeStep === step.id ? 'bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.5)]' : 'bg-slate-800 border border-slate-700 group-hover:border-blue-500'}`}
                    animate={{ y: activeStep === step.id ? -10 : 0 }}
                  >
                    <step.icon className={`h-7 w-7 ${activeStep === step.id ? 'text-white' : 'text-slate-400 group-hover:text-blue-400'}`} />
                  </motion.div>
                  <h4 className={`font-bold text-center mb-2 transition-colors ${activeStep === step.id ? 'text-white' : 'text-slate-400'}`}>
                    {step.label}
                  </h4>
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: activeStep === step.id ? 1 : 0, y: activeStep === step.id ? 0 : 10 }}
                    className="text-xs text-center text-slate-300 absolute top-36 w-48 pointer-events-none"
                  >
                    {step.desc}
                  </motion.p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
