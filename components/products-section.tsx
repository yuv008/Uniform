import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ProductsSection() {
  const products = [
    {
      title: "Boys' Uniforms",
      image: "/placeholder.svg?height=400&width=500",
    },
    {
      title: "Girls' Uniforms",
      image: "/placeholder.svg?height=400&width=500",
    },
    {
      title: "Winter Uniforms",
      image: "/placeholder.svg?height=400&width=500",
    },
    {
      title: "Sports Uniforms",
      image: "/placeholder.svg?height=400&width=500",
    },
  ]

  return (
    <section className="py-24 bg-offwhite">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-900 mb-6">Our Product Range</h2>
          <p className="font-sans text-xl text-gray-700 max-w-2xl mx-auto">
            Comprehensive uniform solutions for every need. From daily wear to sports activities, we have you covered with premium quality garments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((product, index) => (
            <div
              key={index}
              className="group rounded-2xl overflow-hidden bg-white/80 border border-grayish shadow-sm hover:shadow-xl transition-shadow flex flex-col"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-navy-900/70 text-white text-center py-4">
                  <span className="font-serif text-xl md:text-2xl font-semibold tracking-wide">{product.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href="/products">
            <Button size="lg" className="bg-navy-900 hover:bg-navy-800 font-sans uppercase tracking-widest px-10 py-4 rounded-full">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
