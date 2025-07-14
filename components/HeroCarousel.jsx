"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import theme from "@/styles/theme"

export default function HeroCarousel() {
  const [activeSlide, setActiveSlide] = useState(0)

  const slides = [
    {
      title: "This Isn't Just Tech Learning, It's Their Launchpad",
      description:
        "We don't just keep kids busy online. We equip them with real tech skills that spark curiosity and build confidence for the future.",
      image: "/launchpad.webp",
      blurDataURL: "data:image/jpeg;base64,/9j...", // You'll get this from the optimize-images script
    },
    {
      title: "Help Your Child Grow Beyond the Classroom",
      description:
        "From code to design, our hands-on curriculum turns play into purpose and screen time into skill time.",
      image: "/parents.webp",
      blurDataURL: "data:image/jpeg;base64,/9j...", // You'll get this from the optimize-images script
    },
    {
      title: "Designed for Schools and Communities That Believe in Early Innovation",
      description:
        "We work with schools and organizations to deliver fun and impactful tech programs that evolve with every learner.",
      image: "/organizations.webp",
      blurDataURL: "data:image/jpeg;base64,/9j...", // You'll get this from the optimize-images script
    },
  ]

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }, [slides.length])

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, theme.carousel.autoplaySpeed)

    return () => clearInterval(interval)
  }, [nextSlide])

  const highlightWords = (title) => {
    const wordsToHighlight = ["Tech", "Launchpad", "Grow", "Classroom", "Schools", "Early", "Innovation"]

    return title.split(" ").map((word, i) => {
      const shouldHighlight = wordsToHighlight.some((highlight) => word.includes(highlight))

      return shouldHighlight ? (
        <span key={i} className="text-amber-400 font-semibold" style={{ color: theme.colors.primary[500] }}>
          {word}{" "}
        </span>
      ) : (
        <span key={i}>{word} </span>
      )
    })
  }

  return (
    <section className="relative overflow-hidden bg-gray-100" style={{ margin: 0, padding: 0 }}>
      {/* Slides without transition */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 ${activeSlide === index ? "block" : "hidden"}`}
          style={{
            margin: 0,
            padding: 0,
          }}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            sizes="100vw"
            quality={85}
            className="object-cover"
            priority={index === 0}
            loading={index === 0 ? "eager" : "lazy"}
            placeholder="blur"
            blurDataURL={slide.blurDataURL}
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      ))}

      <div className="container relative z-10 py-20 md:py-32" style={{ margin: "0 auto" }}>
        <div className="max-w-2xl text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 font-poppins">
            {highlightWords(slides[activeSlide].title)}
          </h1>
          <p className="text-lg mb-8 font-poppins font-light">{slides[activeSlide].description}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              className="bg-amber-500 hover:bg-amber-600 text-white font-poppins font-medium"
              style={{ backgroundColor: theme.colors.primary[500] }}
            >
              Sign up
            </Button>
            <Button
              variant="outline"
              className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20 font-poppins font-medium"
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
            className={`h-2 rounded-full transition-all ${
              activeSlide === index ? "bg-amber-500 w-4" : "bg-white/50 w-2"
            }`}
            style={{
              backgroundColor: activeSlide === index ? theme.colors.primary[500] : "rgba(255, 255, 255, 0.5)",
              margin: "0 2px",
              padding: 0,
            }}
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
  )
}
