import { createRouter, createWebHistory } from 'vue-router'
// import { start, close } from '@/utils/nprogress'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// router.beforeEach((to, from) => {
//   start()
// })

// router.afterEach(() => {
//   close()
// })

export default router