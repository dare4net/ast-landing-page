import Link from "next/link"
import { Button } from "@/components/ui/button"
import { WifiOff } from "lucide-react"

export default function OfflinePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
      <div className="rounded-full bg-amber-100 p-6 w-24 h-24 flex items-center justify-center mx-auto mb-6">
        <WifiOff className="h-12 w-12 text-amber-500" />
      </div>
      <h1 className="text-3xl md:text-4xl font-bold mb-4">You're Offline</h1>
      <p className="text-lg mb-8 max-w-md">
        It looks like you're not connected to the internet. Some features may be unavailable until you reconnect.
      </p>
      <Button className="bg-amber-500 hover:bg-amber-600 text-white">Try Again</Button>
      <div className="mt-8">
        <p className="text-sm text-gray-500 mb-2">You can still access:</p>
        <ul className="text-sm text-gray-500">
          <li>Previously visited pages (if cached)</li>
          <li>
            <Link href="/" className="underline hover:text-amber-500">
              Home page
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
