import { LAND_PAGE } from '@/core/constants'
import i18n from '@/i18n'

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
      name: i18n.t('首页')
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../Login.vue'),
    meta: {
      name: i18n.t('登录')
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../Register.vue'),
    meta: {
      name: i18n.t('注册')
    }
  },
  {
    path: '/reset-password',
    name: 'ResetPassword',
    component: () => import('../ResetPassword.vue'),
    meta: {
      name: i18n.t('重置密码')
    }
  },
  {
    path: '/agreement',
    name: 'Agreement',
    component: () => import('../Agreement.vue'),
    meta: {
      name: i18n.t('服务协议')
    }
  },
  {
    path: '/error',
    name: 'Error',
    component: () => import('../Error.vue'),
    meta: {
      name: i18n.t('异常')
    }
  }
]
