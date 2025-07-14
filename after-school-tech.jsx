"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import {
  Rocket,
  Lightbulb,
  Code,
  Award,
  BadgeIcon as Certificate,
  Target,
  Monitor,
  Palette,
  Blocks,
  Smartphone,
  Bot,
  LayoutDashboard,
  Play,
  ChevronRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Menu,
  X,
} from "lucide-react"

export default function AfterSchoolTech() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSlide, setActiveSlide] = useState(0)

  const slides = [
    {
      title: "This Isn't Just Tech Learning, It's Their Launchpad",
      description:
        "We don't just keep kids busy online. We equip them with real tech skills that spark curiosity and build confidence for the future.",
      image: "/placeholder.svg?height=600&width=1200",
    },
    {
      title: "Help Your Child Grow Beyond the Classroom",
      description:
        "From code to design, our hands-on curriculum turns play into purpose and screen time into skill time.",
      image: "/placeholder.svg?height=600&width=1200",
    },
    {
      title: "Designed for Schools and Communities That Believe in Early Innovation",
      description:
        "We work with schools and organizations to deliver fun and impactful tech programs that evolve with every learner.",
      image: "/placeholder.svg?height=600&width=1200",
    },
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/placeholder.svg?height=40&width=150"
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
            <Link href="#" className="text-sm font-medium hover:text-amber-500 transition-colors">
              Home
            </Link>
            <Link href="#badges" className="text-sm font-medium hover:text-amber-500 transition-colors">
              Badges
            </Link>
            <Link href="#features" className="text-sm font-medium hover:text-amber-500 transition-colors">
              Features
            </Link>
            <Link href="#partner" className="text-sm font-medium hover:text-amber-500 transition-colors">
              Partner
            </Link>
            <Link href="#events" className="text-sm font-medium hover:text-amber-500 transition-colors">
              Events
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-amber-500 transition-colors">
              Contact Us
            </Link>
            <Button className="bg-amber-500 hover:bg-amber-600 text-white">Get Started</Button>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t p-4 bg-background">
            <nav className="flex flex-col space-y-4">
              <Link href="#" className="text-sm font-medium hover:text-amber-500 transition-colors">
                Home
              </Link>
              <Link href="#badges" className="text-sm font-medium hover:text-amber-500 transition-colors">
                Badges
              </Link>
              <Link href="#features" className="text-sm font-medium hover:text-amber-500 transition-colors">
                Features
              </Link>
              <Link href="#partner" className="text-sm font-medium hover:text-amber-500 transition-colors">
                Partner
              </Link>
              <Link href="#events" className="text-sm font-medium hover:text-amber-500 transition-colors">
                Events
              </Link>
              <Link href="#contact" className="text-sm font-medium hover:text-amber-500 transition-colors">
                Contact Us
              </Link>
              <Button className="bg-amber-500 hover:bg-amber-600 text-white w-full">Get Started</Button>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gray-100">
          <div className="absolute inset-0 z-0">
            <Image
              src={slides[activeSlide].image || "/placeholder.svg"}
              alt="Hero background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          <div className="container relative z-10 py-20 md:py-32">
            <div className="max-w-2xl text-white">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                {slides[activeSlide].title.split(" ").map((word, i) =>
                  word.includes("Tech") ||
                  word.includes("Launchpad") ||
                  word.includes("Grow") ||
                  word.includes("Classroom") ||
                  word.includes("Schools") ||
                  word.includes("Early") ||
                  word.includes("Innovation") ? (
                    <span key={i} className="text-amber-400">
                      {word}{" "}
                    </span>
                  ) : (
                    <span key={i}>{word} </span>
                  ),
                )}
              </h1>
              <p className="text-lg mb-8">{slides[activeSlide].description}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-amber-500 hover:bg-amber-600 text-white">Sign up</Button>
                <Button
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>

          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`h-2 w-2 rounded-full ${activeSlide === index ? "bg-amber-500" : "bg-white/50"}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-black/20 text-white flex items-center justify-center hover:bg-black/40"
            aria-label="Previous slide"
          >
            <ChevronRight className="h-6 w-6 rotate-180" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-black/20 text-white flex items-center justify-center hover:bg-black/40"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </section>

        {/* Learning Journey Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Learning Journey</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-t-4 border-t-amber-500 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-amber-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Rocket className="h-6 w-6 text-amber-500" />
                  </div>
                  <h3 className="text-sm uppercase tracking-wider text-amber-500 mb-1">Discover</h3>
                  <h4 className="text-xl font-bold mb-2">Exploration Stage</h4>
                  <p className="text-gray-600 mb-4">
                    Kids get exposed to a wide range of tech topics like coding, robotics, AI, design, and more. This
                    stage is playful, hands-on, and all about discovery. It helps them build curiosity and confidence
                    without pressure.
                  </p>
                  <Link href="#" className="inline-flex items-center text-amber-500 font-medium hover:text-amber-600">
                    LEARN MORE <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-amber-500 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-amber-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Lightbulb className="h-6 w-6 text-amber-500" />
                  </div>
                  <h3 className="text-sm uppercase tracking-wider text-amber-500 mb-1">Learn</h3>
                  <h4 className="text-xl font-bold mb-2">Focus Stage</h4>
                  <p className="text-gray-600 mb-4">
                    After exploring multiple areas, learners choose a direction that excites them most. We group related
                    fields together into learning tracks, guiding them with structured challenges and real-world
                    projects.
                  </p>
                  <Link href="#" className="inline-flex items-center text-amber-500 font-medium hover:text-amber-600">
                    LEARN MORE <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-amber-500 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-amber-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Code className="h-6 w-6 text-amber-500" />
                  </div>
                  <h3 className="text-sm uppercase tracking-wider text-amber-500 mb-1">Create</h3>
                  <h4 className="text-xl font-bold mb-2">Specialization Stage</h4>
                  <p className="text-gray-600 mb-4">
                    At this point, learners go deep into specific areas such as Frontend Development, AI, Game Design,
                    or Digital Art. They build projects, earn badges, and start creating at near-professional levels.
                  </p>
                  <Link href="#" className="inline-flex items-center text-amber-500 font-medium hover:text-amber-600">
                    LEARN MORE <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Gamified Learning Section */}
        <section id="badges" className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Gamified Learning – Featuring Badges & Certificates
              </h2>
              <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
              <p className="text-gray-600">
                Because Every Win Deserves a High-Five. We reward effort and progress with digital badges and printable
                certificates. Watch your child light up with motivation as they unlock new skills!
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="rounded-full bg-amber-100 p-6 w-24 h-24 flex items-center justify-center mx-auto mb-6">
                  <Award className="h-12 w-12 text-amber-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Reward Badges</h3>
                <p className="text-gray-600">
                  There are numerous unique badges to be won based on specific achievements and completed challenges.
                </p>
              </div>

              <div className="text-center">
                <div className="rounded-full bg-amber-100 p-6 w-24 h-24 flex items-center justify-center mx-auto mb-6">
                  <Certificate className="h-12 w-12 text-amber-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Certificates of Completion</h3>
                <p className="text-gray-600">Earn official certificates to mark the successful end of each stage.</p>
              </div>

              <div className="text-center">
                <div className="rounded-full bg-amber-100 p-6 w-24 h-24 flex items-center justify-center mx-auto mb-6">
                  <Target className="h-12 w-12 text-amber-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Milestone Celebration & Digital Awards</h3>
                <p className="text-gray-600">
                  Celebrate progress with fun digital awards and exciting milestone recognition.
                </p>
              </div>
            </div>
          </div>
        </section>

        

        {/* Platform Features */}
        <section id="features" className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Platform Features</h2>
              <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
              <p className="text-gray-600">Powerful Tools, Simplified for Kids</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <Monitor className="h-10 w-10 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">In-browser code editor</h3>
                <p className="text-gray-600">
                  A simplified coding environment that makes it easy for kids to write and test code without complex
                  setups.
                </p>
              </div>

              <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <Palette className="h-10 w-10 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Design Canvas</h3>
                <p className="text-gray-600">
                  An intuitive digital canvas where kids can create artwork, designs, and visual projects with
                  easy-to-use tools.
                </p>
              </div>

              <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <Blocks className="h-10 w-10 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Block-based coding Interface</h3>
                <p className="text-gray-600">
                  Drag-and-drop coding blocks that teach programming concepts without the frustration of syntax errors.
                </p>
              </div>

              <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <Smartphone className="h-10 w-10 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Mobile Friendly UI</h3>
                <p className="text-gray-600">
                  Access learning materials and complete projects from any device with our responsive, mobile-friendly
                  interface.
                </p>
              </div>

              <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <Bot className="h-10 w-10 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Interactive Projects</h3>
                <p className="text-gray-600">
                  Engaging, hands-on projects that make learning fun and help concepts stick through practical
                  application.
                </p>
              </div>

              <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <LayoutDashboard className="h-10 w-10 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Progress Dashboard</h3>
                <p className="text-gray-600">
                  Track learning progress, completed projects, and earned badges all in one easy-to-navigate dashboard.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section id="partner" className="py-16 md:py-24 bg-amber-500 text-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Want to bring After-school.tech to your school/organization?
              </h2>
              <p className="mb-8">
                We partner with schools, after-school programs, and non-profits to provide licenses, onboarding support,
                and co-branded experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-amber-500 hover:bg-gray-100">Contact Now</Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/20">
                  Learn More <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Parents Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Built with the parents in mind</h3>
                <p className="text-gray-600 mb-4">
                  After-school.tech is designed not only for kids to explore and grow in the world of technology but
                  also to keep parents actively informed and involved in their child's learning journey.
                </p>
                <p className="text-gray-600 mb-6">
                  We makes it easy for parents to support, guide, and celebrate their child's tech development.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <ChevronRight className="h-4 w-4 text-amber-500 mr-2" />
                        <span>Progress Dashboard</span>
                      </li>
                      <li className="flex items-center">
                        <ChevronRight className="h-4 w-4 text-amber-500 mr-2" />
                        <span>Weekly Performance Report</span>
                      </li>
                      <li className="flex items-center">
                        <ChevronRight className="h-4 w-4 text-amber-500 mr-2" />
                        <span>Parental Notifications</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <ChevronRight className="h-4 w-4 text-amber-500 mr-2" />
                        <span>Certificate Tracker</span>
                      </li>
                      <li className="flex items-center">
                        <ChevronRight className="h-4 w-4 text-amber-500 mr-2" />
                        <span>Secure Parent Portal</span>
                      </li>
                      <li className="flex items-center">
                        <ChevronRight className="h-4 w-4 text-amber-500 mr-2" />
                        <span>Live Support Access</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden relative">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Video thumbnail"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="h-16 w-16 rounded-full bg-amber-500 flex items-center justify-center">
                      <Play className="h-8 w-8 text-white" fill="white" />
                    </button>
                  </div>
                </div>

                {/* Animation Waves */}
                <div className="absolute -inset-4 -z-10 opacity-70">
                  <div
                    className="absolute inset-0 border-2 border-amber-500 rounded-lg animate-ping"
                    style={{ animationDuration: "3s" }}
                  ></div>
                  <div
                    className="absolute inset-0 border-2 border-amber-500 rounded-lg animate-ping"
                    style={{ animationDuration: "3s", animationDelay: "1s" }}
                  ></div>
                  <div
                    className="absolute inset-0 border-2 border-amber-500 rounded-lg animate-ping"
                    style={{ animationDuration: "3s", animationDelay: "2s" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Parents & Kids Love After-school.tech</h2>
              <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
              <p className="text-gray-600">Here is what people have to say about our amazing platform</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h5 className="font-bold mb-2">I've been looking for something like this!</h5>
                  <p className="text-gray-600 italic mb-4">
                    "As a parent, I've always wanted my child to learn tech in a fun, structured way. What
                    After-school.tech is building feels like the perfect blend of play and purpose. I can't wait to see
                    it launch!"
                  </p>
                  <p className="font-bold">— Parent of 8-year-old</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h5 className="font-bold mb-2">This is the kind of innovation our kids need!</h5>
                  <p className="text-gray-600 italic mb-4">
                    "I'm genuinely excited about this platform. Tech is the future, and introducing kids to it early —
                    in the right way — is so important. After-school.tech seems like it's solving that beautifully."
                  </p>
                  <p className="font-bold">— Parent of 10-year-old</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h5 className="font-bold mb-2">So glad I found out early</h5>
                  <p className="text-gray-600 italic mb-4">
                    "I love the mission behind After-school.tech. I signed up for updates right away and have been
                    telling other parents. Can't wait for the full launch!"
                  </p>
                  <p className="font-bold">— Parent of 9-year-old</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section id="events" className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Keep up with Our Most Recent Tech Events</h2>
              <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
              <p className="text-gray-600">Register Promptly for Upcoming Events</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Accelerator Tech Program"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="pt-6">
                  <div className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm mb-4">
                    Upcoming!
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    <Link href="#" className="hover:text-amber-500 transition-colors">
                      Accelerator Tech Program
                    </Link>
                  </h3>
                  <p className="text-gray-600">
                    A fast-paced program designed to accelerate learning in specific tech areas. Perfect for kids who
                    want to dive deeper into their favorite subjects.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="AST Launch Event"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="pt-6">
                  <div className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm mb-4">
                    15 Jul, 2025
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    <Link href="#" className="hover:text-amber-500 transition-colors">
                      AST Launch Event
                    </Link>
                  </h3>
                  <p className="text-gray-600">
                    Join us for the official launch of After-school.tech! Experience our platform firsthand and meet our
                    team of educators and tech experts.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Let's Talk - Live Event"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="pt-6">
                  <div className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm mb-4">
                    05 Jan, 2025
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    <Link href="#" className="hover:text-amber-500 transition-colors">
                      Let's Talk - Live Event for Parents/Educators
                    </Link>
                  </h3>
                  <p className="text-gray-600">
                    A virtual discussion about the importance of early tech education and how to support children's
                    learning journey effectively.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-12 md:py-16 bg-gray-900 text-white">
          <div className="container">
            <div className="grid grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="grayscale hover:grayscale-0 transition-all">
                  <Image
                    src={`/placeholder.svg?height=60&width=120&text=Partner${i}`}
                    alt={`Partner ${i}`}
                    width={120}
                    height={60}
                    className="h-12 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">We Are Always Ready to Hear from You</h2>
              <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
              <p className="text-gray-600">
                Send us a message using the form below and we'll send a personalized response to your mail
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Input placeholder="Name" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Email" />
                  </div>
                </div>
                <div>
                  <Input placeholder="Phone" />
                </div>
                <div>
                  <Textarea placeholder="Write Your Message Here....." className="min-h-[120px]" />
                </div>
                <div className="flex items-center gap-4">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-white">Send a Message</Button>
                  <p className="text-sm text-gray-500">(We will reply as soon as the message is received)</p>
                </div>
              </form>

              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=400&width=600" alt="Contact" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-bold mb-2">Sign up for newsletter</h3>
                <p className="text-gray-600">
                  Be the first to get informed, get early access to events, and receive exciting updates for your
                  tech-savvy kids. Stay Informed.
                </p>
              </div>
              <div>
                <form className="flex gap-2">
                  <Input type="email" placeholder="Your email address" className="flex-1" />
                  <Button className="bg-amber-500 hover:bg-amber-600 text-white">Subscribe</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
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
                Be the first to get informed, get early access to events, and receive exciting updates for your
                tech-savvy kids.
              </p>
              <form className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="flex-1 bg-gray-800 border-gray-700 text-white"
                />
                <Button className="bg-amber-500 hover:bg-amber-600 text-white">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-sm">
              © Copyright {new Date().getFullYear()} | All Rights Reserved by{" "}
              <a href="https://after-school.tech" className="text-amber-400 hover:underline">
                after-school.tech
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
