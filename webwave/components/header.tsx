"use client"

import { useState, useEffect } from "react"
import { Home, User, Calendar, ImageIcon, Phone } from "lucide-react"
import { NavBar } from "@/components/ui/tubelight-navbar"
import { usePathname } from "next/navigation"

const Header = () => {
  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState("Home")

  useEffect(() => {
    // Set active tab based on current path
    if (pathname === "/") setActiveTab("Home")
    else if (pathname === "/about") setActiveTab("About")
    else if (pathname === "/events") setActiveTab("Events")
    else if (pathname === "/portfolio") setActiveTab("Portfolio")
    else if (pathname === "/contact") setActiveTab("Contact")
  }, [pathname])

  const navItems = [
    { name: "Home", url: "/", icon: Home },
    { name: "About", url: "/about", icon: User },
    { name: "Events", url: "/events", icon: Calendar },
    { name: "Portfolio", url: "/portfolio", icon: ImageIcon },
    { name: "Contact", url: "/contact", icon: Phone },
  ]

  return (
    <header className="z-50">
      <NavBar items={navItems} />
    </header>
  )
}

export default Header
