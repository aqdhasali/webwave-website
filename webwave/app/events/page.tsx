"use client"

import { Waves } from "@/components/ui/waves"
import { useTheme } from "next-themes"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin } from "lucide-react"

export default function EventsPage() {
  const { theme } = useTheme()

  const upcomingEvents = [
    {
      id: 1,
      title: "Tech Innovation Summit",
      date: "June 15, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Tech Convention Center",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "Join industry leaders for a day of insights and networking focused on the latest technology trends and innovations.",
    },
    {
      id: 2,
      title: "Digital Marketing Workshop",
      date: "July 10, 2024",
      time: "10:00 AM - 3:00 PM",
      location: "WebWave Headquarters",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "Learn practical digital marketing strategies from experts in SEO, social media, and content marketing.",
    },
    {
      id: 3,
      title: "Photography Exhibition",
      date: "August 5, 2024",
      time: "6:00 PM - 9:00 PM",
      location: "City Art Gallery",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "Experience a stunning collection of photographs showcasing our best work from various events and product shoots.",
    },
  ]

  const pastEvents = [
    {
      id: 4,
      title: "Annual Corporate Gala",
      date: "December 10, 2023",
      location: "Grand Hotel",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 5,
      title: "Product Launch Event",
      date: "October 25, 2023",
      location: "Innovation Hub",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 6,
      title: "Web Design Conference",
      date: "September 15, 2023",
      location: "Design Center",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 7,
      title: "Summer Networking Mixer",
      date: "July 20, 2023",
      location: "Rooftop Lounge",
      image: "/placeholder.svg?height=400&width=600",
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Events</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our upcoming events and explore highlights from our past events.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Upcoming Events</h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <div className="flex items-center text-muted-foreground mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground mb-2">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <p className="text-muted-foreground mb-6">{event.description}</p>
                  <Button className="w-full">Register Now</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Past Events</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pastEvents.map((event) => (
              <div key={event.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">{event.title}</h3>
                  <div className="flex items-center text-muted-foreground mb-1">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Event Services</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At WebWave, we offer comprehensive event services to help you create memorable experiences for your
                audience. From planning and organization to photography and video production, we handle every aspect of
                your event with professionalism and creativity.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-3 text-primary">✓</div>
                  <div>
                    <h3 className="font-semibold">Event Planning & Organization</h3>
                    <p className="text-muted-foreground">
                      Comprehensive planning and logistics management for events of all sizes.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 text-primary">✓</div>
                  <div>
                    <h3 className="font-semibold">Custom Photobooths</h3>
                    <p className="text-muted-foreground">
                      Branded photo experiences that engage attendees and create lasting memories.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 text-primary">✓</div>
                  <div>
                    <h3 className="font-semibold">Event Photography</h3>
                    <p className="text-muted-foreground">
                      Professional photography services to capture the key moments of your event.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 text-primary">✓</div>
                  <div>
                    <h3 className="font-semibold">Video Production</h3>
                    <p className="text-muted-foreground">
                      High-quality video content to document and promote your event.
                    </p>
                  </div>
                </li>
              </ul>
              <Button className="mt-8">Learn More</Button>
            </div>
            <div className="relative h-[500px] rounded-xl overflow-hidden">
              <Image src="/placeholder.svg?height=1000&width=800" alt="Event Services" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
