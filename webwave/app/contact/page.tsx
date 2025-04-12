"use client"

import type React from "react"

import { useState } from "react"
import { AuroraBackground } from "@/components/ui/aurora-background"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Calendar, Mail, MapPin, Phone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    contactPreference: "email",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, contactPreference: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - would connect to backend in production
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      contactPreference: "email",
    })
  }

  return (
    <AuroraBackground className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">Get In Touch</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Have a question or want to work with us? Fill out the form below and we'll get back to you as soon as
              possible.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-8">
            {/* Contact Form */}
            <Card className="md:col-span-7 shadow-xl border-0">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={handleChange}
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="How can we help you?"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">
                      Your Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us more about your project, needs, and timeline..."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="resize-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Preferred Contact Method</Label>
                    <RadioGroup
                      value={formData.contactPreference}
                      onValueChange={handleRadioChange}
                      className="flex space-x-6"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="email" id="email-preference" />
                        <Label htmlFor="email-preference" className="cursor-pointer">
                          Email
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="phone" id="phone-preference" />
                        <Label htmlFor="phone-preference" className="cursor-pointer">
                          Phone
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Button type="submit" className="w-full h-12 text-base mt-4">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="md:col-span-5 flex flex-col justify-between">
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-xl border-0 mb-6">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">Contact Information</h2>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-black dark:text-white">Address</h3>
                        <p className="text-gray-600 dark:text-gray-300">123 Digital Avenue, Tech City, 10001</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-black dark:text-white">Phone</h3>
                        <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-black dark:text-white">Email</h3>
                        <p className="text-gray-600 dark:text-gray-300">info@webwave.com</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <Calendar className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-black dark:text-white">Business Hours</h3>
                        <p className="text-gray-600 dark:text-gray-300">Monday - Friday: 9am - 6pm</p>
                        <p className="text-gray-600 dark:text-gray-300">Saturday: 10am - 4pm</p>
                        <p className="text-gray-600 dark:text-gray-300">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm shadow-xl border-0">
                <CardContent className="p-8">
                  <h3 className="font-semibold text-xl mb-4 text-black dark:text-white">Schedule a Call</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Prefer to talk directly? Schedule a call with one of our experts and we'll help you find the perfect
                    solution for your needs.
                  </p>
                  <Button size="lg" className="w-full">
                    Book a Consultation
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </AuroraBackground>
  )
}
