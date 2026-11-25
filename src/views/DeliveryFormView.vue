<script setup>
import { ref } from 'vue';

import TakeawayForm from '../components/DeliveryFormList/TakeawayForm.vue';
import DeliverForm from '../components/DeliveryFormList/DeliverForm.vue';
import BackButton from '../components/BackButton.vue';

const selectedMethod = ref('takeaway');
</script>

<template>
    

    <div class = "delivery-method">
        <BackButton />
        <h1>Leveringsform</h1>

        <div class="delivery-tabs">
            <button
                :class="{ active : selectedMethod === 'takeaway' }"
                @click="selectedMethod = 'takeaway'"
                >
                Takeaway
            </button>

            <button
                :class="{ active : selectedMethod === 'delivery' }"
                @click="selectedMethod = 'delivery'"
                >
                Levering
            </button>
        </div>

        <div class="opening-hours">
            <span>Address:</span>
            <span>Overgade 59A, 5000 Odense C</span>

            <span>Åbningstider:</span>
            <span>Onsdag - Søndag</span>

            <span>Tidspunkter:</span>
            <span>15:00 - 21:30</span>
        </div>

        <TakeawayForm
        v-if="selectedMethod === 'takeaway'"
        />

        <DeliverForm 
        v-if="selectedMethod === 'delivery'"
        />
    </div>
</template>