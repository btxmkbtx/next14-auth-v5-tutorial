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
    /*
    关系：jwt 回调处理并返回的 token 会传递给 session 回调
    这里jwt({ token }) 中的 token 是 NextAuth 框架生成和管理的 token，不是从后台 API 返回的 token。
    token 的来源：
      1.这是 NextAuth 内部的 JWT token
      2.包含用户认证信息（如 sub、email 等）
      3.由 NextAuth 根据登录 provider 的返回数据自动生成
    token 的生命周期：
      用户登录 → NextAuth 生成初始 token → jwt 回调处理 → 返回增加自定义项目的 token
    */
    async jwt({ token }) {
      if (!token.sub) return token

      const existingUser = await getUserById(token.sub)

      if (!existingUser) return token

      token.role = existingUser.role // 扩展 NextAuth 的 token 中的自定义项目

      return token
    }
  },
  adapter: PrismaAdapter(db),
  session: { strategy: 'jwt' },
  secret: process.env.AUTH_SECRET, //确保这个secret在env环境变量中设置
  ...authConfig
})
