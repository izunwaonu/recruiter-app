import type React from "react"
import Link from "next/link"
import { prisma } from "@/lib/prisma"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Briefcase,
  Shield,
  Zap,
  ChevronRight,
  Building,
  Cpu,
  ShoppingBag,
  HeartPulse,
  GraduationCap,
  Hammer,
  Truck,
  Scale,
  Utensils,
} from "lucide-react"
import HeroSection from "./components/Hero"

export default async function Home() {
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
    <div>
      {/* Hero Section */}
      <HeroSection/>
       {/* <section className="bg-gradient-to-r from-blue-700 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Find Your Dream Job in the UK</h1>
            <p className="text-xl mb-8 text-blue-100">
              Browse through our extensive list of job opportunities across various industries
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/jobs">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                  Browse All Jobs
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-600">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>  */}

      {/* Job Categories Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore Job Categories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover opportunities across various industries and find the perfect role for your skills and experience
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category: { id: React.Key | null | undefined; icon: string; name: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; _count: { jobRoles: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined } }) => (
              <Link key={category.id} href={`/jobs/categories/${category.id}`}>
                <Card className="h-full transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-blue-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                        {getCategoryIcon(category.icon)}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition duration-200">
                        {category.name}
                      </h3>
                      <p className="text-muted-foreground">
                        {category._count.jobRoles} {category._count.jobRoles === 1 ? "position" : "positions"} available
                      </p>
                      <div className="mt-4 text-blue-600 flex items-center">
                        <span>View Jobs</span>
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section> */}
      {/* Job Categories Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-block mb-3">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <div className="h-1 w-6 bg-blue-600 rounded-full"></div>
                <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">Career Paths</span>
                <div className="h-1 w-6 bg-blue-600 rounded-full"></div>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
              Explore Job Categories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover opportunities across various industries and find the perfect role for your skills and experience
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category: { id: React.Key | null | undefined; icon: string; name: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; _count: { jobRoles: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined } }) => (
              <Link key={category.id} href={`/jobs/categories/${category.id}`} className="group">
                <Card className="h-full transition-all duration-300 hover:shadow-xl hover:scale-105 border border-gray-200 hover:border-blue-300 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-50 to-indigo-100 group-hover:from-blue-100 group-hover:to-indigo-200 transition-colors duration-300 flex items-center justify-center mb-4 shadow-sm">
                        {getCategoryIcon(category.icon)}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition duration-200">
                        {category.name}
                      </h3>
                      <p className="text-muted-foreground">
                        {category._count.jobRoles} {category._count.jobRoles === 1 ? "position" : "positions"} available
                      </p>
                      <div className="mt-4 text-blue-600 flex items-center group-hover:font-medium">
                        <span className="group-hover:mr-1 transition-all duration-300">View Jobs</span>
                        <ChevronRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/jobs">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 shadow-md px-8">
                Browse All Categories
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose RECRUITER?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to helping you find the perfect job opportunity in the UK
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <Briefcase className="h-7 w-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Top UK Employers</h3>
                  <p className="text-muted-foreground">
                    Access to positions from the leading companies across the United Kingdom
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                    <Shield className="h-7 w-7 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Visa Sponsorship</h3>
                  <p className="text-muted-foreground">
                    Guidance on obtaining sponsorship letters for international applicants
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <Zap className="h-7 w-7 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Fast Application</h3>
                  <p className="text-muted-foreground">
                    Streamlined process to help you apply for multiple positions quickly
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your UK Career Journey?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Browse our extensive job listings and find the perfect position that matches your skills and experience
          </p>
          <Link href="/jobs">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Find Jobs Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
