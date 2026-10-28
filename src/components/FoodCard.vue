<script setup>

import { useCart } from '../composables/useCart.js';
    const props = defineProps({
        food: Object
    });

    const { addToCart } = useCart();
</script>

<template>
    <div class="food-card">

        <img 
        :src="food.image"
        :alt="food.title"
        >

        <h3>{{ food.title }}</h3>
        
        <p> {{ food.description }}</p>

        <span> {{ food.price }} kr</span>

        <button @click="addToCart(food)"> Add to Cart </button>
    </div>
        
</template>