<script lang="ts" setup>
const menuStore = useMenuStore()
</script>

<template>
  <header fixed z-5 m-0 top-0 left-0 w-full>
    <div class="up-left" absolute h-full w-fit flex="~ row items-center justify-center">
      <img relative h-13 m-0 src="~/assets/img/Mayu.png" alt="logo">
      <span class="title" font-bold relative font-size-7 m-inline-2>Mayu</span>
      <NuxtLink to="/" ml-2>
        <span class="home" bg-white dark:bg-black>Home</span>
      </NuxtLink>
    </div>
    <div absolute top-1 right-4 m-0 h-full font-size-30px flex="~ row items-center justify-center gap-3.5">
      <a class="logo" href="https://github.com/Vincent-the-gamer" target="_blank">
        <span class="gh-logo" i-carbon-logo-github />
      </a>
      <ColorMode class="logo" />
      <span
        class="menu" :class="menuStore.show ? 'i-carbon-close-large' : 'i-carbon-menu'"
        @click="menuStore.show = !menuStore.show"
      />
    </div>
  </header>
</template>

<style scoped lang="scss">
$header-height: 3.8rem;

header {
  background-color: rgb(240, 240, 240);
  color: black;

  height: $header-height;

  h1 {
    height: $header-height;
    left: 3.5rem;
    top: 0.5rem;
    width: fit-content;
  }

  .logo {
    transition: all, 200ms;
    cursor: pointer;

    &:hover {
      color: deeppink;
    }
  }
}

.dark-mode header {
  background-color: rgb(24, 24, 24);
  color: white;

  .gh-logo {
    color: white;
  }
}

span.home {
  color: black;
  background-color: white;
  padding: 0.3rem;
  border: 1px solid black;
  border-radius: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: deeppink;
  }
}

.dark-mode span.home {
  color: white;
  background-color: black;
  border: 1px solid white;
  &:hover {
    background-color: deeppink;
  }
}

@media screen and (max-width: 400px) {
  .title {
    display: none;
  }
}

.menu {
  cursor: pointer;
  position: relative;
  top: -0.25rem;
  &:hover {
    color: deeppink;
  }
}
</style>
