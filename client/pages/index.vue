<template>
  <div class="container">
    <h1>Welcome to Nuxt + Django App</h1>
    <StartButton @click="getStartMessage" />
    <MessageDisplay :message="message" />
  </div>
</template>

<script setup>
import StartButton from "~/components/StartButton.vue";
import MessageDisplay from "~/components/MessageDisplay.vue";
import { useApi } from "~/composables/useApi";

const { message, getStartMessage } = useApi();
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}
</style>
