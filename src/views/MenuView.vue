<script setup>
import { onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';

import { useMenu } from '../composables/useMenu.js';

import SearchBar from '../components/SearchBar.vue';
import FoodCard from '../components/FoodCard.vue';
import BackButton from '../components/BackButton.vue';

const route = useRoute();

const { foods, loadFoods } = useMenu();

onMounted(() => {
    loadFoods();
});

setTimeout(() => {
    console.log(JSON.stringify(foods.value, null, 2));
}, 2000);

const categoryId = Number(route.params.category);

const filteredFoods = computed(() => {
    return foods.value.filter(
        foods => Number(foods.categoryId) === Number(route.params.category)
    );
});

</script>

<template>

    <div class="menu-container">
        <BackButton />
    
        <h2>Wok Pot Thai</h2>
    </div>

    <div class="menu">
        <SearchBar />

        <div class="food-list">
            <FoodCard 
            v-for="food in filteredFoods" 
            :key="food.id" 
            :food="food" 
            />
        </div>

    </div>
</template>