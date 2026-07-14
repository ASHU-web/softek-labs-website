"use client";

import { motion } from "framer-motion";
import { Settings2, ShieldCheck, FileBarChart, BellRing, Smartphone, Database } from "lucide-react";

const capabilities = [
  { icon: Settings2, title: "Custom Modules & Fields", desc: "Add any data field specific to your products or process." },
  { icon: ShieldCheck, title: "Role-Based Permissions", desc: "Control exactly who can view, edit, or delete information." },
  { icon: FileBarChart, title: "Business-Specific Reports", desc: "Generate the exact reports you currently make in Excel." },
  { icon: BellRing, title: "Automated Notifications", desc: "Trigger WhatsApp or Email alerts based on rules." },
  { icon: Smartphone, title: "Mobile Interfaces", desc: "Simplified screens for staff working on the go." },
  { icon: Database, title: "Data Migration", desc: "Import your existing history to ensure continuity." }
];

export function CustomisationCapabilities() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Every Part of the Software Can Be Designed Around Your Process
            </h2>
            <p className="text-lg text-slate-600">
              Off-the-shelf software forces you to change how you work. We believe the software should bend to fit the business, not the other way around.
            </p>
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-8 mt-6">
              {capabilities.map((cap, i) => (
                <div key={i} className="flex gap-4">
                  <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                    <cap.icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{cap.title}</h4>
                    <p className="text-sm text-slate-600 mt-1">{cap.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative lg:h-[500px] w-full rounded-2xl bg-slate-100 border border-slate-200 overflow-hidden flex items-center justify-center p-8"
          >
            {/* Visual Representation of Customization */}
            <div className="w-full max-w-sm flex flex-col gap-4">
              <motion.div 
                className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex items-center justify-between"
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 4, delay: 0 }}
              >
                <div className="h-4 w-24 bg-slate-200 rounded" />
                <div className="h-6 w-12 bg-blue-100 rounded-full" />
              </motion.div>
              <motion.div 
                className="bg-white p-4 rounded-xl shadow-sm border border-blue-300 flex flex-col gap-3 relative"
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 4, delay: 1 }}
              >
                <div className="absolute -right-2 -top-2 h-6 w-6 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
                  <Settings2 className="h-3 w-3 text-white" />
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded bg-blue-50" />
                  <div className="h-4 w-32 bg-slate-200 rounded" />
                </div>
                <div className="h-2 w-full bg-slate-100 rounded mt-2" />
                <div className="h-2 w-4/5 bg-slate-100 rounded" />
              </motion.div>
              <motion.div 
                className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex items-center justify-between"
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 4, delay: 2 }}
              >
                <div className="h-4 w-20 bg-slate-200 rounded" />
                <div className="flex gap-2">
                  <div className="h-6 w-6 rounded-full bg-slate-100" />
                  <div className="h-6 w-6 rounded-full bg-slate-100" />
                </div>
              </motion.div>
            </div>
            
            {/* Background elements */}
            <div className="absolute top-10 right-10 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-60" />
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-60" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
