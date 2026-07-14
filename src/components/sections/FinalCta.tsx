"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function FinalCta() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-blue-600 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3" />
      
      <div className="container relative mx-auto px-4 md:px-6 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Let&apos;s Build Your Systemware That Works the Way Your Business Works
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-10 text-balance">
            Tell us how your business currently operates, where your team faces difficulties and what you want to improve. We will help you convert the process into a customised software solution.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full px-2 sm:px-0">
            <Button size="lg" variant="secondary" className="bg-white text-blue-700 hover:bg-slate-50 w-full sm:w-auto text-wrap h-auto py-3" asChild>
              <Link href="/submit-requirement">
                Discuss Your Requirement <ArrowRight className="ml-2 h-4 w-4 shrink-0" />
              </Link>
            </Button>
            <Button size="lg" className="bg-green-600 text-white hover:bg-green-700 border-none w-full sm:w-auto text-wrap h-auto py-3" asChild>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5 shrink-0" /> Send Requirement on WhatsApp
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
