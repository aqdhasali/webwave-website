"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const clients = [
  { name: "Informatics Institute of Technology", logo: "/images/iit-logo.png", width: 180, height: 60 },
  { name: "Glaziers Australia", logo: "/images/glaziers-australia-logo.jpeg", width: 180, height: 60 },
  { name: "KOKO", logo: "/images/koko-logo.jpeg", width: 180, height: 60 },
  { name: "Cutting Edge", logo: "/images/cutting-edge-logo.png", width: 240, height: 60 },
  { name: "Student Activity Club", logo: "/images/student-activity-club-logo.jpeg", width: 180, height: 60 },
]

export default function ClientSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const desktopSliderRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)

  // Mobile slider auto-rotation
  useEffect(() => {
    if (isHovering) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isHovering])

  // Desktop slider auto-scroll
  useEffect(() => {
    const slider = desktopSliderRef.current
    if (!slider) return

    let animationId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5 // pixels per frame
    const totalWidth = slider.scrollWidth
    const viewportWidth = slider.offsetWidth

    const scroll = () => {
      if (isHovering || !slider) {
        animationId = requestAnimationFrame(scroll)
        return
      }

      scrollPosition += scrollSpeed

      // Reset when we've scrolled through all items
      if (scrollPosition >= totalWidth - viewportWidth) {
        scrollPosition = 0
      }

      slider.scrollLeft = scrollPosition
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [isHovering])

  return (
    <div className="w-full overflow-hidden bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Our Trusted Clients</h2>

        <div className="relative">
          {/* Desktop Slider - Show multiple logos */}
          <div
            ref={desktopSliderRef}
            className="hidden md:flex items-center space-x-16 overflow-x-auto scrollbar-hide py-4"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* Duplicate the clients array to create an infinite scroll effect */}
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center h-20 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  width={client.width}
                  height={client.height}
                  className="object-contain max-h-16"
                />
              </div>
            ))}
          </div>

          {/* Mobile Slider - Show one logo at a time */}
          <div className="md:hidden flex justify-center h-20 relative">
            {clients.map((client, index) => (
              <div
                key={index}
                className={cn(
                  "absolute transition-all duration-500 flex items-center justify-center",
                  index === currentIndex ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full",
                )}
              >
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  width={client.width}
                  height={client.height}
                  className="object-contain max-h-16"
                />
              </div>
            ))}
          </div>

          {/* Mobile Dots */}
          <div className="flex justify-center space-x-2 mt-6 md:hidden">
            {clients.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-colors",
                  index === currentIndex ? "bg-primary" : "bg-gray-300 dark:bg-gray-700",
                )}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
