<script setup lang="ts">
const menuStore = useMenuStore()
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <Header />
    <Menu v-if="menuStore.show" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <Footer />
  </div>
</template>
