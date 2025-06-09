import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProductsSection() {
  const products = [
    {
      title: "Boys' Uniforms",
      description: "Complete range of shirts, trousers, ties, and accessories",
      image: "/placeholder.svg?height=300&width=400",
      features: ["Cotton blend fabrics", "Wrinkle-resistant", "Multiple sizes"],
    },
    {
      title: "Girls' Uniforms",
      description: "Elegant designs with comfort and durability in mind",
      image: "/placeholder.svg?height=300&width=400",
      features: ["Comfortable fits", "Fade-resistant colors", "Easy maintenance"],
    },
    {
      title: "Winter Uniforms",
      description: "Warm and cozy uniforms for the winter season",
      image: "/placeholder.svg?height=300&width=400",
      features: ["Thermal comfort", "Stylish designs", "Weather protection"],
    },
    {
      title: "Sports Uniforms",
      description: "Athletic wear designed for active students",
      image: "/placeholder.svg?height=300&width=400",
      features: ["Moisture-wicking", "Flexible materials", "Team customization"],
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">Our Product Range</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive uniform solutions for every need. From daily wear to sports activities, we have you covered
            with premium quality garments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <Image src={product.image || "/placeholder.svg"} alt={product.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-navy-900 mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <ul className="space-y-1 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-500 flex items-center">
                      <span className="w-1.5 h-1.5 bg-navy-900 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full">
                  Request Sample
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/products">
            <Button size="lg" className="bg-navy-900 hover:bg-navy-800">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
