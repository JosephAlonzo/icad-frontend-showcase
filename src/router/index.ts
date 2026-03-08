// router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'
import BuildingPage from '@/views/BuildingPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // ══ PUBLIC ══
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },

    { path: '/demarches', component: BuildingPage, name: 'Demarches' },
    { path: '/faq', component: () => import('@/views/FrequenQuestionsView.vue'), name: 'Faq' },
    { path: '/operateurs', component: BuildingPage, name: 'Operateurs' },
    { path: '/actualites', component: BuildingPage, name: 'Actualites' },
    { path: '/statistiques', component: BuildingPage, name: 'Statistiques' },
    { path: '/a-propos', component: BuildingPage, name: 'A propos' },

    // ══ DASHBOARD ══
    {
      path: '/dashboard',
      component: () => import('@/layouts/DashboardLayout.vue'),
      meta: { requiresAuth: true, hiddenLayout: true },
      children: [
        {
          path: '',
          name: 'dashboard',
          component: () => import('@/views/DashboardView.vue'),
          meta: { requiresAuth: true, hiddenLayout: true },
        },
        {
          path: '/dashboard/my-animals',
          name: 'dashboard-animals',
          component: () => import('@/views/MyAnimalsView.vue'),
          meta: { requiresAuth: true, hiddenLayout: true },
        },
        {
          path: '/dashboard/documents',
          name: 'dashboard-documents',
          component: BuildingPage,
          meta: { requiresAuth: true, hiddenLayout: true },
        },
        {
          path: '/dashboard/notifications',
          name: 'dashboard-notifications',
          component: BuildingPage,
          meta: { requiresAuth: true, hiddenLayout: true },
        },

        // ══ DÉMARCHES ══
        {
          path: '/dashboard/lost-found',
          name: 'dashboard-lost-found',
          component: BuildingPage,
          meta: { requiresAuth: true, hiddenLayout: true },
        },
        {
          path: '/dashboard/transfer',
          name: 'dashboard-transfer',
          component: BuildingPage,
          meta: { requiresAuth: true, hiddenLayout: true },
        },
        {
          path: '/dashboard/id-card/:id?',
          name: 'dashboard-id-card',
          component: () => import('@/views/MyIdCardsAnimalsView.vue'),
          meta: { requiresAuth: true, hiddenLayout: true },
        },
        {
          path: '/dashboard/update-info',
          name: 'dashboard-update-info',
          component: BuildingPage,
          meta: { requiresAuth: true, hiddenLayout: true },
        },

        // ══ COMPTE ══
        {
          path: '/dashboard/profile',
          name: 'dashboard-profile',
          component: () => import('@/views/ProfileView.vue'),
          meta: { requiresAuth: true, hiddenLayout: true },
        },
        {
          path: '/dashboard/faq',
          name: 'dashboard-faq',
          component: () => import('@/views/FrequenQuestionsView.vue'),
          meta: { requiresAuth: true, hiddenLayout: true },
        },
      ],
    },
  ],
})

// ══ NAVIGATION GUARD ══
router.beforeEach((to) => {
  const authStore = useAuthStore()
  authStore.restoreSession()

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    return { name: 'home' }
  }
})

export default router
