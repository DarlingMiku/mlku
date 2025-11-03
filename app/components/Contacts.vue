<script lang="ts" setup></script>

<template>
    <section class="contacts">
        <div class="container">
           <h2>Контакты</h2>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.contacts {
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: $white;

    & > .container {
        & > h2{
            color: $black;
        }
    }
}
</style>
