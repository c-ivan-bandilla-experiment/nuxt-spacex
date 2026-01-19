<template>
    <Table :items="items" :columns="columns" v-bind="$attrs">
        <template #cell-name="{ item }">
            <NuxtLink :to="{ name: 'rocket-show', params: { id: item.id } }">
                {{ item.name }}
            </NuxtLink>
        </template>
        <template #cell-first_flight="{ item }">
            {{
                item.first_flight
                    ? new Date(item.first_flight).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
            })
            : '—'
            }}
        </template>
        <template v-if="showRemove" #cell-actions="{ item }">
            <v-btn icon="mdi-delete" variant="text" size="small" color="error" @click="$emit('remove', item.id)" />
        </template>
    </Table>
</template>

<script setup lang="ts">
import type { TableColumn } from './Table.vue'

const props = defineProps<{
    items: any[]
    showRemove?: boolean
}>()

defineEmits<{
    remove: [id: string]
}>()

const columns = computed<TableColumn[]>(() => {
    const cols: TableColumn[] = [
        { key: 'name', label: 'Name' },
        { key: 'first_flight', label: 'First Flight' },
    ]
    if (props.showRemove) {
        cols.push({ key: 'actions', label: 'Actions' })
    }
    return cols
})
</script>
