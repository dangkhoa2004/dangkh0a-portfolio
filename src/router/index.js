import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../screens/HomePage/HomePage.vue";
import AboutPage from "../screens/AboutPage/AboutPage.vue";
import ProjectsPage from "../screens/ProjectsPage/ProjectsPage.vue";
import ContactPage from "../screens/ContactPage/ContactPage.vue";

import { useLoadingStore } from "@/stores/loading";

const routes = [
  { path: "/", component: HomePage },
  { path: "/about", component: AboutPage },
  { path: "/projects", component: ProjectsPage },
  { path: "/contact", component: ContactPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

let loadingTimeout = null;

router.beforeEach((to, from, next) => {
  const loadingStore = useLoadingStore();

  loadingStore.setLoading(true);

  if (loadingTimeout) {
    clearTimeout(loadingTimeout);
    loadingTimeout = null;
  }

  next();
});

router.afterEach(() => {
  const loadingStore = useLoadingStore();

  loadingTimeout = setTimeout(() => {
    loadingStore.setLoading(false);
    loadingTimeout = null;
  }, 1000);
});

export default router;
