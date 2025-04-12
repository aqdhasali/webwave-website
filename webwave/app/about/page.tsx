"use client"

import Image from "next/image"
import { Timeline } from "@/components/ui/timeline"
import { Waves } from "@/components/ui/waves"
import { useTheme } from "next-themes"

export default function AboutPage() {
  const { theme } = useTheme()

  const timelineData = [
    {
      title: "2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Expanded our services to include UI/UX design and website development, helping businesses establish a strong
            digital presence.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/placeholder.svg?height=500&width=500"
              alt="UI/UX Design"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <Image
              src="/placeholder.svg?height=500&width=500"
              alt="Website Development"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Added production shoots and interviews to our service offerings, helping clients create compelling video
            content for their marketing campaigns.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/placeholder.svg?height=500&width=500"
              alt="Production Shoots"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <Image
              src="/placeholder.svg?height=500&width=500"
              alt="Interviews"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2019",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            WebWave was founded with a focus on event organization and photography services.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Established our first office
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Launched our photobooth services
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Organized our first major corporate event
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Built partnerships with key vendors
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Established our brand identity
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/placeholder.svg?height=500&width=500"
              alt="Event Organization"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <Image
              src="/placeholder.svg?height=500&width=500"
              alt="Photography Services"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About WebWave</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our journey, our values, and the team behind WebWave.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At WebWave, we are a dynamic team of passionate professionals committed to delivering exceptional
                digital solutions that empower businesses to thrive in the digital era. With our extensive experience,
                creative mindset, and unwavering dedication, we have established ourselves as a leading digital agency
                at the forefront of innovation.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2019, WebWave started as a small team focused on event organization and photography services.
                Over the years, we've expanded our offerings to include production shoots, interviews, UI/UX design, and
                website development, becoming a full-service digital agency.
              </p>
              <p className="text-lg text-muted-foreground">
                Our mission is to help businesses leverage the power of digital technology to connect with their
                audience, tell their stories, and achieve their goals. We believe in the power of creativity,
                innovation, and collaboration to create meaningful digital experiences.
              </p>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="WebWave Team"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4">Visionary Approach</h3>
              <p className="text-muted-foreground">
                We see beyond the present, crafting solutions for tomorrow. Our forward-thinking mindset allows us to
                anticipate trends and create innovative solutions that stand the test of time.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4">Creative Excellence</h3>
              <p className="text-muted-foreground">
                Our designs blend aesthetics with functionality. We believe that great design is not just about how
                something looks, but how it works, creating experiences that are both beautiful and effective.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4">Innovation at Every Step</h3>
              <p className="text-muted-foreground">
                We constantly push boundaries to deliver cutting-edge solutions. Innovation is at the heart of
                everything we do, driving us to explore new technologies and approaches to solve complex problems.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4">Trust and Transparency</h3>
              <p className="text-muted-foreground">
                We build lasting relationships based on honesty and integrity. Trust is the foundation of our client
                relationships, and we maintain open communication throughout every project.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4">Client-Centric Approach</h3>
              <p className="text-muted-foreground">
                Your success is our priority, driving everything we do. We take the time to understand your unique needs
                and goals, tailoring our solutions to help you achieve your vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <Timeline data={timelineData} />
    </div>
  )
}
