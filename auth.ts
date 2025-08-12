import NextAuth from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'

import { db } from '@/lib/db'
import authConfig from '@/auth.config'
import { getUserById } from '@/data/user'
import { UserRole } from '@prisma/client'

//从NextAuth导出的signIn，signOut，都只能在'use server'的组件或Action中使用
export const { auth, handlers, signIn, signOut } = NextAuth({
  callbacks: {
    // 返回的session会放入全局的「import { auth } from '@/auth'」中
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub
      }

      if (token.role && session.user) {
        session.user.role = token.role as UserRole
      }

      return session
    },
    //关系：jwt返回的token会传给上面的session
    async jwt({ token }) {
      if (!token.sub) return token

      const existingUser = await getUserById(token.sub)

      if (!existingUser) return token

      token.role = existingUser.role

      return token
    }
  },
  adapter: PrismaAdapter(db),
  session: { strategy: 'jwt' },
  secret: process.env.AUTH_SECRET, //确保这个secret在env环境变量中设置
  ...authConfig
})
