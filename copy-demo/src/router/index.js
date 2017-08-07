import App from '../App'

export default ([
  {
    path: '/',
    component: App,
    children: [
      {
        path: '/home',
        component: resolve => require(['../pages/home/'], resolve)
      },
      {
        path: '/login',
        meta: { auth: false },
        component: resolve => require(['../pages/login/'], resolve)
      },
      {
        path: '/signout',
        component: resolve => require(['../pages/signout/'], resolve)
      },
      {
        path: '/',
        component: resolve => require(['../pages/index/'], resolve)
      },

    ]
  }
])
