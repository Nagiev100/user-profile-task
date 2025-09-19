import { defineStore } from 'pinia'
import type { UserTypes } from '../types/userTypes'

export const useUserStore = defineStore('user', {
    state: (): { user: UserTypes | null } => ({
        user: null,
    }),
    actions: {
        initializeUser() {
            this.user = {
                name: 'Вюсал',
                avatar: 'https://i.pravatar.cc/150?img=3',
                age: 26,
            }
        },
    },
})
