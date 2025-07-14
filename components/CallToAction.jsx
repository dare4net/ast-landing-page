import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import theme from "@/styles/theme"

export default function CallToAction() {
  return (
    <section id="partner" className="py-16 md:py-24 text-white" style={{ backgroundColor: theme.colors.primary[500] }}>
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Want to bring After-school.tech to your school/organization?
          </h2>
          <p className="mb-8">
            We partner with schools, after-school programs, and non-profits to provide licenses, onboarding support, and
            co-branded experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white hover:bg-gray-100" style={{ color: theme.colors.primary[500] }}>
              Contact Now
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/20">
              Learn More <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
