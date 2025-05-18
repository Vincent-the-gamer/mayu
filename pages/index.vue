<template>
    <div w-full h-80vh absolute flex="~ col items-center justify-center">
        <img relative h-30 m-0 src="~/assets/img/mayu.png" alt="logo" />
        <h1>Mayu</h1>
        <div p-1 mb-3 text-center>
            <p>Vincent's multi-function tool.</p>
            <b>
                <i>A web 「Swiss knife」. {{ kaomoji }}</i>
            </b>
        </div>

        <button btn p-3>Get Started</button>
    </div>
</template>

<script setup lang="ts">
const kaomoji = ref<string>("")

onMounted(async () => {
    const { kaomoji: moji } = await $fetch("/api/", {
        method: "GET"
    })
    kaomoji.value = moji
})
</script>