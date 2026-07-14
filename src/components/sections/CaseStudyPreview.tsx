"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export function CaseStudyPreview() {
  return (
    <section id="case-studies" className="py-16 md:py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Software Built for Real Operational Challenges
          </h2>
          <p className="text-lg text-slate-300">
            See how we solved complex supply chain and operational problems for growing businesses.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden max-w-5xl mx-auto flex flex-col md:flex-row"
        >
          <div className="p-6 md:p-12 md:w-1/2 flex flex-col justify-center">
            <div className="inline-flex items-center rounded-full bg-blue-900/50 border border-blue-700 px-3 py-1 text-sm text-blue-300 w-fit mb-6">
              Importer & Distributor
            </div>
            <h3 className="text-2xl font-bold mb-4">Multi-Warehouse Inventory System</h3>
            <p className="text-slate-300 mb-6">
              A growing importer needed to manage products across multiple warehouses and determine the best warehouse for dispatch automatically.
            </p>
            
            <h4 className="font-semibold text-white mb-3">The Solution</h4>
            <ul className="space-y-2 mb-8 text-slate-300 text-sm">
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-400" /> Real-time warehouse stock</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-400" /> Nearest warehouse recommendation</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-400" /> Automated loading-order generation</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-400" /> Dispatch tracking</li>
            </ul>
            
            <Link href="/case-studies" className="inline-flex items-center text-blue-400 font-semibold hover:text-blue-300 transition-colors">
              Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <div className="bg-slate-950 md:w-1/2 p-6 md:p-8 flex items-center justify-center relative border-t md:border-t-0 md:border-l border-slate-700">
            {/* Abstract UI representation */}
            <div className="w-full max-w-sm rounded-xl border border-slate-700 bg-slate-900 shadow-2xl overflow-hidden">
              <div className="h-10 bg-slate-800 border-b border-slate-700 flex items-center px-4">
                <div className="h-3 w-1/3 bg-slate-700 rounded" />
              </div>
              <div className="p-4 flex flex-col gap-3">
                <div className="flex justify-between items-center p-3 bg-slate-800 rounded-lg border border-slate-700">
                  <div className="flex flex-col gap-2">
                    <div className="h-3 w-20 bg-slate-600 rounded" />
                    <div className="h-2 w-12 bg-slate-700 rounded" />
                  </div>
                  <div className="h-6 w-16 bg-blue-900/50 border border-blue-800 rounded text-[10px] text-blue-400 flex items-center justify-center">Allocated</div>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-800 rounded-lg border border-slate-700">
                  <div className="flex flex-col gap-2">
                    <div className="h-3 w-24 bg-slate-600 rounded" />
                    <div className="h-2 w-16 bg-slate-700 rounded" />
                  </div>
                  <div className="h-6 w-16 bg-green-900/30 border border-green-800/50 rounded text-[10px] text-green-400 flex items-center justify-center">Dispatched</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
