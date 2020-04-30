
const routes = [
  {
    path: '/pendonor',
    component: () => import('layouts/MainUser.vue'),
    children: [
      { path: '', component: () => import('pages/pendonor/Dashboard.vue') },
      { path: 'me', component: () => import('pages/pendonor/Dashboard.vue') },
      { path: 'rekap', component: () => import('pages/pendonor/Rekapdata.vue') },
      { path: 'add', component: () => import('pages/pendonor/Adddata.vue') },
      { path: 'edit', component: () => import('pages/pendonor/Suntingdata.vue') }
    ]
  },
  {
    path: '/pmi',
    component: () => import('layouts/MainAdmin.vue'),
    children: [
      { path: '', component: () => import('pages/pmi/Dashboard.vue') },
      { path: 'me', component: () => import('pages/pmi/Dashboard.vue') },
      { path: 'rekap', component: () => import('pages/pmi/Rekapdata.vue') },
      { path: 'buy', component: () => import('pages/pmi/Buydata.vue') },
      { path: 'edit', component: () => import('pages/pmi/Suntingdata.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/AccessUser'),
    children: [
      { path: '', component: () => import('pages/usersaccess/Login.vue') },
      { path: 'auth/Login', component: () => import('pages/usersaccess/Login.vue') },
      { path: 'auth/registrasi', component: () => import('pages/usersaccess/Registrasi.vue') }
    ]
  }
]

if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
