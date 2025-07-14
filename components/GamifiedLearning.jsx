import { Award, BadgeIcon as Certificate, Target } from "lucide-react"
import theme from "@/styles/theme"

export default function GamifiedLearning() {
  const features = [
    {
      icon: <Award className="h-12 w-12 text-amber-500" style={{ color: theme.colors.primary[500] }} />,
      title: "Reward Badges",
      description:
        "There are numerous unique badges to be won based on specific achievements and completed challenges.",
    },
    {
      icon: <Certificate className="h-12 w-12 text-amber-500" style={{ color: theme.colors.primary[500] }} />,
      title: "Certificates of Completion",
      description: "Earn official certificates to mark the successful end of each stage.",
    },
    {
      icon: <Target className="h-12 w-12 text-amber-500" style={{ color: theme.colors.primary[500] }} />,
      title: "Milestone Celebration & Digital Awards",
      description: "Celebrate progress with fun digital awards and exciting milestone recognition.",
    },
  ]

  return (
    <section id="badges" className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Gamified Learning – Featuring Badges & Certificates</h2>
          <div
            className="w-24 h-1 bg-amber-500 mx-auto mb-6"
            style={{ backgroundColor: theme.colors.primary[500] }}
          ></div>
          <p className="text-gray-600">
            Because Every Win Deserves a High-Five. We reward effort and progress with digital badges and printable
            certificates. Watch your child light up with motivation as they unlock new skills!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div
                className="rounded-full bg-amber-100 p-6 w-24 h-24 flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: theme.colors.primary[100] }}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
