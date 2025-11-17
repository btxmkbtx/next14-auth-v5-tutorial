import { UserRole } from '@prisma/client'
import NextAuth, { type DefaultSession } from 'next-auth'

export type ExtendedUser = DefaultSession['user'] & {
  id: string
  role: UserRole
  xxxxxx: string // 根据 auth.ts 中 jwt 回调中扩展的项目来添加类型声明
}

declare module 'next-auth' {
  interface Session {
    user: ExtendedUser
  }
}
