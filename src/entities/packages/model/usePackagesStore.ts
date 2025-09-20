import {defineStore} from 'pinia'
import {PackagesTypes} from "@/entities/packages/types/packagesTypes";

export const usePackagesStore = defineStore('userPackages', {
    state: (): { packages: PackagesTypes[] | null } => ({
        packages: null,
    }),
    actions: {
        initializePackages() {
            this.packages = [
                {
                    id: "1",
                    packageName: "Tinderone Plus+",
                    description: "Безлимит лайков и многое другое!",
                },
                {
                    id: "2",
                    packageName: "Tinderone Gold",
                    description: "Узнай, кто тебя лайкнул и многое другое!",
                },
                {
                    id: "3",
                    packageName: "Tinderone Premium",
                    description: "Приоритет лайков, просмотр лайков и многое другое!"
                },
            ]
        },
    },
})
