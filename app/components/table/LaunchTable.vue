<template>
    <Table :items="items" :columns="columns" v-bind="$attrs">
        <template #cell-mission_name="{ item }">
            {{ item.mission_name }}
        </template>
        <template #cell-launch_date_utc="{ item }">
            {{ new Date(item.launch_date_utc).toDateString() }}
        </template>
        <template #cell-launch_site="{ item }">
            {{ item.launch_site?.site_name_long }}
        </template>
        <template #cell-rocket="{ item }">
            <NuxtLink :to="{ name: 'rocket-show', params: { id: item.rocket?.rocket?.id } }">
                {{ item.rocket?.rocket?.name }}
            </NuxtLink>
        </template>
        <template #cell-details="{ item }">
            <div class="launch-desc">
                {{ item.details }}
            </div>
        </template>
    </Table>
</template>

<script setup lang="ts">
import type { TableColumn } from './Table.vue'

defineProps<{
    items: any[]
}>()

const columns: TableColumn[] = [
    { key: 'mission_name', label: 'Mission Name' },
    { key: 'launch_date_utc', label: 'Launch Date' },
    { key: 'launch_site', label: 'Launch Site' },
    { key: 'rocket', label: 'Rocket' },
    { key: 'details', label: 'Details' },
]
</script>

<style scoped>
.launch-desc {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 25ch;
}
</style>
