import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { bookingFormSchema } from '@/lib/validators';
import { sendBookingEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();

    // Validate with Zod
    const validatedData = bookingFormSchema.parse(body);

    // Send email notification
    await sendBookingEmail(validatedData);

    // Save to JSON file (mock database)
    const requestsFilePath = path.join(process.cwd(), 'data', 'requests.json');

    let requests = [];
    try {
      const fileContent = await fs.readFile(requestsFilePath, 'utf-8');
      requests = JSON.parse(fileContent);
    } catch (error) {
      // File doesn't exist or is empty, start with empty array
      requests = [];
    }

    // Add new request with timestamp and ID
    const newRequest = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      ...validatedData,
    };

    requests.push(newRequest);

    // Write back to file
    await fs.writeFile(requestsFilePath, JSON.stringify(requests, null, 2), 'utf-8');

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Booking request received successfully',
        requestId: newRequest.id,
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Booking API error:', error);

    // Handle Zod validation errors
    if (error.errors) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed',
          errors: error.errors,
        },
        { status: 400 }
      );
    }

    // Handle other errors
    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred while processing your request',
      },
      { status: 500 }
    );
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    {
      message: 'Booking API endpoint. Use POST to submit a booking request.',
    },
    { status: 405 }
  );
}
