import { RequirementForm } from "@/components/forms/RequirementForm";

export const metadata = {
  title: "Submit Your Requirement | Softek Labs",
  description: "Tell us about your business operations and what you want to improve. We'll help you build the right custom software solution."
};

export default function SubmitRequirementPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Discuss Your Requirement
          </h1>
          <p className="text-lg text-slate-600">
            Provide details about your business workflow and challenges. Our business analysts will review your requirements and get back to you with a tailored approach.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
          <RequirementForm />
        </div>
      </div>
    </div>
  );
}
