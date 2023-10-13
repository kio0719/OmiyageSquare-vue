import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/authentications/Login.vue';
import Top from '../views/contents/Top.vue';

const routes = [
  { path: '/', name: "login", component: Login },
  { path: '/top', name: "top", component: Top }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
