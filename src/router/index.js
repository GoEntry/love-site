import { createRouter, createWebHistory } from "vue-router"
import Home from "../pages/Home.vue"
import Story from "../pages/Story.vue"
import Memories from "../pages/Memories.vue"
import Love from "../pages/Love.vue"
import Together from "../pages/Together.vue"
import Letter from "../pages/Letter.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/story", component: Story },
    { path: "/memories", component: Memories },
    { path: "/love", component: Love },
    { path: "/together", component: Together },
    { path: "/letter", component: Letter }
  ]
})

export default router