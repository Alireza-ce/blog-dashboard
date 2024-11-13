import { createWebHistory, createRouter } from "vue-router";
import Login from "./modules/auth/views/Login.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
