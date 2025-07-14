'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
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

const AnimatedSection = ({ children, delay = 0 }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    once: true,
    margin: "0px 0px -20% 0px" // Triggers a bit before element comes into view
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay
      }}
    >
      {children}
    </motion.div>
  )
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Header />
      </motion.div>

      <main className="flex-1">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <HeroCarousel />
        </motion.div>

        <AnimatedSection delay={0.1}>
          <LearningJourney />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <PlatformFeatures />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <CallToAction />
          </motion.div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <ParentsSection />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <GamifiedLearning />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <TestimonialsCarousel />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <EventsSection />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <PartnersCarousel />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <ContactSection />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <NewsletterSection />
        </AnimatedSection>
      </main>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Footer />
      </motion.div>

      <PwaWrapper />
    </div>
  )
}
