import type { Router } from 'vue-router'
import { useTitle } from '@vueuse/core'
import createAuthGuard from '@/router/guard/auth.ts'
import useAppStore from '@/store/modules/app'

function createRouterGuard(router: Router) {
  // 跳转之前
  router.beforeEach((to, from, next) => {
    const appStore = useAppStore()
    window.$loadingBar?.start()
    // 跳转之前取消全局loading
    appStore.toggleFullScreenLoading(false)
    // 鉴权守卫
    createAuthGuard(to, from, next)
  })

  // 跳转之后
  router.afterEach((to) => {
    const appStore = useAppStore()
    useTitle(to.meta.title)
    appStore.isSmallScreen && appStore.toggleMobileSidebarVisible(false)
    window.$loadingBar?.finish()
  })
}
export default createRouterGuard
