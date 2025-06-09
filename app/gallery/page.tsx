import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Gallery - Manali Fashion School Uniforms",
  description:
    "View our portfolio of delivered school uniforms. See the quality and craftsmanship that makes us the preferred choice for schools.",
}

export default function GalleryPage() {
  const galleryItems = [
    {
      title: "Boys' Formal Uniforms",
      description: "Complete formal uniform set delivered to ABC School",
      image: "/placeholder.svg?height=400&width=600",
      category: "Boys",
    },
    {
      title: "Girls' Summer Collection",
      description: "Comfortable summer uniforms for XYZ Convent",
      image: "/placeholder.svg?height=400&width=600",
      category: "Girls",
    },
    {
      title: "Winter Blazers",
      description: "Premium winter blazers with custom embroidery",
      image: "/placeholder.svg?height=400&width=600",
      category: "Winter",
    },
    {
      title: "Sports Uniforms",
      description: "Athletic wear for inter-school competitions",
      image: "/placeholder.svg?height=400&width=600",
      category: "Sports",
    },
    {
      title: "Custom Embroidery Work",
      description: "Detailed logo embroidery on school uniforms",
      image: "/placeholder.svg?height=400&width=600",
      category: "Custom",
    },
    {
      title: "Complete School Set",
      description: "Full uniform collection for 500+ students",
      image: "/placeholder.svg?height=400&width=600",
      category: "Bulk",
    },
    {
      title: "Girls' Pinafore Collection",
      description: "Elegant pinafores in various colors",
      image: "/placeholder.svg?height=400&width=600",
      category: "Girls",
    },
    {
      title: "Boys' Sports Kit",
      description: "Complete sports uniform with accessories",
      image: "/placeholder.svg?height=400&width=600",
      category: "Sports",
    },
    {
      title: "Winter Cardigans",
      description: "Warm and stylish cardigans for winter season",
      image: "/placeholder.svg?height=400&width=600",
      category: "Winter",
    },
  ]

  const categories = ["All", "Boys", "Girls", "Winter", "Sports", "Custom", "Bulk"]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6">Our Work Gallery</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our portfolio of delivered school uniforms. Each project represents our commitment to quality,
            attention to detail, and customer satisfaction.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  index === 0 ? "bg-navy-900 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center p-4">
                      <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-sm">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-navy-900 text-white px-3 py-1 rounded-full text-xs">{item.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-600">Numbers that speak for our quality and reliability</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-navy-900 mb-2">200+</div>
              <div className="text-gray-600">Schools Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-navy-900 mb-2">50K+</div>
              <div className="text-gray-600">Uniforms Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-navy-900 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-navy-900 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
