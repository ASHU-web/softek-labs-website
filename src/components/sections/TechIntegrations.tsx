"use client";

import { motion } from "framer-motion";
import { Link2 } from "lucide-react";

const integrations = [
  "Tally", "Zoho", "Razorpay", "WhatsApp", "Email", "SMS", "Barcode Scanners", 
  "Thermal Printers", "Google Maps", "Payment Gateways", "Accounting Software", "E-commerce APIs"
];

export function TechIntegrations() {
  return (
    <section className="py-16 md:py-24 bg-white border-y border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
              Modern Technology. Built for Long-Term Growth.
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              We connect your custom software to the tools you already use. Integration support can be developed according to the client's requirements.
            </p>
            <div className="flex flex-wrap gap-3">
              {integrations.map((item, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm font-medium text-slate-700 shadow-sm hover:border-blue-300 transition-colors cursor-default">
                  <Link2 className="h-3 w-3 text-slate-400" /> {item}
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
              <div className="absolute inset-0 border border-dashed border-slate-200 rounded-full animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-8 border border-dashed border-slate-300 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
              
              <div className="relative h-32 w-32 bg-white rounded-full shadow-xl border border-slate-100 flex items-center justify-center z-10">
                <div className="text-center">
                  <span className="font-bold text-lg text-slate-900 block">Softek Labs</span>
                  <span className="text-xs font-medium text-blue-600">CORE HUB</span>
                </div>
              </div>
              
              {/* Floating nodes */}
              {[...Array(6)].map((_, i) => (
                <div 
                  key={i} 
                  className="absolute h-12 w-12 bg-white shadow-lg rounded-full border border-slate-200 flex items-center justify-center"
                  style={{
                    top: `${(50 - Math.cos((i * 60 * Math.PI) / 180) * 45).toFixed(2)}%`,
                    left: `${(50 + Math.sin((i * 60 * Math.PI) / 180) * 45).toFixed(2)}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <Link2 className="h-5 w-5 text-slate-400" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
