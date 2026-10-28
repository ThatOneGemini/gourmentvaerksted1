<script setup>
import { ref, onMounted } from 'vue';
import FoodCard from '../components/FoodCard.vue';
import { useCart } from '../composables/useCart.js';
import CategoryCard from '../components/CategoryCard.vue';
import { useCategories } from '../components/useCategories.js';

const selectedCategory = ref(null);
const { categories, loadCategories } = useCategories();

const testFood = {
  title: "Forårsruller",
  description: "Sprøde forårsruller med grøntsager og kød",
  price: 69,
  image: "/images/rolls.webp"
};

onMounted(() => {
  loadCategories();
});
</script>

<template>
  <div class="home">
    <h1>Welcome, Jane Doe</h1>

    <CategoryCard 
    v-for="category in categories"
    :key="category.id"
    :category="category"
    :selected="selectedCategory?.id === category.id"

    @select="selectedCategory = $event"
    />

    <h3>Recent Bought Items</h3>
    <FoodCard :food="testFood" />

    <h3> Popular Items of the week </h3>
    <FoodCard :food="testFood" />

  </div>
</template>

<style scoped>
.categories {
  display: flex;
  gap: 15px;
  overflow-x: auto;
}
</style>