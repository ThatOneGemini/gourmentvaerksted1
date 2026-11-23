<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const getStarted = () => {
  router.push("/login");
};
</script>

<template>
  <div class="intro-view">

    <img
      src="../assets/logo.png"
      alt="Gourmet Værkstedet"
    />

    <button class="get-started-btn" @click="getStarted">
      Get Started
    </button>

  </div>
</template>