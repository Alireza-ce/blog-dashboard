import { createWebHistory, createRouter } from "vue-router";
import Login from "./modules/auth/views/Login.vue";
import Register from "./modules/auth/views/Register.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
