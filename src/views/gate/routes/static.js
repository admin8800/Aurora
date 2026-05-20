import { LAND_PAGE } from '@/core/constants'

export default [
  {
    path: '/',
    name: 'Root',
    redirect: LAND_PAGE === 'index' ? '/home' : '/login'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../Home.vue'),
    meta: {
      nameKey: '首页'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../Login.vue'),
    meta: {
      nameKey: '登录'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../Register.vue'),
    meta: {
      nameKey: '注册'
    }
  },
  {
    path: '/reset-password',
    name: 'ResetPassword',
    component: () => import('../ResetPassword.vue'),
    meta: {
      nameKey: '重置密码'
    }
  },
  {
    path: '/agreement',
    name: 'Agreement',
    component: () => import('../Agreement.vue'),
    meta: {
      nameKey: '服务协议'
    }
  },
  {
    path: '/error',
    name: 'Error',
    component: () => import('../Error.vue'),
    meta: {
      nameKey: '异常'
    }
  }
]
