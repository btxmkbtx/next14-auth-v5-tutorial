import { handlers } from '@/auth'
/**
 * 如果不导出handlers中的restful api，auth.ts中的signIn和signOut就不起作用。
 * 我的猜想：说明NextAuth内部的workFlow，就是通过NextApi来调用自己内部的认证逻辑，signIn与signOut内部应该是一个fetch请求。
 * */
export const { GET, POST } = handlers
