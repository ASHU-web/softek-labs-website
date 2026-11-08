import { email } from "@/data/services";
export const metadata = {
  title: "Privacy notice",
  description:
    "How Softek Labs uses information submitted through its enquiry form.",
};
export default function Privacy() {
  return (
    <article className="shell legal-content">
      <span className="eyebrow">SOFTEK LABS</span>
      <h1>Privacy notice</h1>
      <p>
        This notice describes information submitted through this website’s
        enquiry form.
      </p>
      <h2>What you share</h2>
      <p>
        The form asks for your name, business name, phone number, selected
        services, and any message you choose to provide. An email address is
        optional. Please avoid including passwords, payment details, or other
        sensitive information.
      </p>
      <h2>How we use it</h2>
      <p>
        We use your enquiry details to understand your requirements, contact you
        about your request, and discuss a potential project. Submitting an
        enquiry is not an agreement to purchase a service.
      </p>
      <h2>Where enquiries go</h2>
      <p>
        Enquiry details are sent to Softek Labs and stored in Google Sheets to
        help manage follow-up. The website hosting provider and Google process
        information as part of providing these services.
      </p>
      <h2>Your choices</h2>
      <p>
        You can request access to, correction of, or deletion of your enquiry
        details by emailing <a href={`mailto:${email}`}>{email}</a>. You can
        also ask us to stop contacting you about an enquiry.
      </p>
      <h2>Questions</h2>
      <p>
        For questions about information shared with Softek Labs, contact{" "}
        <a href={`mailto:${email}`}>{email}</a>.
      </p>
    </article>
  );
}
