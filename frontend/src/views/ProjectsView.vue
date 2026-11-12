<script setup lang="ts">
import '@/assets/projects.css'
import { projects } from '@/data/projects'
import BottomBar from '../components/bottom-bar.vue'
import { useCurrentDateTime } from '@/composables/useCurrentDateTime'

const { currentDateTime } = useCurrentDateTime()
</script>

<template>
  <main class="projects-page">
    <header class="projects-header">
      <div class="projects-heading">
        <h1>Selected Projects</h1>
        <p>Applications, experiments, and systems I have designed and built.</p>
      </div>
    </header>

    <section class="projects-grid">
      <article v-for="project in projects" :key="project.id" :id="project.id" class="project-card">
        <div class="project-image" :style="{ backgroundImage: `url(${project.image})` }">
          <span class="project-status">{{ project.status }}</span>
        </div>

        <div class="project-content">
          <div class="project-heading-row">
            <h2>{{ project.title }}</h2>

            <font-awesome-icon class="project-heading-icon" :icon="['fas', 'folder-open']" />
          </div>

          <p class="project-description">
            {{ project.description }}
          </p>

          <div class="project-technologies">
            <span v-for="technology in project.technologies" :key="technology">
              {{ technology }}
            </span>
          </div>

          <div class="project-actions">
            <a
              v-if="project.demoUrl"
              :href="project.demoUrl"
              class="project-button project-button-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              View project
              <font-awesome-icon :icon="['fas', 'arrow-up-right-from-square']" />
            </a>

            <a
              v-if="project.githubUrl"
              :href="project.githubUrl"
              class="project-button project-button-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <font-awesome-icon :icon="['fab', 'github']" />
              Source
            </a>
          </div>
        </div>
      </article>
    </section>

    <section class="projects-bottom-bar">
      <BottomBar :currentDateTime="currentDateTime" />
    </section>
  </main>
</template>
