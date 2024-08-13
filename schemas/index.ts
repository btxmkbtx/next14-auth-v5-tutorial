import { z } from 'zod'

export const LoginSchema = z.object({
  email: z.string().email({ message: 'Email is requeired' }),
  password: z.string().min(1, { message: 'Password is requeired' })
})

export const RegisterSchema = z.object({
  email: z.string().email({ message: 'Email is requeired' }),
  password: z.string().min(6, { message: 'Min 6 characters requeired' }),
  name: z.string().min(1, { message: 'Name is required' })
})
