"use client";

import { motion } from "framer-motion";
import { Search, Map, PenTool, Code2, ShieldCheck, Rocket, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const steps = [
  { icon: Search, title: "1. Business Discovery", desc: "We understand how your business currently operates." },
  { icon: Map, title: "2. Workflow Mapping", desc: "We document departments, responsibilities, approvals and data movement." },
  { icon: PenTool, title: "3. Solution Design", desc: "We create the modules, screens, permissions and system structure." },
  { icon: Code2, title: "4. Development", desc: "We build the software using a scalable technical architecture." },
  { icon: ShieldCheck, title: "5. Testing & Training", desc: "We test real business scenarios and train the team." },
  { icon: Rocket, title: "6. Launch & Improvement", desc: "We deploy the software and continue improving it as the business grows." }
];

export function DevelopmentProcess() {
  return (
    <section id="process" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            How We Turn Your Business Process Into Software
          </h2>
          <p className="text-lg text-slate-600">
            A structured, transparent approach to ensure the final product perfectly aligns with your operations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-12 md:mb-16">
          <div className="space-y-6 relative">
            <div className="absolute left-[23px] top-4 bottom-4 w-0.5 bg-slate-200" />
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-16"
              >
                <div className="absolute left-0 top-1 h-12 w-12 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center text-blue-600 shadow-md">
                  <step.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                <p className="text-slate-600 text-sm mt-1">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900"
          >
            <img src="/images/process_isometric.jpg" alt="Development Process" className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity" />
          </motion.div>
        </div>
        
        <div className="text-center px-2 sm:px-0">
          <Button size="lg" className="w-full sm:w-auto text-wrap h-auto py-3" asChild>
            <Link href="/submit-requirement">
              Start with a Business Process Discussion <ArrowRight className="ml-2 h-4 w-4 shrink-0" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
