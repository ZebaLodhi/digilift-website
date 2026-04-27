import { z } from "zod";

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
    ["school-daycare", "local-service", "health-wellness", "other"],
    { errorMap: () => ({ message: "Please select a business type" }) }
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

  leadVolume: z.enum(
    ["getting-started", "growing", "established"],
    { errorMap: () => ({ message: "Please select your current lead volume" }) }
  ),

  challenges: z
    .array(z.string())
    .min(1, "Please select at least one challenge"),

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