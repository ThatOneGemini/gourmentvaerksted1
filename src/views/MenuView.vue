<script setup>
</script>

<template>

    <SearchBar />
    
    <FoodCard 
    v-for="food in foods" 
    :key="food.id" 
    :food="food" 
    />
  
</template>