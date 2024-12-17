import type { App } from 'vue'
import plugins from '@/store/plugins'
import { createPinia } from 'pinia'

export function setupStore(app: App<Element>) {
  const pinia = createPinia()

  plugins.forEach(item => pinia.use(item))

  app.use(pinia)
}
