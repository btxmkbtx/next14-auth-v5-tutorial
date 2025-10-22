'use client'
import { LoginForm } from '@/components/auth/login-form'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Login() {
  const router = useRouter()
  const currentPathname = usePathname()

  useEffect(() => {
    // 因为middleware.ts的重定向导致页面内容虽然重新描绘，但是url不正确，所以这里再做一次校验
    if (currentPathname !== '/auth/login') {
      router.replace('/auth/login')
    }
  }, [router, currentPathname])
  return <LoginForm />
}
