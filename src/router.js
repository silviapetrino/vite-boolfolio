import { createRouter, createWebHistory } from "vue-router";

import Home from './pages/Home.vue';
import Projects from './pages/Projects.vue';
import ProjectDetail from './pages/ProjectDetail.vue';
import Error404 from './pages/Error404.vue';

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: 'active',
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects
    },
    {
      path: "/project-detail/:slug",
      name: "ProjectDetail",
      component: ProjectDetail
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error-404',
      component: Error404
    }
  ]
});

export { router };