<template>
  <el-button type="primary" @click="onClick">
    Get Started
  </el-button>
</template>

<script setup>
const emit = defineEmits(['click'])

const onClick = () => {
  emit('click')
}
</script>