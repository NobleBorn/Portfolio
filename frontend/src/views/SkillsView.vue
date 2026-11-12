<script setup lang="ts">
import BottomBar from '@/components/bottom-bar.vue'
import { useCurrentDateTime } from '@/composables/useCurrentDateTime'
import '@/assets/skills.css'

const { currentDateTime } = useCurrentDateTime()

type Skill = {
  name: string
  icon?: [string, string]
  monogram?: string
}

const skills: Skill[] = [
  { name: 'Python', icon: ['fab', 'python'] },
  { name: 'Java', icon: ['fab', 'java'] },
  { name: 'HTML', icon: ['fab', 'html5'] },
  { name: 'CSS', icon: ['fab', 'css3-alt'] },
  { name: 'TypeScript', monogram: 'TS' },
  { name: 'SQL', icon: ['fas', 'database'] },
  { name: 'React', icon: ['fab', 'react'] },
  { name: 'Vue', icon: ['fab', 'vuejs'] },
  { name: 'JUnit', icon: ['fas', 'vial'] },
  { name: 'REST APIs', icon: ['fas', 'network-wired'] },
  { name: 'AI', icon: ['fas', 'brain'] },
  { name: 'Docker', icon: ['fab', 'docker'] },
  { name: 'Git', icon: ['fab', 'git-alt'] },
  { name: 'Agile Development', icon: ['fas', 'arrows-rotate'] },
  { name: 'Software Testing', icon: ['fas', 'clipboard-check'] },
  { name: 'Object-Oriented Design', icon: ['fas', 'cubes'] },
  { name: 'System Integration', icon: ['fas', 'plug'] },
  { name: 'CI/CD', icon: ['fas', 'infinity'] },
  { name: 'RAG', icon: ['fas', 'book-open'] },
  { name: 'System Design', icon: ['fas', 'sitemap'] },
]
</script>

<template>
  <main class="skills-page">
    <section class="skills-scene">
      <header class="skills-header">
        <h1>SKILLS</h1>
        <span class="skills-sparkle" aria-hidden="true">✦</span>
      </header>

      <div class="skills-grid">
        <article v-for="skill in skills" :key="skill.name" class="skill-tile">
          <div class="skill-tile-face">
            <font-awesome-icon
              v-if="skill.icon"
              :icon="skill.icon"
              class="skill-icon"
              aria-hidden="true"
            />
            <span v-else class="skill-monogram" aria-hidden="true">{{ skill.monogram }}</span>
            <h2 class="skill-tile-name">{{ skill.name }}</h2>
          </div>
        </article>
      </div>
    </section>

    <section class="skills-bottom-bar">
      <BottomBar :current-date-time="currentDateTime" />
    </section>
  </main>
</template>
