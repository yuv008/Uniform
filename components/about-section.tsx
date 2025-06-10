import Image from "next/image"

export default function AboutSection() {
  const values = [
    {
      title: "Quality First",
      description: "Premium fabrics and superior craftsmanship in every uniform.",
    },
    {
      title: "Timely Delivery",
      description: "Reliable delivery schedules to meet your academic calendar.",
    },
    {
      title: "Comfort & Durability",
      description: "Designed for active students with long-lasting materials.",
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Large Image */}
          <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg?height=500&width=600"
              alt="Manali Fashion team and facility"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-2xl"
              priority
            />
          </div>

          {/* About Content */}
          <div className="flex flex-col justify-center h-full">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-8">Crafting Quality Uniforms Since 2008</h2>
            <p className="font-sans text-lg text-foreground/90 mb-10 max-w-xl">
              Based in Parbhani, Maharashtra, Manali Fashion has been the trusted partner for educational institutions seeking high-quality, comfortable, and durable school uniforms. Our commitment to excellence has made us the preferred choice for over 200 schools across the region.
            </p>
            <div className="grid gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-secondary border border-border rounded-xl p-6 text-primary-foreground">
                  <h3 className="font-serif text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="font-sans">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
