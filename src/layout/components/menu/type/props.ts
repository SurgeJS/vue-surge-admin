import type { MenuProps as NMenuProps } from 'naive-ui'

export interface MenuProps extends Omit<NMenuProps, 'options' | 'value' | 'defaultValue' | 'accordion'> {
  routes: AppRouteRecordRaw[]
}
