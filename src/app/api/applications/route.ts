// import { NextResponse } from "next/server"
// import { prisma } from "@/lib/prisma"
// import { sendEmail, getApplicationConfirmationEmail } from "@/lib/email"

// export async function POST(request: Request) {
//   try {
//     const body = await request.json()
//     const { fullName, email, phone, experience, coverLetter, jobRoleId, jobTitle } = body

//     // Validate required fields
//     if (!fullName || !email || !phone || !experience || !jobRoleId) {
//       return NextResponse.json({ message: "Missing required fields" }, { status: 400 })
//     }

//     // Create application in database
//     const application = await prisma.application.create({
//       data: {
//         fullName,
//         email,
//         phone,
//         experience,
//         coverLetter: coverLetter || "",
//         jobRole: { connect: { id: jobRoleId } },
//       },
//     })

//     // Send confirmation email
//     await sendEmail({
//       to: email,
//       subject: `Application Received: ${jobTitle}`,
//       html: getApplicationConfirmationEmail(fullName, jobTitle),
//     })

//     return NextResponse.json(
//       { message: "Application submitted successfully", applicationId: application.id },
//       { status: 201 },
//     )
//   } catch (error) {
//     console.error("Error submitting application:", error)
//     return NextResponse.json({ message: "Failed to submit application" }, { status: 500 })
//   }
// }
import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { sendEmail, getApplicationConfirmationEmail } from "@/lib/email"

export async function POST(request: Request) {
  console.log("API route called: /api/applications")

  try {
    const body = await request.json()
    console.log("Request body:", body)

    const { fullName, email, phone, experience, coverLetter, jobRoleId, jobTitle } = body

    // Validate required fields
    if (!fullName || !email || !phone || !experience || !jobRoleId) {
      console.error("Missing required fields")
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 })
    }

    // Create application in database
    console.log("Creating application in database...")
    const application = await prisma.application.create({
      data: {
        fullName,
        email,
        phone,
        experience,
        coverLetter: coverLetter || "",
        jobRole: { connect: { id: jobRoleId } },
      },
    })
    console.log("Application created:", application.id)

    // Send confirmation email
    console.log("Sending confirmation email...")
    try {
      const emailResult = await sendEmail({
        to: email,
        subject: `Application Received: ${jobTitle}`,
        html: getApplicationConfirmationEmail(fullName, jobTitle),
      })

      console.log("Email sending result:", emailResult)

      if (!emailResult.success) {
        console.warn("Email sending failed but continuing with application process:", emailResult.error)
      }
    } catch (emailError) {
      console.error("Error sending email, but continuing with application process:", emailError)
      // We don't want to fail the whole application if just the email fails
    }

    return NextResponse.json(
      { message: "Application submitted successfully", applicationId: application.id },
      { status: 201 },
    )
  } catch (error) {
    console.error("Error submitting application:", error)
    return NextResponse.json({ message: "Failed to submit application", error: String(error) }, { status: 500 })
  }
}
