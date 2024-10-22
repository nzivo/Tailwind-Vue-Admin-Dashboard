import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/auth/Login.vue";
import Register from "../views/auth/Register.vue";
import AuthLayout from "../layouts/AuthLayout.vue";
import ViewUsers from "../views/admin/users/Users.vue";
import AdminLayout from "../layouts/AdminLayout.vue";
import ProfileView from "../views/profile/ProfileView.vue";
import CalendarCard from "../components/calendar/CalendarCard.vue";
import Home from "../views/Dashboard/Home.vue";
import ErrorView from "../views/errors/ErrorView.vue";

const routes = [
  {
    path: "/home",
    name: "eCommerce",
    component: Home,
    meta: {
      title: "eCommerce Dashboard",
    },
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfileView,
    meta: {
      title: "Profile",
    },
  },
  {
    path: "/calendar",
    name: "calendar",
    component: CalendarCard,
    meta: {
      title: "Calendar",
    },
  },
  {
    path: "/auth",
    redirect: "/login",
    name: "auth",
    component: AuthLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Login,
      },
      {
        path: "/login",
        name: "login",
        component: Login,
      },
      {
        path: "/register",
        name: "register",
        component: Register,
      },
    ],
  },
  // Catch-all route for 404 Not Found
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: ErrorView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 };
  },
});

export default router;
