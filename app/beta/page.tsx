"use client"



import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'
import type { HTMLMotionProps } from 'framer-motion'
import type { DetailedHTMLProps, HTMLAttributes } from 'react'
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useToast, Toaster } from '@/components/ui/use-toast'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Loader2 } from 'lucide-react'
const API_URL = process.env.NEXT_PUBLIC_API_URL

// API functions for beta signups
async function createBetaSignup(data: FormData) {
  const response = await fetch(`${API_URL}/beta/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.error || 'Something went wrong')
  }

  return response.json()
}

async function getSpotCount() {
  const response = await fetch(`${API_URL}/beta/spots`)
  if (!response.ok) {
    throw new Error('Failed to fetch remaining spots')
  }
  return response.json()
}

interface FormData {
  name: string
  email: string
}

const STORAGE_KEY = 'beta_form_data'
const TOTAL_SPOTS = 200

type MotionDivProps = HTMLMotionProps<"div"> & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const MotionDiv = motion.div as React.FC<MotionDivProps>

interface ErrorAnimationProps {
  message?: string;
}

const ErrorAnimation: React.FC<ErrorAnimationProps> = ({ message }) => {
  if (!message) return null;
  
  return (
    <MotionDiv
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      className="overflow-hidden"
    >
      <p className="text-sm text-destructive">{message}</p>
    </MotionDiv>
  );
}

export default function BetaPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [spotsLeft, setSpotsLeft] = useState(TOTAL_SPOTS)

  const { toast } = useToast()
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<FormData>()
  
  const progress = ((TOTAL_SPOTS - spotsLeft) / TOTAL_SPOTS) * 100

  // Load saved form data
  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY)
    if (savedData) {
      const parsedData = JSON.parse(savedData) as FormData
      Object.entries(parsedData).forEach(([key, value]) => {
        setValue(key as keyof FormData, value as string)
      })
    }
  }, [setValue])

  // Fetch initial spot count
  useEffect(() => {
    fetch(`${API_URL}/beta/spots`)
      .then(res => res.json())
      .then(data => {
        if (data.spotsTaken !== undefined) {
          setSpotsLeft(200 - data.spotsTaken)
        }
      })
      .catch(error => {
        console.error('Failed to fetch spot count:', error)
      })
  }, [])

  const handleInputChange = () => {
    const formEl = document.querySelector('form')
    if (formEl) {
      const formData = {
        name: (formEl.querySelector('input[name="name"]') as HTMLInputElement)?.value || '',
        email: (formEl.querySelector('input[name="email"]') as HTMLInputElement)?.value || '',
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
    }
  }

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch(`${API_URL}/beta/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()
      
      if (!response.ok) {
        throw new Error(result.error || 'Failed to register')
      }

      if (result.spotsLeft !== undefined) {
        setSpotsLeft(result.spotsLeft)
      }

      localStorage.removeItem(STORAGE_KEY)
      toast({
        title: "Spot Reserved!",
        description: "We'll be in touch soon with next steps. Redirecting in 5 seconds...",
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
      <main className="flex-1 bg-gradient-to-b from-background to-muted p-8 flex items-center justify-center">
        <MotionDiv 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          className="w-full max-w-lg"
        >
          <Card>
            <CardHeader>
              <MotionDiv
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="space-y-2"
              >
                <CardTitle className="text-2xl">Reserve Your Spot</CardTitle>
                <CardDescription>
                  Join our exclusive beta testing program. Only {spotsLeft} spots remaining!
                </CardDescription>
              </MotionDiv>
              <MotionDiv
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.4, ease: "easeOut" }}
                className="mt-4"
              >
                <Progress value={progress} className="h-2" />
              </MotionDiv>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} onChange={handleInputChange} className="space-y-4">
                <MotionDiv
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="space-y-1"
                >
                  <Input
                    placeholder="Full Name"
                    {...register('name', { required: 'Name is required' })}
                  />
                  <AnimatePresence mode="wait">
                    {errors.name && (
                      <ErrorAnimation message={errors.name.message} />
                    )}
                  </AnimatePresence>
                </MotionDiv>
                
                <MotionDiv
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="space-y-1"
                >
                  <Input
                    type="email"
                    placeholder="Email Address"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                  />
                  <AnimatePresence mode="wait">
                    {errors.email && (
                      <ErrorAnimation message={errors.email.message} />
                    )}
                  </AnimatePresence>
                </MotionDiv>

                <MotionDiv
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isSubmitting || spotsLeft === 0}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Reserving...
                      </>
                    ) : spotsLeft === 0 ? (
                      'All Spots Taken'
                    ) : (
                      'Reserve My Spot'
                    )}
                  </Button>
                </MotionDiv>
              </form>
            </CardContent>
          </Card>
        </MotionDiv>
      </main>
      <Footer />
      <Toaster />
    </div>
  )
}
