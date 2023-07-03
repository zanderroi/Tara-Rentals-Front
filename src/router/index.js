import { createRouter, createWebHashHistory } from "vue-router";

import CustomerHome from "../views/customer/CustomerHome.vue";
import LandingPage from "../views/LandingPage.vue";
import CustomerLogin from "@/views/customer/LoginView.vue";
import CustomerRegister from "@/views/customer/RegisterView.vue";
import UserLogin from "@/views/Auth/LoginPage.vue";

const routes = [
  {
    path: "/",
    name: "landing",
    component: LandingPage,
    meta: { requiresAuth: false },
  },
  {
    path: "/customer",
    name: "CustomerHome",
    component: CustomerHome,
  },
  {
    path: "/customer/LoginView", // Updated path
    name: "CustomerLogin",
    component: CustomerLogin,
  },
  {
    path:"/customer/Register",
    name: "CustomerRegister",
    component: CustomerRegister,
  },
  {
    path: "/Auth/LoginPage",
    name: "UserLogin",
    component: UserLogin,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
