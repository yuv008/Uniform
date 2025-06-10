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
          <div className="bg-secondary border border-border rounded-2xl p-10 mb-10 lg:mb-0 text-foreground">
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
                <div className="font-sans text-base">manali.fashion2004@gmail.com</div>
              </div>
              <div>
                <div className="font-sans font-medium">Working Hours</div>
                <div className="font-sans text-base">Mon-Sat: 9:00 AM - 7:00 PM<br />Sun: 10:00 AM - 5:00 PM</div>
              </div>
            </div>
            <div className="bg-secondary border border-border rounded-xl p-6 text-foreground">
              <div className="font-serif text-lg font-semibold mb-2">Service Areas</div>
              <div className="font-sans text-sm">
                We proudly serve schools and educational institutions across Maharashtra and neighboring states. Contact us to discuss delivery to your location.
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-secondary border border-border rounded-2xl p-10 shadow-sm text-foreground">
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-sans font-medium mb-2">Contact Name *</label>
                  <input
                    className="flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-background text-foreground border-border placeholder:text-foreground/70"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-sans font-medium mb-2">School Name *</label>
                  <input
                    className="flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-background text-foreground border-border placeholder:text-foreground/70"
                    placeholder="Institution name"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-sans font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    className="flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-background text-foreground border-border placeholder:text-foreground/70"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-sans font-medium mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    className="flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-background text-foreground border-border placeholder:text-foreground/70"
                    placeholder="+91-XXXXXXXXXX"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-sans font-medium mb-2">Uniform Requirements *</label>
                <textarea
                  className="flex min-h-[80px] w-full rounded-md border px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-background text-foreground border-border placeholder:text-foreground/70"
                  placeholder="Please describe your uniform requirements, quantities, timeline, and any specific needs..."
                  rows={4}
                  required
                ></textarea>
              </div>

              <Button
                type="submit"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 w-full bg-primary hover:bg-primary/90 font-sans uppercase tracking-widest px-10 py-4 rounded-full text-primary-foreground"
              >
                Send Quote Request
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
