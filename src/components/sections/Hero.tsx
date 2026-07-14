"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50 pt-16 md:pt-24 lg:pt-32 pb-16 md:pb-24">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50" />
      
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm text-blue-600 w-fit">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
              Software That Fits Your Business
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 text-balance">
              Software Built Around Your <span className="text-blue-600">Business</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 text-balance max-w-xl">
              Replace disconnected Excel sheets, WhatsApp messages and generic software with one customised system designed around your exact business operations.
            </p>
            
            <ul className="space-y-3 text-slate-700">
              {["Inventory, CRM, Staff Attendance, Traceability & Websites", "Mobile-Friendly and Easy for Employees", "Built Around Your Exact Workflow", "Scalable as Your Business Grows"].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full">
              <Button size="lg" className="w-full sm:w-auto text-wrap h-auto py-3" asChild>
                <Link href="/submit-requirement">
                  Discuss Your Requirement <ArrowRight className="ml-2 h-4 w-4 shrink-0" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-wrap h-auto py-3" asChild>
                <Link href="/custom-software-development">
                  Explore Our Solutions
                </Link>
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto w-full max-w-lg lg:max-w-none"
          >
            <div className="relative rounded-2xl border border-slate-200 shadow-2xl overflow-hidden aspect-[4/3] lg:aspect-auto flex items-center justify-center bg-slate-900">
              <img src="/images/hero_dashboard.jpg" alt="Premium Dashboard" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -right-8 top-1/4 bg-white p-4 rounded-xl shadow-xl border border-slate-100 hidden md:flex items-center gap-4"
            >
              <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle2 className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Order Dispatched</p>
                <p className="text-xs text-slate-500">Warehouse B to Client X</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
