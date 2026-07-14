"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <img src="/images/softek-logo.png" alt="Softek Labs Logo" className="h-10 md:h-12 w-auto" />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link href="#solutions" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Solutions
          </Link>
          <Link href="#process" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Our Process
          </Link>
          <Link href="#case-studies" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Case Studies
          </Link>
          <Link href="#reviews" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Reviews
          </Link>
          <Link href="#pricing" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Pricing
          </Link>
          <Link href="#faqs" className="text-sm font-medium hover:text-blue-600 transition-colors">
            FAQs
          </Link>
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <Button asChild>
            <Link href="/submit-requirement">Discuss Your Requirement</Link>
          </Button>
        </div>

        {/* Mobile Hamburger Icon */}
        <button 
          className="md:hidden p-2 text-slate-600 hover:text-slate-900 focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-slate-100 bg-white overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-6 gap-4">
              <Link href="#solutions" onClick={toggleMenu} className="text-base font-medium text-slate-800 hover:text-blue-600">
                Solutions
              </Link>
              <Link href="#process" onClick={toggleMenu} className="text-base font-medium text-slate-800 hover:text-blue-600">
                Our Process
              </Link>
              <Link href="#case-studies" onClick={toggleMenu} className="text-base font-medium text-slate-800 hover:text-blue-600">
                Case Studies
              </Link>
              <Link href="#reviews" onClick={toggleMenu} className="text-base font-medium text-slate-800 hover:text-blue-600">
                Reviews
              </Link>
              <Link href="#pricing" onClick={toggleMenu} className="text-base font-medium text-slate-800 hover:text-blue-600">
                Pricing
              </Link>
              <Link href="#faqs" onClick={toggleMenu} className="text-base font-medium text-slate-800 hover:text-blue-600">
                FAQs
              </Link>
              <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col">
                <Button className="w-full" asChild onClick={toggleMenu}>
                  <Link href="/submit-requirement">Discuss Your Requirement</Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
