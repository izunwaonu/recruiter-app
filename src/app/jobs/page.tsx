import type React from "react"
import Link from "next/link"
import { prisma } from "@/lib/prisma"
import { Card, CardContent } from "@/components/ui/card"
import {
  Building,
  Cpu,
  Briefcase,
  ShoppingBag,
  HeartPulse,
  GraduationCap,
  Hammer,
  Truck,
  Scale,
  Utensils,
  ChevronRight,
} from "lucide-react"

export const metadata = {
  title: "Browse Jobs | RECRUITER",
  description: "Browse job categories and find your dream job in the UK with RECRUITER",
}

export default async function JobsPage() {
  const categories = await prisma.jobCategory.findMany({
    include: {
      _count: {
        select: { jobRoles: true },
      },
    },
  })

  // Map category icons to Lucide icons
  const getCategoryIcon = (iconName: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      engineering: <Building className="h-8 w-8" />,
      computer: <Cpu className="h-8 w-8" />,
      briefcase: <Briefcase className="h-8 w-8" />,
      "shopping-cart": <ShoppingBag className="h-8 w-8" />,
      "heart-pulse": <HeartPulse className="h-8 w-8" />,
      "graduation-cap": <GraduationCap className="h-8 w-8" />,
      hammer: <Hammer className="h-8 w-8" />,
      truck: <Truck className="h-8 w-8" />,
      scale: <Scale className="h-8 w-8" />,
      utensils: <Utensils className="h-8 w-8" />,
    }

    return iconMap[iconName] || <Briefcase className="h-8 w-8" />
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Browse Job Categories</h1>
        <p className="text-lg text-muted-foreground">
          Explore our diverse range of job categories and find the perfect role for your skills and experience
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category: { id: React.Key | null | undefined; icon: string; name: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; _count: { jobRoles: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined } }) => (
          <Link key={category.id} href={`/jobs/categories/${category.id}`}>
            <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-blue-300">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    {getCategoryIcon(category.icon)}
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-1">{category.name}</h2>
                    <p className="text-muted-foreground">
                      {category._count.jobRoles} {category._count.jobRoles === 1 ? "position" : "positions"} available
                    </p>
                    <div className="mt-2 text-blue-600 flex items-center">
                      <span>View Jobs</span>
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
