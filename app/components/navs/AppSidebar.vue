<template>
    <v-navigation-drawer v-model="drawer" :rail="rail" permanent @click="rail = false">
        <v-list density="compact" nav class="py-4">
            <v-list-item prepend-icon="mdi-home" title="Home" value="home" :to="{ name: 'index' }"></v-list-item>
            <v-list-item prepend-icon="mdi-star" title="Favorites" value="favorites"
                :to="{ name: 'favorites' }"></v-list-item>
        </v-list>

        <template v-slot:append>
            <div class="pa-2 d-flex justify-center">
                <v-btn :icon="rail ? 'mdi-chevron-right' : 'mdi-chevron-left'" variant="text"
                    @click.stop="rail = !rail"></v-btn>
            </div>
        </template>
    </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const drawer = ref(true)
const rail = ref(true)
</script>

<style scoped>
.v-navigation-drawer {
    border-right: 1px solid rgba(128, 128, 128, 0.2);
    position: fixed !important;
    height: 100vh !important;
    top: 0 !important;
}

nav.v-navigation-drawer {
    z-index: 1000 !important;
}
</style>
