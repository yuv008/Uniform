import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">Get Your Custom Quote Today</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to partner with us? Fill out the form below and we'll get back to you within 24 hours with a detailed
            quote tailored to your needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-navy-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-navy-900 mt-1" />
                  <div>
                    <h4 className="font-semibold text-navy-900">Address</h4>
                    <p className="text-gray-600">
                      Manali Fashion
                      <br />
                      Kalyan Nagar, Parbhani
                      <br />
                      Maharashtra 431401, India
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-navy-900 mt-1" />
                  <div>
                    <h4 className="font-semibold text-navy-900">Phone</h4>
                    <p className="text-gray-600">+91-9422705120</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-navy-900 mt-1" />
                  <div>
                    <h4 className="font-semibold text-navy-900">Email</h4>
                    <p className="text-gray-600">info@manalifashion.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-navy-900 mt-1" />
                  <div>
                    <h4 className="font-semibold text-navy-900">Working Hours</h4>
                    <p className="text-gray-600">
                      Monday - Saturday: 9:00 AM - 7:00 PM
                      <br />
                      Sunday: 10:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-navy-900 text-white p-6 rounded-xl">
              <h4 className="font-bold text-lg mb-2">Service Areas</h4>
              <p className="text-gray-300">
                We proudly serve schools and educational institutions across Maharashtra and neighboring states. Contact
                us to discuss delivery to your location.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Contact Name *</label>
                  <Input placeholder="Your full name" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">School Name *</label>
                  <Input placeholder="Institution name" required />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <Input type="email" placeholder="your@email.com" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <Input type="tel" placeholder="+91-XXXXXXXXXX" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Uniform Requirements *</label>
                <Textarea
                  placeholder="Please describe your uniform requirements, quantities, sizes, and any specific customization needs..."
                  rows={4}
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-navy-900 hover:bg-navy-800">
                Send Quote Request
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
