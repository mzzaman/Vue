/* eslint-disable no-unused-vars */
import { createRouter, createWebHistory } from 'vue-router'
import sourceData from '@/data.json'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/destination/:id/:slug',
      name: 'destination.show',
      component: () => import('@/views/DestinationView.vue'),
      props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),
      beforeEnter(to, from) {
        const exist = sourceData.destinations.find(
          (destination) => destination.id === parseInt(to.params.id)
        )
        if (!exist) {
          return {
            name: 'NotFound',
            params: { pathMatch: to.path.split('/').slice(1) },
            query: to.query,
            hash: to.hash
          }
        }
      },
      children: [
        {
          path: ':experienceSlug',
          name: 'experience.show',
          component: () => import('@/views/ExperienceShow.vue'),
          props: (route) => ({ ...route.params, id: parseInt(route.params.id) })
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFound.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return (
      savedPosition ||
      new Promise((resolve) => {
        setTimeout(() => resolve({ top: 0, behavior: 'smooth' }), 300)
      })
    )
  }
})

export default router
