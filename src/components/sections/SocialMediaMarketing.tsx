"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Megaphone, Users2 } from "lucide-react";

export function SocialMediaMarketing() {
  return (
    <section id="marketing" className="py-24 md:py-32 bg-slate-50 relative border-t border-slate-200 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-bold mb-4 border border-purple-200 uppercase tracking-widest shadow-sm">
            Independent Monthly Service
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Scale with AI-driven marketing.
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Once your core is streamlined, our AI engines generate high-converting creatives and pump qualified B2B leads directly into your new system.
          </p>
        </div>

        {/* Visual Scale Diagram */}
        <div className="relative max-w-4xl mx-auto flex flex-col items-center">
          
          {/* Top Node: AI Generation */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center z-10"
          >
            <div className="h-20 w-20 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-purple-500/30 mb-4">
              <BrainCircuit className="h-10 w-10" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">AI Creative Engine</h3>
            <p className="text-sm text-slate-500 text-center mt-1">Analyzes your business & generates tailored ad scripts.</p>
          </motion.div>

          {/* Flow Line 1 */}
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            whileInView={{ height: 60, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-1 bg-gradient-to-b from-purple-500 to-blue-500 my-2"
          />

          {/* Middle Node: Distribution */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-center z-10"
          >
            <div className="h-24 w-auto px-6 bg-white border border-slate-200 rounded-2xl shadow-xl flex items-center justify-center gap-4 text-blue-600 mb-4">
              <Megaphone className="h-8 w-8" />
              <div className="flex flex-col">
                <span className="font-bold text-slate-900 leading-tight">Targeted Ads</span>
                <span className="text-xs text-slate-500 font-medium">Meta, Google & JioHotstar</span>
              </div>
            </div>
          </motion.div>

          {/* Flow Line 2 */}
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            whileInView={{ height: 60, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="w-1 bg-gradient-to-b from-blue-500 to-emerald-500 my-2"
          />

          {/* Bottom Node: Leads */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col items-center z-10"
          >
            <div className="h-20 w-20 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/30 mb-4 relative">
              <Users2 className="h-10 w-10" />
              {/* Pulsing rings */}
              <div className="absolute inset-0 rounded-full border-2 border-emerald-400 animate-ping opacity-20"></div>
            </div>
            <h3 className="text-lg font-bold text-slate-900">B2B Leads Captured</h3>
            <p className="text-sm text-slate-500 text-center mt-1">Flows directly into your Softek CRM, or straight to your WhatsApp.</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
