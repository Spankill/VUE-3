import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Minerals from '../views/MineralsView.vue'
import Post from "../views/PostView.vue";
import Projects from "../views/ProjectsView.vue";
import Users from "../views/UsersView.vue";
import About from "../views/AboutView.vue";
import Faq from "../views/FaqView.vue";
import Login from "../views/LoginView.vue";
import Register from "../views/RegisterView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/minerals",
      name: "Minerals",
      component: Minerals
    },
    {
      path: "/post",
      name: "Post",
      component: Post
    },
    {
      path: "/projects",
      name: "Projects",
      component: Projects
    },
    {
      path: "/users",
      name: "Users",
      component: Users
    },
    {
      path: "/about",
      name: "About",
      component: About
    },
    {
      path: "/faq",
      name: "Faq",
      component: Faq
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/register",
      name: "Register",
      component: Register
    },

  ],
});


export default router;
