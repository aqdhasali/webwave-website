"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"

interface StatProps {
  value: number
  label: string
  suffix?: string
}

function StatCounter({ value, label, suffix = "" }: StatProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const duration = 2000 // 2 seconds
      const increment = Math.ceil(value / (duration / 16)) // 60fps

      const timer = setInterval(() => {
        start += increment
        if (start > value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(start)
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <div ref={ref} className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <p className="text-4xl md:text-5xl font-bold mb-2">
          {count}
          {suffix}
        </p>
        <p className="text-muted-foreground">{label}</p>
      </motion.div>
    </div>
  )
}

export default function StatsSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
          <StatCounter value={15} label="Clients" suffix="+" />
          <StatCounter value={30} label="Projects" suffix="+" />
        </div>
      </div>
    </section>
  )
}
