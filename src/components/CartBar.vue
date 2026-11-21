<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useCart } from '../composables/useCart';

const router = useRouter();

const { cart } = useCart();

const totalPrice = computed(() =>
    cart.value.reduce(
        (sum, item) => sum + item.price * item.quantity, 0
    )
);

function goToCart() {
    router.push('/delivery-method');
}
</script>

<template>
    <button
        v-if="cart.length"
        class="cart-bar"
        @click="goToCart">
        <span> Checkout</span>
        <span> {{ totalPrice }},00 kr.</span>
    </button>
</template>