<script setup lang="ts">
const router = useRouter()
const menuStore = useMenuStore()

const options: MenuOptions = [
  {
    name: 'HTTP Request',
    route: '/http',
  },
]

function toRoute(route: string) {
  router.push(route)
  menuStore.show = false
}
</script>

<template>
  <div class="menu">
    <div class="wrapper" relative m="0 auto" w-80vw h-full>
      <div v-for="op of options" class="card" @click="toRoute(op.route)">
        {{ op.name }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
    .menu {
  position: absolute;
  top: 0;
  z-index: 3;
  width: 100vw;
  height: 100vh;
  background-color: white;
}

.dark-mode .menu {
  background-color: black;
}

.wrapper {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-content: flex-start;
}

.card {
  width: 6.5rem;
  height: fit-content;
  padding: 1.5rem;
  margin: 1rem;
  border: 0.2rem solid turquoise;
  text-align: center;
  border-radius: 0.8rem;
  cursor: pointer;
  transition: all, 200ms;
  &:hover {
    background-color: turquoise;
    color: white;
  }
}
</style>
