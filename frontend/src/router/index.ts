import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import SkillsView from '../views/SkillsView.vue'
import ExperienceView from '../views/ExperienceView.vue'
import ContactView from '../views/ContactView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, top: 24 }
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
      {
        path: '/projects',
        name: 'projects',
        component: ProjectsView,
    },
    {
        path: '/skills',
        name: 'skills',
        component: SkillsView,
    },
    {
        path: '/experience',
        name: 'experience',
        component: ExperienceView,
    },
    {
        path: '/contact',
        name: 'contact',
        component: ContactView,
    }

  ],
})

export default router
