import type { App, Component, DefineComponent } from 'vue'

// 安装全局组件
function setupComponents(app: App<Element>) {
  const components: (Component | DefineComponent)[] = []
  components.forEach(component => app.component(component.name as string, component))
}

export default setupComponents
