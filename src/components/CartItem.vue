<script setup>
const { cart, total, removeFromCart } = useCart();
</script>

<template>
    <div
    v-for="item in cart"
    :key="item.id">
    
        <h3>{{ item.title }}</h3>
        <p>{{ item.quantity }}</p>
        <p>{{ item.price }} kr</p>

        <button @click="removeFromCart(item.id)"> Remove </button>
    </div>

    <h2> Total: {{ total }} kr </h2>
</template>