<script setup lang="ts">
import type { MenuProps } from '@/layout/components/menu/type/props.ts'
import type { MenuMixedOption } from 'naive-ui/es/menu/src/interface'
import useOmitProps from '@/hooks/common/use-omit-props.ts'
import useRenderIcon from '@/hooks/components/use-render-icon.ts'
import useAppStore from '@/store/modules/app'

const props = defineProps<MenuProps>()

const route = useRoute()
const router = useRouter()
const appStore = useAppStore()
const { RenderDynamicIcon } = useRenderIcon()
const menuProps = useOmitProps(props, ['routes'])

const menus = computed(() => routesToMenus(props.routes))

function routesToMenus(routes: AppRouteRecordRaw[]): MenuMixedOption[] {
  return routes.reduce<MenuMixedOption[]>((menuList, item) => {
    if (item.meta?.hideMenu)
      return menuList
    menuList.push({
      key: item.path,
      icon: item.meta?.icon ? () => RenderDynamicIcon(item.meta?.icon as string) : undefined,
      label: item.meta?.title,
      show: item.meta?.hideMenu,
      disabled: item.meta?.disabledMenu,
      children: item.children?.length ? routesToMenus(item.children) : undefined,
    })
    return menuList
  }, [])
}

function onClick(key) {
  router.push(key)
}
</script>

<template>
  <n-menu
    :value="route.path"
    :options="menus"
    :accordion="appStore.isMenuAccordion"
    v-bind="menuProps"
    class="w-full"
    @update:value="onClick"
  />
</template>

<style scoped lang="scss">

</style>
