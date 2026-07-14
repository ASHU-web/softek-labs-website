"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What type of software does Softek Labs develop?",
    a: "We develop modular operational software, including Inventory Management, CRM, Staff Attendance, Barcode/QR systems, Business Websites, and complete custom portals that fit your specific workflow."
  },
  {
    q: "Can you customise software according to our existing process?",
    a: "Yes. Our core philosophy is to build the software around your existing process, rather than forcing your employees to learn a new, rigid way of working."
  },
  {
    q: "Can the software work on mobile phones?",
    a: "Yes. We build responsive web applications that work seamlessly on desktops, tablets, and mobile phones, ensuring your field and warehouse staff can operate easily."
  },
  {
    q: "Can different employees have different permissions?",
    a: "Absolutely. We implement advanced role-based access control. A warehouse worker will only see picking and packing screens, while the owner will see full financial and operational dashboards."
  },
  {
    q: "Can the system manage multiple warehouses?",
    a: "Yes. Our systems are built to handle complex multi-warehouse logic, including stock transfers, nearest-warehouse recommendation, and consolidated reporting."
  },
  {
    q: "Can you migrate our existing Excel data?",
    a: "Yes. We can import your existing customers, products, stock history, and outstanding data from Excel into the new system during the deployment phase."
  },
  {
    q: "Can barcode and QR scanning be included?",
    a: "Yes. We can integrate barcode generation, thermal printing, and mobile-based scanning for quick stock movement, picking, and verification."
  },
  {
    q: "Can the software integrate with our existing tools?",
    a: "Yes. We can build integrations with tools like Tally, Zoho, WhatsApp, Email, SMS gateways, and Payment gateways, according to your requirements."
  },
  {
    q: "Do you provide training to employees?",
    a: "Yes. We test the software against your real business scenarios and provide comprehensive training to your team before the official launch."
  },
  {
    q: "Can the software be expanded in the future?",
    a: "Yes. We build on scalable, modern architecture. As your business grows, we can add new modules, features, and user roles to the existing system."
  },
  {
    q: "How does the development process begin?",
    a: "It starts with a Business Discovery session where we understand your operations. We then map your workflow and design a solution before beginning development."
  }
];

export function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600">
            Clear answers about our development process and capabilities.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`border rounded-xl overflow-hidden transition-colors ${openIndex === i ? 'border-blue-300 bg-blue-50/50' : 'border-slate-200 bg-white hover:border-slate-300'}`}
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-semibold text-slate-900 pr-4">{faq.q}</span>
                <ChevronDown className={`h-5 w-5 text-slate-400 transition-transform ${openIndex === i ? 'rotate-180 text-blue-600' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-4 pt-0 text-slate-600 text-sm leading-relaxed border-t border-blue-100 mt-2 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
