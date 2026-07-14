"use client";

import { motion } from "framer-motion";

interface PricingTabsProps {
  activeTab: "individual" | "suite" | "enterprise";
  setActiveTab: (tab: "individual" | "suite" | "enterprise") => void;
}

export function PricingTabs({ activeTab, setActiveTab }: PricingTabsProps) {
  return (
    <div className="flex justify-center mb-10">
      <div className="inline-flex flex-col sm:flex-row bg-slate-100 p-1 rounded-2xl md:rounded-full border border-slate-200">
        <button
          onClick={() => setActiveTab("individual")}
          className={`relative px-6 py-2.5 text-sm font-semibold rounded-xl md:rounded-full transition-colors ${
            activeTab === "individual" ? "text-blue-700" : "text-slate-600 hover:text-slate-900"
          }`}
        >
          {activeTab === "individual" && (
            <motion.div
              layoutId="active-tab"
              className="absolute inset-0 bg-white rounded-xl md:rounded-full shadow-sm border border-slate-200"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10">Individual Modules</span>
        </button>

        <button
          onClick={() => setActiveTab("suite")}
          className={`relative px-6 py-2.5 text-sm font-semibold rounded-xl md:rounded-full transition-colors ${
            activeTab === "suite" ? "text-blue-700" : "text-slate-600 hover:text-slate-900"
          }`}
        >
          {activeTab === "suite" && (
            <motion.div
              layoutId="active-tab"
              className="absolute inset-0 bg-white rounded-xl md:rounded-full shadow-sm border border-slate-200"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10">Complete Business Suite</span>
        </button>

        <button
          onClick={() => setActiveTab("enterprise")}
          className={`relative px-6 py-2.5 text-sm font-semibold rounded-xl md:rounded-full transition-colors ${
            activeTab === "enterprise" ? "text-blue-700" : "text-slate-600 hover:text-slate-900"
          }`}
        >
          {activeTab === "enterprise" && (
            <motion.div
              layoutId="active-tab"
              className="absolute inset-0 bg-white rounded-xl md:rounded-full shadow-sm border border-slate-200"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10">Enterprise Custom</span>
        </button>
      </div>
    </div>
  );
}
