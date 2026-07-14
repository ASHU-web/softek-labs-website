"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Check, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().min(2, "Business name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().optional().or(z.literal("")),
  requirements: z.string().optional(),
  solutions: z.array(z.string()).min(1, "Select at least one service"),
});

type FormData = z.infer<typeof formSchema>;

const solutionsList = [
  "Inventory Management", "CRM", "Staff Management and Attendance", 
  "Barcode & QR", "Static Website", "Dynamic Website", "Complete Business Suite", "Completely Custom Requirement"
];

export function RequirementForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { solutions: [] }
  });

  const selectedSolutions = watch("solutions");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const serviceQuery = urlParams.get('service');
      if (serviceQuery) {
        const services = serviceQuery.split(',').map(s => s.trim());
        setValue("solutions", services, { shouldValidate: true });
      }
    }
  }, [setValue]);

  const toggleSolution = (solution: string) => {
    const current = selectedSolutions || [];
    if (current.includes(solution)) {
      setValue("solutions", current.filter(s => s !== solution), { shouldValidate: true });
    } else {
      setValue("solutions", [...current, solution], { shouldValidate: true });
    }
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/submit-requirement', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit form');
      }
      
      setIsSubmitting(false);
      setIsSuccess(true);
    } catch (error) {
      console.error('Submission error:', error);
      alert('There was an error submitting your requirement. Please try again or use the WhatsApp option below.');
      setIsSubmitting(false);
    }
  };

  const getWhatsAppLink = () => {
    const services = selectedSolutions?.join(", ") || "custom software";
    const message = `Hello Softek Labs, I am interested in the ${services} module. I would like to discuss the setup, customisation, and managed software plan.`;
    return `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
  };

  if (isSuccess) {
    return (
      <div className="p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
        <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <Check className="h-10 w-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank you!</h3>
        <p className="text-slate-600 max-w-md mx-auto mb-8">
          Our team will review your requirements and contact you shortly.
        </p>
        <Button variant="outline" className="border-green-600 text-green-700 hover:bg-green-50" asChild>
          <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 h-4 w-4" /> Message us on WhatsApp
          </a>
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 md:p-10">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Discuss Your Requirement</h2>
        <p className="text-slate-600 mb-8">Tell us what you're looking for, and we'll get back to you with a tailored solution.</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          
          {/* Services Section */}
          <div>
            <label className="text-sm font-semibold text-slate-900 mb-3 block">What solutions are you interested in? *</label>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {solutionsList.map(sol => {
                const isSelected = selectedSolutions?.includes(sol);
                return (
                  <div 
                    key={sol}
                    onClick={() => toggleSolution(sol)}
                    className={`cursor-pointer border rounded-lg p-3 text-sm font-medium transition-all flex items-center gap-3 ${isSelected ? 'border-blue-500 bg-blue-50 text-blue-900' : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700'}`}
                  >
                    <div className={`h-5 w-5 rounded border flex items-center justify-center shrink-0 ${isSelected ? 'bg-blue-500 border-blue-500' : 'border-slate-300'}`}>
                      {isSelected && <Check className="h-3 w-3 text-white" />}
                    </div>
                    {sol}
                  </div>
                )
              })}
            </div>
            {errors.solutions && <span className="text-xs text-red-500 mt-2 block">{errors.solutions.message}</span>}
          </div>

          {/* Details Section */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Full Name *</label>
              <input {...register("name")} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="John Doe" />
              {errors.name && <span className="text-xs text-red-500">{errors.name.message}</span>}
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Business Name *</label>
              <input {...register("company")} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Your Company Ltd." />
              {errors.company && <span className="text-xs text-red-500">{errors.company.message}</span>}
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Phone Number *</label>
              <input {...register("phone")} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="+91 98765 43210" />
              {errors.phone && <span className="text-xs text-red-500">{errors.phone.message}</span>}
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Email Address (Optional)</label>
              <input type="email" {...register("email")} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="john@example.com" />
              {errors.email && <span className="text-xs text-red-500">{errors.email.message}</span>}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Message / Brief Requirement (Optional)</label>
            <textarea {...register("requirements")} rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none" placeholder="What are the main workflows you want to digitalise?" />
          </div>

          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row gap-4 items-center justify-between">
            <p className="text-sm text-slate-500 text-center sm:text-left">
              Prefer to talk immediately? <br className="sm:hidden" />
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="text-green-600 font-medium hover:underline inline-flex items-center mt-1 sm:mt-0">
                <MessageCircle className="h-4 w-4 mr-1" /> WhatsApp Us
              </a>
            </p>
            <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white min-w-[200px]">
              {isSubmitting ? "Submitting..." : (
                <>Send Requirement <Send className="ml-2 h-4 w-4" /></>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
