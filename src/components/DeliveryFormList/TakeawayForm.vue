<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import { VueDatePicker } from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const router = useRouter();

const pickupDate = ref(null);
const pickupTime = ref("");

const timeSlots = [];

const goToPayment = () => {
  router.push("/payment");
};

for (let hour = 15; hour <= 21; hour++) {
  for (let minute = 0; minute < 60; minute += 15) {
    const time =
      `${String(hour).padStart(2, "0")}:` +
      `${String(minute).padStart(2, "0")}`;

    if (time <= "21:30") {
      timeSlots.push(time);
    }
  }
}

const showTimeSelector = ref(false);
</script>

<template>
  
  <div class="takeaway-form">

    <h3>Vælg dato</h3>

    <div class="calendar-card">
      <VueDatePicker
      v-model="pickupDate"
      inline
      auto-apply
      format="dd/MM/yyyy"
      :enable-time-picker="false"
      :disabled-week-days="[1, 2]"
      :action-row="{ showSelect: false, showCancel: false}"
      />
    </div>

    <p v-if="pickupTime">
      Valgt tidspunkt: {{ pickupTime }}
    </p>

    <p v-else>
      Du har ikke valgt et tidspunkt
    </p>

    <button
      class="time-btn"
      @click="showTimeSelector = !showTimeSelector"
    >
      Vælg tidspunkt
    </button>

    <div v-if="showTimeSelector">
      <select v-model="pickupTime">
        <option disabled value="">
          Vælg tidspunkt
        </option>

        <option
          v-for="time in timeSlots"
          :key="time"
          :value="time"
        >
          {{ time }}
        </option>
      </select>
    </div>

    <button
      class="continue-btn"
      :disabled="!pickupDate || !pickupTime"
      @click="goToPayment"
    >
      Fortsæt
    </button>

  </div>
</template>