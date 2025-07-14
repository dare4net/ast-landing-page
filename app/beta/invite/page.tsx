'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/components/ui/use-toast'
import { motion, AnimatePresence } from 'framer-motion'
import { createBetaInvite } from '@/lib/mock-api'
import { Loader2 } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface FormData {
  name: string
  email: string
  course: string
  experience: string
  goals: string
  availability: string
}

const STORAGE_KEY = 'beta_invite_form_data'

const courses = [
  {
    id: 'web-dev',
    name: 'Web Development',
    description: 'Learn HTML, CSS, JavaScript, and modern frameworks'
  },
  {
    id: 'mobile-dev',
    name: 'Mobile Development',
    description: 'Build native mobile apps for iOS and Android'
  },
  {
    id: 'data-science',
    name: 'Data Science',
    description: 'Master data analysis, visualization, and machine learning'
  }
]

const experienceLevels = [
  { id: 'beginner', label: 'Beginner' },
  { id: 'intermediate', label: 'Intermediate' },
  { id: 'advanced', label: 'Advanced' }
]

const availabilityOptions = [
  { id: 'full-time', label: '40+ hours/week' },
  { id: 'part-time', label: '20-40 hours/week' },
  { id: 'flexible', label: '10-20 hours/week' }
]

export default function BetaInvitePage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm<FormData>()
  
  // Load saved form data
  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY)
    if (savedData) {
      const parsedData = JSON.parse(savedData) as FormData
      Object.entries(parsedData).forEach(([key, value]) => {
        setValue(key as keyof FormData, value)
      })
    }
  }, [setValue])

  // Save form data as user types
  const handleInputChange = () => {
    const formData = {
      name: watch('name') || '',
      email: watch('email') || '',
      course: watch('course') || '',
      experience: watch('experience') || '',
      goals: watch('goals') || '',
      availability: watch('availability') || ''
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
  }
  
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      await createBetaInvite(data)
      localStorage.removeItem(STORAGE_KEY) // Clear saved data after successful submission
      toast({
        title: "Application Received!",
        description: "We'll review your application and get back to you soon.",
      })
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

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted p-8">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial="hidden"
          animate="show"
          variants={container}
        >
          <Card>
            <CardHeader>
              <motion.div variants={item} className="space-y-2">
                <CardTitle>Beta Testing Application</CardTitle>
                <CardDescription>
                  Help us shape the future of tech education. Tell us about yourself and your learning goals.
                </CardDescription>
              </motion.div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <motion.div variants={item} className="space-y-4">
                  <div className="space-y-1">
                    <Input
                      placeholder="Full Name"
                      {...register('name', { required: 'Name is required' })}
                      onChange={handleInputChange}
                    />
                    <AnimatePresence mode="wait">
                      {errors.name && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="text-sm text-destructive">{errors.name.message}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  <div className="space-y-1">
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
                      onChange={handleInputChange}
                    />
                    <AnimatePresence mode="wait">
                      {errors.email && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="text-sm text-destructive">{errors.email.message}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="space-y-1">
                    <Select 
                      value={watch('course')}
                      onValueChange={(value) => {
                        setValue('course', value)
                        handleInputChange()
                      }}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a course" />
                      </SelectTrigger>
                      <SelectContent>
                        {courses.map((course) => (
                          <SelectItem key={course.id} value={course.id}>
                            <div className="space-y-1">
                              <div className="font-medium">{course.name}</div>
                              <p className="text-sm text-muted-foreground">{course.description}</p>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-1">
                    <Select 
                      value={watch('experience')}
                      onValueChange={(value) => {
                        setValue('experience', value)
                        handleInputChange()
                      }}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Your experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        {experienceLevels.map((level) => (
                          <SelectItem key={level.id} value={level.id}>
                            {level.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-1">
                    <Textarea
                      placeholder="What are your learning goals?"
                      className="min-h-[100px]"
                      {...register('goals', { required: 'Please share your goals' })}
                      onChange={handleInputChange}
                    />
                    <AnimatePresence mode="wait">
                      {errors.goals && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="text-sm text-destructive">{errors.goals.message}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="space-y-1">
                    <Select 
                      value={watch('availability')}
                      onValueChange={(value) => {
                        setValue('availability', value)
                        handleInputChange()
                      }}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Your weekly availability" />
                      </SelectTrigger>
                      <SelectContent>
                        {availabilityOptions.map((option) => (
                          <SelectItem key={option.id} value={option.id}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </motion.div>

                <motion.div variants={item}>
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      'Submit Application'
                    )}
                  </Button>
                </motion.div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
