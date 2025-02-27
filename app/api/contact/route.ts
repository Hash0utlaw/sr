import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Validate required fields
    const requiredFields = ['name', 'phone', 'address'];

    for (const field of requiredFields) {
      if (!data[field]) {
        return new Response(
          JSON.stringify({ message: `Missing required field: ${field}` }),
          { status: 400 }
        );
      }
    }

    await resend.emails.send({
      from: 'Summit Roofing <onboarding@resend.dev>',
      to: 'davis@summitroofingprofessionals.com',
      subject: `New Roofing Inquiry`,
      replyTo: 'no-reply@summitroofingprofessionals.com',
      html: `
        <h2>New Contact Form Submission</h2>
        
        <h3>Customer Information:</h3>
        <ul>
          <li><strong>Name:</strong> ${data.name}</li>
          <li><strong>Phone:</strong> ${data.phone}</li>
          <li><strong>Address:</strong> ${data.address}</li>
        </ul>
      `,
      text: `
        New Contact Form Submission

        Customer Information:
        - Name: ${data.name}
        - Phone: ${data.phone}
        - Address: ${data.address}
      `
    });

    return new Response(
      JSON.stringify({ message: 'Your message has been sent successfully!' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in contact form submission:', error);
    return new Response(
      JSON.stringify({ 
        message: 'Failed to send your message. Please try again later.',
        error: error instanceof Error ? error.message : 'Unknown error'
      }),
      { status: 500 }
    );
  }
}