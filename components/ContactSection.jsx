import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import theme from "@/styles/theme"

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">We Are Always Ready to Hear from You</h2>
          <div
            className="w-24 h-1 bg-amber-500 mx-auto mb-6"
            style={{ backgroundColor: theme.colors.primary[500] }}
          ></div>
          <p className="text-gray-600">
            Send us a message using the form below and we'll send a personalized response to your mail
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Input placeholder="Name" />
              </div>
              <div>
                <Input type="email" placeholder="Email" />
              </div>
            </div>
            <div>
              <Input placeholder="Phone" />
            </div>
            <div>
              <Textarea placeholder="Write Your Message Here....." className="min-h-[120px]" />
            </div>
            <div className="flex items-center gap-4">
              <Button
                className="bg-amber-500 hover:bg-amber-600 text-white"
                style={{ backgroundColor: theme.colors.primary[500] }}
              >
                Send a Message
              </Button>
              <p className="text-sm text-gray-500">(We will reply as soon as the message is received)</p>
            </div>
          </form>

          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src="/contact-me.jpeg"
              alt="Contact"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
