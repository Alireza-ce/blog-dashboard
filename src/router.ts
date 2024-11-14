import { createWebHistory, createRouter } from "vue-router";
import Login from "./modules/auth/views/Login.vue";
import Register from "./modules/auth/views/Register.vue";
import Articles from "./modules/dashboard/veiws/Articles.vue";
import Dashboard from "./modules/dashboard/veiws/Dashboard.vue";

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
  {
    path: "/articles",
    component: Dashboard,
    children: [
      {
        path: "",
        component: Articles,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
