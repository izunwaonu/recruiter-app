import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Users, Globe, Award, Clock, Heart } from "lucide-react"

export const metadata = {
  title: "About Us | RECRUITER",
  description: "Learn more about RECRUITER, the UK's premier job recruitment platform",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">About RECRUITER</h1>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg text-muted-foreground mb-6">
            At RECRUITER, our mission is to connect talented professionals with the UK's leading employers, creating
            meaningful career opportunities and helping businesses find the perfect candidates to drive their success.
          </p>
          <p className="text-lg text-muted-foreground">
            We specialize in providing comprehensive recruitment services across various industries, with a particular
            focus on supporting international candidates seeking employment opportunities in the United Kingdom.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="bg-gradient-to-br from-blue-50 to-white">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Briefcase className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Industry Expertise</h3>
                <p className="text-muted-foreground">
                  Specialized knowledge across multiple sectors to match the right talent with the right opportunities.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-white">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Personalized Approach</h3>
                <p className="text-muted-foreground">
                  Tailored recruitment solutions that consider both technical skills and cultural fit.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-white">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Global Network</h3>
                <p className="text-muted-foreground">
                  Connections with international talent and UK employers to facilitate cross-border opportunities.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-amber-50 to-white">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
                <p className="text-muted-foreground">
                  Rigorous screening processes to ensure only the highest quality candidates and job opportunities.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-red-50 to-white">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Efficiency</h3>
                <p className="text-muted-foreground">
                  Streamlined recruitment processes that save time for both candidates and employers.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-indigo-50 to-white">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Candidate Care</h3>
                <p className="text-muted-foreground">
                  Support throughout the entire recruitment journey, including visa sponsorship guidance.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-lg text-muted-foreground mb-4">
            Founded in 2010, RECRUITER began with a simple vision: to transform the recruitment industry by putting
            people first. What started as a small team of passionate recruiters has grown into one of the UK's most
            trusted recruitment partners.
          </p>
          <p className="text-lg text-muted-foreground mb-4">
            Over the years, we've built strong relationships with employers across various sectors, from startups to
            multinational corporations. Our deep understanding of the UK job market, combined with our commitment to
            excellence, has allowed us to successfully place thousands of candidates in roles where they can thrive.
          </p>
          <p className="text-lg text-muted-foreground">
            Today, we continue to innovate and adapt to the changing landscape of recruitment, leveraging technology
            while maintaining the human touch that has always been at the heart of our approach.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Our team consists of experienced recruitment professionals with diverse backgrounds and expertise across
            various industries. We're united by our passion for connecting people with opportunities and our commitment
            to providing exceptional service.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold">Sarah Johnson</h3>
              <p className="text-blue-600 mb-2">Founder & CEO</p>
              <p className="text-muted-foreground">15+ years in international recruitment</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold">James Wilson</h3>
              <p className="text-blue-600 mb-2">Head of Technical Recruitment</p>
              <p className="text-muted-foreground">Expert in IT and Engineering placements</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold">Emily Chen</h3>
              <p className="text-blue-600 mb-2">Head of Healthcare Recruitment</p>
              <p className="text-muted-foreground">Specialized in medical professional placements</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
