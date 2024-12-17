<script setup lang="ts">
import { createTextVNode } from 'vue'

const Content = defineComponent({
  setup() {
    window.$message = useMessage()
    window.$loadingBar = useLoadingBar()
    window.$notification = useNotification()
    window.$notification = useNotification()
    return () => createTextVNode()
  },
})
</script>

<template>
  <n-notification-provider>
    <n-loading-bar-provider>
      <n-message-provider>
        <n-dialog-provider>
          <n-modal-provider>
            <content />
            <slot />
          </n-modal-provider>
        </n-dialog-provider>
      </n-message-provider>
    </n-loading-bar-provider>
  </n-notification-provider>
</template>

<style scoped lang="scss">

</style>
