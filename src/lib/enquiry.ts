import { z } from "zod";
import { services } from "@/data/services";
export const serviceOptions = [
  ...services.map((s) => ({ value: s.slug, label: s.name })),
  { value: "not-sure", label: "Help me decide" },
];
export const enquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(100, "Please use 100 characters or fewer."),
  company: z
    .string()
    .trim()
    .min(2, "Please enter your business name.")
    .max(150, "Please use 150 characters or fewer."),
  phone: z
    .string()
    .trim()
    .min(1, "Please enter a phone number.")
    .max(25)
    .regex(/^[+\d\s().-]+$/, "Please enter a valid phone number.")
    .refine((v) => {
      const n = v.replace(/\D/g, "").length;
      return n >= 10 && n <= 15;
    }, "Please enter 10–15 digits."),
  email: z
    .union([z.literal(""), z.email("Please enter a valid email address.")])
    .optional(),
  solutions: z
    .array(
      z
        .string()
        .refine(
          (v) => serviceOptions.some((s) => s.value === v),
          "Please select a listed service.",
        ),
    )
    .min(1, "Choose at least one service, or select “Help me decide”.")
    .max(6),
  requirements: z
    .string()
    .trim()
    .max(3000, "Please keep your message under 3,000 characters.")
    .optional(),
  website: z.string().max(0).optional(),
});
export type EnquiryData = z.infer<typeof enquirySchema>;
