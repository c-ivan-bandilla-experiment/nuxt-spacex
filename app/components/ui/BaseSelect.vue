<template>
    <select v-if="supportsBaseSelect" v-model="model" class="base-select" :name="name">
        <option v-for="item in items" :key="item.value" :value="item.value">
            <span class="icon">{{ item.icon }} &nbsp;</span>
            <span>{{ item.label }}</span>
        </option>
    </select>
    <v-select v-else v-model="model" :items="items" item-title="label" item-value="value" variant="outlined"
        density="compact" hide-details :style="fallbackStyle" />
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

export interface SelectItem {
    label: string
    value: string
    icon?: string
}

interface Props {
    modelValue: string
    items: SelectItem[]
    name?: string
    fallbackStyle?: string
}

const props = withDefaults(defineProps<Props>(), {
    name: '',
    fallbackStyle: 'max-width: 180px',
})

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
}>()

const model = computed({
    get: () => props.modelValue,
    set: (value: string) => emit('update:modelValue', value),
})

const supportsBaseSelect = ref(false)

onMounted(() => {
    // Feature detection for base-select
    supportsBaseSelect.value = CSS.supports('appearance', 'base-select')
})
</script>

<style scoped>
/* Base select modern styling */
.base-select,
.base-select::picker(select) {
    appearance: base-select;
}

.base-select {
    font-size: 14px;
    padding: 8px 12px;
    border: 1px solid rgba(0, 0, 0, 0.38);
    border-radius: 4px;
    background: transparent;
    cursor: pointer;
    min-width: 160px;
}

.base-select:hover {
    border-color: rgba(0, 0, 0, 0.87);
}

.base-select:focus {
    outline: none;
    border-color: rgb(var(--v-theme-primary));
    border-width: 2px;
}

.base-select button {
    appearance: none;
    background: none;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
}

.base-select::picker(select) {
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    padding: 4px;
}

/* Hide default checkmark */
.base-select option::before {
    display: none;
}

.base-select option {
    padding: 8px 12px;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
}

.base-select option:hover {
    background: rgba(0, 0, 0, 0.04);
}

.base-select option:checked {
    background: rgba(var(--v-theme-primary), 0.12);
}

.base-select option .icon {
    font-size: 1rem;
}

.base-select selectedoption {
    display: flex;
    align-items: center;
    gap: 8px;
}

.base-select selectedoption .icon {
    font-size: 1rem;
}
</style>
