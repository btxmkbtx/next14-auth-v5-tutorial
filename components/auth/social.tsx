'use client'

import { Button } from '@/components/ui/button'
import { SiMicrosoftazure } from 'react-icons/si'
import { FaGithub } from 'react-icons/fa'
import { signIn } from 'next-auth/react'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'

export const Social = () => {
  const onClick = (providerId: 'github' | 'google') => {
    signIn(providerId, { callbackUrl: DEFAULT_LOGIN_REDIRECT })
  }

  return (
    <div className="flex flex-col items-center w-full gap-2">
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => onClick('github')}
      >
        <FaGithub className="h-5 w-5" />
      </Button>
      <Button size="lg" className="w-full" variant="outline" onClick={() => {}}>
        <SiMicrosoftazure className="h-5 w-5" />
      </Button>
    </div>
  )
}
