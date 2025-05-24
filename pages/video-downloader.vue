<template>
    <div absolute top-0 w-full h-full>
        <div flex="~ col items-center justify-center">
            <h1>Video Downloader</h1>
            <p>Input Youtube/bilibili(etc.) video link to download video.</p>
            <div>
                <span>Video source: </span>
                <select select v-model="source">
                    <option v-for="src of ['youtube', 'bilibili']" :value="src">
                        {{ src }}
                    </option>
                </select>
            </div>
            <div mt-4>
                <span>Link: </span>
                <input input type="text" v-model="rawLink"
                          h-8 w-40vw font-size-4 mr-2 />
                <button btn @click="getVideo">
                    Fetch!
                </button>
            </div>
            <div mt-4>
                <p p-1 v-if="isLoading">Video fetching...</p>
                <video controls w-60vw height="300" :src="directLink" />
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
const isLoading = ref<boolean>(false)
const source = ref<string>("youtube")
const rawLink = ref<string>("")
const directLink = ref<string>("")

async function getVideo() {
    isLoading.value = true

    const { env } = await $fetch("/api/")

    const api = env === "dev" ? "http://localhost:8080/extApi/directLink" : "https://www.r8xkv0ew9.nyat.app:12323/api/directLink"
    
    const resp = await $fetch(api, {
        method: "POST",
        body: {
            rawLink: rawLink.value,
            source: source.value
        }
    })

    if(resp.code === 200) {
        directLink.value = resp.directLink!
    } else {
        alert(resp.message)
    }
    isLoading.value = false
}
</script>

<style lang="scss" scoped></style>