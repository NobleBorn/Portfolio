<script setup lang="ts">
import TopBar from '../components/top-bar.vue'
import BottomBar from '../components/bottom-bar.vue'
import leftColumn from '../components/left-column.vue'
import middleColumn from '../components/middle-column.vue'
import rightColumn from '../components/right-column.vue'
import { useCurrentDateTime } from '@/composables/useCurrentDateTime'
import '@/assets/homepage.css'


const { currentDateTime } = useCurrentDateTime()
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