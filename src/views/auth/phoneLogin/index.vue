<script setup lang="ts">
import type { DefineSchema } from '@/components/common/SchemaForm/types/common.ts'
import RouterConstant from '@/constant/router'
import OtherLogins from '@/views/auth/components/OtherLogins.vue'
import { reactive } from 'vue'

const [loading] = useToggle()
const router = useRouter()

const form = reactive({
  phone: undefined,
  verificationCode: undefined,
})

const schema = reactive<DefineSchema<typeof form>[]>([
  {
    field: 'phone',
    component: 'input',
    componentProps: {
      size: 'large',
      placeholder: '请输入手机号',
    },
    rule: 'phone',
  },
  {
    contentSlot: 'verificationCode',
    rule: {
      trigger: 'blur',
      message: '请输入验证码',
      required: true,
    },
  },
  {
    slot: 'submit',
  },
])
function handleLogin() {

}
</script>

<template>
  <div class="h-full flex flex-col justify-center">
    <h1 class="mb-[24px]">
      手机号登录📱
    </h1>
    <schema-form
      :model="form"
      :show-label="false"
      hide-action-button
      :schema="schema"
    >
      <template #verificationCode>
        <n-input-group>
          <n-input
            v-model:value="form.verificationCode"
            size="large"
            placeholder="请输入验证码"
          />
          <n-button
            size="large"
            type="primary"
            secondary
          >
            发生验证码
          </n-button>
        </n-input-group>
      </template>
      <template #submit>
        <n-button
          :loading="loading"
          block
          size="large"
          type="primary"
          @click="handleLogin"
        >
          登录
        </n-button>
      </template>
    </schema-form>
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
