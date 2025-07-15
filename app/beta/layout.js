export const metadata = {
  title: "After-school.tech - Discover, Learn & Create",
  description: "Afterschool.tech is a fun, gamified learning platform where kids aged 8+ explore coding, design, AI, animation, and more — all from any device, at their pace. Learn, earn badges, and level up your tech skills after school!",
  openGraph: {
    title: "After-school.tech - Discover, Learn & Create",
    description: "Afterschool.tech is a fun, gamified learning platform where kids aged 8+ explore coding, design, AI, animation, and more — all from any device, at their pace. Learn, earn badges, and level up your tech skills after school!",
    url: "https://after-school.tech/beta",
    type: "website",
    images: [
      {
        url: "https://after-school.tech/Beta%20Testing%20-%20colored.webp",
        width: 1200,
        height: 630,
        alt: "After-school.tech Beta Testing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "After-school.tech - Discover, Learn & Create",
    description: "Afterschool.tech is a fun, gamified learning platform where kids aged 8+ explore coding, design, AI, animation, and more — all from any device, at their pace. Learn, earn badges, and level up your tech skills after school!",
    images: ["https://after-school.tech/Beta%20Testing%20-%20colored.webp"],
  },
};

export default function BetaLayout({ children }) {
  return children;
}
