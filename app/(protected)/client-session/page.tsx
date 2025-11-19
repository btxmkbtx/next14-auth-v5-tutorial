'use client'
import { useSession } from 'next-auth/react'

export default function ClientSession() {
  const { data: session, status } = useSession()

  if (status === 'loading') return <div>Loading...</div>
  if (status === 'unauthenticated') return <div>Not authenticated</div>

  return <div>{JSON.stringify(session)}</div>
}
