"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import theme from "@/styles/theme"
import OfflineWrapper from "./OfflineWrapper"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/After School-web512x512.png"
                alt="After-school.tech Logo"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="block md:hidden" onClick={toggleMenu} aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm font-medium hover:text-amber-500 transition-colors font-poppins">
              Home
            </Link>
            <Link href="#badges" className="text-sm font-medium hover:text-amber-500 transition-colors font-poppins">
              Badges
            </Link>
            <Link href="#features" className="text-sm font-medium hover:text-amber-500 transition-colors font-poppins">
              Features
            </Link>
            <Link href="#partner" className="text-sm font-medium hover:text-amber-500 transition-colors font-poppins">
              Partner
            </Link>
            <Link href="#events" className="text-sm font-medium hover:text-amber-500 transition-colors font-poppins">
              Events
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-amber-500 transition-colors font-poppins">
              Contact Us
            </Link>
            <Button
              className="bg-amber-500 hover:bg-amber-600 text-white font-poppins font-medium"
              style={{ backgroundColor: theme.colors.primary[500] }}
            >
              Get Started
            </Button>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t p-4 bg-background">
            <nav className="flex flex-col space-y-4">
              <Link href="#" className="text-sm font-medium hover:text-amber-500 transition-colors font-poppins">
                Home
              </Link>
              <Link href="#badges" className="text-sm font-medium hover:text-amber-500 transition-colors font-poppins">
                Badges
              </Link>
              <Link
                href="#features"
                className="text-sm font-medium hover:text-amber-500 transition-colors font-poppins"
              >
                Features
              </Link>
              <Link href="#partner" className="text-sm font-medium hover:text-amber-500 transition-colors font-poppins">
                Partner
              </Link>
              <Link href="#events" className="text-sm font-medium hover:text-amber-500 transition-colors font-poppins">
                Events
              </Link>
              <Link href="#contact" className="text-sm font-medium hover:text-amber-500 transition-colors font-poppins">
                Contact Us
              </Link>
              <Button
                className="bg-amber-500 hover:bg-amber-600 text-white w-full font-poppins font-medium"
                style={{ backgroundColor: theme.colors.primary[500] }}
              >
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </header>
      <OfflineWrapper />
    </>
  )
}
