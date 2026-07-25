import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import SkillsView from '../views/SkiilsView.vue'
import ExperienceView from '../views/ExperienceView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/regexPage',
      name: 'regexPage',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RegexPageView.vue'),
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
    }
  ],
})

export default router
