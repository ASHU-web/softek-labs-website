"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { enquirySchema, serviceOptions, type EnquiryData } from "@/lib/enquiry";
import { email } from "@/data/services";
export function RequirementForm({
  initialService,
}: {
  initialService?: string;
}) {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryData>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      solutions: serviceOptions.some((s) => s.value === initialService)
        ? [initialService!]
        : [],
      name: "",
      company: "",
      phone: "",
      email: "",
      requirements: "",
      website: "",
    },
  });
  async function submit(data: EnquiryData) {
    setError("");
    try {
      const response = await fetch("/api/submit-requirement", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        signal: AbortSignal.timeout(25000),
      });
      if (!response.ok) {
        const result = await response.json().catch(() => null);
        throw new Error(
          result?.error || "We couldn’t send your enquiry. Please try again.",
        );
      }
      setSuccess(true);
    } catch (e) {
      setError(
        e instanceof Error && e.name !== "TimeoutError"
          ? e.message
          : "The request took too long. Please try again or email us directly.",
      );
    }
  }
  if (success)
    return (
      <div
        className="form-success"
        role="status"
        tabIndex={-1}
        ref={(el) => {
          el?.focus();
        }}
      >
        <div className="success-icon">
          <Check size={28} />
        </div>
        <h2>You’re on our radar.</h2>
        <p>
          Thanks for telling us about your business. We’ll review your enquiry
          and get in touch to discuss the next step.
        </p>
        <Link className="button button-dark" href="/">
          Back to Softek Labs <ArrowUpRight size={18} />
        </Link>
      </div>
    );
  return (
    <form className="enquiry-form" onSubmit={handleSubmit(submit)} noValidate>
      <fieldset>
        <legend>What can we help you with?</legend>
        <p className="form-hint">Choose as many as you need.</p>
        <div className="service-choices">
          {serviceOptions.map((s) => (
            <label className="service-choice" key={s.value}>
              <input
                type="checkbox"
                value={s.value}
                {...register("solutions")}
                aria-invalid={!!errors.solutions}
                aria-describedby={
                  errors.solutions ? "solutions-error" : undefined
                }
              />
              <span>{s.label}</span>
            </label>
          ))}
        </div>
        {errors.solutions && (
          <span className="field-error" id="solutions-error" role="alert">
            {errors.solutions.message}
          </span>
        )}
      </fieldset>
      <div className="form-fields">
        {(
          [
            {
              key: "name",
              label: "Your name",
              placeholder: "Full name",
              type: "text",
              auto: "name",
            },
            {
              key: "company",
              label: "Business name",
              placeholder: "Your business",
              type: "text",
              auto: "organization",
            },
            {
              key: "phone",
              label: "Phone number",
              placeholder: "+91",
              type: "tel",
              auto: "tel",
            },
            {
              key: "email",
              label: "Email (optional)",
              placeholder: "you@business.com",
              type: "email",
              auto: "email",
            },
          ] as const
        ).map((f) => (
          <div className="form-field" key={f.key}>
            <label htmlFor={f.key}>
              {f.label}
              {f.key !== "email" ? " *" : ""}
            </label>
            <input
              id={f.key}
              type={f.type}
              autoComplete={f.auto}
              placeholder={f.placeholder}
              {...register(f.key)}
              required={f.key !== "email"}
              aria-invalid={!!errors[f.key]}
              aria-describedby={errors[f.key] ? `${f.key}-error` : undefined}
            />
            {errors[f.key] && (
              <span className="field-error" id={`${f.key}-error`} role="alert">
                {errors[f.key]?.message}
              </span>
            )}
          </div>
        ))}
        <div className="form-field field-full">
          <label htmlFor="requirements">
            A little about your idea (optional)
          </label>
          <textarea
            id="requirements"
            rows={4}
            maxLength={3000}
            placeholder="What would you like to create, grow, or improve?"
            {...register("requirements")}
            aria-invalid={!!errors.requirements}
            aria-describedby={
              errors.requirements ? "requirements-error" : undefined
            }
          />
          {errors.requirements && (
            <span className="field-error" id="requirements-error">
              {errors.requirements.message}
            </span>
          )}
        </div>
      </div>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input
          id="website"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>
      {error && (
        <div className="form-alert" role="alert">
          {error} <a href={`mailto:${email}`}>Email us directly</a>.
        </div>
      )}
      <div className="form-footer">
        <p>
          We’ll use these details to respond to your enquiry. Read our{" "}
          <Link href="/privacy-policy">privacy notice</Link>. Sending an enquiry
          does not commit you to a project.
        </p>
        <button
          type="submit"
          className="button button-blue"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending your enquiry…" : "Let’s get started"}
          <ArrowUpRight size={19} />
        </button>
      </div>
    </form>
  );
}
