import { Monitor, Palette, Blocks, Smartphone, Bot, LayoutDashboard } from "lucide-react"
import theme from "@/styles/theme"

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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Platform Features</h2>
          <div
            className="w-24 h-1 bg-amber-500 mx-auto mb-6"
            style={{ backgroundColor: theme.colors.primary[500] }}
          ></div>
          <p className="text-gray-600">Powerful Tools, Simplified for Kids</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
              style={{
                borderRadius: theme.borderRadius.lg,
                background: pastelColors[index % pastelColors.length],
              }}
            >
              {feature.icon}
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
