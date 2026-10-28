<script setup>
import { onMounted } from "vue";
import { useMenu } from "..composables/useMenu";

const { foods, loadFoods } = useMenu();

onMounted(() => {
    loadFoods();
});
</script>

<template>

    
    <div class="menu-grid">
        
        <FoodCard
        v-for="food in foods"
        :key="food.id"
        :food="food"
        />

    </div>
</template>