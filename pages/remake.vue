<script lang="ts" setup>
const identity = ref<string>()

async function remake() {
  const resp = await $fetch('/api/remake', {
    method: 'GET',
  })
  identity.value = resp.message
}
</script>

<template>
  <div absolute top-0 w-full h-full>
    <div flex="~ col items-center justify-center">
      <h1>重开小游戏</h1>
      <p>重开你的人生!</p>
      <button btn @click="remake">
        重开！
      </button>
      <div text-align-center>
        <p>你的身份：</p>
        <p font-size-5 color-red>{{ identity ?? "暂无" }}</p>
      </div>
    </div>
  </div>
</template>
