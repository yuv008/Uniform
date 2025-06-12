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
    <div className="">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Get In Touch</h1>
          <p className="text-xl text-foreground/90 max-w-3xl mx-auto">
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
                <h2 className="text-3xl font-bold text-foreground mb-6">Contact Information</h2>
                <p className="text-lg text-foreground/90 mb-8">
                  We're always ready to assist you with your uniform requirements. Reach out to us through any of the
                  following channels.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Our Address</h3>
                    <p className="text-foreground/90">
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
                  <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Phone Numbers</h3>
                    <p className="text-foreground/90">
                      Primary: +91-9422705120
                      <br />
                      Secondary: +91-9876543211
                      <br />
                      Landline: 02452-123456
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Email Addresses</h3>
                    <p className="text-foreground/90">
                      General: manali.fashion2004@gmail.com
                      <br />
                      Sales: sales@manalifashion.com
                      <br />
                      Support: support@manalifashion.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Working Hours</h3>
                    <p className="text-foreground/90">
                      Monday - Saturday: 9:00 AM - 7:00 PM
                      <br />
                      Sunday: 10:00 AM - 5:00 PM
                      <br />
                      <span className="text-sm text-muted-foreground">Closed on public holidays</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-primary/10 p-6 rounded-xl">
                <h3 className="font-bold text-primary mb-3">Service Areas</h3>
                <p className="text-foreground mb-4">We proudly serve educational institutions across:</p>
                <div className="grid grid-cols-2 gap-2 text-sm text-foreground/90">
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
              <h2 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                  <input type="text" id="full-name" className="w-full p-3 border border-border rounded-md bg-background text-foreground placeholder:text-foreground/70" placeholder="Enter your full name" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                  <input type="email" id="email" className="w-full p-3 border border-border rounded-md bg-background text-foreground placeholder:text-foreground/70" placeholder="Enter your email address" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                  <input type="tel" id="phone" className="w-full p-3 border border-border rounded-md bg-background text-foreground placeholder:text-foreground/70" placeholder="Enter your phone number" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                  <select className="w-full p-3 border border-border rounded-md bg-background text-foreground">
                    <option value="">Select inquiry type</option>
                    <option value="quote">Request Quote</option>
                    <option value="sample">Request Sample</option>
                    <option value="bulk">Bulk Order Inquiry</option>
                    <option value="custom">Custom Requirements</option>
                    <option value="support">General Support</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message *</label>
                  <textarea id="message" className="w-full p-3 border border-border rounded-md bg-background text-foreground placeholder:text-foreground/70" rows={5} placeholder="Please provide details about your uniform requirements, quantities, timeline, and any specific needs..." required></textarea>
                </div>

                <div className="flex items-start space-x-2">
                  <input type="checkbox" id="consent" className="mt-1" required />
                  <label htmlFor="consent" className="text-sm text-foreground/90">
                    I agree to be contacted by Manali Fashion regarding my inquiry and consent to the processing of my
                    personal data.
                  </label>
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Find Us Map */}
          <div className="mt-20">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">Find Us</h2>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.4816205498873!2d76.7833131746695!3d19.261410946126713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd0183189268353%3A0x37d26c7cfee78d36!2sManali%20Fashion%20Designer!5e0!3m2!1sen!2sin!4v1749699640861!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Manali Fashion Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
