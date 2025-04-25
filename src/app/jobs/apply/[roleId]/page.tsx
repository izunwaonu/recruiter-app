import { notFound } from "next/navigation"
import Link from "next/link"
import { prisma } from "@/lib/prisma"
import ApplicationForm from "@/app/components/ApplicationForm"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Apply for Job | RECRUITER",
  description: "Apply for your dream job in the UK with RECRUITER",
}

export default async function ApplyPage({ params }: { params: { roleId: string } }) {
  const role = await prisma.jobRole.findUnique({
    where: { id: params.roleId },
    include: { category: true },
  })

  if (!role) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <Link href={`/jobs/roles/${role.id}`} passHref>
          <Button variant="ghost" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Job Details
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-2">Apply for: {role.title}</h1>
            <p className="text-muted-foreground">
              {role.category.name} • {role.salaryRange}
            </p>
          </div>
        </CardHeader>
        <CardContent>
          <ApplicationForm roleId={role.id} jobTitle={role.title} categoryName={role.category.name} />
        </CardContent>
      </Card>
    </div>
  )
}
