'use server'

import { signIn } from '@/auth' //@/auth是给Server Component用的
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'
import { LoginSchema } from '@/schemas'
import { AuthError } from 'next-auth'
import { z } from 'zod'

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validateFileds = LoginSchema.safeParse(values)

  if (!validateFileds.success) {
    return { error: 'Invalid fields!' }
  }

  const { email, password } = validateFileds.data

  try {
    /*
    这里的credentials应该会触发auth.config.ts中的provider[Credentials]，
    email和password会被打包到provider[Credentials]对应的异步方法。
    */
    await signIn('credentials', {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT
    })
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { error: 'Invalid credentials' }
        default:
          return { error: 'Something went wrong' }
      }
    }
    throw error
  }
}
