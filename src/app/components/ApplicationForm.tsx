"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { LoadingDialog } from "@/components/ui/loading-dialog"

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  experience: z.string().min(10, { message: "Please provide more details about your experience" }),
  coverLetter: z.string().optional(),
})

type FormValues = z.infer<typeof formSchema>

export default function ApplicationForm({
  roleId,
  jobTitle,
  categoryName,
}: {
  roleId: string
  jobTitle: string
  categoryName: string
}) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      experience: "",
      coverLetter: "",
    },
  })

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true)

    // Show loading toast
    toast.loading(`Submitting your application for ${jobTitle}...`, {
      id: "application-submission",
    })

    try {
      console.log("Submitting application...", { roleId, jobTitle, ...data })

      const response = await fetch("/api/applications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          jobRoleId: roleId,
          jobTitle,
        }),
      })

      console.log("Response status:", response.status)

      if (!response.ok) {
        const responseData = await response.json()
        throw new Error(responseData.message || "Something went wrong")
      }

      const responseData = await response.json()
      console.log("Response data:", responseData)

      // Show success toast
      toast.success("Application submitted successfully!", {
        id: "application-submission",
        description: "You will be redirected to the confirmation page.",
      })

      // Short delay before redirecting to allow the user to see the success toast
      setTimeout(() => {
        window.location.href = `/jobs/apply/success?name=${encodeURIComponent(data.fullName)}&job=${encodeURIComponent(jobTitle)}`
      }, 2000)
    } catch (err) {
      console.error("Application submission error:", err)

      // Show error toast
      toast.error("Failed to submit application", {
        id: "application-submission",
        description: err instanceof Error ? err.message : "An unexpected error occurred",
      })

      setIsSubmitting(false)
    }
  }

  return (
    <>
      <LoadingDialog isOpen={isSubmitting} jobCategory={categoryName} />

      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit(onSubmit)(e)
        }}
        className="space-y-6"
      >
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name *</Label>
          <Input id="fullName" {...register("fullName")} placeholder="Enter your full name" />
          {errors.fullName && <p className="text-sm text-red-500">{errors.fullName.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input id="email" type="email" {...register("email")} placeholder="Enter your email address" />
          {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input id="phone" type="tel" {...register("phone")} placeholder="Enter your phone number" />
          {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="experience">Relevant Experience *</Label>
          <Textarea
            id="experience"
            {...register("experience")}
            rows={4}
            placeholder="Please describe your relevant experience for this role"
          />
          {errors.experience && <p className="text-sm text-red-500">{errors.experience.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="coverLetter">Cover Letter</Label>
          <Textarea
            id="coverLetter"
            {...register("coverLetter")}
            rows={6}
            placeholder="Tell us why you're interested in this position and why you'd be a good fit"
          />
          {errors.coverLetter && <p className="text-sm text-red-500">{errors.coverLetter.message}</p>}
        </div>

        <div className="pt-4">
          <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </Button>
        </div>
      </form>
    </>
  )
}
