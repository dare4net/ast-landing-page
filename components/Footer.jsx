import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ChevronRight, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import theme from "@/styles/theme"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8" style={{ backgroundColor: theme.colors.gray[900] }}>
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h2 className="text-white text-lg font-bold mb-4">About Us</h2>
            <p className="mb-4">
              After-school.tech is dedicated to providing children with engaging, educational tech experiences that
              prepare them for the future while making learning fun.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-white text-lg font-bold mb-4">Quick Links</h2>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="hover:text-white transition-colors flex items-center">
                      <ChevronRight className="h-3 w-3 mr-1" />
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white transition-colors flex items-center">
                      <ChevronRight className="h-3 w-3 mr-1" />
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white transition-colors flex items-center">
                      <ChevronRight className="h-3 w-3 mr-1" />
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white transition-colors flex items-center">
                      <ChevronRight className="h-3 w-3 mr-1" />
                      Schools
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white transition-colors flex items-center">
                      <ChevronRight className="h-3 w-3 mr-1" />
                      Partnership
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="hover:text-white transition-colors flex items-center">
                      <ChevronRight className="h-3 w-3 mr-1" />
                      Consulting
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white transition-colors flex items-center">
                      <ChevronRight className="h-3 w-3 mr-1" />
                      Policies
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white transition-colors flex items-center">
                      <ChevronRight className="h-3 w-3 mr-1" />
                      Testimonials
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white transition-colors flex items-center">
                      <ChevronRight className="h-3 w-3 mr-1" />
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white transition-colors flex items-center">
                      <ChevronRight className="h-3 w-3 mr-1" />
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-white text-lg font-bold mb-4">Highlights</h2>
            <p className="mb-2">Our programs cuts across diverse tech fields</p>
            <ul className="space-y-2">
              <li>Coding & Development: web, mobile</li>
              <li>Graphics & Design: UI/UX, digital Art</li>
              <li>Animation & Video Editing</li>
              <li>AI & Cybersecurity</li>
            </ul>
          </div>

          <div>
            <h2 className="text-white text-lg font-bold mb-4">Newsletter</h2>
            <p className="mb-4">
              Be the first to get informed, get early access to events, and receive exciting updates for your tech-savvy
              kids.
            </p>
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="Email Address"
                className="flex-1 bg-gray-800 border-gray-700 text-white"
              />
              <Button
                className="bg-amber-500 hover:bg-amber-600 text-white"
                style={{ backgroundColor: theme.colors.primary[500] }}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-sm">
            © Copyright {new Date().getFullYear()} | All Rights Reserved by{" "}
            <a
              href="https://after-school.tech"
              className="text-amber-400 hover:underline"
              style={{ color: theme.colors.primary[400] }}
            >
              after-school.tech
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
