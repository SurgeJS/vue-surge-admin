import type { RoleEnum } from '@/enums/auth'

/**
 * 路由鉴权模式
 * @description web：前端配置路由表，通过用户角色来过滤路由，然后自动生成菜单 （适合角色固定的系统）
 * @description service：后端通过用户角色返回路由表，前端通过路由表自动生成菜单
 */
export type RouteAuthMode = 'web' | 'service'

export interface AuthStore {
  token: Nullable<string>

  // 角色
  roles: RoleEnum[]

  // 细粒度权限
  permissions: string[]

  // 用户信息
  userinfo: Nullable<UserModel.UserDetailsModel['userinfo']>

  // 路由鉴权模式
  routeAuthMode: RouteAuthMode

  // 是否已生成路由
  isGeneratedRoutes: boolean

  // 用户的路由
  routes: AppRouteRecordRaw[]
}
