<script setup lang="ts">
import '@/assets/projects.css'
import BottomBar from '../components/bottom-bar.vue'

type Project = {
  title: string
  description: string
  technologies: string[]
  status: string
  image: string
  demoUrl?: string
  githubUrl?: string
}

const projects: Project[] = [
  {
    title: 'TOPdesk Assistant',
    description:
      'An AI-assisted request flow that structures user input, recommends knowledge articles, and helps create better support tickets.',
    technologies: ['Vue', 'Python', 'FastAPI', 'LLM', 'TOPdesk API'],
    status: 'Featured',
    image: '/images/topdesk-project.png',
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Developer Portfolio',
    description:
      'A custom OS-inspired portfolio with glass interfaces, reactive status elements, project navigation, and interactive components.',
    technologies: ['Vue 3', 'TypeScript', 'CSS', 'Spring Boot'],
    status: 'In progress',
    image: '/images/portfolio-project.png',
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Text-to-SQL Research',
    description:
      'An experimental evaluation of failure modes in LLM-generated SQL across models of different sizes.',
    technologies: ['Python', 'SQL', 'LLM', 'Data Analysis'],
    status: 'Research',
    image: '/images/text-to-sql-project.png',
    githubUrl: '#',
  },
  {
    title: 'Chalmers Location Explorer',
    description:
      'A data pipeline that collects, processes, and organizes room and building information from the Chalmers Maps API.',
    technologies: ['Python', 'REST API', 'JSON', 'Data Processing'],
    status: 'Completed',
    image: '/images/chalmers-map-project.png',
    githubUrl: '#',
  },
]

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
  <main class="projects-page">
    <div class="projects-stars"></div>

    <header class="projects-header">
      <div class="projects-heading">
        <p class="projects-eyebrow">Projects</p>
        <h1>Selected Projects</h1>
        <p>
          Applications, experiments, and systems I have designed and built.
        </p>
      </div>
    </header>

    <section class="projects-grid">
      <article
        v-for="project in projects"
        :key="project.title"
        class="project-card"
      >
        <div
          class="project-image"
          :style="{ backgroundImage: `url(${project.image})` }"
        >
          <span class="project-status">{{ project.status }}</span>
        </div>

        <div class="project-content">
          <div class="project-heading-row">
            <h2>{{ project.title }}</h2>

            <font-awesome-icon
              class="project-heading-icon"
              :icon="['fas', 'folder-open']"
            />
          </div>

          <p class="project-description">
            {{ project.description }}
          </p>

          <div class="project-technologies">
            <span
              v-for="technology in project.technologies"
              :key="technology"
            >
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
              <font-awesome-icon
                :icon="['fas', 'arrow-up-right-from-square']"
              />
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