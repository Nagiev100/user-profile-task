import { createRouter, createWebHistory } from 'vue-router'
import UserProfilePage from '../pages/UserProfilePage/UserProfilePage.vue'

const routes = [
    {
        path: '/',
        name: 'UserProfile',
        component: UserProfilePage,
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
