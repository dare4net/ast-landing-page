import { Award, BadgeIcon as Certificate, Target } from "lucide-react"
import theme from "@/styles/theme"
import { motion } from "framer-motion"

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
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Gamified Learning – Featuring Badges & Certificates
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-amber-500 mx-auto mb-6"
            style={{ backgroundColor: theme.colors.primary[500] }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
          <motion.p 
            className="text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Because Every Win Deserves a High-Five. We reward effort and progress with digital badges and printable
            certificates. Watch your child light up with motivation as they unlock new skills!
          </motion.p>
        </motion.div>

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
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="text-center"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                show: { 
                  opacity: 1, 
                  scale: 1,
                  transition: {
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1]
                  }
                }
              }}
            >
              <motion.div
                className="rounded-full bg-amber-100 p-6 w-24 h-24 flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: theme.colors.primary[100] }}
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -10, 10, -10, 0],
                  transition: { duration: 0.5 }
                }}
              >
                {feature.icon}
              </motion.div>
              <motion.h3 
                className="text-xl font-bold mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {feature.title}
              </motion.h3>
              <motion.p 
                className="text-gray-600"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
