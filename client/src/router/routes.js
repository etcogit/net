
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'me', component: () => import('pages/Me.vue') },
      { path: 'autour-de-moi', component: () => import('pages/AroundMe.vue') }
    ]
  },
  {
    path: '/nivelles',
    component: () => import('layouts/NivellesDefault.vue'),
    children: [
      { path: '', component: () => import('pages/nivelles/Home.vue') },
      { path: 'moi', component: () => import('pages/Me.vue') },
      { path: 'autour-de-moi', component: () => import('pages/AroundMe.vue') },
      { path: 'qui-sommes-nous', component: () => import('pages/nivelles/WhoWeAre.vue') },
      { path: 'dernieres-nouvelles', component: () => import('pages/nivelles/News.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
