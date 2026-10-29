<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

import FoodCard from '../components/FoodCard.vue';
import CategoryCard from '../components/CategoryCard.vue';
import { useCategories } from '../components/useCategories.js';
import { useHomepageFoods } from '../composables/useHomepageFoods.js';
import { useCart } from '../composables/useCart.js';

const router = useRouter();

const selectedCategory = ref(null);

function goToMenu(category) {
  router.push({
    name: 'menu',
    params: {
      category: category.id
    }
  });
}


const { categories, loadCategories } = useCategories();
const { recentBought, popularDishes, loadRecentBought, loadPopularDishes } = useHomepageFoods();

onMounted( async () => {
  await loadCategories();

  await loadRecentBought();
  await loadPopularDishes();
});
</script>

<template>
  <div class="home">
    <header>
      <h1>Welcome, Jane Doe</h1>
      <p>What would you like to order today?</p>
    </header>

    <section class="categories">
      <CategoryCard 
      
      v-for="category in categories"
      :key="category.id"
      :category="category"
      :selected="selectedCategory?.id === category.id"
      @select="goToMenu($event)"

      />
    </section>

    <section class="food-items">

      <h3>Recent Bought Items</h3>

      <div class="food-row">
        <FoodCard 
          v-for="food in recentBought"
          :key="food.title"
          :food="food"
        />
      </div>


      <h3> Popular Items of the week </h3>

      <div class="food-row">
        <FoodCard 
        v-for="food in popularDishes"
        :key="food.title"
        :food="food"
        />
      </div>

    </section>
    
  </div>
</template>

<style scoped>

</style>