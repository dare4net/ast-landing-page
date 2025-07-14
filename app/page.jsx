import Header from "@/components/Header"
import HeroCarousel from "@/components/HeroCarousel"
import LearningJourney from "@/components/LearningJourney"
import GamifiedLearning from "@/components/GamifiedLearning"
import CallToAction from "@/components/CallToAction"
import PlatformFeatures from "@/components/PlatformFeatures"
import ParentsSection from "@/components/ParentsSection"
import TestimonialsCarousel from "@/components/TestimonialsCarousel"
import PartnersCarousel from "@/components/PartnersCarousel"
import EventsSection from "@/components/EventsSection"
import ContactSection from "@/components/ContactSection"
import NewsletterSection from "@/components/NewsletterSection"
import Footer from "@/components/Footer"
import PwaWrapper from "@/components/PwaWrapper"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroCarousel />
        <LearningJourney />
        <PlatformFeatures />
        <CallToAction />
        <ParentsSection />
        <GamifiedLearning />
        <TestimonialsCarousel />
        <EventsSection />
        <PartnersCarousel />
        <ContactSection />
        <NewsletterSection />
      </main>
      <Footer />
      <PwaWrapper />
    </div>
  )
}
