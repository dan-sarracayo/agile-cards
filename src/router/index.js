import { createRouter, createWebHistory } from "vue-router";
import CardsView from "../views/CardsView.vue";
import SingleCardView from "../views/SingleCardView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "cards",
      component: CardsView,
    },
    {
      path: "/:cardid",
      name: "card",
      component: SingleCardView,
      props: true,
    },
  ],
});

export default router;
