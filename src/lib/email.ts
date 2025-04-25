import nodemailer from "nodemailer"

export async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string
  subject: string
  html: string
}) {
  console.log("Attempting to send email to:", to)

  // Check if email configuration is available
  if (
    !process.env.EMAIL_SERVER_HOST ||
    !process.env.EMAIL_SERVER_PORT ||
    !process.env.EMAIL_SERVER_USER ||
    !process.env.EMAIL_SERVER_PASSWORD ||
    !process.env.EMAIL_FROM
  ) {
    console.error("Email configuration is incomplete. Check environment variables.")
    return {
      success: false,
      error: "Email configuration is incomplete. Check environment variables.",
    }
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: Number(process.env.EMAIL_SERVER_PORT),
      secure: Number(process.env.EMAIL_SERVER_PORT) === 465, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
      // Add timeout to prevent hanging
      connectionTimeout: 10000, // 10 seconds
      greetingTimeout: 5000, // 5 seconds
      socketTimeout: 10000, // 10 seconds
    })

    console.log("Email transport created, attempting to send...")

    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to,
      subject,
      html,
    })

    console.log("Email sent successfully:", info.messageId)
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, error }
  }
}

export function getApplicationConfirmationEmail(name: string, jobTitle: string) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
      <div style="text-align: center; margin-bottom: 20px;">
        <h1 style="color: #2563eb; margin: 0;">RECRUITER</h1>
        <p style="color: #6b7280; font-size: 14px;">UK's Premier Job Recruitment Platform</p>
      </div>
      
      <div style="margin-bottom: 30px;">
        <h2 style="color: #111827;">Application Received</h2>
        <p>Dear ${name},</p>
        <p>Thank you for applying for the <strong>${jobTitle}</strong> position. We are pleased to confirm that we have received your application and it is currently under review by our recruitment team.</p>
        <p>The next steps in our recruitment process are:</p>
        <ol>
          <li>Initial application review (1-2 weeks)</li>
          <li>Preliminary phone interview for shortlisted candidates</li>
          <li>Technical/skills assessment</li>
          <li>Final interview with the hiring manager</li>
        </ol>
        <p>If your application is successful, we will also provide guidance on obtaining a sponsorship letter for UK employment.</p>
      </div>
      
      <div style="background-color: #f3f4f6; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
        <p style="margin: 0; font-weight: bold;">What happens next?</p>
        <p style="margin-top: 10px; margin-bottom: 0;">We will be in touch within the next 7-10 working days regarding the status of your application. Please ensure that our email address is added to your safe senders list to prevent communications from being directed to your spam folder.</p>
      </div>
      
      <div style="margin-bottom: 30px;">
        <p>If you have any questions in the meantime, please don't hesitate to contact our recruitment team at <a href="mailto:recruitment@recruiter.com" style="color: #2563eb;">recruitment@recruiter.com</a>.</p>
        <p>We appreciate your interest in joining our team and wish you the best of luck with your application.</p>
      </div>
      
      <div style="border-top: 1px solid #e0e0e0; padding-top: 20px; font-size: 12px; color: #6b7280;">
        <p>Best regards,</p>
        <p>The RECRUITER Team</p>
        <p style="margin-top: 15px;">This is an automated email. Please do not reply directly to this message.</p>
      </div>
    </div>
  `
}
