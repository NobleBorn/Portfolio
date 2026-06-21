<script setup lang="ts">
import TopBar from '../components/top-bar.vue'
import BottomBar from '../components/bottom-bar.vue'
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
        <aside class="side-column left-column">
            <!-- left widgets -->
        </aside>

        <div class="hero-panel">
            <!-- LEFT CONTENT -->
            <div class="hero-left">

            <p class="hero-intro">Hi, I’m</p>

            <h1 class="hero-name">Mojtaba Alizade</h1>

            <h2 class="hero-title">Software Engineer & Developer</h2>

            <div class="hero-line"></div>

            <p class="hero-description">
                I build modern, scalable, and user-focused software systems
                that solve real problems and drive meaningful impact.
            </p>

            <div class="hero-actions">
                <a href="#projects" class="hero-button hero-button-primary">
                Open Projects
                <span>↗</span>
                </a>

                <a href="#contact" class="hero-button hero-button-secondary">
                Get in Touch
                <span>✈</span>
                </a>
            </div>

            <div class="hero-stats">
                <div>
                <span>Location</span>
                <strong>Sweden</strong>
                </div>

                <div class="stat-divider"></div>

                <div>
                <span>Experience</span>
                <strong>Junior</strong>
                </div>

                <div class="stat-divider"></div>

                <div>
                <span>Availability</span>
                <strong>Open</strong>
                </div>
            </div>
            </div>

            <!-- RIGHT IMAGE -->
            <div class="hero-right">
            <div class="hero-orbit"></div>
            <img src="@/assets/images/figure.png" alt="Noble Born" class="hero-image" />
            </div>
        </div>

        <aside class="side-column right-column">
            <!-- right widgets -->
        </aside>
    </section>

    <section class="home-bottom">
      <BottomBar :currentDateTime="currentDateTime" />
    </section>
  </main>
</template>