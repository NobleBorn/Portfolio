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
    title: 'Artificial Intelligence Intern',
    organisation: 'Chalmers University of Technology · Internship',
    glow: 'blue',
    description: [
      'AI Integration & Automation: Designed and integrated LLM- and RAG-based solutions into Chalmers’ TOPdesk service-management workflows, enabling automated 0-line support, intelligent knowledge retrieval, and more efficient ticket handling.',
      'Data Analysis & Optimization: Analyzed service-management workflows and ticket data to identify inefficiencies, improve structured data collection, and optimize support processes through AI-driven automation.',
      'Security & Data Privacy: Applied security and data privacy principles when developing AI-powered solutions, ensuring responsible handling of sensitive and personal data in enterprise environments.',
    ],
  },
  {
    period: '2026',
    title: 'Master’s Thesis – Evaluating Large Language Models for Text-to-SQL Generation',
    organisation: 'Chalmers University of Technology',
    glow: 'purple',
    description: [
      'Evaluated three Qwen3 large language models (3B, 22B, and 35B active parameters) on 300 Text-to-SQL test cases across varying query complexity levels.',
      'Designed and conducted 45,000 experimental executions using least-to-most prompting, SQL execution-based validation, and systematic failure analysis to assess accuracy and reliability.',
      'Identified key performance limitations, including schema-linking errors, systematic failures, and declining accuracy with increasing query complexity, demonstrating that larger models do not consistently outperform smaller ones.',
    ],
  },
  {
    period: '2025',
    title: 'Software Developer (AI & Automation)',
    organisation: 'Internship',
    glow: 'gold',
    description: [
      'AI Integration & Development: Explored and developed AI-driven solutions to identify individual skill gaps, extract competencies, and generate personalized learning pathways for professionals seeking upskilling or career transitions.',
      'Skills Analysis & Industry Alignment: Analyzed professional skill profiles and industry requirements to identify competency gaps and explore AI-based approaches for matching learners with relevant training opportunities.',
      'Cross-Functional Collaboration & Innovation: Collaborated within a cross-functional, agile team to investigate AI applications in professional education, evaluate technical approaches, and develop innovative solutions for Chalmers Upskill Academy.',
    ],
  },
  {
    period: '2024 – 2025',
    title: 'Programming Teacher',
    organisation: 'Hello World! · Part-time',
    glow: 'blue',
    description: [
      'Inspired and taught young people to develop their programming skills through engaging workshops and activities.',
      'Teaching programming in an entertaining and intuitive way.',
      'Improving course material and procedures.',
    ],
  },
  {
    period: '2023 – 2025',
    title: 'IT Manager',
    organisation: 'CHARM - Chalmers Studentkårs Arbetsmarknadsdagar',
    glow: 'purple',
    description: [
      'Provided technical support to companies encountering issues with the registration system',
      'Conducted extensive data management tasks using Excel, including organizing company data',
      'Cultivated valuable soft skills such as multitasking, stress management, teamwork, task organization and prioritization, improved communication, planning and adaptability',
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
