<script setup lang="ts">
const menuStore = useMenuStore()
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <Header />
    <NuxtLayout>
      <NuxtPage />
      <Menu v-if="menuStore.show" />
    </NuxtLayout>
    <Footer />
  </div>
</template>
