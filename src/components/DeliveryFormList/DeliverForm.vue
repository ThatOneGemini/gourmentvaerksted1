<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goToPayment = () => {
  router.push("/payment");
};

</script>

<template>
  <div>

    <input placeholder="Adresse" />
    
    <br>

    <input placeholder="By" />
    <input placeholder="Postnummer" />

    <button
      class="continue-btn"
      @click="goToPayment"
    >
      Fortsæt
    </button>

  </div>
</template>