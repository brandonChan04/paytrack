import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import InvoiceView from "../views/InvoiceView.vue";
import Signup from "../views/Signup.vue";
import Startup from "../views/Startup.vue";
import Login from "../views/Login.vue";

const routes = [
  {
    path: "/",
    name: "Startup",
    component: Startup,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/invoice/:invoiceId",
    name: "Invoice",
    component: InvoiceView,
  },
];

const router = createRouter({
history: createWebHistory(),
  routes,
});

export default router;
