"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import theme from "@/styles/theme"

export default function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const carouselRef = useRef(null)

  // Complete testimonials from the original HTML
  const testimonials = [
    {
      title: "I've been looking for something like this!",
      content:
        "As a parent, I've always wanted my child to learn tech in a fun, structured way. What After-school.tech is building feels like the perfect blend of play and purpose. I can't wait to see it launch!",
      author: "Parent of 8-year-old",
    },
    {
      title: "This is the kind of innovation our kids need!",
      content:
        "I'm genuinely excited about this platform. Tech is the future, and introducing kids to it early — in the right way — is so important. After-school.tech seems like it's solving that beautifully.",
      author: "Parent of 8-year-old",
    },
    {
      title: "So glad I found out early",
      content:
        "I love the mission behind After-school.tech. I signed up for updates right away and have been telling other parents. Can't wait for the full launch!",
      author: "Parent of 8-year-old",
    },
    {
      title: "We're ready to Discover, Learn, and Create!",
      content:
        "I showed my daughter the teaser and she lit up! If the actual platform is anything like what they're promising, this is going to be huge for curious, creative kids.",
      author: "Parent of 8-year-old",
    },
    {
      title: "Finally, something for our kids",
      content:
        "Too many learning platforms aren't built with children in mind. What I've seen from After-school.tech already shows they understand how kids learn. I'm really hopeful!",
      author: "Parent of 8-year-old",
    },
    {
      title: "This is going to raise a new generation of builders",
      content:
        "We need more platforms like After-school.tech — teaching kids to think, build, and solve real problems from a young age. I'm definitely following this launch closely.",
      author: "Parent of 8-year-old",
    },
  ]

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const goToTestimonial = (index) => {
    setActiveIndex(index)
  }

  // Auto-scroll functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextTestimonial()
      }, theme.carousel.autoplaySpeed)

      return () => clearInterval(interval)
    }
  }, [isPaused])

  // Pause on hover
  const handleMouseEnter = () => setIsPaused(true)
  const handleMouseLeave = () => setIsPaused(false)

  // Calculate visible testimonials (3 on desktop, 1 on mobile)
  const getVisibleTestimonials = () => {
    const result = []
    const totalItems = testimonials.length

    // Always include the active index
    result.push(activeIndex)

    // Add next items (wrapping around if needed)
    result.push((activeIndex + 1) % totalItems)
    result.push((activeIndex + 2) % totalItems)

    return result
  }

  const visibleIndices = getVisibleTestimonials()

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Parents & Kids Love After-school.tech</h2>
          <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: theme.colors.primary[500] }}></div>
          <p className="text-gray-600">Here is what people have to say about our amazing platform</p>
        </div>

        <div
          className="carousel-container relative mx-auto max-w-full"
          ref={carouselRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Glassmorphic overlay */}
          <div
            className="absolute inset-0 z-20 flex items-center justify-center w-full h-full"
            style={{
              background: "rgba(255,255,255,0.25)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              borderRadius: "1.5rem",
              border: "1px solid rgba(255,255,255,0.3)",
              boxShadow: "0 4px 32px 0 rgba(31, 38, 135, 0.15)",
            }}
          >
            <div
              className="px-6 py-3 bg-white rounded-xl shadow font-bold text-lg md:text-2xl text-gray-900"
              style={{ minWidth: "180px", textAlign: "center" }}
            >
              Coming Soon
            </div>
          </div>

          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${activeIndex * (100 / 3)}%)`,
              transitionDuration: `${theme.carousel.transitionDuration}ms`,
              margin: 0,
              padding: 0,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`w-full md:w-1/3 flex-shrink-0 p-4 transition-opacity duration-500 ${
                  visibleIndices.includes(index) ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  transitionDuration: `${theme.carousel.transitionDuration}ms`,
                  padding: "1rem",
                  margin: 0,
                }}
              >
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h5 className="font-bold text-lg mb-3">{testimonial.title}</h5>
                    <p className="italic text-gray-600 mb-4">"{testimonial.content}"</p>
                    <p className="font-bold">— {testimonial.author}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`h-2 rounded-full transition-all ${activeIndex === index ? "w-6" : "w-2 bg-gray-300"}`}
                style={{
                  backgroundColor: activeIndex === index ? theme.colors.primary[500] : theme.colors.gray[300],
                  margin: 0,
                  padding: 0,
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
