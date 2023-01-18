const path = require('path');

export default {
  cssLoader: {
    localsConvention: 'camelCase',
  },
  lessLoader: {
    // 声明全局变量
    modifyVars: {
      hack: 'true; @import "~@/assets/styles/mixins.less";',
    }
  },
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {

      path: '/index',
      component: '@/layouts/BasicLayout/index',
      routes: [
        { path: '/index', component: '@/pages/index/index' },
      ],
    },
    {
      path: '/design',
      component: '@/layouts/EditLayout/index',
      routes: [
        { path: '/design', component: '@/pages/Design/index' },
      ],
    },

  ],
}

