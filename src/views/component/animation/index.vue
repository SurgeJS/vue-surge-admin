<script setup lang="ts">
const [isShow, toggleShow] = useToggle()
</script>

<template>
  <n-card
    class="h-full"
    title="立即执行动画"
  >
    <template #header-extra>
      <n-button type="primary" @click="toggleShow()">
        {{ isShow ? '隐藏' : '显示' }}
      </n-button>
    </template>
    <n-flex class="h-full">
      <fold-animation
        :duration="3"
        a
        ppear
      >
        <div class="demo h-300px">
          高度固定
        </div>
      </fold-animation>
      <fold-animation appear>
        <div class="demo">
          <p class="h-500px">
            高度不固定
          </p>
        </div>
      </fold-animation>
      <fold-animation
        :duration="3"
        direction="horizontal"

        appear fixed-length
      >
        <div class="demo w-200px overflow-auto">
          <p>宽度固定</p>
        </div>
      </fold-animation>
      <fold-animation
        fixed-length
        :duration="3"
        appear
      >
        <div v-if="isShow" class="demo h-500px overflow-auto">
          高度固定
        </div>
      </fold-animation>
    </n-flex>
  </n-card>
</template>

<style scoped lang="scss">
.demo{
  @apply: w-20% bg-primary rounded-md text-white flex-center text-[16px];
}
</style>
