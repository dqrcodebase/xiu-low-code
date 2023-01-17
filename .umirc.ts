export default {
  routes: [
    {
      path: '/design',
      component: '@/layouts/EditLayout/EditLayout',
      routes: [
        { path: '', component: '@/pages/Design/Design' },
      ],
    },
    {

      path: '/',
      component: '@/layouts/BasicLayout/BasicLayout',
      routes: [
        { path: '/index', component: '@/pages/index/index' },
      ],
    },
  ],
}

