<script setup lang="ts">
const menuStore = useMenuStore()
const kaomoji = ref<string>("")
const localIp = ref<string>("")

onMounted(async () => {
  const { kaomoji: moji } = await $fetch('/api/', {
    method: 'GET',
  })
  kaomoji.value = moji

  const { ip } = await $fetch('/api/whoami', {
    method: "GET"
  })
  localIp.value = ip
})

</script>

<template>
  <div w-full h-80vh absolute flex="~ col items-center justify-center">
    <img relative h-30 m-0 src="~/assets/img/mayu.png" alt="logo">
    <h1>Mayu 茉優</h1>
    <div p-1 mb-3 text-center>
      <p>Vincent's multi-function tool.</p>
      <b>
        <i>A web 「Swiss knife」. {{ kaomoji }}</i>
      </b>
      <p>Local IP: {{ localIp }}</p>
    </div>

    <button btn p-3 @click="menuStore.show = true">
      Open Tools Menu
    </button>
  </div>
</template>
