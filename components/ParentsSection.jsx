import Image from "next/image"
import { ChevronRight, Play } from "lucide-react"
import theme from "@/styles/theme"

export default function ParentsSection() {
  const parentFeatures = [
    "Progress Dashboard",
    "Weekly Performance Report",
    "Parental Notifications",
    "Certificate Tracker",
    "Secure Parent Portal",
    "Live Support Access",
  ]

  // Split features into two columns
  const leftFeatures = parentFeatures.slice(0, Math.ceil(parentFeatures.length / 2))
  const rightFeatures = parentFeatures.slice(Math.ceil(parentFeatures.length / 2))

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Built with the parents in mind</h3>
            <p className="text-gray-600 mb-4">
              After-school.tech is designed not only for kids to explore and grow in the world of technology but also to
              keep parents actively informed and involved in their child's learning journey.
            </p>
            <p className="text-gray-600 mb-6">
              We makes it easy for parents to support, guide, and celebrate their child's tech development.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <ul className="space-y-2">
                  {leftFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <ChevronRight
                        className="h-4 w-4 text-amber-500 mr-2"
                        style={{ color: theme.colors.primary[500] }}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  {rightFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <ChevronRight
                        className="h-4 w-4 text-amber-500 mr-2"
                        style={{ color: theme.colors.primary[500] }}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden relative">
              <Image
                src="/AST Feature Tiles 2.webp"
                alt="Video thumbnail"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
                className="object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  className="h-16 w-16 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: theme.colors.primary[500] }}
                >
                  <Play className="h-8 w-8 text-white" fill="white" />
                </button>
              </div>
            </div>

            {/* Animation Waves */}
            <div className="absolute -inset-4 -z-10 opacity-70">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="absolute inset-0 border-2 rounded-lg animate-ping"
                  style={{
                    borderColor: theme.colors.primary[500],
                    animationDuration: "3s",
                    animationDelay: `${i}s`,
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
