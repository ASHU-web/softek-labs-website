"use client";

import { motion } from "framer-motion";
import { CheckCircle2, PackageSearch, Truck, ShieldAlert, ArrowRight, Zap, IndianRupee, TrendingUp } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function MultiWarehouseCaseStudy() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white pt-24 pb-32 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
              <span className="inline-flex items-center rounded-full bg-blue-900/50 border border-blue-700 px-3 py-1 text-sm text-blue-300">
                Industry: Import & Distribution
              </span>
              <span className="inline-flex items-center rounded-full bg-slate-800 border border-slate-700 px-3 py-1 text-sm text-slate-300">
                Solution: Multi-Warehouse Inventory
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Transforming Multi-Warehouse Supply Chain Operations
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              How a leading importer replaced WhatsApp chaos with an intelligent inventory system that automatically routes orders to the nearest warehouse, saving lakhs in transport costs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 -mt-20 relative z-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
            
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
              {/* The Challenge */}
              <div className="p-8 md:p-12 md:col-span-2">
                <div className="flex items-center gap-3 mb-6 text-red-600">
                  <ShieldAlert className="h-6 w-6" />
                  <h2 className="text-2xl font-bold text-slate-900">The Challenge</h2>
                </div>
                
                <div className="space-y-6 text-slate-600 leading-relaxed">
                  <p>
                    A rapidly growing importer and distributor was managing inventory across 4 different warehouse locations. As order volumes scaled, their manual operations became a logistical nightmare.
                  </p>
                  <p>
                    Sales executives were taking orders on WhatsApp and randomly assigning them to warehouses without real-time visibility into stock levels. This led to a cascading series of costly operational failures:
                  </p>
                  
                  <ul className="space-y-4 mt-6">
                    <li className="flex items-start gap-3 bg-red-50 p-4 rounded-xl border border-red-100">
                      <Truck className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-red-900 block mb-1">Excessive Transport Costs</strong>
                        Orders were frequently dispatched from a warehouse 50km away because the sales team didn't know the exact same stock was available in a warehouse just 5km from the client.
                      </div>
                    </li>
                    <li className="flex items-start gap-3 bg-red-50 p-4 rounded-xl border border-red-100">
                      <PackageSearch className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-red-900 block mb-1">Lost Inventory & Stock Mismatches</strong>
                        Trucks would arrive at a warehouse for loading, only to find the item was out of stock, causing hours of delay, wasted fuel, and angry clients.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Sidebar Stats */}
              <div className="p-8 md:p-12 bg-slate-50 flex flex-col justify-center">
                <h3 className="text-lg font-bold text-slate-900 mb-6">Before Softek Labs</h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-3xl font-black text-slate-900 mb-1">4</div>
                    <div className="text-sm font-medium text-slate-500">Warehouses managed manually via WhatsApp</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-red-500 mb-1">20%+</div>
                    <div className="text-sm font-medium text-slate-500">Unnecessary transport cost due to wrong routing</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-red-500 mb-1">3 hrs</div>
                    <div className="text-sm font-medium text-slate-500">Average time wasted daily on stock-checks</div>
                  </div>
                </div>
              </div>
            </div>

            {/* The Solution */}
            <div className="border-t border-slate-100 p-8 md:p-12 bg-blue-50/50">
              <div className="flex items-center gap-3 mb-8 text-blue-600">
                <Zap className="h-6 w-6" />
                <h2 className="text-2xl font-bold text-slate-900">The Softek Labs Solution</h2>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <span className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-700 text-xs">1</span>
                    Centralised Real-Time Stock
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    We built a unified dashboard that tracks inventory across all 4 locations in real-time. The moment an item is loaded into a truck, the central inventory deducts the stock instantly, preventing double-booking.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <span className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-700 text-xs">2</span>
                    Smart Routing Algorithm
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    When a sales executive inputs a delivery pin code, our custom algorithm automatically checks stock across all warehouses and assigns the dispatch order to the warehouse that is physically closest to the client.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <span className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-700 text-xs">3</span>
                    Automated Loading Orders
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Instead of sending WhatsApp messages, the system auto-generates a loading slip for the warehouse manager, ensuring the truck driver picks exactly the right items.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm flex flex-col justify-center items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Zero Disruption Deployment</h4>
                  <p className="text-xs text-slate-500 px-4">
                    The entire system was built with a mobile-first UI so warehouse staff didn't require any technical training to use it.
                  </p>
                </div>
              </div>
            </div>

            {/* The Impact */}
            <div className="border-t border-slate-100 p-8 md:p-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">The Impact</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="inline-flex h-16 w-16 rounded-2xl bg-green-50 text-green-600 items-center justify-center mb-4 border border-green-100">
                    <IndianRupee className="h-8 w-8" />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-2">₹12L+</h3>
                  <p className="text-sm font-semibold text-slate-700 mb-2">Saved Annually in Transport</p>
                  <p className="text-xs text-slate-500">By routing trucks strictly from the nearest warehouse with available stock.</p>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex h-16 w-16 rounded-2xl bg-blue-50 text-blue-600 items-center justify-center mb-4 border border-blue-100">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-2">0%</h3>
                  <p className="text-sm font-semibold text-slate-700 mb-2">Stock Mismatches</p>
                  <p className="text-xs text-slate-500">Trucks no longer return empty because stock is verified before dispatch is assigned.</p>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex h-16 w-16 rounded-2xl bg-purple-50 text-purple-600 items-center justify-center mb-4 border border-purple-100">
                    <TrendingUp className="h-8 w-8" />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-2">3x</h3>
                  <p className="text-sm font-semibold text-slate-700 mb-2">Faster Loading Speed</p>
                  <p className="text-xs text-slate-500">Warehouse staff receive clear digital loading slips instead of scrolling through WhatsApp.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-slate-900 p-8 md:p-12 text-center text-white">
              <h2 className="text-2xl font-bold mb-4">Facing Similar Operational Challenges?</h2>
              <p className="text-slate-300 mb-8 max-w-xl mx-auto">
                Stop relying on spreadsheets and chat apps. Let us build a robust software system tailored precisely to how your business works.
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
                <Link href="/submit-requirement">
                  Discuss Your Custom Requirement <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
