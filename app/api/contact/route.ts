import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Validate required fields
    const requiredFields = [
      'firstName',
      'lastName',
      'email',
      'phone',
      'serviceType',
      'message',
      'preferredContact',
      'propertyType',
    ];

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
      subject: `New Roofing Inquiry: ${data.serviceType}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Service Requested:</strong> ${data.serviceType}</p>
        <h3>Customer Information:</h3>
        <ul>
          <li><strong>Name:</strong> ${data.firstName} ${data.lastName}</li>
          <li><strong>Email:</strong> ${data.email}</li>
          <li><strong>Phone:</strong> ${data.phone}</li>
          <li><strong>Preferred Contact Method:</strong> ${data.preferredContact}</li>
          <li><strong>Property Type:</strong> ${data.propertyType}</li>
        </ul>
        <h3>Message:</h3>
        <p>${data.message}</p>
      `
    });

    return new Response(
      JSON.stringify({ message: 'Your message has been sent successfully!' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in contact form submission:', error);
    return new Response(
      JSON.stringify({ message: 'Failed to send your message. Please try again later.' }),
      { status: 500 }
    );
  }
}