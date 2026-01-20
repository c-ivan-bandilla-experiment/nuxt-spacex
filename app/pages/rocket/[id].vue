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

			<div class="description-wrapper">
				<input type="checkbox" id="description-toggle" class="description-toggle" />
				<p ref="descriptionRef" class="text-h5 text-pretty rocket-description">
					{{ rocket?.description }}
				</p>
				<label v-if="isDescriptionClamped" for="description-toggle" class="toggle-label">
					<span class="see-more">See more</span>
					<span class="see-less">See less</span>
				</label>
			</div>

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
import { useTextOverflow } from '~/composables/ui/useTextOverflow'
import { GetRocketDocument } from '~/graphql/generated/graphql'

definePageMeta({
	name: 'rocket-show',
	middleware: ['validate-resource'],
	resourceValidation: {
		document: GetRocketDocument,
		getVariables: (params) => ({ rocketId: params.id }),
		isValid: (data) => Boolean(data?.rocket),
		errorMessage: 'Rocket not found',
	},
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

// Text overflow detection for see more/less toggle
const {
	elementRef: descriptionRef,
	isOverflowing: isDescriptionClamped,
} = useTextOverflow(() => rocket.value?.description, { lineClamp: 4 })
</script>

<style scoped>
/* Description toggle - See more/less */
.description-wrapper {
	position: relative;
}

.description-toggle {
	position: absolute;
	opacity: 0;
	pointer-events: none;
}

.rocket-description {
	text-wrap: pretty;
	display: -webkit-box;
	-webkit-line-clamp: 4;
	-webkit-box-orient: vertical;
	overflow: hidden;
	transition: all 0.3s ease;
}

/* Expanded state */
.description-toggle:checked~.rocket-description {
	-webkit-line-clamp: unset;
	display: block;
}

/* Toggle label styling */
.toggle-label {
	display: inline-flex;
	align-items: center;
	gap: 0.25rem;
	margin-top: 0.5rem;
	cursor: pointer;
	font-size: 0.875rem;
	font-weight: 500;
	color: rgb(var(--v-theme-primary));
	opacity: 0.85;
	transition: opacity 0.2s ease;
}

.toggle-label:hover {
	opacity: 1;
}

.toggle-label::after {
	content: '↓';
	transition: transform 0.3s ease;
}

/* Toggle text visibility */
.see-less {
	display: none;
}

.description-toggle:checked~.toggle-label .see-more {
	display: none;
}

.description-toggle:checked~.toggle-label .see-less {
	display: inline;
}

.description-toggle:checked~.toggle-label::after {
	content: '↑';
}

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
