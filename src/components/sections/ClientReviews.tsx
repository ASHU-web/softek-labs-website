"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const reviews = [
  {
    text: "Softek Labs reduced our work and increased productivity. Our team adapted to the custom interface within a day.",
    name: "Sanjiv Kumar",
    role: "Nexus Decors",
    logo: "/images/nexus-logo.png"
  }
];

export function ClientReviews() {
  return (
    <section id="reviews" className="py-24 bg-slate-950 text-white relative border-b border-slate-900">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex justify-center">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-slate-900/50 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-slate-800 shadow-2xl relative flex flex-col items-center max-w-4xl text-center"
            >
              <Quote className="absolute top-8 left-8 h-16 w-16 text-slate-800 opacity-50" />
              
              <div className="flex gap-1 mb-8 relative z-10">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-6 w-6 fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              <p className="text-2xl md:text-4xl font-semibold text-white italic mb-10 relative z-10 leading-snug">
                &quot;{review.text}&quot;
              </p>
              
              <div className="relative z-10 flex flex-col items-center gap-4">
                {review.logo && (
                  <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full p-2">
                    <Image 
                      src={review.logo} 
                      alt="Company Logo" 
                      width={60} 
                      height={60} 
                      className="object-contain"
                    />
                  </div>
                )}
                <div>
                  <p className="font-bold text-slate-200 text-lg">{review.name}</p>
                  <p className="text-sm font-medium text-blue-400 uppercase tracking-widest">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
