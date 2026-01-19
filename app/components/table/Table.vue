<template>
	<v-table :class="[attrs.class]" fixed-header v-bind="attrs">
		<thead>
			<tr>
				<th v-for="col in columns" :key="col.key">{{ col.label }}</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="item in items" :key="item[rowKey]">
				<td v-for="col in columns" :key="col.key">
					<slot :name="`cell-${col.key}`" :item="item" :value="item[col.key]">
						{{ item[col.key] }}
					</slot>
				</td>
			</tr>
		</tbody>
	</v-table>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue'

export interface TableColumn {
	key: string
	label: string
}

const props = defineProps<{
	items: Record<string, any>[]
	columns: TableColumn[]
	rowKey?: string
	pending?: boolean
	error?: string | object | null
}>()

const attrs = useAttrs()

const rowKey = computed(() => props.rowKey ?? 'id')
</script>

<style src="./table.scss" lang="scss" scoped></style>
