import { Hero } from "@/components/sections/Hero";
import { ProblemRecognition } from "@/components/sections/ProblemRecognition";
import { CoreDifferentiator } from "@/components/sections/CoreDifferentiator";
import { SolutionsOverview } from "@/components/sections/SolutionsOverview";
import { IndustrySolutions } from "@/components/sections/IndustrySolutions";
import { WorkflowVisualisation } from "@/components/sections/WorkflowVisualisation";
import { CustomisationCapabilities } from "@/components/sections/CustomisationCapabilities";
import { EmployeeFriendly } from "@/components/sections/EmployeeFriendly";
import { DevelopmentProcess } from "@/components/sections/DevelopmentProcess";
import { CaseStudyPreview } from "@/components/sections/CaseStudyPreview";
import { TechIntegrations } from "@/components/sections/TechIntegrations";
import { WhyUs } from "@/components/sections/WhyUs";
import { ClientReviews } from "@/components/sections/ClientReviews";
import { Faqs } from "@/components/sections/Faqs";
import { Pricing } from "@/components/sections/Pricing";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemRecognition />
      <SolutionsOverview />
      <DevelopmentProcess />
      <CaseStudyPreview />
      <ClientReviews />
      <Pricing />
      <Faqs />
      <FinalCta />
    </>
  );
}
