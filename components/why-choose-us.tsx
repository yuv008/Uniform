import { Truck, Palette, Users, Award, Clock, Shield } from "lucide-react"

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Fast Delivery",
      description: "Quick turnaround times to meet your deadlines",
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Custom Embroidery",
      description: "Professional logo embroidery and customization",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Bulk Orders",
      description: "Competitive pricing for large quantity orders",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Quality Assurance",
      description: "Rigorous quality checks before delivery",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "24/7 Support",
      description: "Dedicated customer service for all your needs",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Warranty",
      description: "Quality guarantee on all our products",
    },
  ]

  return (
    <section className="py-24 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Why Schools Choose Manali Fashion</h2>
          <p className="font-sans text-xl text-foreground/90 max-w-2xl mx-auto">
            We understand the unique needs of educational institutions and deliver solutions that exceed expectations
            every time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-secondary border border-border rounded-2xl p-8 flex flex-col items-center text-center shadow-sm">
              <div className="bg-primary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors">
                <div className="text-primary-foreground">{reason.icon}</div>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">{reason.title}</h3>
              <p className="font-sans text-foreground/90">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
