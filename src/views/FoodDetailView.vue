<script setup>
</script>

<template>
    <img :src="food.image">

    <h1>{{ food.name }}</h1>

    <p>{{ food.description }}</p>

    <h2> {{ food.price}} kr </h2>

    <button @click="addToCart(food)">Add to Cart</button>
    
</template>
