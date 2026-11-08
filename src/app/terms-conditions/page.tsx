import { email } from "@/data/services";
export const metadata = {
  title: "Website terms",
  description:
    "Information about enquiries, proposals, and services from Softek Labs.",
};
export default function Terms() {
  return (
    <article className="shell legal-content">
      <span className="eyebrow">SOFTEK LABS</span>
      <h1>Website terms</h1>
      <p>
        This website introduces Softek Labs and provides a way to enquire about
        our services.
      </p>
      <h2>Enquiries and proposals</h2>
      <p>
        Submitting an enquiry does not create a service agreement or payment
        obligation. Project scope, pricing, timelines, deliverables, revisions,
        and support are set out in a separate proposal or agreement before work
        begins.
      </p>
      <h2>Service scope and costs</h2>
      <p>
        Advertising budgets, messaging charges, third-party subscriptions,
        domains, hosting, and other external costs are discussed as part of the
        proposal. They are not automatically included in a service fee.
      </p>
      <h2>Marketing and messaging</h2>
      <p>
        Advertising performance depends on factors including the offer,
        audience, budget, and market. No specific commercial result is promised
        on this website. WhatsApp campaigns are intended for opted-in audiences
        and are subject to applicable platform requirements.
      </p>
      <h2>Creative and development work</h2>
      <p>
        Ownership, usage permissions, source files, hosting, maintenance, and
        third-party assets are addressed in the relevant project agreement.
        Illustrative website artwork represents service concepts rather than
        actual campaign results.
      </p>
      <h2>Contact</h2>
      <p>
        For questions about a proposed engagement, email{" "}
        <a href={`mailto:${email}`}>{email}</a>.
      </p>
    </article>
  );
}
