import type { XtxGuessInstance } from '@/components/components'
import { ref } from 'vue'

export const useGuessLike = () => {
  const xtxGuessLike = ref<XtxGuessInstance>()

  let isLoading = false
  const onScrollLower = async () => {
    // 避免在数据未加载回来时，出现多次加载
    if (isLoading) return
    isLoading = true
    await xtxGuessLike.value?.getMore()
    isLoading = false
  }
  return {
    xtxGuessLike,
    onScrollLower,
  }
}
