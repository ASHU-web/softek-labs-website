"use client";

import { motion } from "framer-motion";
import { PackageOpen, Target, Building2, Factory, QrCode, ArrowRightLeft, Workflow, LayoutTemplate, ArrowRight } from "lucide-react";
import Link from "next/link";

const solutions = [
  {
    icon: PackageOpen,
    title: "Inventory Management",
    description: "Manage stock, purchases, sales, transfers, adjustments, and warehouses.",
    link: "/#pricing"
  },
  {
    icon: Target,
    title: "CRM",
    description: "Manage leads, customers, follow-ups, sales pipelines, and tasks.",
    link: "/#pricing"
  },
  {
    icon: Building2,
    title: "Staff & Attendance",
    description: "Manage employee attendance, shifts, leave, locations, and face-recognition.",
    link: "/#pricing"
  },
  {
    icon: QrCode,
    title: "Barcode & Traceability",
    description: "Generate barcodes, track products, and provide public product verification.",
    link: "/#pricing"
  },
  {
    icon: LayoutTemplate,
    title: "Business Websites",
    description: "Fast, mobile-responsive static and dynamic websites with admin panels.",
    link: "/#pricing"
  },
  {
    icon: Workflow,
    title: "Complete Business Suite",
    description: "A connected software ecosystem for businesses to manage everything from one platform.",
    link: "/#pricing"
  },
  {
    icon: Factory,
    title: "Enterprise Custom",
    description: "Complex workflows, multi-company operations, mobile apps, and integrations.",
    link: "/#pricing"
  }
];

export function SolutionsOverview() {
  return (
    <section id="solutions" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Unified Core Solutions
          </h2>
          <p className="text-lg text-slate-600">
            One connected system replacing multiple disconnected apps.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group p-6 rounded-2xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-lg transition-all"
            >
              <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform">
                <solution.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{solution.title}</h3>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">{solution.description}</p>
              <Link 
                href={solution.link}
                className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
