<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { projects } from '@/data/projects'

const projectIcons: Record<string, string> = {
  photobarber: 'scissors',
  'developer-portfolio': 'code',
  'text-to-sql-research': 'database',
  'chalmers-location-explorer': 'location-dot',
}

const iconColors = ['app-icon-blue', 'app-icon-red', 'app-icon-indigo', 'app-icon-green']
</script>

<template>
  <div class="apps-panel-header">
    <h2>PROJECTS</h2>
    <font-awesome-icon :icon="['fas', 'grip']" />
  </div>

  <div class="apps-list">
    <RouterLink
      v-for="(project, index) in projects"
      :key="project.id"
      :to="{ path: '/projects', hash: `#${project.id}` }"
      class="app-card"
      :aria-label="project.title"
      :title="project.title"
    >
      <div :class="['app-icon', iconColors[index % iconColors.length]]">
        <font-awesome-icon :icon="['fas', projectIcons[project.id] ?? 'code']" aria-hidden="true" />
      </div>
    </RouterLink>
  </div>

  <div class="quote-card">
    <div class="quote-mark">“</div>
    <p>
      Code with purpose.<br />
      Build with passion.<br />
      Inspire through impact.
    </p>

    <div class="quote-line"></div>
    <div class="quote-dots"></div>
  </div>
</template>
