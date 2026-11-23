<script setup>

defineProps({
    category: Object,
    selected: Boolean
});

defineEmits(['select']);
</script>

<template>
    <div class="category-card"
    :class="{ active: selected }"
    @click="$emit('select', category)"
    >
        <img
        :src="category.icon"
        :alt="category.name"
        />

        <span>{{ category.name }}</span>
    </div>
</template>

