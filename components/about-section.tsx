import { CheckCircle, Heart, Clock, Shield } from "lucide-react"

export default function AboutSection() {
  const values = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Quality First",
      description: "Premium fabrics and superior craftsmanship in every uniform",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Timely Delivery",
      description: "Reliable delivery schedules to meet your academic calendar",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Comfort & Durability",
      description: "Designed for active students with long-lasting materials",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-navy-900">Crafting Quality Uniforms Since 2008</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Based in Parbhani, Maharashtra, Manali Fashion has been the trusted partner for educational institutions
                seeking high-quality, comfortable, and durable school uniforms. Our commitment to excellence has made us
                the preferred choice for over 200 schools across the region.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-navy-900">15+ Years of Excellence</h3>
                  <p className="text-gray-600">Proven track record in the garment industry</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-navy-900">Custom Solutions</h3>
                  <p className="text-gray-600">Tailored designs and embroidery for each institution</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-navy-900">Long-term Partnerships</h3>
                  <p className="text-gray-600">Building lasting relationships with educational institutions</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-start space-x-4">
                  <div className="bg-navy-900 text-white p-3 rounded-lg">{value.icon}</div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
