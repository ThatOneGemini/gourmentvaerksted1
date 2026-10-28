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

<style scoped lang="scss">
.category-card {
    width: 80px;
    height: 80px;

    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 10px;

    cursor: pointer;

    img {
        width: 32px;
        height: 32px;
    }

    span {
        margin-top: 8px;
        height: 32px;
    }
}

.active {
    border-color: #007bff;
    background-color: #2d2d2d;
}
</style>