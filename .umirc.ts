import { defineConfig } from 'umi';

export default {
  routes: [
    {
      path: '/',
      component: '@/layouts/BasicLayout/BasicLayout',
      routes: [
        { path: '/', component: '@/pages/index/index' },
      ],
    }, 
  ],
}

