"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { X, MessageCircle } from "lucide-react"

export default function InstantQuoteButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="bg-gray-800 hover:bg-gray-900 rounded-full shadow-lg px-6 py-3 text-white"
        >
          <MessageCircle className="h-5 w-5 mr-2" />
          Quick Quote
        </Button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-navy-900">Get Instant Quote</h3>
                <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
                  <X className="h-6 w-6" />
                </button>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Uniform Type *</label>
                  <select className="w-full p-2 border border-gray-300 rounded-md">
                    <option value="">Select uniform type</option>
                    <option value="boys">Boys' Uniforms</option>
                    <option value="girls">Girls' Uniforms</option>
                    <option value="winter">Winter Uniforms</option>
                    <option value="sports">Sports Uniforms</option>
                    <option value="mixed">Mixed Requirements</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Quantity *</label>
                  <Input placeholder="e.g., 100 sets" required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">School Name *</label>
                  <Input placeholder="Your institution name" required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number *</label>
                  <Input type="tel" placeholder="+91-XXXXXXXXXX" required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Additional Requirements</label>
                  <Textarea placeholder="Custom embroidery, specific colors, delivery timeline..." rows={3} />
                </div>

                <Button type="submit" className="w-full bg-gray-800 hover:bg-gray-900 text-white">
                  Get My Quote
                </Button>
              </form>

              <p className="text-xs text-gray-500 mt-4 text-center">
                We'll respond within 2 hours during business hours
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
