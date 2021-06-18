import Vue from 'vue';
import Router from "vue-router";
import Home from "views/home/Home";
import Category from "views/category/Category";
import Car from "views/car/Car";
import Profile from "views/profile/Profile";

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/car',
    component: Car
  },
  {
    path: '/profile',
    component: Profile
  },
]

const router = new Router({
  routes,
  mode: 'history'
})

export default router