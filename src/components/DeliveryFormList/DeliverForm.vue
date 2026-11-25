<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goToPayment = () => {
  router.push("/payment");
};

</script>

<template>
  <div class="delivery-form">

    <label>Adresse</label>
    <input placeholder="Angiv din adresse" />

    <div class="city-row">
      <div>
        <label>By</label>
        <input placeholder="By" />
      </div>

      <div>
        <label>Post nr.</label>
        <input placeholder="Postnummer" />
      </div>
    </div>

    <div class="save-address">
      <label>Gem adressen</label>

      <input type="checkbox" />
    </div>

    <button
      class="continue-btn"
      @click="goToPayment"
    >
      Fortsæt
    </button>

  </div>
</template>