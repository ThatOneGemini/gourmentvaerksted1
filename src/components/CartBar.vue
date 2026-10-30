<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useCart } from '../composables/useCart';

const route = useRoute();

const { cart } = useCart();

const totalPrice = computed(() =>
    cart.value.reduce(
        (sum, item) => sum + item.price * item.quantity, 0
    )
);

function goToCart() {
    route.push("/cart");
}
</script>

<template>
    <button
        v-if="cart.length"
        class="cart-bar"
        @click="goToCart">
        <span> Go to cart</span>
        <span> {{ totalPrice }},00 kr.</span>
    </button>
</template>