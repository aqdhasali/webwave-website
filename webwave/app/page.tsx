"use client"

import { useTheme } from "next-themes"
import { Waves } from "@/components/ui/waves"
import { BackgroundPaths } from "@/components/ui/background-paths"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import ClientSlider from "@/components/client-slider"
import ServiceCard from "@/components/service-card"
import StatsSection from "@/components/stats-section"
import TestimonialCard from "@/components/testimonial-card"
import { Camera, ImageIcon, Palette, Code, Calendar, Users, ChevronRight } from "lucide-react"

export default function Home() {
  const { theme } = useTheme()

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
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
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">Where Creativity Meets Innovation!</h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Unleash the Power of WebWave: Your Ultimate Digital Partner for Innovative Solutions and Limitless
            Possibilities
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="text-lg">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              Our Services
            </Button>
          </div>
        </div>
      </section>

      {/* Client Slider */}
      <ClientSlider />

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About WebWave</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At WebWave, we are a dynamic team of passionate professionals committed to delivering exceptional
                digital solutions that empower businesses to thrive in the digital era. With our extensive experience,
                creative mindset, and unwavering dedication, we have established ourselves as a leading digital agency
                at the forefront of innovation.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="mr-3 text-primary">
                    <ChevronRight />
                  </div>
                  <div>
                    <h3 className="font-semibold">Visionary Approach</h3>
                    <p className="text-muted-foreground">We see beyond the present, crafting solutions for tomorrow.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-3 text-primary">
                    <ChevronRight />
                  </div>
                  <div>
                    <h3 className="font-semibold">Creative Excellence</h3>
                    <p className="text-muted-foreground">Our designs blend aesthetics with functionality.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-3 text-primary">
                    <ChevronRight />
                  </div>
                  <div>
                    <h3 className="font-semibold">Innovation at Every Step</h3>
                    <p className="text-muted-foreground">
                      We constantly push boundaries to deliver cutting-edge solutions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-3 text-primary">
                    <ChevronRight />
                  </div>
                  <div>
                    <h3 className="font-semibold">Trust and Transparency</h3>
                    <p className="text-muted-foreground">
                      We build lasting relationships based on honesty and integrity.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-3 text-primary">
                    <ChevronRight />
                  </div>
                  <div>
                    <h3 className="font-semibold">Client-Centric Approach</h3>
                    <p className="text-muted-foreground">Your success is our priority, driving everything we do.</p>
                  </div>
                </div>
              </div>

              <Link href="/about">
                <Button>
                  Learn More
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden">
              <BackgroundPaths title="WebWave" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We offer a comprehensive range of digital services to help your business thrive in the digital landscape.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Event Organization"
              description="Professional planning and execution of corporate and social events with attention to every detail."
              icon={<Calendar />}
            />

            <ServiceCard
              title="Photobooths"
              description="Custom-designed photo experiences that create lasting memories for your events."
              icon={<Camera />}
            />

            <ServiceCard
              title="Event & Product Photography"
              description="High-quality photography services that capture the essence of your events and products."
              icon={<ImageIcon />}
            />

            <ServiceCard
              title="Production Shoots & Interviews"
              description="Professional video production services for commercials, interviews, and promotional content."
              icon={<Users />}
            />

            <ServiceCard
              title="UI/UX Design"
              description="User-centered design solutions that enhance user experience and drive engagement."
              icon={<Palette />}
            />

            <ServiceCard
              title="Website Building"
              description="Custom website development that aligns with your brand and business objectives."
              icon={<Code />}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with WebWave.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="WebWave transformed our digital presence completely. Their team's creativity and technical expertise are unmatched in the industry."
              name="Sarah Johnson"
              title="Marketing Director"
              company="Glaziers Australia"
              avatarSrc="/placeholder.svg?height=80&width=80"
            />

            <TestimonialCard
              quote="The event organization services provided by WebWave exceeded our expectations. Every detail was perfectly executed."
              name="Michael Chen"
              title="CEO"
              company="KOKO"
              avatarSrc="/placeholder.svg?height=80&width=80"
            />

            <TestimonialCard
              quote="Working with WebWave on our website redesign was a game-changer for our business. The results speak for themselves."
              name="Jessica Williams"
              title="Operations Manager"
              company="Flex Events"
              avatarSrc="/placeholder.svg?height=80&width=80"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Experience?</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Let's collaborate to create innovative solutions that drive your business forward.
          </p>
          <Link href="/contact">
            <Button size="lg" className="text-lg">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}
