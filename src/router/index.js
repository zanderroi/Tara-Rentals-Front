import { createRouter, createWebHashHistory } from "vue-router";

import CustomerHome from "../views/customer/CustomerHome.vue";
import LandingPage from "../views/LandingPage.vue";
import CustomerLogin from "@/views/customer/LoginView.vue";
import CustomerRegister from "@/views/Auth/CustomerRegister.vue";
import OwnerRegister from "@/views/Auth/OwnerRegister.vue";
import TruckerRegister from "@/views/Auth/TruckerRegister.vue";
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
    path:"/Auth/CustomerRegister",
    name: "CustomerRegister",
    component: CustomerRegister,
  },
  {
    path: "/Auth/LoginPage",
    name: "UserLogin",
    component: UserLogin,
  },
  {
    path:"/Auth/OwnerRegister",
    name:"OwnerRegister",
    component: OwnerRegister,
  },
  {
    path:"/Auth/TruckerRegister",
    name:"TruckerRegister",
    component: TruckerRegister,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
