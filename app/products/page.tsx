import { Metadata } from "next"
import Image from "next/image"
import { CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Products",
  description: "Explore our comprehensive range of school uniforms and custom services.",
}

export default function ProductsPage() {
  const productCategories = [
    {
      title: "Boys' Uniforms",
      description:
        "Durable and comfortable uniforms designed for active boys, ensuring freedom of movement and smart appearance.",
      image: "/boy_handfolded.jpeg",
      features: ["Breathable fabrics", "Reinforced stitching", "Adjustable waistbands", "Easy to maintain"],
      products: ["Shirts", "Trousers", "Shorts", "Sweaters", "Blazers", "Ties"],
    },
    {
      title: "Girls' Uniforms",
      description:
        "Stylish and comfortable uniforms crafted to provide elegance and comfort, allowing girls to focus on their studies.",
      image: "/girl_handfolded.jpeg",
      features: ["Soft, skin-friendly materials", "Modest designs", "Customizable fits", "Fade-resistant colors"],
      products: ["Blouses", "Skirts", "Pinafores", "Dresses", "Cardigans", "Scarves"],
    },
    {
      title: "Winter Uniforms",
      description:
        "Warm and cozy uniforms designed to keep students comfortable during colder months without compromising on style.",
      image: "/Sweater.jpeg",
      features: ["Insulated fabrics", "Lightweight warmth", "Snug fit", "Variety of styles"],
      products: ["Sweaters", "Blazers", "Jackets", "Woolen Socks", "Caps", "Gloves"],
    },
    {
      title: "Sports Uniforms",
      description: "High-performance athletic wear for sports and physical activities",
      image: "/sports.jpeg",
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
    <div className="">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Our Product Range</h1>
          <p className="text-xl text-foreground/90 max-w-3xl mx-auto mb-8">
            Comprehensive uniform solutions for every educational institution. From daily wear to sports activities, we
            provide high-quality garments that students love to wear.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
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
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">{category.title}</h2>
                <p className="text-lg text-foreground/90">{category.description}</p>

                <div className="space-y-3">
                  <h3 className="font-bold text-foreground">Key Features:</h3>
                  <div className="grid md:grid-cols-2 gap-2">
                    {category.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-foreground text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-bold text-foreground">Available Products:</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.products.map((product, idx) => (
                      <span key={idx} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                        {product}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Button className="bg-primary hover:bg-primary/90">Request Sample</Button>
                  <Button variant="outline">Get Quote</Button>
                </div>
              </div>
              <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <Image
                  src={category.image}
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
      <section className="py-24 bg-background text-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Custom Services</h2>
            <p className="font-sans text-xl text-foreground/90 max-w-2xl mx-auto">
              Beyond our standard products, we offer specialized services to meet your unique requirements and ensure
              complete satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {customServices.map((service, index) => (
              <div key={index} className="bg-secondary border border-border p-8 rounded-2xl shadow-sm">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-4">{service.title}</h3>
                <p className="font-sans text-foreground/90 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="font-sans text-foreground/90 text-base">{feature}</span>
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
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Ready to Order?</h2>
          <p className="text-xl text-foreground/90 max-w-3xl mx-auto mb-8">
            Contact us today to discuss your uniform requirements. Our team will provide you with a detailed quote and
            help you choose the best options for your institution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
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
