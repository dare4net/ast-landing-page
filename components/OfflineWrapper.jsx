"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"

// Dynamically import with no SSR
const OfflineNotification = dynamic(() => import("./OfflineNotification"), { ssr: false })

export default function OfflineWrapper() {
  const [isBrowser, setIsBrowser] = useState(false)

  useEffect(() => {
    setIsBrowser(true)
  }, [])

  // Only render on the client side
  if (!isBrowser) return null

  return <OfflineNotification />
}
