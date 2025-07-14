import { NextResponse } from 'next/server'
import { addToWaitlist } from '@/lib/mock-api'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()
    const result = await addToWaitlist(email)
    return NextResponse.json(result)
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Something went wrong' },
      { status: 400 }
    )
  }
}
