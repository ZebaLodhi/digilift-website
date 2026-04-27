import { BookingFormData } from './validators';

/**
 * Email sending stub - integrate with your preferred email service
 *
 * OPTION 1: Resend (recommended - https://resend.com)
 *
 * 1. Install: npm install resend
 * 2. Add to .env.local: RESEND_API_KEY=re_xxxxxxxxxxxx
 * 3. Uncomment and configure below:
 *
 * import { Resend } from 'resend';
 * const resend = new Resend(process.env.RESEND_API_KEY);
 *
 * export async function sendBookingEmail(data: BookingFormData) {
 *   await resend.emails.send({
 *     from: 'DigiLift <noreply@yourdomain.com>',
 *     to: ['bookings@yourdomain.com'],
 *     replyTo: data.email,
 *     subject: `New Booking Request from ${data.name} - ${data.daycareName}`,
 *     html: generateEmailHTML(data),
 *   });
 * }
 *
 *
 * OPTION 2: SendGrid (https://sendgrid.com)
 *
 * 1. Install: npm install @sendgrid/mail
 * 2. Add to .env.local: SENDGRID_API_KEY=SG.xxxxxxxxxxxx
 * 3. Uncomment and configure below:
 *
 * import sgMail from '@sendgrid/mail';
 * sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
 *
 * export async function sendBookingEmail(data: BookingFormData) {
 *   await sgMail.send({
 *     from: 'noreply@yourdomain.com',
 *     to: 'bookings@yourdomain.com',
 *     replyTo: data.email,
 *     subject: `New Booking Request from ${data.name} - ${data.daycareName}`,
 *     html: generateEmailHTML(data),
 *   });
 * }
 *
 *
 * OPTION 3: Nodemailer (for custom SMTP)
 *
 * 1. Install: npm install nodemailer
 * 2. Configure with your SMTP credentials
 */

export async function sendBookingEmail(data: BookingFormData): Promise<void> {
  // TODO: Implement email sending with your preferred service
  // For now, this is a stub that simulates sending

  console.log('📧 Email sending stub - Booking request received:');
  console.log(JSON.stringify(data, null, 2));

  // Simulate email delay
  await new Promise(resolve => setTimeout(resolve, 500));

  // In production, uncomment one of the implementations above
  // and remove this stub
}

function generateEmailHTML(data: BookingFormData): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #1C2230; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #1F3B73; color: white; padding: 20px; border-radius: 8px; }
          .content { background: #f7f9fc; padding: 20px; margin-top: 20px; border-radius: 8px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #1F3B73; }
          .value { margin-top: 5px; }
          .footer { margin-top: 30px; padding-top: 20px; border-top: 2px solid #e8edf5; color: #666; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Booking Request</h1>
            <p>DigiLift for Daycare</p>
          </div>

          <div class="content">
            <div class="field">
              <div class="label">Contact Person:</div>
              <div class="value">${data.name}</div>
            </div>

            <div class="field">
              <div class="label">Daycare Name:</div>
              <div class="value">${data.daycareName}</div>
            </div>

            <div class="field">
              <div class="label">Location:</div>
              <div class="value">${data.city}, ${data.state}</div>
            </div>

            <div class="field">
              <div class="label">Email:</div>
              <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
            </div>

            <div class="field">
              <div class="label">Phone:</div>
              <div class="value"><a href="tel:${data.phone}">${data.phone}</a></div>
            </div>

            <div class="field">
              <div class="label">Preferred Contact Method:</div>
              <div class="value">${data.preferredContact}</div>
            </div>

            <div class="field">
              <div class="label">Services Interested In:</div>
              <div class="value">${data.servicesInterested.join(', ')}</div>
            </div>

            ${data.currentWebsite ? `
            <div class="field">
              <div class="label">Current Website:</div>
              <div class="value"><a href="${data.currentWebsite}" target="_blank">${data.currentWebsite}</a></div>
            </div>
            ` : ''}

            ${data.currentGBP ? `
            <div class="field">
              <div class="label">Current Google Business Profile:</div>
              <div class="value"><a href="${data.currentGBP}" target="_blank">${data.currentGBP}</a></div>
            </div>
            ` : ''}

            <div class="field">
              <div class="label">Timeline:</div>
              <div class="value">${formatTimeline(data.timeline)}</div>
            </div>

            ${data.message ? `
            <div class="field">
              <div class="label">Additional Message:</div>
              <div class="value">${data.message.replace(/\n/g, '<br>')}</div>
            </div>
            ` : ''}
          </div>

          <div class="footer">
            <p>This booking request was submitted via the DigiLift for Daycare website.</p>
            <p>Please respond within 24 hours to maintain excellent customer service.</p>
          </div>
        </div>
      </body>
    </html>
  `;
}

function formatTimeline(timeline: string): string {
  const map: Record<string, string> = {
    'asap': 'As soon as possible',
    '1-3months': '1-3 months',
    '3-6months': '3-6 months',
    'exploring': 'Just exploring options',
  };
  return map[timeline] || timeline;
}
