<script setup lang="ts">
import type { PageAnimationMode } from '@/store/modules/app/type'

const props = defineProps<{ name?: PageAnimationMode }>()
</script>

<template>
  <transition
    :name="props.name"
    appear
    mode="out-in"
  >
    <slot />
  </transition>
</template>

<style scoped lang="scss">
// 左滑动淡入淡出
.left-slide-fade-enter-active,
.left-slide-fade-leave-active {
  transition: .3s cubic-bezier(.4, 0, .2, 1);
}

.left-slide-fade-enter-from,
.left-slide-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}

// 右滑动淡入淡出
.right-slide-fade-leave-active,
.right-slide-fade-enter-active {
  transition: .3s cubic-bezier(.4, 0, .2, 1);
}

.right-slide-fade-enter-from,
.right-slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

// 缩放淡入淡出
.zoom-fade-enter-active,
.zoom-fade-leave-active {
  transition: .3s cubic-bezier(.4, 0, .2, 1);
}

.zoom-fade-leave-to,
.zoom-fade-enter-from {
  opacity: 0;
  transform: scale(0.90);
}
</style>
