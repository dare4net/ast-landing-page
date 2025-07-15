export const metadata = {
  title: "After-school.tech - Discover, Learn & Create",
  description: "Afterschool.tech is a fun, gamified learning platform where kids aged 8+ explore coding, design, AI, animation, and more — all from any device, at their pace. Learn, earn badges, and level up your tech skills after school!",
  openGraph: {
    title: "After-school.tech - Discover, Learn & Create",
    description: "Afterschool.tech is a fun, gamified learning platform where kids aged 8+ explore coding, design, AI, animation, and more — all from any device, at their pace. Learn, earn badges, and level up your tech skills after school!",
    url: "https://after-school.tech/",
    type: "website",
    images: [
      {
        url: "https://after-school.tech/After%20School-web512x512.png",
        width: 1200,
        height: 630,
        alt: "After-school.tech Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "After-school.tech - Discover, Learn & Create",
    description: "Afterschool.tech is a fun, gamified learning platform where kids aged 8+ explore coding, design, AI, animation, and more — all from any device, at their pace. Learn, earn badges, and level up your tech skills after school!",
    images: ["https://after-school.tech/After%20School-web512x512.png"],
  },
};

export default function RootLayout({ children }) {
  return children;
}
