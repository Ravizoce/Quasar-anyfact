
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/home',
        component: () => import('pages/HomePage.vue'),
      },
      {
        path: '/error',
        component: () => import('pages/ErrorNotFound.vue')
      },
      {
        name: "about",
        path: '/about/:id*',
        props: true,
        component: () => import('pages/AboutPage.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
