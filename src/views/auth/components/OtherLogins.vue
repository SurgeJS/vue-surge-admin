<script setup lang="ts">
const otherLogins = ref([
  {
    tooltip: 'Github登录',
    icon: 'i-mdi:github',
  },
  {
    tooltip: '微信登录',
    icon: 'i-mdi:wechat',
  },
  {
    tooltip: 'QQ登录',
    icon: 'i-mdi:qqchat',
  },
  {
    tooltip: '谷歌登录',
    icon: 'i-mdi:google',
  },
])
</script>

<template>
  <n-divider>第三方登录</n-divider>
  <n-flex justify="center">
    <hover-container
      v-for="item in otherLogins"
      :key="item.icon"
      :tooltip="item.tooltip"
    >
      <icon size="20px" :icon="item.icon" />
    </hover-container>
  </n-flex>
</template>

<style scoped lang="scss">

</style>
