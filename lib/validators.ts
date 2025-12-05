import { z } from 'zod';

export const bookingFormSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),

  daycareName: z.string()
    .min(2, 'Daycare name must be at least 2 characters')
    .max(150, 'Daycare name must be less than 150 characters'),

  city: z.string()
    .min(2, 'City must be at least 2 characters')
    .max(100, 'City must be less than 100 characters'),

  state: z.string()
    .min(2, 'State must be at least 2 characters')
    .max(50, 'State must be less than 50 characters'),

  email: z.string()
    .email('Please enter a valid email address')
    .max(150, 'Email must be less than 150 characters'),

  phone: z.string()
    .min(10, 'Please enter a valid phone number')
    .max(20, 'Phone number must be less than 20 characters')
    .regex(/^[\d\s\-\(\)\+]+$/, 'Please enter a valid phone number'),

  preferredContact: z.enum(['email', 'phone', 'either'], {
    errorMap: () => ({ message: 'Please select a preferred contact method' }),
  }),

  servicesInterested: z.array(z.string())
    .min(1, 'Please select at least one service'),

  currentWebsite: z.string()
    .max(300, 'URL must be less than 300 characters')
    .optional()
    .or(z.literal('')),

  currentGBP: z.string()
    .max(300, 'URL must be less than 300 characters')
    .optional()
    .or(z.literal('')),

  timeline: z.enum(['asap', '1-3months', '3-6months', 'exploring'], {
    errorMap: () => ({ message: 'Please select a timeline' }),
  }),

  message: z.string()
    .max(2000, 'Message must be less than 2000 characters')
    .optional()
    .or(z.literal('')),
});

export type BookingFormData = z.infer<typeof bookingFormSchema>;
