import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import theme from "@/styles/theme"
import { motion } from "framer-motion"

export default function EventsSection() {
  const events = [
    {
      image: "/AST atp poster.webp",
      date: "Upcoming!",
      title: "Accelerator Tech Program",
      description:
        "A fast-paced program designed to accelerate learning in specific tech areas. Perfect for kids who want to dive deeper into their favorite subjects.",
    },
    {
      image: "/Beta Testing - colored.webp",
      date: "20 Jul, 2025",
      title: "AST Beta Testing Event",
      description:
        "Join us for the AST Beta Testing Event where everyone can participate in testing new features and providing feedback to shape the future of After-school.tech.",
    },
    {
      image: "/AST Logo Reveal.webp",
      date: "21 June, 2025",
      title: "Logo Reveal - a deep dive into AST",
      description:
        "Discover the story behind After-school.tech's logo and what it represents for our mission to empower kids through technology.",
    },
  ]

  return (
    <section id="events" className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Keep up with Our Most Recent Tech Events</h2>
          <div
            className="w-24 h-1 bg-amber-500 mx-auto mb-6"
            style={{ backgroundColor: theme.colors.primary[500] }}
          ></div>
          <p className="text-gray-600">Register Promptly for Upcoming Events</p>
        </div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {events.map((event, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1]
                  }
                }
              }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <motion.div 
                  className="aspect-[4/3] relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image 
                    src={event.image || "/placeholder.svg"} 
                    alt={event.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 33vw"
                    quality={85}
                    className="object-cover"
                    loading="lazy"
                  />
                </motion.div>
                <CardContent className="pt-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm mb-4"
                    style={{
                      backgroundColor: theme.colors.primary[100],
                      color: theme.colors.primary[800],
                    }}
                  >
                    {event.date}
                  </motion.div>
                  <motion.h3 
                    className="text-xl font-bold mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Link href="#" className="hover:text-amber-500 transition-colors" style={{ color: "inherit" }}>
                      {event.title}
                    </Link>
                  </motion.h3>
                  <motion.p 
                    className="text-gray-600"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {event.description}
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
          
        </motion.div>
        
      </div>
    </section>
  )
}
