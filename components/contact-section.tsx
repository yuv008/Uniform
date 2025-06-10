import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactSection() {
  return (
    <section className="py-24 bg-offwhite">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-900 mb-6">Get Your Custom Quote Today</h2>
          <p className="font-sans text-xl text-gray-700 max-w-2xl mx-auto">
            Ready to partner with us? Fill out the form below and we'll get back to you with a detailed quote tailored to your needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Contact Info */}
          <div className="bg-white/80 border border-grayish rounded-2xl p-10 mb-10 lg:mb-0">
            <h3 className="font-serif text-2xl font-semibold text-navy-900 mb-8">Contact Information</h3>
            <div className="mb-8">
              <div className="mb-4">
                <div className="text-gray-700 font-sans text-lg font-medium">Manali Fashion</div>
                <div className="text-gray-500 font-sans">Kalyan Nagar, Parbhani<br />Maharashtra 431401, India</div>
              </div>
              <div className="mb-4">
                <div className="text-gray-700 font-sans font-medium">Phone</div>
                <div className="text-gray-500 font-sans">+91-9422705120</div>
              </div>
              <div className="mb-4">
                <div className="text-gray-700 font-sans font-medium">Email</div>
                <div className="text-gray-500 font-sans">info@manalifashion.com</div>
              </div>
              <div>
                <div className="text-gray-700 font-sans font-medium">Working Hours</div>
                <div className="text-gray-500 font-sans">Mon-Sat: 9:00 AM - 7:00 PM<br />Sun: 10:00 AM - 5:00 PM</div>
              </div>
            </div>
            <div className="bg-offwhite border border-grayish rounded-xl p-6">
              <div className="font-serif text-lg text-navy-900 mb-2">Service Areas</div>
              <div className="text-gray-600 font-sans text-sm">
                We proudly serve schools and educational institutions across Maharashtra and neighboring states. Contact us to discuss delivery to your location.
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/80 border border-grayish rounded-2xl p-10 shadow-sm">
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-sans font-medium text-gray-700 mb-2">Contact Name *</label>
                  <Input placeholder="Your full name" required />
                </div>
                <div>
                  <label className="block text-sm font-sans font-medium text-gray-700 mb-2">School Name *</label>
                  <Input placeholder="Institution name" required />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-sans font-medium text-gray-700 mb-2">Email Address *</label>
                  <Input type="email" placeholder="your@email.com" required />
                </div>
                <div>
                  <label className="block text-sm font-sans font-medium text-gray-700 mb-2">Phone Number *</label>
                  <Input type="tel" placeholder="+91-XXXXXXXXXX" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-sans font-medium text-gray-700 mb-2">Uniform Requirements *</label>
                <Textarea
                  placeholder="Please describe your uniform requirements, quantities, sizes, and any specific customization needs..."
                  rows={4}
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-navy-900 hover:bg-navy-800 font-sans uppercase tracking-widest px-10 py-4 rounded-full">
                Send Quote Request
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
