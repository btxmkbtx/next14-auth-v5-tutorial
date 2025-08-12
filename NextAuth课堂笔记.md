# env

https://github.com/btxmkbtx/next14_storybook8_init/commit/27333054cad3911bd812919eb686e6b2544697c2#diff-b3152dab7dbcad286ba0e4c1a6e2f44782829983edc7c88efa468b1b1e4cd310

# 课程

https://www.youtube.com/watch?v=1MTyCvS05V4

prisma 构建：1：40：00

prisma 重构：3：00：00

```
npx prisma generate
npx prisma migrate reset
npx prisma db push
```

# DB

谷歌账号登录
https://console.neon.tech/app/projects/sweet-cake-10996967/branches/br-steep-wind-a1s68zuz/tables?database=next-auth-tutorial

# middleware

传递第二个参数 nextUrl 才能够生成一个绝对路径完成跳转
Response.redirect(new URL("/相对路径", nextUrl))

# 两个重要的文件

auth.config.ts
auth.ts

# providers

NextAuth 提供了一系列常见的厂牌单点登录服务，如 Github, Google 等等。
这些服务以内部固定的 id 识别，通过传递 id 给 NextAuth 的「signIn」就可以触发「auth.config.ts」下配置在 providers 内的对应方法。
