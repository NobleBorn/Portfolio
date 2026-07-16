<script setup lang="ts">
import '@/assets/bottom-bar.css'
import '@/assets/top-bar.css'
import { computed } from 'vue'
import { RouterLink } from 'vue-router';
import { useRoute } from 'vue-router';

const props = defineProps<{
  currentDateTime: string
}>()

const dateParts = computed(() => {
  const parts = props.currentDateTime.split(' ')

  return {
    weekday: parts[0] ?? '',
    day: parts[1] ?? '',
    month: parts[2] ?? '',
    time: parts[3] ?? '',
    year: new Date().getFullYear().toString(),
  }
})

const route = useRoute()

function isActive(path: string) {
  return route.path === path
}
</script>

<template>
  <div class="bottombar-wrapper">
    <div class="bottombar-glass">
      <!-- LEFT PROFILE AREA -->
      <div class="bottombar-profile">
        <div class="profile-orb"></div>

        <div class="profile-text">
          <span class="profile-name">NOBLEBORN</span>
          <span class="profile-role">Developer Portfolio</span>
        </div>
      </div>

      <!-- CENTER NAVIGATION -->
      <nav class="bottombar-nav">
        <RouterLink to="/" class="dock-item" :class="{ 'dock-item-active': isActive('/') }">
          <font-awesome-icon :icon="['fas', 'house']" />
          <span>Home</span>
        </RouterLink>

        <RouterLink to="/projects" class="dock-item" :class="{ 'dock-item-active': isActive('/projects') }">
          <font-awesome-icon :icon="['fas', 'briefcase']" />
          <span>Projects</span>
        </RouterLink>

        <a href="#skills" class="dock-item">
          <font-awesome-icon :icon="['fas', 'globe']" />
          <span>Skills</span>
        </a>

        <a href="#experience" class="dock-item">
          <font-awesome-icon :icon="['fas', 'calendar-check']" />
          <span>Experience</span>
        </a>

        <a href="#contact" class="dock-item">
          <font-awesome-icon :icon="['fas', 'envelope']" />
          <span>Contact</span>
        </a>

        <a href="#terminal" class="dock-item">
          <font-awesome-icon :icon="['fas', 'terminal']" />
          <span>Terminal</span>
        </a>
      </nav>

      <!-- RIGHT DATE AREA -->
      <div class="bottombar-date">
        <div class="date-card">
          <span class="date-day">{{ dateParts.day }}</span>
        </div>

        <div class="date-text">
          <span>{{ dateParts.month }} {{ dateParts.year }}</span>
          <strong>{{ dateParts.weekday }}</strong>
        </div>

        <div class="status-orbit">
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>