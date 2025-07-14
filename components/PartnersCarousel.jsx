"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import theme from "@/styles/theme"

export default function PartnersCarousel() {
  const [position, setPosition] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Partner logos - in a real implementation, these would be actual partner logos
  const partners = [
    { name: "Waybill", logo: "/partners/client2-b.png", url: "#" },
    { name: "DA", logo: "/partners/client3-b.png", url: "#" },
    { name: "AlgoRevX", logo: "/partners/client5-b.png", url: "#" },
    
  ]

  // Auto-scroll functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setPosition((prev) => (prev + 1) % partners.length)
      }, 2000) // Faster than other carousels for subtle movement

      return () => clearInterval(interval)
    }
  }, [isPaused, partners.length])

  // Pause on hover
  const handleMouseEnter = () => setIsPaused(true)
  const handleMouseLeave = () => setIsPaused(false)

  // Create a duplicated array for infinite scroll effect
  const displayPartners = [...partners, ...partners]

  return (
    <section className="py-12 md:py-16 bg-gray-900 text-white" style={{ backgroundColor: theme.colors.gray[900] }}>
      <div className="container">
        <div
          className="carousel-container overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ margin: 0, padding: 0 }}
        >
          <div
            className="flex transition-transform duration-1000 ease-linear"
            style={{
              transform: `translateX(-${position * (100 / partners.length)}%)`,
              width: `${displayPartners.length * 20}%`, // Make the container wide enough
              transitionDuration: "1000ms",
              margin: 0,
              padding: 0,
            }}
          >
            {displayPartners.map((partner, index) => (
              <div key={index} className="flex-shrink-0 w-1/5 px-4" style={{ padding: "0 1rem", margin: 0 }}>
                <Link
                  href={partner.url}
                  className="block grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
                >
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    width={800}
                    height={400}
                    className="h-24 w-auto object-contain mx-auto"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
