import { createRouter, createWebHistory } from 'vue-router'
import UserProfilePage from '../../pages/UserProfilePage/UserProfilePage.vue'
import DefaultPage from '../../pages/DefaultPage/DefaultPage.vue'

export enum TabLink {
    USERPROFILE = '/',
    FAVORITE = '/favorite',
    SETTINGS = '/settings',
    HOME = '/home',
    CARD = '/card'
}

const routes = [
    { path: '/', name: 'UserProfile', component: UserProfilePage },
    { path: '/favorite', name: 'favorite', component: DefaultPage },
    { path: '/settings', name: 'settings', component: DefaultPage },
    { path: '/home', name: 'home', component: DefaultPage },
    { path: '/card', name: 'card', component: DefaultPage },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
