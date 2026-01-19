<template>
	<div class="footer">
		<!-- <button class="back-button" @click="goBack">Back</button> -->
	</div>
</template>

<script setup lang="ts">
import { useNavigation } from '~/composables/useNavigation'

const { goBack } = useNavigation()
</script>

<style scoped>
.footer {
	padding: 1rem;
	text-align: center;
}

.back-button {
	padding: 0.5rem 1rem;
	background: #007bff;
	color: white;
	border: none;
	border-radius: 4px;
	cursor: pointer;
}

.back-button:hover {
	background: #0056b3;
}
</style>
