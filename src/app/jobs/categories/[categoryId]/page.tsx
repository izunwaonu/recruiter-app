import Link from "next/link"
import { notFound } from "next/navigation"
import { prisma } from "@/lib/prisma"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ChevronRight } from "lucide-react"
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react"

export async function generateMetadata({ params }: { params: Promise<{ categoryId: string }> }) {
  const { categoryId } = await params;
  
  const category = await prisma.jobCategory.findUnique({
    where: { id: categoryId },
  })

  if (!category) {
    return {
      title: "Category Not Found | RECRUITER",
    }
  }

  return {
    title: `${category.name} Jobs | RECRUITER`,
    description: `Browse ${category.name} jobs in the UK with RECRUITER`,
  }
}

export default async function CategoryPage({ params }: { params: Promise<{ categoryId: string }> }) {
  const { categoryId } = await params;
  
  const category = await prisma.jobCategory.findUnique({
    where: { id: categoryId },
    include: { jobRoles: true },
  })

  if (!category) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/jobs" passHref>
          <Button variant="ghost" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Categories
          </Button>
        </Link>
      </div>

      <div className="flex items-center mb-8">
        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mr-4">
          {/* We'll use the icon name to determine which icon to display */}
          {/* This would be replaced with the actual icon component */}
        </div>
        <h1 className="text-3xl font-bold">{category.name}</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.jobRoles.map((role: { id: Key | null | undefined; title: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; description: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; salaryRange: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined }) => (
          <Link key={role.id} href={`/jobs/roles/${role.id}`}>
            <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-blue-300">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-2">{role.title}</h2>
                <p className="text-muted-foreground mb-4 line-clamp-2">{role.description}</p>
                <p className="font-medium text-blue-600 mb-2">{role.salaryRange}</p>
                <div className="text-blue-600 flex items-center">
                  <span>View Details</span>
                  <ChevronRight className="h-4 w-4 ml-1" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}