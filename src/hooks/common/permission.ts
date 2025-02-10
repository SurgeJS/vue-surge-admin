import { useRoute } from 'vue-router'

function permission() {
  const route = useRoute()

  // 按钮级别的权限控制
  const hasPermission = (permissions: string | string[]) => {
    if (Array.isArray(permissions))
      return permissions.some(item => route.meta?.permissions?.includes(item))

    else
      return route.meta?.permissions?.includes(permissions)
  }

  return { hasPermission }
}

export default permission
