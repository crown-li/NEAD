<template>
  <div v-if="message" class="message">
    {{ message }}
  </div>
</template>

<script setup>
defineProps({
  message: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.message {
  margin-top: 2rem;
  padding: 1rem;
  background-color: #f0f9eb;
  border-radius: 4px;
  color: #67c23a;
}
</style>