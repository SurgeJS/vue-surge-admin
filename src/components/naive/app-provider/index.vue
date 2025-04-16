<script setup lang="ts">
const Content = defineComponent({
  setup(props, { slots }) {
    window.$message = useMessage()
    window.$loadingBar = useLoadingBar()
    window.$notification = useNotification()
    window.$dialog = useDialog()

    return slots.default
  },
})
</script>

<template>
  <n-notification-provider>
    <n-loading-bar-provider>
      <n-message-provider>
        <n-dialog-provider>
          <n-modal-provider>
            <Content>
              <slot />
            </Content>
          </n-modal-provider>
        </n-dialog-provider>
      </n-message-provider>
    </n-loading-bar-provider>
  </n-notification-provider>
</template>

<style scoped lang="scss">

</style>
