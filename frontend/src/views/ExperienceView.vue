<script setup lang="ts">
import BottomBar from '@/components/bottom-bar.vue'
import { useCurrentDateTime } from '@/composables/useCurrentDateTime'
import '@/assets/experience.css'

const { currentDateTime } = useCurrentDateTime()

type Experience = {
  period: string
  title: string
  organisation: string
  description: string[]
  glow: 'blue' | 'purple' | 'gold'
}

const experiences: Experience[] = [
  {
    period: '2026',
    title: 'TOPdesk AI Support Automation',
    organisation: 'Chalmers University',
    glow: 'blue',
    description: [
      'Built an AI-assisted workflow for structured support ticket intake.',
      'Worked with TOPdesk APIs, knowledge articles, and LLM-based recommendations.',
      'Developed a pilot flow for improving support quality and reducing manual effort.',
    ],
  },
  {
    period: '2026',
    title: 'Master’s Thesis Researcher',
    organisation: 'LLM Text-to-SQL Failure Modes',
    glow: 'purple',
    description: [
      'Evaluated how model size affects generated SQL correctness and failure types.',
      'Analysed semantic errors, hallucinations, syntactic errors, and correct outputs.',
      'Worked with experimental design, data analysis, and LLM evaluation.',
    ],
  },
  {
    period: '2025 – 2026',
    title: 'Full-stack Development Projects',
    organisation: 'Personal Portfolio & Web Systems',
    glow: 'gold',
    description: [
      'Designed and built web applications using Vue, TypeScript, Java, and Spring Boot.',
      'Created reusable UI components, responsive layouts, and API-connected features.',
      'Worked with Git, Docker, REST APIs, and deployment-oriented project structure.',
    ],
  },
]
</script>

<template>
  <main class="experience-page">
    <section class="experience-scene">
      <header class="experience-header">
        <h1>EXPERIENCE</h1>
        <span class="experience-sparkle">✦</span>
      </header>

      <div class="experience-timeline">
        <article
          v-for="(item, index) in experiences"
          :key="item.title"
          :class="[
            'experience-item',
            index % 2 === 0 ? 'experience-item-left' : 'experience-item-right'
          ]"
        >
          <div class="experience-card">
            <h2>{{ item.title }}</h2>
            <h3>{{ item.organisation }}</h3>

            <ul>
              <li
                v-for="point in item.description"
                :key="point"
              >
                {{ point }}
              </li>
            </ul>
          </div>

          <div class="experience-node-wrap">
            <span :class="['experience-node', `experience-node-${item.glow}`]">
              <span class="experience-node-inner"></span>
            </span>
          </div>

          <div class="experience-date">
            {{ item.period }}
          </div>
        </article>
      </div>
    </section>

    <section class="experience-bottom-bar">
      <BottomBar :current-date-time="currentDateTime" />
    </section>
  </main>
</template>