import "./globals.css"
import { Poppins } from "next/font/google"
import ServiceWorkerRegistration from "@/components/ServiceWorkerRegistration"

// Configure Poppins font with multiple weights
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
})

export const metadata = {
  title: "After-school.tech - Discover, Learn & Create",
  description: "A modern platform for kids to learn technology skills after school",
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
    maximumScale: 1,
    userScalable: false,
  },
    generator: 'v0.dev'
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
        <meta name="description" content="A modern platform for kids to learn technology skills after school" />
        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://after-school.tech/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="After-school.tech - Discover, Learn & Create" />
        <meta property="og:description" content="A modern platform for kids to learn technology skills after school" />
        <meta property="og:image" content="/logo -sq.png" />
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://after-school.tech/" />
        <meta name="twitter:title" content="After-school.tech - Discover, Learn & Create" />
        <meta name="twitter:description" content="A modern platform for kids to learn technology skills after school" />
        <meta name="twitter:image" content="/logo -sq.png" />

        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/icon-192x192.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/icons/icon-152x152.png" />

        <link rel="icon" type="image/png" sizes="32x32" href="/icons/icon-72x72.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/icon-72x72.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/icons/icon-72x72.png" />
      </head>
      <body className={`${poppins.className} font-sans`}>
        {children}
        <ServiceWorkerRegistration />
      </body>
    </html>
  )
}
