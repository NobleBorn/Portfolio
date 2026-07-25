<script setup lang="ts">
import BottomBar from '@/components/bottom-bar.vue'
import { useCurrentDateTime } from '@/composables/useCurrentDateTime'
import '@/assets/skills.css'

const { currentDateTime } = useCurrentDateTime()

type SkillType = 'core' | 'proficient' | 'familiar'

type SkillNode = {
  name: string
  x: number
  y: number
  type: SkillType
  center?: boolean
}

type SkillCluster = {
  title: string
  className: string
  nodes: SkillNode[]
}

const skillClusters: SkillCluster[] = [
  {
    title: 'Backend',
    className: 'skill-cluster-backend',
    nodes: [
      { name: 'Backend', x: 50, y: 50, type: 'core', center: true },
      { name: 'Java', x: 20, y: 32, type: 'core' },
      { name: 'Spring Boot', x: 38, y: 16, type: 'core' },
      { name: 'Python', x: 72, y: 18, type: 'core' },
      { name: 'FastAPI', x: 86, y: 38, type: 'proficient' },
      { name: 'SQL', x: 26, y: 76, type: 'core' },
      { name: 'REST APIs', x: 64, y: 82, type: 'core' },
      { name: 'JSON', x: 86, y: 68, type: 'familiar' },
    ],
  },
  {
    title: 'Frontend',
    className: 'skill-cluster-frontend',
    nodes: [
      { name: 'Frontend', x: 50, y: 50, type: 'core', center: true },
      { name: 'Vue', x: 18, y: 24, type: 'core' },
      { name: 'JavaScript', x: 36, y: 10, type: 'core' },
      { name: 'TypeScript', x: 72, y: 18, type: 'core' },
      { name: 'React', x: 86, y: 36, type: 'proficient' },
      { name: 'HTML', x: 26, y: 74, type: 'core' },
      { name: 'CSS', x: 64, y: 82, type: 'core' },
      { name: 'PrimeVue', x: 86, y: 68, type: 'familiar' },
    ],
  },
  {
    title: 'Tools',
    className: 'skill-cluster-tools',
    nodes: [
      { name: 'Tools', x: 50, y: 50, type: 'core', center: true },
      { name: 'Git', x: 22, y: 26, type: 'core' },
      { name: 'GitHub', x: 38, y: 10, type: 'core' },
      { name: 'Docker', x: 70, y: 18, type: 'proficient' },
      { name: 'Postman', x: 86, y: 40, type: 'familiar' },
      { name: 'VS Code', x: 28, y: 78, type: 'core' },
      { name: 'Agile', x: 62, y: 86, type: 'proficient' },
      { name: 'Linux', x: 86, y: 74, type: 'familiar' },
    ],
  },
]

/**
 * These are page-level spine segments.
 * They create the diagonal “milky way” line:
 * top-left Backend -> middle Frontend -> bottom-right Tools
 */

function getConnections(nodes: SkillNode[]): [SkillNode, SkillNode][] {
  const center = nodes.find((node) => node.center)

  if (!center) {
    return []
  }

  return nodes
    .filter((node) => !node.center)
    .map((node) => [center, node])
}
</script>

<template>
  <main class="skills-page">
    <section class="skills-scene">
      <header class="skills-header">
        <h1>SKILLS</h1>
        <span class="skills-sparkle">✦</span>
      </header>

      <!-- Global diagonal spine -->
      <svg
        class="skills-spine-lines"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          class="skills-spine-glow"
          d="M 22 24 C 32 34, 40 52, 52 48 S 68 54, 82 76"
        />

        <path
          class="skills-spine-core"
          d="M 22 24 C 32 34, 40 52, 52 48 S 68 54, 82 76"
        />

        <path
          class="skills-spine-sparkles"
          d="M 22 24 C 32 34, 40 52, 52 48 S 68 54, 82 76"
        />
      </svg>

      <!-- Skill clusters -->
      <section
        v-for="cluster in skillClusters"
        :key="cluster.title"
        :class="['skill-cluster', cluster.className]"
      >
        <svg
          class="cluster-lines"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <line
            v-for="(connection, index) in getConnections(cluster.nodes)"
            :key="index"
            :x1="connection[0].x"
            :y1="connection[0].y"
            :x2="connection[1].x"
            :y2="connection[1].y"
            class="skill-line"
          />
        </svg>

        <div
          v-for="node in cluster.nodes"
          :key="node.name"
          class="skill-node-wrapper"
          :style="{ left: `${node.x}%`, top: `${node.y}%` }"
        >
          <span
            :class="[
              'skill-node',
              `skill-node-${node.type}`,
              { 'skill-node-center': node.center },
            ]"
          ></span>

          <span
            :class="[
              'skill-name',
              { 'skill-name-center': node.center },
            ]"
          >
            {{ node.name }}
          </span>
        </div>
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
    </section>

    <section class="skills-bottom-bar">
      <BottomBar :current-date-time="currentDateTime" />
    </section>
  </main>
</template>