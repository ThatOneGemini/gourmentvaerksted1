<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goToEmailLogin = () => {
  router.push("/signin");
};
</script>

<template>

  <h1>LOG IN</h1>

  <button>
    Opret med Google
  </button>

  <button>
    Opret med Apple
  </button>

  <button @click="goToEmailLogin">
    Opret med Email
  </button>

  <button>
    Fortsæt som gæst
  </button>

</template>