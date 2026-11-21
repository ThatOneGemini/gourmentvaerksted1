<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router';
import CartItem from '../components/CartItem.vue'

const router = useRouter()

const props = defineProps({
  cart: {
    type: Array,
    default: () => []
  }
})

const total = computed(() => {
  return props.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
})

const checkout = () => {
  router.push('/delivery-method')
}
</script>

<template>

    <CartItem
    v-for="item in cart"
    :key="item.id"
    :item="item"
    />

    <h2> Total {{ total }} kr </h2>

    <button @click="checkout">Place Order</button>
    
</template>