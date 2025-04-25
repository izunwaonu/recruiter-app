import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Home, Search } from "lucide-react"

export const metadata = {
  title: "Application Submitted | RECRUITER",
  description: "Your job application has been successfully submitted",
}

export default function SuccessPage({
  searchParams,
}: {
  searchParams: { name?: string; job?: string }
}) {
  // Ensure we have values even if searchParams are missing
  const name = searchParams?.name || "Applicant"
  const job = searchParams?.job || "the position"

  return (
    <div className="container mx-auto px-4 py-16 max-w-2xl">
      <Card className="border-0 shadow-lg">
        <CardContent className="p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>

          <h1 className="text-3xl font-bold mb-4">Application Submitted!</h1>

          <p className="text-lg text-muted-foreground mb-6">
            Thank you, {name}, for applying to the {job} role. We have received your application and will review it
            shortly.
          </p>

          <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 mb-8 text-left">
            <h2 className="font-semibold text-blue-800 text-lg mb-3">What happens next?</h2>
            <p className="text-muted-foreground mb-4">
              We have sent a confirmation email to your registered email address. Our recruitment team will review your
              application and get back to you within 7-10 working days regarding the next steps.
            </p>
            <p className="text-muted-foreground">
              If your application is successful, we will also provide guidance on obtaining a sponsorship letter for UK
              employment.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/jobs" passHref>
              <Button className="flex items-center gap-2">
                <Search className="h-4 w-4" />
                Browse More Jobs
              </Button>
            </Link>
            <Link href="/" passHref>
              <Button variant="outline" className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                Return to Home
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
