<template>
    <div relative>
        <span i-carbon-light @click="toggleDark" v-if="colorMode.value === 'light'" />
        <span i-carbon-moon  @click="toggleDark" v-else-if="colorMode.value === 'dark'" />
    </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

async function toggleDark(event: MouseEvent) {
    const transitionApiAvailable: boolean = 'startViewTransition' in document
        && window.matchMedia('(prefers-reduced-motion: no-preference)').matches

    if (!transitionApiAvailable) {
        colorMode.value = colorMode.value === "light" ? "dark" : "light"
        return
    }

    const x = event.clientX
    const y = event.clientY

    const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${Math.hypot(
            Math.max(x, innerWidth - x),
            Math.max(y, innerHeight - y),
        )}px at ${x}px ${y}px)`,
    ]

    await document.startViewTransition(async () => {
        colorMode.value = colorMode.value === "light" ? "dark" : "light"
        await nextTick()
    }).ready

    document.documentElement.animate(
        { clipPath: colorMode.value === "dark" ? clipPath.reverse() : clipPath },
        {
            duration: 300,
            easing: 'ease-in',
            pseudoElement: `::view-transition-${colorMode.value === "dark" ? 'old' : 'new'}(root)`,
        },
    )
}

</script>