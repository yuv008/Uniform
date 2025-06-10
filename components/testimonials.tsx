import { Star, Quote } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Dr. Priya Sharma",
      position: "Principal",
      school: "Vidya Mandir School",
      content:
        "Manali Fashion has been our go-to supplier for over 3 years. Their timely delivery and excellent fabric quality have made them an invaluable partner for our institution.",
    },
    {
      name: "Rajesh Patil",
      position: "Administrator",
      school: "St. Mary's Convent",
      content:
        "The custom embroidery work and attention to detail is exceptional. Our students look smart and feel comfortable in their uniforms. Highly recommended!",
    },
    {
      name: "Sunita Deshmukh",
      position: "Purchase Manager",
      school: "Modern English School",
      content:
        "Professional service, competitive pricing, and consistent quality. Manali Fashion understands the needs of educational institutions perfectly.",
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">What Our Clients Say</h2>
          <p className="font-sans text-xl text-foreground/90 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what school administrators and decision-makers have to say about our services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-secondary border border-border rounded-2xl p-10 flex flex-col items-center text-center shadow-sm text-primary-foreground">
              <span className="text-6xl font-serif mb-6 leading-none">"</span>
              <p className="italic font-sans text-lg mb-8">{testimonial.content}</p>
              <div className="mt-auto pt-4">
                <h4 className="font-serif text-lg font-semibold mb-2">{testimonial.name}</h4>
                <p className="text-sm font-sans">{testimonial.position}</p>
                <p className="text-sm font-sans">{testimonial.school}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
