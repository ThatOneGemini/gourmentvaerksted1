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
    width: 200px;
    height: 110px;

    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 10px;

    cursor: pointer;

    img {
        width: 40px;
        height: 50px;
    }

    span {
        font-size: 12px;
        font-weight: 600;
        color: var(--text-color);
        margin-top: 10px;
        height: 50px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}

.active {
    background-color: var(--secondary-btn);
}
</style>