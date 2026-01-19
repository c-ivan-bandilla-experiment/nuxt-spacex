import { defineStore } from 'pinia'

export const useFavoritesStore = defineStore('favorites', {
    state: () => ({
        rocketIds: [] as string[],
    }),
    getters: {
        isFavorite: (state) => (id: string) => state.rocketIds.includes(id),
        count: (state) => state.rocketIds.length,
    },
    actions: {
        toggle(id: string) {
            const idx = this.rocketIds.indexOf(id)
            if (idx !== -1) {
                this.rocketIds.splice(idx, 1)
            } else {
                this.rocketIds.push(id)
            }
            this.saveToStorage()
        },
        add(id: string) {
            if (!this.rocketIds.includes(id)) {
                this.rocketIds.push(id)
                this.saveToStorage()
            }
        },
        remove(id: string) {
            const idx = this.rocketIds.indexOf(id)
            if (idx !== -1) {
                this.rocketIds.splice(idx, 1)
                this.saveToStorage()
            }
        },
        loadFromStorage() {
            if (import.meta.client) {
                const stored = localStorage.getItem('favoriteRockets')
                if (stored) {
                    try {
                        this.rocketIds = JSON.parse(stored)
                    } catch {
                        this.rocketIds = []
                    }
                }
            }
        },
        saveToStorage() {
            if (import.meta.client) {
                localStorage.setItem('favoriteRockets', JSON.stringify(this.rocketIds))
            }
        },
    },
})
