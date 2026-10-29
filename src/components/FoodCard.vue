<script setup>
import { useRouter } from 'vue-router';
import { useCart } from '../composables/useCart.js';

const router = useRouter();

const props = defineProps({
    food: Object
});

const { addToCart } = useCart();

function openFood() {
    router.push(`/food/${props.food.id}`);
}
</script>

<template>
    <div class="food-card"
    @click="openFood"
    >
    

        <img 
        :src="food.image"
        :alt="food.title"
        >

        <h3>{{ food.title }}</h3>
        
        <p> {{ food.description }}</p>

        <button 
        class="price-btn"
        @click.stop="addToCart(food)"> {{  food.price  }},00 kr. </button>
    </div>
        
</template>