<script setup lang="ts">
const test = ref()
const showModal = ref(false)
onMounted(() => {
  console.dir(test)
})
</script>

<template>
  <div>
    <n-button @click="showModal = true">
      来吧
    </n-button>
    <!--    <n-modal v-model:show="showModal"> -->
    <!--      <n-card -->
    <!--          style="width: 600px" -->
    <!--          title="模态框" -->
    <!--          aria-modal="true" -->
    <!--      > -->
    <!--        <template #header-extra> -->
    <!--          噢！ -->
    <!--        </template> -->
    <!--        内容 -->
    <!--        <template #footer> -->
    <!--          尾部 -->
    <!--        </template> -->
    <!--      </n-card> -->
    <!--    </n-modal> -->

    <n-drawer v-model:show="showModal" :width="502">
      <n-drawer-content closable>
        <template #header>
          Header
        </template>
        <template #footer>
          <n-button>Footer</n-button>
        </template>
      </n-drawer-content>
    </n-drawer>
  </div>
</template>

<style scoped lang="scss">
.test {
  white-space: nowrap; /* 防止文本换行 */
  overflow: hidden; /* 超出部分隐藏 */
  text-overflow: ellipsis; /* 溢出的文本显示省略号 */
  width: 50px;
}
</style>
