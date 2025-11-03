<script lang="ts" setup>
interface ButtonProps {
    label: string
}

const props = defineProps<ButtonProps>()

const emits = defineEmits<{
    (e: "click"): void
}>()

const attrs = useAttrs()
</script>

<template>
    <button
        v-bind="attrs"
        class="ui-button"
        @click="emits('click')"
    >
        <span class="text">
            {{ label }}
        </span>
    </button>
</template>

<style lang="scss" scoped>
.ui-button {
    font-family: "DigitalPixelV124";
    position: relative;
    display: flex;
    text-align: center;
    border: none;
    transition: 0.3s ease-in-out;
    cursor: pointer;
    padding: 25px 55px;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    background-color: transparent;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    z-index: 1;
    overflow: hidden;

    @media (max-width: 999px) {
        padding: 12px 28px;
    }

    &:hover {
        & > .text {
            color: $red;
            transition: color 0.3s ease-in-out;
        }
    }

    & > .text {
        font-size: 20px;
        line-height: 100%;
        color: $white;
        width: 100%;
        font-weight: 400;
        transition: color 0.3s ease-in-out;

        @media (max-width: 999px) {
            font-size: 16px;
        }
    }
}
</style>
