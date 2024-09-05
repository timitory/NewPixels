import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Navbar from '@/components/Navbar/Navbar.vue'
import Home from '@/views/LandingPage/Home.vue'
import Login from '@/views/Login.vue'
import SignUP from '@/views/SignUp/SignUP.vue'
import FAQ from '@/components/Faq.vue';
import PasswordReset from '@/views/PasswordReset.vue'
import NewPassword from '@/views/NewPassword.vue'
import PasswordInfo from '@/views/PasswordInfo.vue'
import Contact from '@/views/Contact.vue'

const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/navbar',
    name: 'navbar',
    component: Navbar
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUP
  },
  {
    path: '/faq',
    name: 'faq',
    component: FAQ
  },
  // {
  //   path: '/faq',
  //   name: 'faq',
  //   component: FAQ
  // },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/forgotpassword',
    name: 'forgotpassword',
    component: PasswordReset
  },
  {
    path: '/newpassword',
    name: 'newpassword',
    component: NewPassword
  },
  {
    path: '/passwordinfo',
    name: 'passwordinfo',
    component: PasswordInfo
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
