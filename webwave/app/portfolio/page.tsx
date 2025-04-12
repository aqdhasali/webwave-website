"use client"

import { useState } from "react"
import Image from "next/image"
import { Waves } from "@/components/ui/waves"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

interface PortfolioItem {
  id: string
  title: string
  category: string
  description: string
  image: string
}

export default function PortfolioPage() {
  const { theme } = useTheme()
  const [activeItem, setActiveItem] = useState<string | null>(null)

  const portfolioItems: PortfolioItem[] = [
    {
      id: "photobooths",
      title: "Photobooths",
      category: "Event Services",
      description:
        "Custom-designed photo experiences that create lasting memories for your events. Our photobooths feature high-quality cameras, instant printing, and customizable backdrops.",
      image: "/placeholder.svg?height=800&width=600",
    },
    {
      id: "photography",
      title: "Product & Event Photography",
      category: "Photography",
      description:
        "Professional photography services that capture the essence of your events and products. Our team of experienced photographers use state-of-the-art equipment to deliver stunning images.",
      image: "/placeholder.svg?height=800&width=600",
    },
    {
      id: "websites",
      title: "Websites",
      category: "Web Development",
      description:
        "Custom website development that aligns with your brand and business objectives. We create responsive, user-friendly websites that drive engagement and conversions.",
      image: "/placeholder.svg?height=800&width=600",
    },
    {
      id: "interviews",
      title: "Interviews",
      category: "Video Production",
      description:
        "Professional video production services for interviews and promotional content. Our team handles everything from pre-production planning to post-production editing.",
      image: "/placeholder.svg?height=800&width=600",
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Waves
            lineColor={theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)"}
            backgroundColor="transparent"
            waveSpeedX={0.02}
            waveSpeedY={0.01}
            waveAmpX={40}
            waveAmpY={20}
            friction={0.9}
            tension={0.01}
            maxCursorMove={120}
            xGap={12}
            yGap={36}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our work and see how we've helped businesses achieve their goals.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioItems.map((item) => (
              <motion.div
                key={item.id}
                className="portfolio-card"
                onHoverStart={() => setActiveItem(item.id)}
                onHoverEnd={() => setActiveItem(null)}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                <div className="portfolio-card-content">
                  <span className="text-sm text-white/70 mb-1">{item.category}</span>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Corporate Event"
                width={800}
                height={600}
                className="rounded-xl shadow-lg mb-6"
              />
              <h3 className="text-2xl font-bold mb-2">Annual Tech Conference</h3>
              <p className="text-muted-foreground mb-4">
                We provided comprehensive event management services for a major tech conference, including photography,
                videography, and custom photobooths.
              </p>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="E-commerce Website"
                width={800}
                height={600}
                className="rounded-xl shadow-lg mb-6"
              />
              <h3 className="text-2xl font-bold mb-2">E-commerce Platform</h3>
              <p className="text-muted-foreground mb-4">
                We designed and developed a custom e-commerce platform for a fashion retailer, including product
                photography and promotional video content.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
