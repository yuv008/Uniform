import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "School Uniform Products - Manali Fashion",
  description:
    "Explore our complete range of school uniforms including boys', girls', winter, and sports uniforms. Custom embroidery available.",
}

export default function ProductsPage() {
  const productCategories = [
    {
      title: "Boys' School Uniforms",
      description: "Complete range of boys' uniforms including shirts, trousers, ties, and accessories",
      image: "/placeholder.svg?height=400&width=600",
      features: [
        "Premium cotton blend fabrics",
        "Wrinkle-resistant materials",
        "Comfortable fit for active students",
        "Available in all standard sizes",
        "Custom color options",
        "Durable construction",
      ],
      products: ["Formal Shirts", "Trousers", "Ties", "Blazers", "Sweaters", "Accessories"],
    },
    {
      title: "Girls' School Uniforms",
      description: "Elegant and comfortable uniforms designed specifically for girls",
      image: "/placeholder.svg?height=400&width=600",
      features: [
        "Comfortable and modest designs",
        "Fade-resistant colors",
        "Easy-care fabrics",
        "Perfect fit guarantee",
        "Seasonal variations available",
        "Quality assured materials",
      ],
      products: ["Blouses", "Skirts", "Pinafores", "Cardigans", "Scarves", "Hair Accessories"],
    },
    {
      title: "Winter Uniforms",
      description: "Warm and stylish winter uniforms for the cold season",
      image: "/placeholder.svg?height=400&width=600",
      features: [
        "Thermal comfort technology",
        "Weather-resistant materials",
        "Stylish winter designs",
        "Layering-friendly options",
        "Machine washable",
        "Long-lasting warmth",
      ],
      products: ["Winter Blazers", "Sweaters", "Cardigans", "Scarves", "Caps", "Gloves"],
    },
    {
      title: "Sports Uniforms",
      description: "High-performance athletic wear for sports and physical activities",
      image: "/placeholder.svg?height=400&width=600",
      features: [
        "Moisture-wicking fabrics",
        "Flexible and stretchable",
        "Quick-dry technology",
        "Team customization available",
        "Durable for intense activities",
        "Comfortable fit",
      ],
      products: ["Sports T-shirts", "Shorts", "Track Suits", "Sports Shoes", "Caps", "Socks"],
    },
  ]

  const customServices = [
    {
      title: "Custom Logo Embroidery",
      description: "Professional embroidery services for school logos and names",
      features: ["High-quality thread", "Precise positioning", "Fade-resistant", "Quick turnaround"],
    },
    {
      title: "Bulk Order Discounts",
      description: "Special pricing for large quantity orders",
      features: ["Volume discounts", "Flexible payment terms", "Priority delivery", "Dedicated support"],
    },
    {
      title: "Size Customization",
      description: "Custom sizing for perfect fit",
      features: ["Individual measurements", "Perfect fit guarantee", "Size chart consultation", "Alteration services"],
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6">Our Product Range</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive uniform solutions for every educational institution. From daily wear to sports activities, we
            provide high-quality garments that students love to wear.
          </p>
          <Button size="lg" className="bg-navy-900 hover:bg-navy-800">
            Request Product Catalog
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Product Categories */}
      {productCategories.map((category, index) => (
        <section key={index} className={`py-20 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
          <div className="container mx-auto px-4">
            <div
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <h2 className="text-3xl lg:text-4xl font-bold text-navy-900">{category.title}</h2>
                <p className="text-lg text-gray-600">{category.description}</p>

                <div className="space-y-3">
                  <h3 className="font-bold text-navy-900">Key Features:</h3>
                  <div className="grid md:grid-cols-2 gap-2">
                    {category.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-bold text-navy-900">Available Products:</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.products.map((product, idx) => (
                      <span key={idx} className="bg-navy-100 text-navy-900 px-3 py-1 rounded-full text-sm">
                        {product}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Button className="bg-navy-900 hover:bg-navy-800">Request Sample</Button>
                  <Button variant="outline">Get Quote</Button>
                </div>
              </div>

              <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Custom Services */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Custom Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Beyond our standard products, we offer specialized services to meet your unique requirements and ensure
              complete satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {customServices.map((service, index) => (
              <div key={index} className="bg-white/10 p-8 rounded-xl">
                <h3 className="font-bold text-xl mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-6">Ready to Order?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Contact us today to discuss your uniform requirements. Our team will provide you with a detailed quote and
            help you choose the best options for your institution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-navy-900 hover:bg-navy-800">
              Get Custom Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              Download Catalog
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
