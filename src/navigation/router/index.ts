import {createRouter, createWebHistory} from 'vue-router'
import UserProfilePage from '../../pages/UserProfilePage/UserProfilePage.vue'
import DefaultPage from '../../pages/DefaultPage/DefaultPage.vue'
import {TabLink} from "../constants/constantsLink";

const routes = [
    {path: TabLink.USERPROFILE, name: 'UserProfile', component: UserProfilePage},
    {path: TabLink.FAVORITE, name: 'favorite', component: DefaultPage},
    {path: TabLink.SETTINGS, name: 'settings', component: DefaultPage},
    {path: TabLink.HOME, name: 'home', component: DefaultPage},
    {path: TabLink.CARD, name: 'card', component: DefaultPage},
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
