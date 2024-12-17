import type { App } from 'vue'
import { VueQueryPlugin } from '@tanstack/vue-query'

function vueQueryPlugins(app: App) {
  app.use(VueQueryPlugin, {
    queryClientConfig: {
      defaultOptions: { queries: { refetchOnWindowFocus: false } },
    },
  })
}

export default vueQueryPlugins
