import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: {
    default: "Manali Fashion - Premium School Uniform Supplier",
    template: "%s | Manali Fashion",
  },
  description:
    "Leading school uniform manufacturer in Parbhani, Maharashtra. Quality uniforms, custom embroidery, timely delivery.",
  keywords: "school uniforms, Parbhani, Maharashtra, uniform supplier, school clothing",
  authors: [{ name: "Manali Fashion" }],
  creator: "Manali Fashion",
  publisher: "Manali Fashion",
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
