<script setup lang="ts">
const request = reactive<HTTPRequest>({
  url: '',
  method: 'GET',
})

function makeRequest() {
  console.log(request.url)
}
</script>

<template>
  <div absolute top-0 w-full h-full>
    <div class="flex-center">
      <h1 w-fit>
        HTTP Request
      </h1>
      <div class="flex-center">
        <div mb-2>
          <span>URL: </span>
          <input v-model="request.url" input w-90 h-7 type="text">
        </div>
        <div mb-2>
          <span>Method: </span>
          <select select :value="request.method">
            <option v-for="option of ['GET', 'POST', 'PUT', 'DELETE', 'PATCH']">
              {{ option }}
            </option>
          </select>
        </div>
        <button btn mt-3 @click="makeRequest">
          Make request
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
    .flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
