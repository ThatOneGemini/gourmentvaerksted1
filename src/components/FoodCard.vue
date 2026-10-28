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

        <button 
        class="price-btn"
        @click="addToCart(food)"> {{  food.price }},00 kr. </button>
    </div>
        
</template>