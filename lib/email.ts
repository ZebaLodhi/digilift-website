import { BookingFormData } from './validators';

export async function sendBookingEmail(data: BookingFormData): Promise<void> {
  console.log('Email sending stub - Booking request received:');
  console.log(JSON.stringify(data, null, 2));
  await new Promise(resolve => setTimeout(resolve, 500));
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
            <h1>New Growth Automation Audit Request</h1>
            <p>DigiLift AI</p>
          </div>

          <div class="content">
            <div class="field">
              <div class="label">Contact Person:</div>
              <div class="value">${data.name}</div>
            </div>

            <div class="field">
              <div class="label">Business Name:</div>
              <div class="value">${data.businessName}</div>
            </div>

            <div class="field">
              <div class="label">Business Type:</div>
              <div class="value">${data.businessType}</div>
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
              <div class="label">Current Lead Volume:</div>
              <div class="value">${data.leadVolume}</div>
            </div>

            <div class="field">
              <div class="label">Biggest Challenges:</div>
              <div class="value">${(data.challenges || []).join(', ')}</div>
            </div>

            ${data.currentTools ? `
            <div class="field">
              <div class="label">Current Tools:</div>
              <div class="value">${data.currentTools}</div>
            </div>
            ` : ''}

            ${data.currentWebsite ? `
            <div class="field">
              <div class="label">Current Website:</div>
              <div class="value"><a href="${data.currentWebsite}" target="_blank">${data.currentWebsite}</a></div>
            </div>
            ` : ''}

            <div class="field">
              <div class="label">Timeline:</div>
              <div class="value">${formatTimeline(data.timeline)}</div>
            </div>

            ${data.howHeard ? `
            <div class="field">
              <div class="label">How They Heard About Us:</div>
              <div class="value">${data.howHeard}</div>
            </div>
            ` : ''}

            ${data.message ? `
            <div class="field">
              <div class="label">Additional Message:</div>
              <div class="value">${data.message.replace(/\n/g, '<br>')}</div>
            </div>
            ` : ''}
          </div>

          <div class="footer">
            <p>This booking request was submitted via DigiLift.ai</p>
            <p>Please respond within 24 hours.</p>
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