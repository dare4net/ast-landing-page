'use client'



import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast, Toaster } from '@/components/ui/use-toast'
import { motion, type HTMLMotionProps, type Variants, AnimatePresence } from 'framer-motion'
import type { DetailedHTMLProps, HTMLAttributes } from 'react'
import { Loader2 } from 'lucide-react'
import Header from "@/components/Header"
import Footer from "@/components/Footer"
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
  otherCourse?: string
  favColor?: string
  nickname?: string
  favFood?: string
}

const STORAGE_KEY = 'beta_invite_form_data'

const courses = [
  { id: 'web-dev', name: 'Web Development' },
  { id: 'mobile-dev', name: 'Mobile Development' },
  { id: 'data-science', name: 'Data Science' },
  { id: 'others', name: 'Others' }
]

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item: Variants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
}

type MotionDivProps = HTMLMotionProps<"div"> & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const MotionDiv = motion.div as React.FC<MotionDivProps>

interface AnimatedElementProps extends MotionDivProps {
  children: React.ReactNode;
  variants?: Variants;
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({ children, variants, ...props }) => (
  <MotionDiv
    initial="hidden"
    animate="show"
    variants={variants}
    {...props}
  >
    {children}
  </MotionDiv>
)

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

const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function createBetaInvite(data: FormData) {
  const response = await fetch(`${API_URL}/beta/invite`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Something went wrong');
  }
  return response.json();
}

export default function BetaInvitePage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showOtherCourse, setShowOtherCourse] = useState(false)
  const { toast } = useToast()
  const { register, handleSubmit, formState: { errors }, watch, setValue, reset } = useForm<FormData>()
  
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
      otherCourse: watch('otherCourse') || '',
      favColor: watch('favColor') || '',
      nickname: watch('nickname') || '',
      favFood: watch('favFood') || ''
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
  }
  
  // Watch course selection
  useEffect(() => {
    setShowOtherCourse(watch('course') === 'others')
  }, [watch('course')])

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      const submitData: any = {
        ...data,
        course: data.course === 'others' ? data.otherCourse : data.course
      }
      if (data.course !== 'others') {
        delete submitData.otherCourse;
      }
      await createBetaInvite(submitData)
      localStorage.removeItem(STORAGE_KEY)
      toast({
        title: "Application Received!",
        description: "We'll review your application and get back to you soon. Redirecting in 5 seconds...",
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
      <main className="flex-1 bg-gradient-to-b from-background to-muted p-8">
        <div className="max-w-2xl mx-auto">
        <AnimatedElement variants={container}>
          <Card>
            <CardHeader>
              <AnimatedElement
                variants={item}
                className="space-y-2"
              >
                <CardTitle>Beta Testing Application</CardTitle>
                <CardDescription>
                  Help us shape the future of tech education. Tell us about yourself and your learning goals.
                </CardDescription>
              </AnimatedElement>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <AnimatedElement variants={item} className="space-y-4">
                  <div className="space-y-1">
                    <Input
                      placeholder="Full Name"
                      {...register('name', { required: 'Name is required' })}
                      onChange={handleInputChange}
                    />
                    <AnimatePresence mode="wait">
                      {errors.name && <ErrorAnimation message={errors.name.message} />}
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
                      {errors.email && <ErrorAnimation message={errors.email.message} />}
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
                      <SelectTrigger className="backdrop-blur bg-white/30 dark:bg-black/30">
                        <SelectValue placeholder="Select a course" />
                      </SelectTrigger>
                      <SelectContent className="backdrop-blur bg-white/30 dark:bg-black/30">
                        {courses.map((course, idx) => (
                          <SelectItem key={course.id} value={course.id} className={idx !== 0 ? 'mt-2' : ''}>
                            <div className="font-medium">{course.name}</div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  {showOtherCourse && (
                    <div className="space-y-1">
                      <Input
                        placeholder="Please specify your course"
                        {...register('otherCourse', { required: 'Please specify your course' })}
                        onChange={handleInputChange}
                      />
                      <AnimatePresence mode="wait">
                        {errors.otherCourse && <ErrorAnimation message={errors.otherCourse.message} />}
                      </AnimatePresence>
                    </div>
                  )}
                </AnimatedElement>

                {/* New Section: Tell us about you */}
                <div className="pt-6">
                  <div className="mb-2">
                    <div className="font-semibold text-lg">Let's Get to Know You</div>
                    <div className="text-muted-foreground text-sm">We’d love to personalize your onboarding just for you 😊</div>
                  </div>
                  <div className="space-y-4">
                    <Input
                      placeholder="What's your Favorite Colour?"
                      {...register('favColor')}
                      onChange={handleInputChange}
                    />
                    <Input
                      placeholder="Do you have a Nickname?"
                      {...register('nickname')}
                      onChange={handleInputChange}
                    />
                    <Input
                      placeholder="What's Your Favourite Food?"
                      {...register('favFood')}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="text-xs text-muted-foreground mt-2">
                    These are totally optional. If you prefer, we’ll give you a cool, general experience instead.
                  </div>
                </div>

                <AnimatedElement variants={item}>
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
                </AnimatedElement>
              </form>
            </CardContent>
          </Card>
        </AnimatedElement>
      </div>
      </main>
      <Footer />
      <Toaster />
    </div>
  )
}
