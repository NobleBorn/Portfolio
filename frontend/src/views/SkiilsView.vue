<script setup lang="ts">
import '@/assets/skills.css'
import '@/assets/projects.css'
import BottomBar from '../components/bottom-bar.vue'
import { useCurrentDateTime } from '@/composables/useCurrentDateTime'

const { currentDateTime } = useCurrentDateTime()

type SkillType = 'core' | 'proficient' | 'familiar'

type SkillNode = {
  name: string
  x: number
  y: number
  type: SkillType
  center?: boolean
}

type SkillGroup = {
  title: string
  nodes: SkillNode[]
}

const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    nodes: [
      { name: 'Frontend', x: 50, y: 50, type: 'core', center: true },
      { name: 'Vue', x: 24, y: 28, type: 'core' },
      { name: 'JavaScript', x: 36, y: 18, type: 'core' },
      { name: 'TypeScript', x: 64, y: 18, type: 'core' },
      { name: 'React', x: 78, y: 30, type: 'proficient' },
      { name: 'HTML', x: 28, y: 74, type: 'core' },
      { name: 'CSS', x: 66, y: 76, type: 'core' },
      { name: 'PrimeVue', x: 80, y: 62, type: 'familiar' },
    ],
  },
  {
    title: 'Backend',
    nodes: [
      { name: 'Backend', x: 50, y: 50, type: 'core', center: true },
      { name: 'Java', x: 24, y: 28, type: 'core' },
      { name: 'Spring Boot', x: 36, y: 18, type: 'core' },
      { name: 'Python', x: 66, y: 18, type: 'core' },
      { name: 'FastAPI', x: 78, y: 30, type: 'proficient' },
      { name: 'SQL', x: 28, y: 74, type: 'core' },
      { name: 'REST APIs', x: 66, y: 76, type: 'core' },
      { name: 'JSON', x: 80, y: 62, type: 'familiar' },
    ],
  },
  {
    title: 'Tools',
    nodes: [
      { name: 'Tools', x: 50, y: 50, type: 'core', center: true },
      { name: 'Git', x: 24, y: 28, type: 'core' },
      { name: 'GitHub', x: 36, y: 18, type: 'core' },
      { name: 'Docker', x: 66, y: 18, type: 'proficient' },
      { name: 'Postman', x: 78, y: 30, type: 'familiar' },
      { name: 'VS Code', x: 28, y: 74, type: 'core' },
      { name: 'Agile', x: 66, y: 76, type: 'proficient' },
      { name: 'Linux', x: 80, y: 62, type: 'familiar' },
    ],
  },
]

function getConnections(nodes: SkillNode[]): [SkillNode, SkillNode][] {
  const center = nodes.find((node) => node.center)
  if (!center) return []

  return nodes
    .filter((node) => !node.center)
    .map((node) => [center, node])
}
</script>

<template>
  <main class="skills-page">
    <header class="projects-header">
      <div class="projects-heading"> 
        <h1>Skill Constellations</h1>
        <p>
            My technical skills grouped into frontend, backend, and tools.
        </p>
        </div>
    </header>

    <section class="skills-grid">
      <article
        v-for="group in skillGroups"
        :key="group.title"
        class="skills-constellation-card"
      >
        <div class="skills-card-header">
          <span class="skills-label">{{ group.title.toUpperCase() }}</span>
          <span class="sparkle">✦</span>
        </div>

        <div class="constellation-area">
          <svg
            class="constellation-lines"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <line
              v-for="(connection, index) in getConnections(group.nodes)"
              :key="index"
              :x1="connection[0].x"
              :y1="connection[0].y"
              :x2="connection[1].x"
              :y2="connection[1].y"
              class="skill-line"
            />
          </svg>

          <div
            v-for="node in group.nodes"
            :key="node.name"
            class="skill-node-wrapper"
            :style="{ left: `${node.x}%`, top: `${node.y}%` }"
          >
            <span
              :class="[
                'skill-node',
                `skill-node-${node.type}`,
                { 'skill-node-center': node.center }
              ]"
            ></span>

            <span
              :class="[
                'skill-name',
                { 'skill-name-center': node.center }
              ]"
            >
              {{ node.name }}
            </span>
          </div>
        </div>
      </article>
    </section>

    <div class="skills-legend">
      <div>
        <span class="legend-dot legend-core"></span>
        Core Skill
      </div>

      <div>
        <span class="legend-dot legend-proficient"></span>
        Proficient
      </div>

      <div>
        <span class="legend-dot legend-familiar"></span>
        Familiar
      </div>
    </div>

    <section class="skills-bottom-bar">
      <BottomBar :currentDateTime="currentDateTime" />
    </section>
  </main>
</template>