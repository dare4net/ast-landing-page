'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'
import { Mail } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import type { HTMLMotionProps } from 'framer-motion'
import type { DetailedHTMLProps, HTMLAttributes } from 'react'
import Header from "@/components/Header"
import Footer from "@/components/Footer"

type MotionDivProps = HTMLMotionProps<"div"> & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
type MotionHeadingProps = HTMLMotionProps<"h1"> & DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
type MotionSpanProps = HTMLMotionProps<"span"> & DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>

const MotionDiv = motion.div as React.FC<MotionDivProps>
const MotionH1 = motion.h1 as React.FC<MotionHeadingProps>
const MotionSpan = motion.span as React.FC<MotionSpanProps>

interface FormData {
  email: string;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function addToWaitlist(email: string) {
  const response = await fetch(`${API_URL}/waitlist`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Something went wrong');
  }
  return response.json();
}

export default function ComingSoonPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  const calculateTimeLeft = () => {
    const now = new Date().getTime()
    const targetDate = new Date().getTime() + (1000 * 365 * 24 * 60 * 60 * 1000) // 1000 years
    const difference = targetDate - now

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  // Update timer every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const onSubmit = async (data: { email: string }) => {
    setIsSubmitting(true)
    try {
      await addToWaitlist(data.email)
      toast({
        title: "Success!",
        description: "We'll notify you when we launch! Redirecting in 5 seconds...",
        duration: 5000
      })
      reset()
      setTimeout(() => {
        window.location.href = 'https://after-school.tech'
      }, 5000)
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-gradient-to-b from-background to-muted">
        <MotionDiv 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="flex min-h-full flex-col items-center justify-center p-8"
        >
      <div className="text-center space-y-8 max-w-2xl mx-auto">
        <MotionH1 
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Something Amazing is Coming
        </MotionH1>
        
        <MotionDiv 
          initial={{ scale: 0.9, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-4 gap-4 text-center my-8"
        >
          {[
            { value: timeLeft.days, label: 'Days' },
            { value: timeLeft.hours, label: 'Hours' },
            { value: timeLeft.minutes, label: 'Minutes' },
            { value: timeLeft.seconds, label: 'Seconds' }
          ].map((item, index) => (
            <MotionDiv
              key={item.label}
              className="bg-background/50 backdrop-blur-sm p-4 rounded-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              <AnimatePresence mode="wait">
                <MotionSpan
                  key={item.value}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  className="text-3xl font-bold block"
                >
                  {item.value}
                </MotionSpan>
              </AnimatePresence>
              <p className="text-sm text-muted-foreground">{item.label}</p>
            </MotionDiv>
          ))}
        </MotionDiv>

        <div className="max-w-md mx-auto w-full space-y-4">
          <p className="text-lg text-muted-foreground">
            Be the first to know when we launch. Join our waitlist!
          </p>
          
          <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2">
            <div className="flex-1">
              <Input
                type="email"
                placeholder="Enter your email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                className="w-full"
              />
              {errors.email && (
                <AnimatePresence mode="wait">
                  <MotionDiv
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                  </MotionDiv>
                </AnimatePresence>
              )}
            </div>
            <Button type="submit" disabled={isSubmitting}>
              <Mail className="mr-2 h-4 w-4" />
              Notify Me
            </Button>
          </form>
        </div>
      </div>
    </MotionDiv>
      </main>
      <Footer />
    </div>
  )
}
