import type { RawRouteComponent, RouteRecordRaw } from 'vue-router'

declare global {
    /**
     * 路由组件类型
     * @description basic 具有公共部分的布局 (公共左侧菜单栏、公共头部、公共底部)
     * @description basic-view 具有公共部分的布局的页面
     * @description view 页面
     */
    type RouteComponentType = 'basic' | 'basic-view' | 'view'

    type OmitRouteRecordRaw = Omit<RouteRecordRaw, 'component' | 'components' | 'children'>

    interface AppRouteRecordRaw extends OmitRouteRecordRaw {
      // 组件类型
      component?: RouteComponentType | RawRouteComponent

      // 子路由
      children?: AppRouteRecordRaw[]
    }
}
