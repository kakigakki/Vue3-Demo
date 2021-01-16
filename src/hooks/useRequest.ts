import { ref } from "vue";
import axios from "axios"

export default function <T>(url: string) {
  const loading = ref(true)
  const data = ref<T | null>(null)
  const errMsg = ref("")
  axios.get(url).then(res => {
    loading.value = false
    data.value = res.data
  }).catch(() => {
    loading.value = false
    errMsg.value = "加载失败"
  })
  return {
    loading, data, errMsg
  }
}