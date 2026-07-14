"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Clock, Database, FileSpreadsheet, MessageSquare, MonitorOff, Users, ZapOff } from "lucide-react";

const problems = [
  {
    icon: Database,
    title: "Inaccurate Stock Data",
    description: "Stock information is not accurate across warehouses."
  },
  {
    icon: FileSpreadsheet,
    title: "Disconnected Sheets",
    description: "Teams work on different Excel spreadsheets."
  },
  {
    icon: Clock,
    title: "Delayed Orders",
    description: "Orders get delayed between departments."
  },
  {
    icon: MonitorOff,
    title: "Poor Visibility",
    description: "Warehouse staff cannot see real-time requirements."
  },
  {
    icon: Users,
    title: "Owner Dependency",
    description: "Business owners depend on employees for reports."
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Coordination",
    description: "Critical decisions are lost in WhatsApp chats."
  },
  {
    icon: ZapOff,
    title: "Rigid Generic Software",
    description: "Generic software does not fit the workflow."
  },
  {
    icon: AlertTriangle,
    title: "Low Adoption",
    description: "Employees avoid using complicated systems."
  }
];

export function ProblemRecognition() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Is Your Business Still Running on Excel, WhatsApp and Manual Follow-Ups?
          </h2>
          <p className="text-lg text-slate-600">
            Growing businesses eventually hit a wall where manual coordination becomes the biggest bottleneck to scale.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200"
          >
            <img src="/images/problem_spreadsheets.jpg" alt="Chaos to Order" className="w-full h-auto object-cover" />
          </motion.div>

          <div className="space-y-6">
            {[
              { icon: FileSpreadsheet, title: "Disconnected Data", desc: "Teams work on isolated Excel sheets, causing inaccuracies." },
              { icon: MessageSquare, title: "Lost Communication", desc: "Critical decisions and approvals get buried in WhatsApp." },
              { icon: MonitorOff, title: "Poor Visibility", desc: "No real-time tracking of orders or inventory across warehouses." },
              { icon: ZapOff, title: "Rigid Generic Software", desc: "Forcing your workflow to fit into off-the-shelf software." }
            ].map((problem, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50 hover:bg-slate-100 transition-colors"
              >
                <div className="h-10 w-10 shrink-0 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-red-500 shadow-sm">
                  <problem.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">{problem.title}</h3>
                  <p className="text-slate-600 text-sm mt-1">{problem.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-blue-500 to-blue-700">
            <div className="bg-white rounded-full px-6 py-3">
              <p className="text-lg font-medium text-slate-900">
                <span className="text-blue-600 font-semibold">Softek Labs</span> brings your complete workflow into one customised, easy-to-use system.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
