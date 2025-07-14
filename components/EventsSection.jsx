import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import theme from "@/styles/theme"

export default function EventsSection() {
  const events = [
    {
      image: "/AST atp poster.png",
      date: "Upcoming!",
      title: "Accelerator Tech Program",
      description:
        "A fast-paced program designed to accelerate learning in specific tech areas. Perfect for kids who want to dive deeper into their favorite subjects.",
    },
    {
      image: "/Beta Testing - colored.png",
      date: "20 Jul, 2025",
      title: "AST Beta Testing Event",
      description:
        "Join us for the AST Beta Testing Event where everyone can participate in testing new features and providing feedback to shape the future of After-school.tech.",
    },
    {
      image: "/AST Logo Reveal.png",
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

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] relative">
                <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
              </div>
              <CardContent className="pt-6">
                <div
                  className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm mb-4"
                  style={{
                    backgroundColor: theme.colors.primary[100],
                    color: theme.colors.primary[800],
                  }}
                >
                  {event.date}
                </div>
                <h3 className="text-xl font-bold mb-2">
                  <Link href="#" className="hover:text-amber-500 transition-colors" style={{ color: "inherit" }}>
                    {event.title}
                  </Link>
                </h3>
                <p className="text-gray-600">{event.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
