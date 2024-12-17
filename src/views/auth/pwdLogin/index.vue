<script setup lang="ts">
import type { SchemaFormExpose } from '@/components/common/SchemaForm/types/base.ts'
import type { DefineSchema } from '@/components/common/SchemaForm/types/common.ts'
import useRenderIcon from '@/hooks/components/use-render-icon'
import useAuthStore from '@/store/modules/auth'
import OtherLogins from '@/views/auth/components/OtherLogins.vue'
import { reactive } from 'vue'

const authStore = useAuthStore()

const { RenderUnoIcon } = useRenderIcon()
const [loading, setLoading] = useToggle()
const formRef = useTemplateRef<SchemaFormExpose>('formRef')
const router = useRouter()

// 其他操作
const otherOperations = reactive([
  {
    name: '手机号登录',
    path: '/auth/phoneLogin',
  },
  {
    name: '二维码登录',
    path: '/auth/qRCodeLogin',
  },
  {
    name: '注册',
    path: '/auth/register',
  },
])

const form = reactive<UserModel.PasswordLoginParams>({
  username: 'admin',
  password: '123456',
})

const schema = ref<DefineSchema<UserModel.PasswordLoginParams>[]>([
  {
    field: 'username',
    component: 'input',
    componentProps: {
      size: 'large',
      placeholder: '请输入用户名',
    },
    componentContent: {
      prefix: () => RenderUnoIcon('i-ant-design:user-outlined'),
    },
    rule: {
      message: '请输入账号',
      required: true,
    },
  },
  {
    field: 'password',
    component: 'input',
    componentProps: {
      size: 'large',
      type: 'password',
      placeholder: '请输入密码',
    },
    componentContent: {
      prefix: () => RenderUnoIcon('i-ant-design:lock-outlined'),
    },
    rule: {
      message: '请输入密码',
      required: true,
    },
  },
  {
    slot: 'action',
  },
  {
    slot: 'submit',
  },
])

async function handleLogin() {
  await formRef.value?.validate()
  setLoading(true)
  await authStore.passwordLogin(form).finally(() => setLoading(false))
}
</script>

<template>
  <div class="h-full flex flex-col justify-center">
    <h1 class="mb-[24px]">
      Hi 欢迎回来👋
    </h1>
    <schema-form
      ref="formRef"
      v-model:schema="schema"
      :show-label="false"
      :model="form"
      hide-action-button
    >
      <template #action>
        <a-flex
          class="mb-4"
          gap="middle"
          align="center"
          justify="space-between"
        >
          <n-checkbox>记住密码</n-checkbox>
          <span class="cursor-pointer text-primary">忘记密码？</span>
        </a-flex>
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
    <n-flex
      class="mt-[24px] w-full"
      justify="space-between"
    >
      <n-button
        v-for="item in otherOperations"
        :key="item.path"
        type="primary"
        tertiary
        class="flex-1 flex-shrink"
        @click="router.push(item.path)"
      >
        {{ item.name }}
      </n-button>
    </n-flex>
    <OtherLogins />
  </div>
</template>

<style scoped lang="scss">

</style>
