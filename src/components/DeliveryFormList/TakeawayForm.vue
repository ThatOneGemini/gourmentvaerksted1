<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <div>

    <label>Dato</label>
    <br>
    <input type="date" />

    <br>
    <br>

    <label>Tidspunkt</label>
    <br>
    <select>
      <option>17:00</option>
      <option>17:15</option>
      <option>17:30</option>
    </select>

  </div>
</template>