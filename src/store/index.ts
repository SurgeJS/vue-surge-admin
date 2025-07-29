import type { App } from 'vue'
import { createPinia } from 'pinia'
import plugins from '@/store/plugins'

export function setupStore(app: App<Element>) {
  const pinia = createPinia()

  plugins.forEach(item => pinia.use(item))

  app.use(pinia)
}
