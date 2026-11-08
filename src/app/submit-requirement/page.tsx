import { RequirementForm } from "@/components/forms/RequirementForm";
import { email } from "@/data/services";
import { ArrowUpRight } from "lucide-react";
export const metadata = {
  title: "Let’s talk about your next move",
  description:
    "Tell Softek Labs about your marketing, WhatsApp campaigns, creative content, website, or custom software project.",
  alternates: { canonical: "/submit-requirement" },
};
export default async function SubmitRequirementPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string | string[] }>;
}) {
  const query = await searchParams;
  const service = typeof query.service === "string" ? query.service : undefined;
  return (
    <section className="contact-section">
      <div className="shell contact-grid">
        <div className="contact-copy">
          <span className="eyebrow">
            <span className="status-dot" /> START SOMETHING GOOD
          </span>
          <h1>
            Your next chapter
            <br />
            starts here<span style={{ color: "var(--blue)" }}>.</span>
          </h1>
          <p>
            A new campaign. A better website. Software that just fits. Tell us
            what’s on your mind, and let’s find the right way forward.
          </p>
          <a className="email-link" href={`mailto:${email}`}>
            {email}
            <ArrowUpRight size={17} />
          </a>
          <div className="contact-aside">
            <h2>What happens next?</h2>
            <p>
              <span>01</span>We review your goals and requirements.
            </p>
            <p>
              <span>02</span>We connect to understand the details.
            </p>
            <p>
              <span>03</span>You get a clear approach and a tailored quote.
            </p>
          </div>
        </div>
        <RequirementForm key={service || "general"} initialService={service} />
      </div>
    </section>
  );
}
