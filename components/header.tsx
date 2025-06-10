"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={`shadow-sm sticky top-0 z-50 transition-colors duration-300 ${isScrolled ? "bg-background" : "bg-white"}`}
    >
      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center py-4">
          <Link href="/" className="flex items-center space-x-2 mb-4">
            <div className="bg-primary text-primary-foreground p-2 rounded-lg">
              <span className="font-bold text-xl">MF</span>
            </div>
            <div>
              <h1 className="font-bold text-4xl text-foreground">Manali Fashion</h1>
              <p className="text-sm text-muted-foreground">School Uniform Specialists</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center flex-wrap gap-x-6 gap-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`py-2 px-4 rounded-full transition-colors duration-200 ${pathname === item.href ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-primary/10"} font-medium text-sm uppercase tracking-widest`}
              >
                {item.name}
              </Link>
            ))}
            <Button>Get Quote</Button>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`py-2 px-4 rounded-full transition-colors duration-200 ${pathname === item.href ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-primary/10"} font-medium uppercase tracking-widest`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="w-fit">Get Quote</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
