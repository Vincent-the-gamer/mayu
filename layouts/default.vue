<template>
    <div class="entry">
        <slot />
    </div>
</template>

<style lang="scss" scoped>
  .entry {
    position: absolute;
    top: 3.8rem;
    margin: 0;
    padding: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }
</style>