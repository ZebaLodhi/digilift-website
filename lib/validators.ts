import { z } from "zod";

/**
 * Growth & AI Audit request.
 *
 * The questions are scoped to what the audit actually looks at — technology,
 * AI and automation opportunity, and marketing — rather than lead-volume
 * metrics, which most people cannot answer accurately before the audit and
 * which told us nothing we could not work out ourselves afterwards.
 */
export const bookingFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),

  businessName: z
    .string()
    .min(2, "Business name must be at least 2 characters")
    .max(150, "Business name must be less than 150 characters"),

  businessType: z.enum(
    [
      "professional-services",
      "local-service",
      "health-wellness",
      "education",
      "membership-nonprofit",
      "ecommerce-retail",
      "other",
    ],
    { errorMap: () => ({ message: "Please select an industry" }) }
  ),

  city: z
    .string()
    .min(2, "City must be at least 2 characters")
    .max(100, "City must be less than 100 characters"),

  state: z
    .string()
    .min(2, "State must be at least 2 characters")
    .max(50, "State must be less than 50 characters"),

  email: z
    .string()
    .email("Please enter a valid email address")
    .max(150, "Email must be less than 150 characters"),

  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .max(20, "Phone number must be less than 20 characters")
    .regex(/^[\d\s\-\(\)\+]+$/, "Please enter a valid phone number"),

  preferredContact: z.enum(["email", "phone", "either"], {
    errorMap: () => ({ message: "Please select a preferred contact method" }),
  }),

  teamSize: z.enum(["1-5", "6-20", "21-50", "51-200", "200+"], {
    errorMap: () => ({ message: "Please select your team size" }),
  }),

  auditFocus: z.enum(
    ["technology", "ai-automation", "marketing", "everything"],
    { errorMap: () => ({ message: "Please choose where the audit should focus" }) }
  ),

  priorities: z
    .array(z.string())
    .min(1, "Please select at least one priority"),

  currentTools: z
    .string()
    .max(500, "Must be less than 500 characters")
    .optional()
    .or(z.literal("")),

  currentWebsite: z
    .string()
    .url("Please enter a valid URL")
    .max(300, "URL must be less than 300 characters")
    .optional()
    .or(z.literal("")),

  timeline: z.enum(["asap", "1-3months", "3-6months", "exploring"], {
    errorMap: () => ({ message: "Please select a timeline" }),
  }),

  howHeard: z
    .string()
    .max(150, "Must be less than 150 characters")
    .optional()
    .or(z.literal("")),

  message: z
    .string()
    .max(2000, "Message must be less than 2000 characters")
    .optional()
    .or(z.literal("")),
});

export type BookingFormData = z.infer<typeof bookingFormSchema>;

/** Human-readable labels, so the notification email is not full of slugs. */
export const industryLabels: Record<BookingFormData["businessType"], string> = {
  "professional-services": "Professional services",
  "local-service": "Local service business",
  "health-wellness": "Health and wellness",
  education: "Education and childcare",
  "membership-nonprofit": "Membership body or nonprofit",
  "ecommerce-retail": "E-commerce or retail",
  other: "Something else",
};

export const teamSizeLabels: Record<BookingFormData["teamSize"], string> = {
  "1-5": "1–5 people",
  "6-20": "6–20 people",
  "21-50": "21–50 people",
  "51-200": "51–200 people",
  "200+": "200+ people",
};

export const auditFocusLabels: Record<BookingFormData["auditFocus"], string> = {
  technology: "Technology and systems",
  "ai-automation": "AI and automation",
  marketing: "Marketing and customer acquisition",
  everything: "All of it — a full review",
};

export const timelineLabels: Record<BookingFormData["timeline"], string> = {
  asap: "As soon as possible",
  "1-3months": "Within 1–3 months",
  "3-6months": "Within 3–6 months",
  exploring: "Just exploring options",
};

/** The options offered for `priorities`; the form and the schema share them. */
export const priorityOptions = [
  "Too much manual work across the team",
  "Tools and data that do not talk to each other",
  "A website that does not convert the traffic it gets",
  "No clear view of what marketing is actually returning",
  "Processes that will not scale as we grow",
  "Not sure where AI would genuinely help",
] as const;
