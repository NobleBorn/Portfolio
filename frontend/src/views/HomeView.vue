<script setup lang="ts">
import TopBar from '../components/top-bar.vue'
import BottomBar from '../components/bottom-bar.vue'
import leftColumn from '../components/left-column.vue'
import middleColumn from '../components/middle-column.vue'
import rightColumn from '../components/right-column.vue'
import '@/assets/homepage.css'
import { onMounted, onUnmounted, ref } from 'vue'

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
  currentDateTime.value = currentDateTime.value.slice(0, 12) +  currentDateTime.value.slice(14)
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
</script>

<template>
  <main class="home-page">
    <section class="home-top">
      <TopBar :currentDateTime="currentDateTime" />
    </section>

    <section class="home-middle">
        <aside class="left-column">
          <leftColumn />
        </aside>

        <div class="hero-panel">
            <middleColumn />
        </div>

        <aside class="apps-panel right-panel">
          <rightColumn />
        </aside>
    </section>

    <section class="home-bottom">
      <BottomBar :currentDateTime="currentDateTime" />
    </section>
  </main>
</template>