"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Briefcase, ShoppingBag, Box, UserCog } from "lucide-react";

const roles = [
  {
    id: "owner",
    label: "Business Owner",
    icon: Briefcase,
    title: "Complete Dashboard & Analytics",
    features: ["Business reports", "Financial overview", "High-level approvals", "Performance metrics"]
  },
  {
    id: "sales",
    label: "Salesperson",
    icon: ShoppingBag,
    title: "Focused Sales Interface",
    features: ["Stock checking", "Lead management", "Quotations", "Sales orders"]
  },
  {
    id: "warehouse",
    label: "Warehouse Staff",
    icon: Box,
    title: "Simplified Mobile Operations",
    features: ["Picking lists", "Loading orders", "Stock movement", "Barcode scanning"]
  },
  {
    id: "manager",
    label: "Manager",
    icon: UserCog,
    title: "Operational Control Panel",
    features: ["Team monitoring", "Pending tasks", "Operational reports", "Exception handling"]
  }
];

export function EmployeeFriendly() {
  const [activeRole, setActiveRole] = useState(roles[0]);

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Powerful for the Owner. Simple for the Team.
          </h2>
          <p className="text-lg text-slate-600">
            Software only delivers results when employees actually use it. Every user sees only the options relevant to their role.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-4 flex flex-col gap-3">
            {roles.map((role) => (
              <button
                key={role.id}
                onClick={() => setActiveRole(role)}
                className={`flex items-center gap-4 p-4 rounded-xl text-left transition-all ${activeRole.id === role.id ? 'bg-white shadow-md border border-blue-200' : 'hover:bg-slate-100 border border-transparent text-slate-600'}`}
              >
                <div className={`h-10 w-10 rounded-lg flex items-center justify-center shrink-0 ${activeRole.id === role.id ? 'bg-blue-50 text-blue-600' : 'bg-slate-200 text-slate-500'}`}>
                  <role.icon className="h-5 w-5" />
                </div>
                <span className={`font-semibold ${activeRole.id === role.id ? 'text-blue-700' : ''}`}>
                  {role.label}
                </span>
              </button>
            ))}
          </div>
          
          <div className="lg:col-span-8">
            <motion.div
              key={activeRole.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden h-full flex flex-col"
            >
              <div className="bg-slate-900 text-white p-6 border-b border-slate-800">
                <div className="flex items-center gap-3 mb-2">
                  <activeRole.icon className="h-6 w-6 text-blue-400" />
                  <h3 className="text-xl font-bold">{activeRole.label} View</h3>
                </div>
                <p className="text-slate-400">{activeRole.title}</p>
              </div>
              <div className="p-8 flex-1 bg-slate-50">
                <div className="grid sm:grid-cols-2 gap-4">
                  {activeRole.features.map((feature, i) => (
                    <div key={i} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-blue-500 shrink-0" />
                      <span className="text-slate-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* Mock UI specific to role */}
                <div className="mt-8 border border-slate-200 rounded-xl bg-white p-4 h-48 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:2rem_2rem]" />
                  <div className="relative z-10 flex flex-col items-center gap-4 text-slate-400">
                    <activeRole.icon className="h-12 w-12 opacity-20" />
                    <p className="font-medium">Interface customised for {activeRole.label.toLowerCase()}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
