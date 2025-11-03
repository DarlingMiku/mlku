<script lang="ts" setup></script>

<template>
    <div class="ui-card">
        <slot name="content">
        </slot>
    </div>
</template>

<style lang="scss" scoped>
.ui-card {
    position: relative;
    display: flex;
    border: none;
    padding: 25px 55px;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    background-color: transparent;
    border-radius: 10px;
    backdrop-filter: blur(200px);
    -webkit-backdrop-filter: blur(100px);
    border-radius: 15px;
    border: 3px solid rgba(255, 255, 255, 0.18);
}
</style>
