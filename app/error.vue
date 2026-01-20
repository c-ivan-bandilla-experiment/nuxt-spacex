<template>
    <v-app>
        <v-container class="error-page">
            <div class="error-content">
                <h1 class="error-code">{{ error?.statusCode || 500 }}</h1>
                <p class="error-message">{{ errorMessage }}</p>
                <NuxtLink to="/" class="home-link" @click="handleError">
                    <v-icon icon="mdi-arrow-left" size="small" />
                    Back to Home
                </NuxtLink>
            </div>
        </v-container>
    </v-app>
</template>

<script lang="ts" setup>
import type { NuxtError } from '#app'

const props = defineProps<{
    error: NuxtError
}>()

const errorMessage = computed(() => {
    if (props.error?.statusCode === 404) {
        return 'Page not found'
    }
    return props.error?.message || 'Something went wrong'
})

const handleError = () => clearError({ redirect: '/' })
</script>

<style scoped>
.error-page {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
}

.error-content {
    text-align: center;
}

.error-code {
    font-size: 8rem;
    font-weight: 200;
    line-height: 1;
    margin-bottom: 0.5rem;
    opacity: 0.8;
}

.error-message {
    font-size: 1.25rem;
    opacity: 0.7;
    margin-bottom: 2rem;
}

.home-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    color: inherit;
    opacity: 0.8;
    transition: opacity 0.2s ease;
}

.home-link:hover {
    opacity: 1;
}
</style>
