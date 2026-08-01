"use client";

import { motion } from "framer-motion";

export function DevelopmentProcess() {
  return (
    <section id="process" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            A proven path from chaos to scale.
          </h2>
        </div>

        {/* Minimal Timeline */}
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-800 -translate-y-1/2 z-0" />
          
          {/* Step 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center bg-slate-900 border border-slate-800 p-8 rounded-2xl z-10 w-full md:w-1/3 relative"
          >
            <div className="text-4xl font-black text-slate-800 absolute top-4 right-4">01</div>
            <h3 className="text-xl font-bold text-white mb-2">Audit</h3>
            <p className="text-slate-400 text-sm text-center">We map your current broken workflows.</p>
          </motion.div>

          {/* Step 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center bg-blue-600 border border-blue-500 p-8 rounded-2xl z-10 w-full md:w-1/3 shadow-[0_0_30px_rgba(37,99,235,0.3)] relative transform scale-105"
          >
            <div className="text-4xl font-black text-blue-800/30 absolute top-4 right-4">02</div>
            <h3 className="text-xl font-bold text-white mb-2">Build</h3>
            <p className="text-blue-100 text-sm text-center">We engineer your central software hub.</p>
          </motion.div>

          {/* Step 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center bg-slate-900 border border-slate-800 p-8 rounded-2xl z-10 w-full md:w-1/3 relative"
          >
            <div className="text-4xl font-black text-slate-800 absolute top-4 right-4">03</div>
            <h3 className="text-xl font-bold text-white mb-2">Scale</h3>
            <p className="text-slate-400 text-sm text-center">We deploy AI to pump leads into your system.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
