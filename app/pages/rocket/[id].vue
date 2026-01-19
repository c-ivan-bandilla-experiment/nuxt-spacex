<template>
	<v-container>
		<div v-if="pending" class="d-flex justify-center py-8">
			<v-progress-circular indeterminate color="primary" />
		</div>
		<div v-else-if="error">Error: {{ error }}</div>
		<div v-else>
			<hgroup class="w-100 mt-3 mb-16">
				<div class="title-wrapper">
					<h2 class="text-center text-h1 mb-2 font-weight-medium text-capitalize">
						{{ rocket?.name }}
					</h2>
					<v-btn :prepend-icon="isFavorite ? 'mdi-star' : 'mdi-star-outline'" variant="text" size="large"
						:color="isFavorite ? 'amber' : 'grey'" @click="toggleFavorite"
						:class="['favorite-btn justify-start', { 'is-favorited': isFavorite }]">
						<span class="favorite-text">{{ isFavorite ? 'Remove from favorites' : 'Add to favorites'
						}}</span>
					</v-btn>
				</div>

				<div class="">
					<p class="text-center text-h4">
						<small>First launch</small>
						|
						<time class="mb-8 font-weight-medium" datetime="{{ rocket?.first_flight }}">
							{{
								new Date(rocket?.first_flight).toLocaleString('en-US', {
									month: 'long',
									day: 'numeric',
									year: 'numeric',
								})
							}}
						</time>
					</p>
				</div>
			</hgroup>

			<p class="text-h4 text-pretty" style="text-wrap: pretty">
				{{ rocket?.description }}
			</p>

			<div class="stats-container mt-10 ml-n2 mr-n2">
				<div class="stat-item">
					<v-icon icon="mdi-rocket-launch" size="48" class="stat-icon" />
					<span class="stat-value">{{ rocket?.stages }} stages</span>
				</div>
				<div class="stat-divider"></div>
				<div class="stat-item">
					<v-icon icon="mdi-arrow-expand-vertical" size="48" class="stat-icon" />
					<span class="stat-value">{{ rocket?.height?.feet }} ft
						<div class="text-caption text-end">height</div>
					</span>
				</div>
				<div class="stat-divider"></div>
				<div class="stat-item">
					<v-icon icon="mdi-diameter" size="48" class="stat-icon" />
					<span class="stat-value">{{ rocket?.diameter?.feet }} ft
						<div class="text-caption text-end">diameter</div>
					</span>
				</div>
				<div class="stat-divider"></div>
				<div class="stat-item">
					<v-icon icon="mdi-weight" size="48" class="stat-icon" />
					<span class="stat-value">{{ formatMass(rocket?.mass?.lb) }}
						<div class="text-caption text-end">mass</div>
					</span>
				</div>
			</div>

			<!-- <DevOnly>
				{{ rocket }}
			</DevOnly> -->
		</div>
	</v-container>
</template>

<script lang="ts" setup>
import { useGetRocket } from '~/composables/services/rocket/useGetRocket'
import { useFavoritesStore } from '~/stores/useFavoritesStore'

definePageMeta({
	name: 'rocket-show',
})

const route = useRoute()
const rocketId = route.params.id as string
const { rocket, pending, error } = useGetRocket(rocketId)

const favoritesStore = useFavoritesStore()

onMounted(() => {
	favoritesStore.loadFromStorage()
})

const isFavorite = computed(() => favoritesStore.isFavorite(rocketId))

const toggleFavorite = () => {
	favoritesStore.toggle(rocketId)
}

const formatMass = (massLb: number | undefined) => {
	if (!massLb) return '—'
	if (massLb >= 1000000) {
		return `${(massLb / 2000).toLocaleString()} tons`
	}
	return `${massLb.toLocaleString()} lb`
}
</script>

<style scoped>
.title-wrapper {
	position: relative;
	width: 100%;
	text-align: center;
}

.title-wrapper h2 {
	display: inline-block;
}

.favorite-btn {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	margin-left: 0.5rem;
	width: 18rem;
}

/* Hide text when favorited, show on hover */
.favorite-btn.is-favorited .favorite-text {
	color: transparent;
	transition: color 0.2s ease;
}

.favorite-btn.is-favorited:hover .favorite-text {
	color: inherit;
}

.stats-container {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 200px;
}

.stat-item {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.75rem;
	padding: 1rem 2rem;
	flex: 1;
	height: 100%;
}

.stat-icon {
	opacity: 0.7;
	margin-right: 0.75rem;
}

.stat-value {
	font-size: 1.75rem;
	font-weight: 500;
}

.stat-divider {
	width: clamp(0.0625rem, 0.125rem + 0.001dvw, 0.5rem);
	height: 80%;
	background-color: rgba(128, 128, 128, 0.3);
}
</style>
