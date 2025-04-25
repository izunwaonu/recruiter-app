import Link from "next/link"
import { notFound } from "next/navigation"
import { prisma } from "@/lib/prisma"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Briefcase, MapPin, Banknote, Clock, CheckCircle2 } from "lucide-react"

export async function generateMetadata({ params }: { params: { roleId: string } }) {
  const role = await prisma.jobRole.findUnique({
    where: { id: params.roleId },
    include: { category: true },
  })

  if (!role) {
    return {
      title: "Job Not Found | RECRUITER",
    }
  }

  return {
    title: `${role.title} | RECRUITER`,
    description: `Apply for ${role.title} position in the UK with RECRUITER`,
  }
}

export default async function JobRolePage({ params }: { params: { roleId: string } }) {
  const role = await prisma.jobRole.findUnique({
    where: { id: params.roleId },
    include: { category: true },
  })

  if (!role) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8">
        <Link href={`/jobs/categories/${role.categoryId}`} passHref>
          <Button variant="ghost" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to {role.category.name}
          </Button>
        </Link>
      </div>

      <Card className="mb-8 overflow-hidden">
        <div className="h-2 bg-blue-600"></div>
        <CardContent className="p-8">
          <div className="mb-6">
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mb-2">
              {role.category.name}
            </span>
            <h1 className="text-3xl font-bold mb-2">{role.title}</h1>
            <div className="flex flex-wrap gap-4 text-muted-foreground">
              <div className="flex items-center">
                <Briefcase className="h-4 w-4 mr-2" />
                <span>Full-time</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>London, UK</span>
              </div>
              <div className="flex items-center">
                <Banknote className="h-4 w-4 mr-2" />
                <span className="text-blue-600 font-medium">{role.salaryRange}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>Posted 2 weeks ago</span>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Job Description</h2>
            <p className="text-muted-foreground whitespace-pre-line">{role.description}</p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Key Responsibilities</h2>
            <ul className="space-y-2 text-muted-foreground">
              {[
                "Plan, execute, and deliver projects according to specifications and timelines",
                "Collaborate with cross-functional teams to achieve project objectives",
                "Identify and resolve issues that may impact project success",
                "Communicate project status to stakeholders and management",
                "Ensure compliance with industry standards and best practices",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Requirements</h2>
            <ul className="space-y-2 text-muted-foreground">
              {[
                "Bachelor's degree in a relevant field",
                "Minimum 2 years of experience in a similar role",
                "Strong analytical and problem-solving skills",
                "Excellent communication and interpersonal abilities",
                "Ability to work independently and as part of a team",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <Link href={`/jobs/apply/${role.id}`} passHref>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Apply for this Position
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
