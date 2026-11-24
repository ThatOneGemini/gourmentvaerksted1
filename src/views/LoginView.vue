<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { getUser } from "../services/userService";

const router = useRouter();

const name = ref("");
const email = ref("");

  

const login = async () => {
  const user = await getUser();
  
  console.log("Firebase user:", user);
  console.log("Name entered:", name.value);
  console.log("Email entered:", email.value);

  if (
    name.value.trim().toLowerCase() ===
        user.firstName.trim().toLowerCase() &&
    email.value.trim().toLowerCase() ===
        user.email.trim().toLowerCase()
  ) {
    sessionStorage.setItem(
      "currentUser",
      JSON.stringify(user)
    );

    router.push("/home");
  } else {
    alert("Forkert navn eller email");
  }
};
</script>

<template>
  <div class="login-view">

    <h1>SIGN IN</h1>

    <label>Navn</label>
    <input
      type="text"
      v-model="name"
      placeholder="Jane"
    />

    <br>

    <label>Email</label>
    <input
      type="email"
      v-model="email"
      placeholder="janedoe@gmail.com"
    />

    <button @click="login">
      Fortsæt
    </button>

  </div>
</template>