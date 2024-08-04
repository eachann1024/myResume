<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
  <p class="mb-1 b-0 b-b-2px b-black border-solid text-left text-2xl font-bold leading-12">
    {{ title }}
  </p>
</template>
