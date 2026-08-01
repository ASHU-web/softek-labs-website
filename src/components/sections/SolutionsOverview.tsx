"use client";

import { motion } from "framer-motion";
import { PackageOpen, Target, Building2, QrCode } from "lucide-react";

export function SolutionsOverview() {
  return (
    <section id="solutions" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/5 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Everything connects into one custom system.
          </h2>
          <p className="text-xl text-slate-600">
            We build a central hub tailored strictly to your operations, connecting every department perfectly without unnecessary features.
          </p>
        </div>

        {/* Visual Order Diagram */}
        <div className="relative max-w-5xl mx-auto h-[400px] flex items-center justify-center mt-12">
          
          {/* Connecting Blue Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ filter: 'drop-shadow(0 0 8px rgba(37,99,235,0.3))' }}>
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              d="M 20% 50% L 50% 50%" 
              stroke="#2563eb" strokeWidth="3" fill="none" 
            />
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
              d="M 50% 20% L 50% 50%" 
              stroke="#2563eb" strokeWidth="3" fill="none" 
            />
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.4 }}
              d="M 80% 50% L 50% 50%" 
              stroke="#2563eb" strokeWidth="3" fill="none" 
            />
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.6 }}
              d="M 50% 80% L 50% 50%" 
              stroke="#2563eb" strokeWidth="3" fill="none" 
            />
          </svg>

          {/* Central Hub */}
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", bounce: 0.5, delay: 0.8 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
          >
            <div className="h-32 w-32 rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 shadow-[0_0_40px_rgba(37,99,235,0.4)] flex flex-col items-center justify-center text-white relative border-4 border-white">
              <span className="text-xl font-black tracking-wider">SOFTEK</span>
              <span className="text-xs font-medium tracking-widest opacity-80">LABS</span>
            </div>
          </motion.div>

          {/* Connected Nodes */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="absolute left-[10%] top-1/2 -translate-y-1/2 flex flex-col items-center gap-3 z-10"
          >
            <div className="h-16 w-16 rounded-2xl bg-white border border-slate-200 shadow-xl flex items-center justify-center text-blue-600">
              <PackageOpen className="h-8 w-8" />
            </div>
            <span className="text-sm font-bold text-slate-800">Inventory</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
            className="absolute left-1/2 -translate-x-1/2 top-[10%] flex flex-col items-center gap-3 z-10"
          >
            <div className="h-16 w-16 rounded-2xl bg-white border border-slate-200 shadow-xl flex items-center justify-center text-blue-600">
              <Target className="h-8 w-8" />
            </div>
            <span className="text-sm font-bold text-slate-800">CRM</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", bounce: 0.5, delay: 0.4 }}
            className="absolute right-[10%] top-1/2 -translate-y-1/2 flex flex-col items-center gap-3 z-10"
          >
            <div className="h-16 w-16 rounded-2xl bg-white border border-slate-200 shadow-xl flex items-center justify-center text-blue-600">
              <Building2 className="h-8 w-8" />
            </div>
            <span className="text-sm font-bold text-slate-800">Staff & Payroll</span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", bounce: 0.5, delay: 0.6 }}
            className="absolute left-1/2 -translate-x-1/2 bottom-[10%] flex flex-col items-center gap-3 z-10"
          >
            <div className="h-16 w-16 rounded-2xl bg-white border border-slate-200 shadow-xl flex items-center justify-center text-blue-600">
              <QrCode className="h-8 w-8" />
            </div>
            <span className="text-sm font-bold text-slate-800">Traceability</span>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
