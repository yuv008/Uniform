import type { Metadata } from "next"
import Hero from "@/components/hero"
import AboutSection from "@/components/about-section"
import ProductsSection from "@/components/products-section"
import WhyChooseUs from "@/components/why-choose-us"
import Testimonials from "@/components/testimonials"
import ContactSection from "@/components/contact-section"
import InstantQuoteButton from "@/components/instant-quote-button"

export const metadata: Metadata = {
  title: "Manali Fashion - Premium School Uniform Supplier in Parbhani, Maharashtra",
  description:
    "Leading school uniform manufacturer and supplier in Parbhani. High-quality uniforms for schools across Maharashtra. Custom embroidery, timely delivery, competitive prices.",
  keywords: "school uniforms, Parbhani, Maharashtra, uniform supplier, school clothing, custom embroidery",
  openGraph: {
    title: "Manali Fashion - Premium School Uniform Supplier",
    description: "High-quality school uniforms for institutions across Maharashtra",
    type: "website",
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProductsSection />
      <WhyChooseUs />
      <Testimonials />
      <ContactSection />
      <InstantQuoteButton />

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Manali Fashion",
            description: "Premium school uniform supplier and manufacturer",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Parbhani",
              addressRegion: "Maharashtra",
              addressCountry: "India",
            },
            telephone: "+91-9876543210",
            email: "info@manalifashion.com",
            url: "https://manalifashion.com",
            priceRange: "$$",
            serviceArea: {
              "@type": "State",
              name: "Maharashtra",
            },
          }),
        }}
      />
    </>
  )
}
