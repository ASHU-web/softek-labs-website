"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 pt-24 md:pt-32 pb-16 md:pb-24 min-h-[90vh] flex flex-col justify-center text-white">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600 rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/3" />
      
      <div className="container relative mx-auto px-4 md:px-6 flex flex-col items-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center max-w-4xl"
        >
          <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-400 font-medium tracking-wide mb-8">
            <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
            Stop running your business on Excel & WhatsApp
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white text-balance mb-12">
            We build the software your business <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">actually needs.</span>
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <Button size="lg" className="w-full sm:w-auto text-wrap h-auto py-4 px-8 text-base bg-blue-600 hover:bg-blue-500" asChild>
              <Link href="/submit-requirement">
                Discuss Your Requirement <ArrowRight className="ml-2 h-5 w-5 shrink-0" />
              </Link>
            </Button>
            <Button size="lg" className="w-full sm:w-auto text-wrap h-auto py-4 px-8 text-base bg-transparent border border-slate-700 text-white hover:bg-slate-800" asChild>
              <Link href="#solutions">
                See How It Works
              </Link>
            </Button>
          </div>
        </motion.div>
        
        {/* Massive Centered Visual */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 md:mt-24 w-full max-w-6xl relative"
        >
          <div className="relative rounded-2xl border border-slate-700 shadow-[0_0_100px_rgba(37,99,235,0.2)] overflow-hidden bg-slate-900 aspect-video">
            <img src="/images/hero_dashboard.jpg" alt="Premium Custom Dashboard" className="w-full h-full object-cover opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
