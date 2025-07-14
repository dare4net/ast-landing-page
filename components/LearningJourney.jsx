import { Card, CardContent } from "@/components/ui/card"
import { Rocket, Lightbulb, Code, ChevronRight } from "lucide-react"
import Link from "next/link"
import theme from "@/styles/theme"

export default function LearningJourney() {
  const journeySteps = [
    {
      icon: <Rocket className="h-6 w-6 text-amber-500" style={{ color: theme.colors.primary[500] }} />,
      stage: "Discover",
      title: "Exploration Stage",
      description:
        "Kids get exposed to a wide range of tech topics like coding, robotics, AI, design, and more. This stage is playful, hands-on, and all about discovery. It helps them build curiosity and confidence without pressure.",
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-amber-500" style={{ color: theme.colors.primary[500] }} />,
      stage: "Learn",
      title: "Focus Stage",
      description:
        "After exploring multiple areas, learners choose a direction that excites them most. We group related fields together into learning tracks, guiding them with structured challenges and real-world projects.",
    },
    {
      icon: <Code className="h-6 w-6 text-amber-500" style={{ color: theme.colors.primary[500] }} />,
      stage: "Create",
      title: "Specialization Stage",
      description:
        "At this point, learners go deep into specific areas such as Frontend Development, AI, Game Design, or Digital Art. They build projects, earn badges, and start creating at near-professional levels.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Learning Journey</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {journeySteps.map((step, index) => (
            <Card
              key={index}
              className="border-t-4 border-t-amber-500 hover:shadow-lg transition-shadow"
              style={{ borderTopColor: theme.colors.primary[500] }}
            >
              <CardContent className="pt-6">
                <div
                  className="rounded-full bg-amber-100 p-3 w-12 h-12 flex items-center justify-center mb-4"
                  style={{ backgroundColor: theme.colors.primary[100] }}
                >
                  {step.icon}
                </div>
                <h3
                  className="text-sm uppercase tracking-wider text-amber-500 mb-1"
                  style={{ color: theme.colors.primary[500] }}
                >
                  {step.stage}
                </h3>
                <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <Link
                  href="#"
                  className="inline-flex items-center text-amber-500 font-medium hover:text-amber-600"
                  style={{ color: theme.colors.primary[500] }}
                >
                  LEARN MORE <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
