import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  const body = await request.json()

  // Create a nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number.parseInt(process.env.EMAIL_PORT || "587"),
    secure: process.env.EMAIL_SECURE === "true",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  // Compose the email message
  const message = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject: "New Contact Form Submission",
    text: `
      New contact form submission:
      
      Name: ${body.firstName} ${body.lastName}
      Email: ${body.email}
      Phone: ${body.phone}
      Service Type: ${body.serviceType}
      Property Type: ${body.propertyType}
      Preferred Contact Method: ${body.preferredContact}
      Message: ${body.message}
    `,
    html: `
      <h2>New contact form submission</h2>
      <p><strong>Name:</strong> ${body.firstName} ${body.lastName}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      <p><strong>Phone:</strong> ${body.phone}</p>
      <p><strong>Service Type:</strong> ${body.serviceType}</p>
      <p><strong>Property Type:</strong> ${body.propertyType}</p>
      <p><strong>Preferred Contact Method:</strong> ${body.preferredContact}</p>
      <p><strong>Message:</strong> ${body.message}</p>
    `,
  }

  try {
    // Send the email
    await transporter.sendMail(message)
    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ message: "Error sending email" }, { status: 500 })
  }
}

