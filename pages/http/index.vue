<script setup lang="ts">
import type { HTTPRequest } from '~/types'

const headerStr = ref<string>(`{
  "Content-Type": "application/json"
}`)

const paramsStr = ref<string>(`{

}`)

const bodyStr = ref<string>(`{

}`)

const request = reactive<HTTPRequest>({
  url: 'http://',
  method: 'GET',
  headers: {},
  params: {},
  body: {}
})

const responseStr = ref<string>("")

async function makeRequest() {
  try {
    request.headers = JSON.parse(headerStr.value.trim())
    request.params = JSON.parse(paramsStr.value.trim())
    request.body = JSON.parse(bodyStr.value.trim())
  } catch (error) {
    alert("JSON parsing error!")
  }

  const { method, headers, params, body } = request

  const response = await $fetch(request.url, {
    method,
    headers,
    params,
    body: method === "GET" ? null : body
  })

  responseStr.value = JSON.stringify(response, null, "\t")
}
</script>

<template>
  <div absolute top-0 w-full h-full>
    <div class="flex-center" pb-7>
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
        <div mb-2>
          <p>Headers: </p>
          <textarea input v-model="headerStr" w-100 h-30 font-size-3.5 class="input-mono" />
        </div>
        <div mb-2>
          <p>Params: </p>
          <textarea input v-model="paramsStr" w-100 h-30 font-size-3.5 class="input-mono" />
        </div>
        <div mb-2>
          <p>Body: </p>
          <textarea input v-model="bodyStr" w-100 h-30 font-size-3.5 class="input-mono" />
        </div>
        <div mb-2>
          <p>Result: </p>
          <Shiki lang="json" :code="responseStr" as="div" />
        </div>
        <button btn w-30 h-10 mt-2 @click="makeRequest">
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

.input-mono {
  font-family: 'Input Mono';
  font-weight: 100;

  .resp {
    font-family: 'Input Mono';
    font-weight: 100;
  }
}
</style>
