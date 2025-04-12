"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  title: string
  description: string
  icon: ReactNode
  className?: string
}

export default function ServiceCard({ title, description, icon, className }: ServiceCardProps) {
  return (
    <motion.div whileHover={{ y: -8 }} className={cn("service-card group", className)}>
      <div className="service-card-bg">
        <div className="absolute inset-0">
          <svg className="w-full h-full text-white opacity-5" viewBox="0 0 696 316" fill="none">
            {Array.from({ length: 10 }).map((_, i) => (
              <motion.path
                key={i}
                d={`M-${380 - i * 15} -${189 + i * 10}C-${
                  380 - i * 15
                } -${189 + i * 10} -${312 - i * 15} ${216 - i * 10} ${
                  152 - i * 15
                } ${343 - i * 10}C${616 - i * 15} ${470 - i * 10} ${
                  684 - i * 15
                } ${875 - i * 10} ${684 - i * 15} ${875 - i * 10}`}
                stroke="currentColor"
                strokeWidth={0.5 + i * 0.1}
                strokeOpacity={0.1 + i * 0.05}
                initial={{ pathLength: 0 }}
                animate={{
                  pathLength: [0, 1],
                  pathOffset: [0, 1],
                }}
                transition={{
                  duration: 10 + i * 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
            ))}
          </svg>
        </div>
      </div>

      <div className="relative z-10">
        <div className="mb-4 text-white/90 text-3xl">{icon}</div>
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-white/90 transition-colors">{title}</h3>
        <p className="text-white/70 group-hover:text-white/80 transition-colors">{description}</p>
      </div>
    </motion.div>
  )
}
