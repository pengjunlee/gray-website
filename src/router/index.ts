import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: []
})

export const toRoute = (path: any ): void => {
  router.push(path)
}

export default router
