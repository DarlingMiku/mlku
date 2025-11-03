<script lang="ts" setup>
const hasError = !!useSlots().error as any
</script>

<template>
    <NuxtLoadingIndicator />
    <slot
        v-if="hasError"
        name="error"
    />
    <NuxtPage v-else />
</template>

<style lang="scss">
html,
body {
    height: 100%;
    width: 100%;
}

body {
    font-family: "DigitalPixelV124";
    font-size: 40px;
    margin: 0;
    padding: 0;
    height: 100%;
    background-color: black;
    color: $white;

    & > #__nuxt {
        display: flex;
        flex-direction: column;
        min-height: 100%;

        & > main {
            flex: 1;
        }
    }
}

.container {
    display: flex;
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 0 40px;

    @media (max-width: 1000px) {
        padding: 0 20px;
    }
}
</style>
