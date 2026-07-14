"use client";

import { motion } from "framer-motion";
import { Ship, Store, Factory, HardHat, Box, Cuboid, MapPin, Wrench } from "lucide-react";

const industries = [
  {
    icon: Ship,
    title: "Importers & Exporters",
    description: "Manage multi-currency pricing, container tracking, landed costs, and port-to-warehouse stock movement."
  },
  {
    icon: Store,
    title: "Wholesalers & Distributors",
    description: "Handle bulk orders, tiered dealer pricing, stock reservations, and automated dispatch routing."
  },
  {
    icon: Factory,
    title: "Manufacturers & Factories",
    description: "Track raw material consumption, job cards, machine allocation, and finished goods inventory."
  },
  {
    icon: Box,
    title: "WPC & Interior Materials",
    description: "Manage products by design, colour, size, batch, warehouse, and reserved stock."
  },
  {
    icon: HardHat,
    title: "Building Material Suppliers",
    description: "Track heavy inventory, site deliveries, partial dispatch, and contractor-specific pricing."
  },
  {
    icon: Cuboid,
    title: "Multi-Warehouse Businesses",
    description: "Automate stock allocation and nearest-warehouse dispatch logic to reduce logistics costs."
  },
  {
    icon: MapPin,
    title: "Logistics & Dispatch",
    description: "Manage vehicle details, driver assignments, loading orders, and proof of delivery tracking."
  },
  {
    icon: Wrench,
    title: "Service Companies",
    description: "Track field visits, AMC contracts, spare parts inventory, and technician performance."
  }
];

export function IndustrySolutions() {
  return (
    <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
          See how we&apos;ve transformed businesses like yours.
          </h2>
          <p className="text-lg text-slate-600">
            We don&apos;t sell generic software. We study your industry and build the system around your unique challenges.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                  <industry.icon className="h-5 w-5 text-slate-700" />
                </div>
                <h3 className="font-bold text-slate-900 leading-tight">{industry.title}</h3>
              </div>
              <p className="text-slate-600 text-sm">{industry.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
