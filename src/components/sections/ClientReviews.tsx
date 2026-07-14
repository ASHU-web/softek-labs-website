"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const reviews = [
  {
    text: "Softek Labs has reduced our work a lot and increased our productivity. Team delivered the software within the promised time and our team had adapted the interface within a day. Price they charged is genuine and the product they delivered is industry standard, we hope to coperate with them in coming time for more software products.",
    name: "Sanjiv Kumar",
    role: "Nexus Decors",
    company: "", // Combined above
    logo: "/images/nexus-logo.png"
  }
];

export function ClientReviews() {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Our Clients / Client Reviews
          </h2>
          <p className="text-lg text-slate-600">
            Hear from operations leaders who replaced chaos with structure.
          </p>
        </div>

        <div className="flex justify-center">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm relative flex flex-col md:flex-row items-center md:items-start gap-8 max-w-4xl"
            >
              <Quote className="absolute top-6 right-6 h-12 w-12 text-slate-100" />
              
              {review.logo && (
                <div className="shrink-0 relative z-10 w-32 h-32 flex items-center justify-center bg-white rounded-xl border border-slate-100 p-2 shadow-sm">
                  <Image 
                    src={review.logo} 
                    alt="Company Logo" 
                    width={100} 
                    height={100} 
                    className="object-contain"
                  />
                </div>
              )}
              
              <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
                <div className="flex gap-1 mb-6 relative z-10">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 italic mb-8 relative z-10 flex-1 leading-relaxed text-lg">
                  "{review.text}"
                </p>
                <div className="relative z-10 border-t border-slate-100 pt-6 w-full text-center md:text-left">
                  <p className="font-bold text-slate-900 text-lg">{review.name}</p>
                  <p className="text-sm font-medium text-blue-600">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
