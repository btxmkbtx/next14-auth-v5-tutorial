/**
 * 不需要通过权限认证的公共路由
 */
export const publicRoutes = ['/']

/**
 * 与认证功能相关的路由
 * 这些路由会让已经登陆完成的用户跳转到/settings页面
 */
export const authRoutes = ['/auth/login', '/auth/register']

/**
 * 认证相关api前缀
 * 我们将会在middleware中放行所有认证相关api，因此需要定义这个前缀。
 */
export const apiAuthPrefix = '/api/auth'

export const DEFAULT_LOGIN_REDIRECT = '/settings'
