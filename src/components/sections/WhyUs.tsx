"use client";

import { motion } from "framer-motion";
import { Lightbulb, Settings, MousePointerClick, Smartphone, Scaling, Handshake } from "lucide-react";

const reasons = [
  { icon: Lightbulb, title: "Business-First Approach", desc: "We understand operations before suggesting technology." },
  { icon: Settings, title: "Complete Customisation", desc: "Modules, workflows, permissions and reports are designed around the business." },
  { icon: MousePointerClick, title: "Simple User Experience", desc: "Interfaces are designed for real employees and daily operations." },
  { icon: Smartphone, title: "Mobile-Friendly Systems", desc: "Teams can operate the software from phones, tablets and desktops." },
  { icon: Scaling, title: "Scalable Architecture", desc: "The system can expand with more users, warehouses and modules." },
  { icon: Handshake, title: "Long-Term Partnership", desc: "We continue supporting and improving the system as the business evolves." }
];

export function WhyUs() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Why Growing Businesses Choose Softek Labs
          </h2>
          <p className="text-lg text-slate-600">
            We bridge the gap between business operations and technical development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <reason.icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{reason.title}</h3>
              <p className="text-slate-600 leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
