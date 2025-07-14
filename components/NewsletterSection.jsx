import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import theme from "@/styles/theme"

export default function NewsletterSection() {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl font-bold mb-2">Sign up for newsletter</h3>
            <p className="text-gray-600">
              Be the first to get informed, get early access to events, and receive exciting updates for your tech-savvy
              kids. Stay Informed.
            </p>
          </div>
          <div>
            <form className="flex gap-2">
              <Input type="email" placeholder="Your email address" className="flex-1" />
              <Button
                className="bg-amber-500 hover:bg-amber-600 text-white"
                style={{ backgroundColor: theme.colors.primary[500] }}
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
