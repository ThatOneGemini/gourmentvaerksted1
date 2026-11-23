<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import BackButton from '../components/BackButton.vue';

const router = useRouter();

const firstName = ref("");
const lastName = ref("");
const phone = ref("");

const user = JSON.parse(
  sessionStorage.getItem("currentUser")
);

if (user) {
  firstName.value = user.firstName;
  lastName.value = user.lastName;
  phone.value = user.phone;
}

const cardNumber = ref("");
const expiryDate = ref("");
const cvc = ref("");

const showSuccessModal = ref(false);



const backToMenu = () => {
  router.push("/menu");
};


const canPay = computed(() => {
  return (
    firstName.value &&
    lastName.value &&
    phone.value &&
    cardNumber.value &&
    expiryDate.value &&
    cvc.value
  );
});

const submitPayment = () => {
  console.log({
    firstName: firstName.value,
    lastName: lastName.value,
    phone: phone.value,
    cardNumber: cardNumber.value,
    expiryDate: expiryDate.value,
    cvc: cvc.value,
  });

    showSuccessModal.value = true;
};
</script>

<template>
  <div class="payment-view">
    <BackButton /> 

    <h2>Betaling</h2>

    <label>Navn</label>
    <input
      type="text"
      v-model="firstName"
    />

    <label>Efternavn</label>
    <input
      type="text"
      v-model="lastName"
    />

    <label>Mobil nr.</label>
    <input
      type="tel"
      v-model="phone"
      placeholder="+45"
    />

    <h3>Betalingsmetode</h3>

    <label>Kortnummer</label>
    <input
      type="text"
      v-model="cardNumber"
      placeholder="1234 5678 9012 3456"
    />

    <div class="card-row">

      <div>
        <label>Udløbsdato</label>
        <input
          type="text"
          v-model="expiryDate"
          placeholder="MM/YY"
        />
      </div>

      <div>
        <label>CVC</label>
        <input
          type="text"
          v-model="cvc"
          placeholder="123"
        />
      </div>

    </div>

    <button
      :disabled="!canPay"
      @click="submitPayment"
    >
      Betal
    </button>

    <transition name="slide-up">
    <div
        v-if="showSuccessModal"
        class="success-modal"
    >
    <h2>
      Mange tak for din bestilling
    </h2>

    <div class="pickup-box">
      <p>Din mad vil være klar til afhentning:</p>

      <strong>
        19. Torsdag kl. 16.30
      </strong>
    </div>

    <p class="pickup-note">
      Du kan altid finde flere oplysninger om din
      levering under din profil.
    </p>

    <button
      class="back-menu-btn"
      @click="backToMenu"
    >
      Tilbage til menuen
    </button>
    </div>
    </transition>

  </div>
</template>