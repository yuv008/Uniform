import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us - Manali Fashion",
  description:
    "Get in touch with Manali Fashion for school uniform requirements. Located in Parbhani, Maharashtra. Quick response guaranteed.",
}

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to partner with us for your school uniform needs? We're here to help you every step of the way.
            Contact us today for a personalized consultation.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-navy-900 mb-6">Contact Information</h2>
                <p className="text-lg text-gray-600 mb-8">
                  We're always ready to assist you with your uniform requirements. Reach out to us through any of the
                  following channels.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-navy-900 text-white p-3 rounded-lg">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-900 mb-1">Our Address</h3>
                    <p className="text-gray-600">
                      Manali Fashion
                      <br />
                      Plot No. 15, Industrial Area
                      <br />
                      Parbhani, Maharashtra 431401
                      <br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-navy-900 text-white p-3 rounded-lg">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-900 mb-1">Phone Numbers</h3>
                    <p className="text-gray-600">
                      Primary: +91-9876543210
                      <br />
                      Secondary: +91-9876543211
                      <br />
                      Landline: 02452-123456
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-navy-900 text-white p-3 rounded-lg">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-900 mb-1">Email Addresses</h3>
                    <p className="text-gray-600">
                      General: info@manalifashion.com
                      <br />
                      Sales: sales@manalifashion.com
                      <br />
                      Support: support@manalifashion.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-navy-900 text-white p-3 rounded-lg">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-900 mb-1">Working Hours</h3>
                    <p className="text-gray-600">
                      Monday - Saturday: 9:00 AM - 7:00 PM
                      <br />
                      Sunday: 10:00 AM - 5:00 PM
                      <br />
                      <span className="text-sm text-gray-500">Closed on public holidays</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-navy-50 p-6 rounded-xl">
                <h3 className="font-bold text-navy-900 mb-3">Service Areas</h3>
                <p className="text-gray-700 mb-4">We proudly serve educational institutions across:</p>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                  <div>• Parbhani District</div>
                  <div>• Aurangabad Region</div>
                  <div>• Nanded District</div>
                  <div>• Latur District</div>
                  <div>• Osmanabad District</div>
                  <div>• Across Maharashtra</div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-navy-900 mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <Input placeholder="Your full name" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Designation</label>
                    <Input placeholder="Principal, Administrator, etc." />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">School/Institution Name *</label>
                  <Input placeholder="Name of your institution" required />
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <select className="w-full p-3 border border-gray-300 rounded-md">
                    <option value="">Select inquiry type</option>
                    <option value="quote">Request Quote</option>
                    <option value="sample">Request Sample</option>
                    <option value="bulk">Bulk Order Inquiry</option>
                    <option value="custom">Custom Requirements</option>
                    <option value="support">General Support</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <Textarea
                    placeholder="Please provide details about your uniform requirements, quantities, timeline, and any specific needs..."
                    rows={5}
                    required
                  />
                </div>

                <div className="flex items-start space-x-2">
                  <input type="checkbox" id="consent" className="mt-1" required />
                  <label htmlFor="consent" className="text-sm text-gray-600">
                    I agree to be contacted by Manali Fashion regarding my inquiry and consent to the processing of my
                    personal data.
                  </label>
                </div>

                <Button type="submit" size="lg" className="w-full bg-navy-900 hover:bg-navy-800">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>

              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-green-800">
                  <strong>Quick Response Guarantee:</strong> We respond to all inquiries within 2 hours during business
                  hours and within 24 hours on weekends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Find Us</h2>
            <p className="text-lg text-gray-600">
              Visit our facility in Parbhani to see our manufacturing process and discuss your requirements in person.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="h-96 bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-navy-900 mx-auto mb-4" />
                <p className="text-gray-600">Interactive Map</p>
                <p className="text-sm text-gray-500">Manali Fashion, Industrial Area, Parbhani, Maharashtra</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
