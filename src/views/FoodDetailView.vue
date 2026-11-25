<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from 'vue-router';
import { db } from "../services/firebase";
import { ref as dbRef, get} from "firebase/database";
import BackButton from '../components/BackButton.vue';
import { useCart } from '../composables/useCart.js';

const { addToCart } = useCart();

const route = useRoute();
const router = useRouter();

const food = ref(null);

onMounted( async () => {
    const foodId = route.params.id;

    const snapshot = await get(
        dbRef(db, `foods/${foodId}`)
    );

    if (snapshot.exists()) {
        food.value = snapshot.val();
    }

    console.log(route.params.id);
});

const quantity = ref(1);

const increase = () => {
    quantity.value++;
};

const decrease = () => {
    if (quantity.value > 1) {
        quantity.value--;
    }
};

const addAndReturnToMenu = () => {
    console.log("adding:", food.value); //temporarily//

    addToCart(food.value);

    console.log("added to cart"); //temporarily//

    router.push('/menu/2');
};

</script>

<template>

    <div v-if="food" class="food-detail">

        <BackButton />
    
        <img :src="food.image"
        class="food-image"
        />

        <h1 class="food-title">{{ food.title }}</h1>

        <p class="food-description">{{ food.description }}</p>

        <h2 class="food-price"> {{ food.price }},00 kr</h2>

        <!--button @click="addToCart(food)">Add to Cart</button-->
   

        <div class="action-bar ">

            <button class="add-cart-btn" @click="addAndReturnToMenu(food)">
                Tilføj {{ food.price * quantity }},00 kr.
            </button>

            <button class="quantity-btn" @click="decrease">
                -
            </button>

            <span class="quantity-number"> 
                {{ quantity }}
            </span>

            <button class="quantity-btn" @click="increase">
                +
            </button>


        </div>

     </div>
</template>
