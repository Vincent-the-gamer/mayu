<template>
    <div absolute top-0 w-full h-full>
        <div flex="~ col items-center justify-center">
            <h1>HTTP Cat</h1>
            <p>Input HTTP status code to get a cat picture ^_^</p>
            <div>
                <input input type="text" v-model="statusCode"
                          h-8 w-40 font-size-4 mr-2 />
                <button btn @click="getCat">
                    Meow ^_^
                </button>
            </div>
            <div>
                <img :src="catImgSrc" />
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
const catImgSrc = ref<string>("")
const statusCode = ref<number>()

async function getCat() {
    const resp = await $fetch(`/api/httpcat/${statusCode.value}`)

    if(resp.code === 200) {
        catImgSrc.value = resp.img!
    } else {
        alert(resp.msg)
    }
}
</script>

<style lang="scss" scoped></style>