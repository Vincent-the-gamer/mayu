<script setup lang="ts">
import { version } from '../package.json'
</script>

<template>
  <footer fixed w-full h-fit left-0 bottom-0 text-center whitespace-nowrap overflow-hidden text-ellipsis>
    <span>Copyright (c) 2025-present Vincent-the-gamer | Version: v{{ version }}</span>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background-color: white;
}

.dark-mode footer {
  background-color: black;
}
</style>
