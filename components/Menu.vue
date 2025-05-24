<script setup lang="ts">
import type { MenuOptions } from '~/types'

const router = useRouter()
const menuStore = useMenuStore()

const options: MenuOptions[] = [
  {
    name: 'HTTP Request',
    route: '/http',
    icon: 'i-carbon-code',
    description: 'Send HTTP requests.',
  },
  {
    name: "Remake",
    route: "/remake",
    icon: "i-carbon-partnership",
    description: "重开小游戏"
  }
]

function toRoute(route: string) {
  router.push(route)
  menuStore.show = false
}
</script>

<template>
  <div class="menu">
    <div class="wrapper" relative m="0 auto" w-full h-full>
      <div v-for="op of options" class="card" @click="toRoute(op.route)">
        <div class="card-title" relative top-0 left-0>
          <span :class="op.icon" font-size-6 m-inline-1 absolute />
          <span relative left-8 font-size-5>{{ op.name }}</span>
        </div>
        <div whitespace-pre-wrap break-all>
          {{ op.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menu {
  position: fixed;
  top: 3.8rem;
  z-index: 3;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  box-shadow: 0 0 10px black;
  background-color: rgb(242, 242, 242);
}

/* screen > 400px */
@media screen and (min-width: 400px) {
  .menu {
    right: 0;
    width: 300px;
    height: 91vh;
  }
}

/* screen < 400px */
@media screen and (max-width: 400px) {
  .menu {
    left: 0;
  }
}

.dark-mode .menu {
  background-color: black;
}

.wrapper {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-content: flex-start;
}

.card {
  width: 92%;
  padding: 0.6rem;
  height: fit-content;
  margin: 0.5rem;
  border: 0.2rem solid turquoise;
  border-radius: 0.8rem;
  cursor: pointer;
  transition: all, 200ms;

  .card-title {
    color: turquoise;
  }

  &:hover {
    background-color: turquoise;
    color: white;

    .card-title {
      color: white;
    }
  }
}
</style>
