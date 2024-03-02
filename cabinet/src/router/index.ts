import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "",
      component: () => import("../layouts/FullScreen.vue"),
      children: [
        {
          path: "auth",
          name: "Auth",
          component: () => import("../layouts/AuthLayout.vue"),
          children: [
            {
              path: "login",
              name: "Login",
              component: () => import("../views/auth/sign-in.vue")
            },
            {
              path: "registration",
              name: "Registration",
              component: () => import("../views/auth/sign-up.vue")
            }
          ]
        }
      ]
    }
  ]
});

export default router;
