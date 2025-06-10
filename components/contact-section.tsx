import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Get Your Custom Quote Today</h2>
          <p className="font-sans text-xl text-foreground/90 max-w-2xl mx-auto">
            Ready to partner with us? Fill out the form below and we'll get back to you with a detailed quote tailored to your needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Contact Info */}
          <div className="bg-secondary border border-border rounded-2xl p-10 mb-10 lg:mb-0 text-primary-foreground">
            <h3 className="font-serif text-2xl font-semibold mb-8">Contact Information</h3>
            <div className="mb-8">
              <div className="mb-4">
                <div className="font-sans text-lg font-medium">Manali Fashion</div>
                <div className="font-sans text-base">Kalyan Nagar, Parbhani<br />Maharashtra 431401, India</div>
              </div>
              <div className="mb-4">
                <div className="font-sans font-medium">Phone</div>
                <div className="font-sans text-base">+91-9422705120</div>
              </div>
              <div className="mb-4">
                <div className="font-sans font-medium">Email</div>
                <div className="font-sans text-base">info@manalifashion.com</div>
              </div>
              <div>
                <div className="font-sans font-medium">Working Hours</div>
                <div className="font-sans text-base">Mon-Sat: 9:00 AM - 7:00 PM<br />Sun: 10:00 AM - 5:00 PM</div>
              </div>
            </div>
            <div className="bg-secondary border border-border rounded-xl p-6 text-primary-foreground">
              <div className="font-serif text-lg font-semibold mb-2">Service Areas</div>
              <div className="font-sans text-sm">
                We proudly serve schools and educational institutions across Maharashtra and neighboring states. Contact us to discuss delivery to your location.
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-secondary border border-border rounded-2xl p-10 shadow-sm text-primary-foreground">
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-sans font-medium mb-2">Contact Name *</label>
                  <Input placeholder="Your full name" required className="bg-primary-foreground/10 text-primary-foreground border-border placeholder:text-primary-foreground/70" />
                </div>
                <div>
                  <label className="block text-sm font-sans font-medium mb-2">School Name *</label>
                  <Input placeholder="Institution name" required className="bg-primary-foreground/10 text-primary-foreground border-border placeholder:text-primary-foreground/70" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-sans font-medium mb-2">Email Address *</label>
                  <Input type="email" placeholder="your@email.com" required className="bg-primary-foreground/10 text-primary-foreground border-border placeholder:text-primary-foreground/70" />
                </div>
                <div>
                  <label className="block text-sm font-sans font-medium mb-2">Phone Number *</label>
                  <Input type="tel" placeholder="+91-XXXXXXXXXX" required className="bg-primary-foreground/10 text-primary-foreground border-border placeholder:text-primary-foreground/70" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-sans font-medium mb-2">Uniform Requirements *</label>
                <Textarea
                  placeholder="Please describe your uniform requirements, quantities, timeline, and any specific needs..."
                  rows={4}
                  required
                  className="bg-primary-foreground/10 text-primary-foreground border-border placeholder:text-primary-foreground/70"
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 font-sans uppercase tracking-widest px-10 py-4 rounded-full text-primary-foreground">
                Send Quote Request
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
