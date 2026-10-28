import { ref, computed } from "vue";

const cart = ref ([]);

export function useCart() {

    const addToCart = (food) => {
        
        const existing = cart.value.find(
            item => item.id === food.id
        );

        if (existing) {
            existing.quantity++;
        } else {
            cart.value.push({
                ...food,
                quantity: 1
            });
        }
    };

    const removeFromCart = (id) => {
        cart.value = cart.value.filter(
            item => item.id !== id
        );

    };

    const clearCart = () => {

        cart.value = [];

    };

    const total = computed(() => {
        return cart.value.reduce(
            (sum, item) => sum + item.price * item.quantity, 0
        );

    });

    return {
        cart,
        total,
        addToCart,
        removeFromCart,
        clearCart
    };
}