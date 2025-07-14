"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Download, X } from "lucide-react"
import theme from "@/styles/theme"

export default function PwaInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [showInstallBanner, setShowInstallBanner] = useState(false)

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return

    try {
      // Check if the app is already installed
      const isAppInstalled = window.matchMedia?.("(display-mode: standalone)").matches || false

      if (isAppInstalled) {
        return // Don't show install prompt if already installed
      }

      // Check if the user has dismissed the banner recently
      const dismissedTime = localStorage.getItem("pwaInstallDismissed")
      if (dismissedTime && Date.now() - Number.parseInt(dismissedTime) < 24 * 60 * 60 * 1000) {
        return // Don't show if dismissed in the last 24 hours
      }

      const handleBeforeInstallPrompt = (e) => {
        // Prevent Chrome 67 and earlier from automatically showing the prompt
        e.preventDefault()
        // Stash the event so it can be triggered later
        setDeferredPrompt(e)
        // Show the install banner
        setShowInstallBanner(true)
      }

      window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt)

      return () => {
        window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
      }
    } catch (error) {
      console.error("Error in PwaInstall component:", error)
      return () => {}
    }
  }, [])

  const handleInstallClick = () => {
    if (!deferredPrompt) return

    try {
      // Show the install prompt
      deferredPrompt.prompt()

      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt")
        } else {
          console.log("User dismissed the install prompt")
        }
        // Clear the saved prompt since it can't be used again
        setDeferredPrompt(null)
        setShowInstallBanner(false)
      })
    } catch (error) {
      console.error("Error showing install prompt:", error)
      setShowInstallBanner(false)
    }
  }

  const dismissBanner = () => {
    setShowInstallBanner(false)
    // Store in localStorage to prevent showing again for some time
    try {
      localStorage.setItem("pwaInstallDismissed", Date.now().toString())
    } catch (error) {
      console.error("Error setting localStorage:", error)
    }
  }

  if (!showInstallBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 z-50 flex items-center justify-between">
      <div className="flex items-center">
        <div className="mr-4 rounded-full bg-amber-100 p-2" style={{ backgroundColor: theme.colors.primary[100] }}>
          <Download className="h-6 w-6" style={{ color: theme.colors.primary[500] }} />
        </div>
        <div>
          <h3 className="font-bold text-sm">Install After-school.tech</h3>
          <p className="text-xs text-gray-600">Add to home screen for the best experience</p>
        </div>
      </div>
      <div className="flex items-center">
        <Button
          className="mr-2 bg-amber-500 hover:bg-amber-600 text-white text-sm px-3 py-1 h-auto"
          style={{ backgroundColor: theme.colors.primary[500] }}
          onClick={handleInstallClick}
        >
          Install
        </Button>
        <button onClick={dismissBanner} className="p-1" aria-label="Dismiss">
          <X className="h-5 w-5 text-gray-500" />
        </button>
      </div>
    </div>
  )
}
