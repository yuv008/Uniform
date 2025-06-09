import { Star, Quote } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Dr. Priya Sharma",
      position: "Principal",
      school: "Vidya Mandir School",
      content:
        "Manali Fashion has been our go-to supplier for over 3 years. Their timely delivery and excellent fabric quality have made them an invaluable partner for our institution.",
      rating: 5,
    },
    {
      name: "Rajesh Patil",
      position: "Administrator",
      school: "St. Mary's Convent",
      content:
        "The custom embroidery work and attention to detail is exceptional. Our students look smart and feel comfortable in their uniforms. Highly recommended!",
      rating: 5,
    },
    {
      name: "Sunita Deshmukh",
      position: "Purchase Manager",
      school: "Modern English School",
      content:
        "Professional service, competitive pricing, and consistent quality. Manali Fashion understands the needs of educational institutions perfectly.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what school administrators and decision-makers have to say about our
            services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl relative">
              <Quote className="h-8 w-8 text-navy-900 opacity-20 absolute top-4 right-4" />

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>

              <div className="border-t pt-4">
                <h4 className="font-bold text-navy-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.position}</p>
                <p className="text-sm text-gray-500">{testimonial.school}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
