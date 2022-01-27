import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/components/Dashboard.vue";

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "/formlayout",
    name: "formlayout",
    component: () => import("@/components/FormLayoutDemo.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
