// Types
interface BetaSignup {
  id: string;
  name: string;
  email: string;
}

interface BetaInvite {
  id: string;
  name: string;
  email: string;
  course: string;
  experience: string;
  goals: string;
  availability: string;
  createdAt: Date;
}

// Mock database
let waitlist: string[] = []
let betaSignups: BetaSignup[] = []
let betaInvites: BetaInvite[] = []

export async function addToWaitlist(email: string) {
  await simulateLatency()
  if (waitlist.includes(email)) {
    throw new Error('Email already registered')
  }
  waitlist.push(email)
  return { success: true }
}

export async function createBetaSignup(data: { name: string; email: string }) {
  await simulateLatency()
  if (betaSignups.find(signup => signup.email === data.email)) {
    throw new Error('Email already registered')
  }
  betaSignups.push({ ...data, id: Date.now().toString() })
  return { success: true, spotsLeft: 200 - betaSignups.length }
}

export async function createBetaInvite(data: {
  name: string
  email: string
  course: string
  experience: string
  goals: string
  availability: string
}) {
  await simulateLatency()
  if (betaInvites.find(invite => invite.email === data.email)) {
    throw new Error('Email already registered')
  }
  const invite = { ...data, id: Date.now().toString(), createdAt: new Date() }
  betaInvites.push(invite)
  return { success: true }
}

// Helper to simulate network latency
function simulateLatency() {
  return new Promise(resolve => setTimeout(resolve, Math.random() * 1000 + 500))
}
