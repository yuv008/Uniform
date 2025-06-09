import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Users, Award } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-navy-50 to-white py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-navy-100 text-navy-900 px-4 py-2 rounded-full text-sm font-medium">
                <Star className="h-4 w-4 mr-2 text-yellow-500" />
                Trusted by 200+ Schools
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-navy-900 leading-tight">
                Tailored Excellence in <span className="text-blue-600">School Uniforms</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Premium quality school uniforms manufactured with precision and care. Serving educational institutions
                across Maharashtra with timely delivery and competitive pricing.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-navy-900 hover:bg-navy-800 text-lg px-8">
                Get Instant Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                View Our Work
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-navy-900 mr-2" />
                  <span className="text-2xl font-bold text-navy-900">200+</span>
                </div>
                <p className="text-gray-600">Schools Served</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="h-6 w-6 text-navy-900 mr-2" />
                  <span className="text-2xl font-bold text-navy-900">15+</span>
                </div>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="h-6 w-6 text-yellow-500 mr-2" />
                  <span className="text-2xl font-bold text-navy-900">4.9</span>
                </div>
                <p className="text-gray-600">Client Rating</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Students in high-quality school uniforms"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl"
                priority
              />
            </div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-100 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-navy-100 rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
