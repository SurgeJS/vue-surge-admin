import type { App } from 'vue'
import vueQueryPlugins from '@/plugins/vue-query.ts'

function setupPlugins(app: App) {
  vueQueryPlugins(app)
}

export default setupPlugins
