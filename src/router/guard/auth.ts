import type { TacticsAction } from '@/utils'
import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import RouterConstant from '@/constant/router.ts'
import { tokenCache } from '@/store/caches.ts'
import useAuthStore from '@/store/modules/auth'
import useTabBarStore from '@/store/modules/tab-bar'
import { runTacticsAction } from '@/utils'
import RegUtils from '@/utils/reg.ts'

function createAuthGuard(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
  const {
    isLogin,
    isAuth,
    getUserinfo,
    routeAuthMode,
    initFrontRouteAuth,
    initServerRouteAuth,
    initAuthStore,
    isGeneratedRoutes,
    $state,
  } = useAuthStore()
  const { initializeTabBar } = useTabBarStore()
  // 处理路由鉴权模式
  const handleRouteAuthMode = async () => {
    switch (routeAuthMode) {
      // 前端路由鉴权模式
      case 'web':
        // 初始化路由和菜单
        initFrontRouteAuth()
        // 初始化标签栏
        initializeTabBar($state.routes)
        break
        // 服务端路由鉴权模式
      case 'service':
        // 初始化路由和菜单
        await initServerRouteAuth()
        // 初始化标签栏
        initializeTabBar($state.routes)
        break
    }
  }
  // 忽略鉴权直接放行
  if (to.meta?.ignoreAuth)
    return next()
  // 策略守卫
  const guardTacticsAction: TacticsAction[] = [
    // 未登录
    [
      !isLogin,
      () => {
        console.info('---未登录，强制跳转到登录页---')
        to.path.startsWith(RouterConstant.AUTH_ROUTE) ? next() : next(RouterConstant.LOGIN_PATH)
      },
    ],
    // 登录的情况下在 cookie 中获取不到 token
    [
      !tokenCache.get(),
      () => {
        console.info('---令牌已失效，请重新登录---')
        void window.$message.warning('令牌已失效，请重新登录！')
        initAuthStore()
        next(RouterConstant.LOGIN_PATH)
      },
    ],
    // 没有鉴权（没有用户信息和角色）
    [
      !isAuth,
      async () => {
        // console.info('---没有鉴权（没有用户信息和角色）---')
        // 获取用户信息
        await getUserinfo().catch(() => {
          next(RouterConstant.LOGIN_PATH)
          return Promise.reject(new Error('获取用户信息失败'))
        })
        await handleRouteAuthMode()
        next({ ...to, replace: true })
      },
    ],
    // 没有生成路由
    [
      !isGeneratedRoutes,
      async () => {
        // console.info('---没有生成路由---')
        await handleRouteAuthMode()
        next({ ...to, replace: true })
      },
    ],
    // 登录情况下不能到登录页面
    [
      to.path.startsWith(RouterConstant.AUTH_ROUTE),
      () => {
        // console.info('---登录情况下不能到登录页面---')
        next(from.fullPath)
      },
    ],
    // 打开外链
    [
      RegUtils.MATCH_URL.test(to.path),
      () => {
        window.open(RegUtils.extractUrl(to.path), '_blank')
        return next(from.fullPath)
      },
    ],
    // 禁用菜单
    [
      Boolean(to.meta.disabledMenu),
      () => {
        void window.$message.warning('该菜单已被禁用访问！请联系管理员！')
        return next(from.fullPath)
      },
    ],
    // 走到这步直接通过（走到这步就表示已经登录、有权限、有路由了）
    [
      true,
      () => {
        // console.info('---已经登录、有权限、有路由了---')
        next()
      },
    ],
  ]

  runTacticsAction(guardTacticsAction)
}
export default createAuthGuard
