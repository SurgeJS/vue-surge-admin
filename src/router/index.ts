import type { App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import createRouterGuard from '@/router/guard'
import { RouterUtils } from '@/router/utils.ts'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes: RouterUtils.transformCustomRoutesToVueRoutes(RouterUtils.getStaticRoutes()),
})

export async function setupRouter(app: App<Element>) {
  app.use(router)
  createRouterGuard(router)
  await router.isReady()
}

export default router
