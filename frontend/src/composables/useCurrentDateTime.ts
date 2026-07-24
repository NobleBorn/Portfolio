import { onMounted, onUnmounted, ref } from 'vue'

export function useCurrentDateTime() {
  const currentDateTime = ref('')
  let timeInterval: number | undefined

  function updateDateTime() {
    const now = new Date()

    const formatted = new Intl.DateTimeFormat('en-GB', {
      weekday: 'short',
      day: 'numeric',
      month: 'long',
      hour: '2-digit',
      minute: '2-digit',
    }).format(now)

    currentDateTime.value = formatted.replace('.', '')
    currentDateTime.value =
      currentDateTime.value.slice(0, 12) + currentDateTime.value.slice(14)
  }

  onMounted(() => {
    updateDateTime()

    timeInterval = window.setInterval(() => {
      updateDateTime()
    }, 1000)
  })

  onUnmounted(() => {
    if (timeInterval) {
      clearInterval(timeInterval)
    }
  })

  return {
    currentDateTime,
  }
}