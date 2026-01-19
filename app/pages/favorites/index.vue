<template>
    <ClientOnly>
        <v-container>
            <h1 class="text-h3 mb-6">Favorite Rockets</h1>

            <div v-if="pending" class="d-flex justify-center py-8">
                <v-progress-circular indeterminate color="primary" />
            </div>

            <div v-else-if="error" class="text-error">Error loading rockets: {{ error }}</div>

            <div v-else-if="favoriteRockets.length === 0" class="text-center py-8">
                <v-icon icon="mdi-star-outline" size="64" class="mb-4 text-grey" />
                <p class="text-h6 text-grey">No favorite rockets yet</p>
                <p class="text-body-2 text-grey">
                    Visit a rocket page and click the star to add it to your favorites.
                </p>
            </div>

            <TableRocketTable v-else :items="favoriteRockets" show-remove @remove="handleRemove" />
        </v-container>
    </ClientOnly>
</template>

<script setup lang="ts">
import { useGetRockets } from '~/composables/services/rocket/useGetRockets'
import { useFavoritesStore } from '~/stores/useFavoritesStore'

definePageMeta({
    name: 'favorites',
    ssr: false,
})

const favoritesStore = useFavoritesStore()
const { rockets, pending, error } = useGetRockets()

onMounted(() => {
    favoritesStore.loadFromStorage()
})

const favoriteRockets = computed(() => {
    return rockets.value.filter((rocket) => rocket?.id && favoritesStore.isFavorite(rocket.id))
})

const handleRemove = (id: string) => {
    favoritesStore.remove(id)
}
</script>
