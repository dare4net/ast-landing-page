import "./globals.css"
import { Poppins } from "next/font/google"
import ServiceWorkerRegistration from "@/components/ServiceWorkerRegistration"
import GoogleAnalytics from "@/components/GoogleAnalytics"

// Configure Poppins font with multiple weights
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
})

export const metadata = {
  metadataBase: new URL('https://after-school.tech'),
  title: {
    default: "After-school.tech - Discover, Learn & Create",
    template: "%s | After-school.tech"
  },
  description: "Afterschool.tech is a fun, gamified learning platform where kids aged 8+ explore coding, design, AI, animation, and more — all from any device, at their pace. Learn, earn badges, and level up your tech skills after school!",
  keywords: [
    "after school tech",
    "kids coding",
    "tech education",
    "children programming",
    "learn to code",
    "kids technology",
    "STEM education",
    "online learning"
  ],
  manifest: "/manifest.json",
  themeColor: "#f5aa31",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "After-school.tech",
  },
  formatDetection: {
    telephone: false,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: "g-Q4YESWXQTM", // Replace this with your actual verification code from Google Search Console
  },
  alternates: {
    canonical: "https://after-school.tech"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://after-school.tech',
    siteName: 'After-school.tech',
    title: 'After-school.tech - Discover, Learn & Create',
    description: 'Afterschool.tech is a fun, gamified learning platform where kids aged 8+ explore coding, design, AI, animation, and more — all from any device, at their pace.',
    images: [
      {
        url: 'https://after-school.tech/After%20School-web512x512.png',
        width: 512,
        height: 512,
        alt: 'After-school.tech Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'After-school.tech - Discover, Learn & Create',
    description: 'Afterschool.tech is a fun, gamified learning platform where kids aged 8+ explore coding, design, AI, animation, and more — all from any device, at their pace.',
    images: ['https://after-school.tech/After%20School-web512x512.png'],
    creator: '@afterschooltech'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <meta name="application-name" content="After-school.tech" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="After-school.tech" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#f5aa31" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#f5aa31" />

        {/* OpenGraph & Social Meta Tags */}
        <title>After-school.tech - Discover, Learn & Create</title>
        <meta name="description" content="Afterschool.tech is a fun, gamified learning platform where kids aged 8+ explore coding, design, AI, animation, and more — all from any device, at their pace. Learn, earn badges, and level up your tech skills after school!" />
        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://after-school.tech/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="AST - Discover, Learn & Create" />
        <meta property="og:description" content="Afterschool.tech is a fun, gamified learning platform where kids aged 8+ explore coding, design, AI, animation, and more — all from any device, at their pace. Learn, earn badges, and level up your tech skills after school!" />
        <meta property="og:image" content="https://after-school.tech/logo%20-sq.png" />
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://after-school.tech/" />
        <meta name="twitter:title" content="AST - Discover, Learn & Create" />
        <meta name="twitter:description" content="Afterschool.tech is a fun, gamified learning platform where kids aged 8+ explore coding, design, AI, animation, and more — all from any device, at their pace. Learn, earn badges, and level up your tech skills after school!" />
        <meta name="twitter:image" content="https://after-school.tech/logo%20-sq.png" />

        <link rel="apple-touch-icon" href="/After School-web512x512.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/After School-web512x512.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/After School-web512x512.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/After School-web512x512.png" />

        <link rel="icon" type="image/png" sizes="512x512" href="/After School-web512x512.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/After School-web512x512.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/After School-web512x512.png" />
      </head>
      <body className={`${poppins.className} font-sans`}>
        <GoogleAnalytics />
        {children}
        <ServiceWorkerRegistration />
      </body>
    </html>
  )
}
