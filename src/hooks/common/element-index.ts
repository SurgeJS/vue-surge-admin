/**
 * 获取当前元素的index
 * @param el 元素
 */
function elementIndex(el: Ref<HTMLElement | undefined>) {
  const index = ref(-1)

  const parentElement = useParentElement()

  const setIndex = () => {
    if (!parentElement.value)
      return index.value = -1
    index.value = Array.from(parentElement.value.children).findIndex(item => item === el.value)
  }

  useMutationObserver(parentElement, () => {
    setIndex()
  }, {
    childList: true,
  })

  onMounted(() => {
    setIndex()
  })

  return index
}

export default elementIndex
