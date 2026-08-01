"use client";

import { motion } from "framer-motion";
import { FileSpreadsheet, MessageSquare, CloudOff } from "lucide-react";

export function ProblemRecognition() {
  return (
    <section className="py-24 md:py-32 bg-slate-950 relative border-t border-slate-800 overflow-hidden text-white">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-600/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Manual coordination is your biggest bottleneck.
          </h2>
          <p className="text-xl text-slate-400">
            Growing businesses eventually hit a wall where chaotic spreadsheets, lost WhatsApp messages, and disconnected tools make it impossible to scale efficiently.
          </p>
        </div>

        {/* Visual Chaos Diagram */}
        <div className="relative max-w-5xl mx-auto h-[400px] flex items-center justify-center">
          
          {/* Connecting Red Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ filter: 'drop-shadow(0 0 8px rgba(239,68,68,0.5))' }}>
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              d="M 20% 50% Q 50% 20% 80% 50%" 
              stroke="#ef4444" strokeWidth="2" strokeDasharray="8 8" fill="none" 
            />
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
              d="M 20% 50% Q 50% 80% 80% 50%" 
              stroke="#ef4444" strokeWidth="2" strokeDasharray="8 8" fill="none" 
            />
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.4 }}
              d="M 50% 20% L 50% 80%" 
              stroke="#ef4444" strokeWidth="2" strokeDasharray="8 8" fill="none" 
            />
          </svg>

          {/* Floating Nodes */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="absolute left-[15%] top-1/2 -translate-y-1/2 flex flex-col items-center gap-3"
          >
            <div className="h-20 w-20 rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl flex items-center justify-center text-green-500 relative">
              <div className="absolute -top-2 -right-2 h-6 w-6 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold text-white border-2 border-slate-900">!</div>
              <FileSpreadsheet className="h-10 w-10" />
            </div>
            <span className="text-sm font-semibold text-slate-400">Isolated Spreadsheets</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
            className="absolute left-1/2 -translate-x-1/2 top-[10%] flex flex-col items-center gap-3"
          >
            <div className="h-20 w-20 rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl flex items-center justify-center text-blue-400 relative">
              <div className="absolute -bottom-2 -left-2 h-6 w-6 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold text-white border-2 border-slate-900">!</div>
              <CloudOff className="h-10 w-10" />
            </div>
            <span className="text-sm font-semibold text-slate-400">Generic Software</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", bounce: 0.5, delay: 0.4 }}
            className="absolute right-[15%] top-1/2 -translate-y-1/2 flex flex-col items-center gap-3"
          >
            <div className="h-20 w-20 rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl flex items-center justify-center text-emerald-400 relative">
              <div className="absolute -top-2 -left-2 h-6 w-6 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold text-white border-2 border-slate-900">!</div>
              <MessageSquare className="h-10 w-10" />
            </div>
            <span className="text-sm font-semibold text-slate-400">Lost WhatsApps</span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", bounce: 0.5, delay: 0.6 }}
            className="absolute left-1/2 -translate-x-1/2 bottom-[10%] bg-red-500/10 text-red-400 border border-red-500/30 px-6 py-3 rounded-full font-semibold flex items-center gap-2 backdrop-blur-sm shadow-2xl"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            Data is disconnected
          </motion.div>

        </div>
      </div>
    </section>
  );
}
