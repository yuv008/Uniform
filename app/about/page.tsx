import type { Metadata } from "next"
import Image from "next/image"
import { CheckCircle, Clock, Heart, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us - Manali Fashion",
  description:
    "Learn about Manali Fashion, a leading school uniform manufacturer in Parbhani, Maharashtra. 15+ years of experience serving 200+ schools.",
}

export default function AboutPage() {
  const milestones = [
    { year: "2008", event: "Founded Manali Fashion in Parbhani" },
    { year: "2012", event: "Reached 50+ school partnerships" },
    { year: "2016", event: "Introduced custom embroidery services" },
    { year: "2020", event: "Expanded to serve 150+ institutions" },
    { year: "2024", event: "Celebrating 200+ satisfied clients" },
  ]

  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Quality First",
      description:
        "We never compromise on the quality of materials and craftsmanship. Every uniform undergoes rigorous quality checks.",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Timely Delivery",
      description:
        "We understand the importance of academic schedules and ensure all orders are delivered on time, every time.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Comfort & Durability",
      description:
        "Our uniforms are designed for active students, using materials that provide comfort and withstand daily wear.",
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-navy-900">Our Story of Excellence</h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Since 2008, Manali Fashion has been dedicated to providing high-quality school uniforms that combine
                comfort, durability, and style. Based in Parbhani, Maharashtra, we've grown from a small local business
                to a trusted partner for over 200 educational institutions.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-navy-900">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-navy-900">200+</div>
                  <div className="text-gray-600">Schools Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-navy-900">50K+</div>
                  <div className="text-gray-600">Uniforms Delivered</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Manali Fashion team and facility"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-navy-900">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To provide educational institutions with premium quality school uniforms that enhance student pride,
                promote equality, and support the learning environment. We are committed to delivering exceptional value
                through superior craftsmanship, timely service, and competitive pricing.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <span className="text-gray-700">Maintain highest quality standards</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <span className="text-gray-700">Build long-term institutional partnerships</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <span className="text-gray-700">Provide exceptional customer service</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-navy-900">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To become the most trusted and preferred school uniform supplier across India, known for our commitment
                to quality, innovation, and customer satisfaction. We envision a future where every student feels
                confident and comfortable in uniforms crafted by Manali Fashion.
              </p>
              <div className="bg-navy-50 p-6 rounded-xl">
                <h3 className="font-bold text-navy-900 mb-3">Our Commitment</h3>
                <p className="text-gray-700">
                  We are dedicated to continuous improvement, sustainable practices, and supporting the educational
                  community through our products and services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values guide everything we do and shape our relationships with clients, partners, and the community.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="bg-navy-900 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="font-bold text-xl text-navy-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to becoming a trusted name in school uniforms, here are the key milestones in our
              journey.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-navy-200"></div>
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center mb-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <div className="text-2xl font-bold text-navy-900 mb-2">{milestone.year}</div>
                      <p className="text-gray-700">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-navy-900 rounded-full relative z-10"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
