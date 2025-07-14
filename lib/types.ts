export interface BetaSignup {
  id: string
  name: string
  email: string
  referralCode?: string
  createdAt: Date
}

export interface CourseInvite extends BetaSignup {
  course: Course
  answers: {
    experience: string
    goals: string
    availability: string
  }
}

export type Course = {
  id: string
  name: string
  description: string
  icon: string
}

export const COURSES: Course[] = [
  {
    id: 'web-dev',
    name: 'Web Development',
    description: 'Learn to build modern websites and web applications',
    icon: 'code',
  },
  {
    id: 'digital-marketing',
    name: 'Digital Marketing',
    description: 'Master digital marketing strategies and tools',
    icon: 'megaphone',
  },
  {
    id: 'copywriting',
    name: 'Copywriting',
    description: 'Create compelling content that converts',
    icon: 'pen-tool',
  },
  {
    id: 'graphics-design',
    name: 'Graphics Design',
    description: 'Design beautiful graphics and user interfaces',
    icon: 'palette',
  },
  {
    id: 'data-analytics',
    name: 'Data Analytics',
    description: 'Analyze data and create meaningful insights',
    icon: 'bar-chart',
  },
  {
    id: 'mobile-dev',
    name: 'Mobile Development',
    description: 'Build mobile apps for iOS and Android',
    icon: 'smartphone',
  },
]
