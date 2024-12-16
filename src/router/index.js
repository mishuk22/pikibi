import * as VueRouter from "vue-router";
import MainPage from "@/components/pages/MainPage.vue";
import PostsPage from "@/components/pages/PostsPage.vue";
import RatingPage from "@/components/pages/RatingPage.vue";
import SubPage from "@/components/pages/SubPage.vue";
import CreatePage from "@/components/pages/CreatePage.vue";
import ProfilePage from "@/components/pages/ProfilePage.vue";
import HelpPage from "@/components/pages/HelpPage.vue";
import PostDetails from "@/components/pages/PostDetails.vue"; // Импортируем компонент с деталями поста

export default VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "MainPage",
      component: MainPage,
    },
    {
      path: "/posts",
      name: "PostsPage",
      component: PostsPage,
    },
    {
      path: "/rating",
      name: "RatingPage",
      component: RatingPage,
    },
    {
      path: "/subs",
      name: "SubPage",
      component: SubPage,
    },
    {
      path: "/create",
      name: "CreatePage",
      component: CreatePage,
    },
    {
      path: "/profile",
      name: "ProfilePage",
      component: ProfilePage,
    },
    {
      path: "/help",
      name: "HelpPage",
      component: HelpPage,
    },
    // Новый маршрут для страницы с подробным просмотром поста
    {
      path: "/post/:id", // Параметр id для поста
      name: "PostDetails",
      component: PostDetails,
      props: true, // Позволяет передавать параметр id как prop в компонент
    },
  ],
});
