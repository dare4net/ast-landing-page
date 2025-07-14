import { Monitor, Palette, Blocks, Smartphone, Bot, LayoutDashboard } from "lucide-react"
import theme from "@/styles/theme"
import { motion } from "framer-motion"

export default function PlatformFeatures() {
  const features = [
    {
      icon: <Monitor className="h-10 w-10 text-amber-500" style={{ color: theme.colors.primary[500] }} />,
      title: "In-browser code editor",
      description:
        "A simplified coding environment that makes it easy for kids to write and test code without complex setups.",
    },
    {
      icon: <Palette className="h-10 w-10 text-amber-500" style={{ color: theme.colors.primary[500] }} />,
      title: "Design Canvas",
      description:
        "An intuitive digital canvas where kids can create artwork, designs, and visual projects with easy-to-use tools.",
    },
    {
      icon: <Blocks className="h-10 w-10 text-amber-500" style={{ color: theme.colors.primary[500] }} />,
      title: "Block-based coding Interface",
      description:
        "Drag-and-drop coding blocks that teach programming concepts without the frustration of syntax errors.",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-amber-500" style={{ color: theme.colors.primary[500] }} />,
      title: "Mobile Friendly UI",
      description:
        "Access learning materials and complete projects from any device with our responsive, mobile-friendly interface.",
    },
    {
      icon: <Bot className="h-10 w-10 text-amber-500" style={{ color: theme.colors.primary[500] }} />,
      title: "Interactive Projects",
      description:
        "Engaging, hands-on projects that make learning fun and help concepts stick through practical application.",
    },
    {
      icon: <LayoutDashboard className="h-10 w-10 text-amber-500" style={{ color: theme.colors.primary[500] }} />,
      title: "Progress Dashboard",
      description:
        "Track learning progress, completed projects, and earned badges all in one easy-to-navigate dashboard.",
    },
  ]

  const pastelColors = [
    '#FDF6E3', // light yellow
    '#E3F6FD', // light blue
    '#FDE3F6', // light pink
    '#E3FDEB', // light green
    '#F6E3FD', // light purple
    '#FDF3E3', // light orange
  ]

  return (
    <section id="features" className="py-16 md:py-24 bg-white">
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
            Platform Features
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
            Powerful Tools, Simplified for Kids
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
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
              className="p-6 border rounded-lg"
              style={{
                borderRadius: theme.borderRadius.lg,
                background: pastelColors[index % pastelColors.length],
              }}
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.95 },
                show: { 
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1]
                  }
                }
              }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {feature.icon}
              </motion.div>
              <motion.h3 
                className="text-xl font-bold mb-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {feature.title}
              </motion.h3>
              <motion.p 
                className="text-gray-600"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
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
