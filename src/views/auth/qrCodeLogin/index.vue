<script setup lang="ts">
import RouterConstant from '@/constant/router'
import OtherLogins from '@/views/auth/components/OtherLogins.vue'

const router = useRouter()
</script>

<template>
  <div class="h-full flex flex-col justify-center">
    <h1 class="mb-[24px]">
      二维码登录🤳🏻
    </h1>
    <img src="@/assets/images/login-qrCode.png" class="mx-auto w-[50%]">
    <n-button
      class="mt-[24px]"
      type="primary"
      tertiary
      block
      @click="router.push(RouterConstant.LOGIN_PATH)"
    >
      账号密码登录
    </n-button>
    <OtherLogins />
  </div>
</template>

<style scoped lang="scss">

</style>
