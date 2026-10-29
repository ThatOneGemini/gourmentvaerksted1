<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function goBack() {
    router.back();
}
</script>

<template>
    <button class="back-btn"
    @click="goBack">
    <
    </button>
</template>