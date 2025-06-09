import Link from "next/link"
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-white text-navy-900 p-2 rounded-lg">
                <span className="font-bold text-xl">MF</span>
              </div>
              <div>
                <h3 className="font-bold text-xl">Manali Fashion</h3>
                <p className="text-sm text-gray-300">School Uniform Specialists</p>
              </div>
            </div>
            <p className="text-gray-300">
              Premium quality school uniforms manufactured with precision and care. Serving educational institutions
              across Maharashtra since 2008.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer" />
              <Linkedin className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-white">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-white">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Our Products</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-300">Boys' Uniforms</span>
              </li>
              <li>
                <span className="text-gray-300">Girls' Uniforms</span>
              </li>
              <li>
                <span className="text-gray-300">Winter Uniforms</span>
              </li>
              <li>
                <span className="text-gray-300">Sports Uniforms</span>
              </li>
              <li>
                <span className="text-gray-300">Custom Embroidery</span>
              </li>
              <li>
                <span className="text-gray-300">Accessories</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gray-300 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Industrial Area, Parbhani</p>
                  <p className="text-gray-300">Maharashtra 431401, India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-300" />
                <p className="text-gray-300">+91-9876543210</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-300" />
                <p className="text-gray-300">info@manalifashion.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">© {new Date().getFullYear()} Manali Fashion. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-300 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-white text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
