"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"

// Dynamically import PWA components with no SSR
const PwaInstall = dynamic(() => import("@/components/PwaInstall"), { ssr: false })

export default function PwaWrapper() {
  const [isBrowser, setIsBrowser] = useState(false)

  useEffect(() => {
    setIsBrowser(true)
  }, [])

  // Only render on the client side
  if (!isBrowser) return null

  return <PwaInstall />
}
