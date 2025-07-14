"use client"

import { useState, useEffect } from "react"
import { WifiOff } from "lucide-react"
import theme from "@/styles/theme"

export default function OfflineNotification() {
  const [isOffline, setIsOffline] = useState(false)

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined" || typeof navigator === "undefined") return

    try {
      const handleOnline = () => setIsOffline(false)
      const handleOffline = () => setIsOffline(true)

      // Check initial status
      setIsOffline(!navigator.onLine)

      // Add event listeners
      window.addEventListener("online", handleOnline)
      window.addEventListener("offline", handleOffline)

      return () => {
        window.removeEventListener("online", handleOnline)
        window.removeEventListener("offline", handleOffline)
      }
    } catch (error) {
      console.error("Error in OfflineNotification component:", error)
      return () => {}
    }
  }, [])

  if (!isOffline) return null

  return (
    <div
      className="fixed top-16 left-0 right-0 bg-amber-100 text-amber-800 p-2 text-center z-50 flex items-center justify-center"
      style={{ backgroundColor: theme.colors.primary[100], color: theme.colors.primary[800] }}
    >
      <WifiOff className="h-4 w-4 mr-2" />
      <span className="text-sm">You are currently offline. Some features may be limited.</span>
    </div>
  )
}
