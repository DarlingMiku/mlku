<script lang="ts" setup></script>

<template>
    <section class="about">
        <div class="container">
            <h2>Обо мне</h2>

            <UiCard>
                <template #content>
                    <span>ФИ: Рыжов Алексей</span>
                    <span>Грейд: Junior+</span>
                    <span>Стэк: TS, Vue 3, SCSS, Nuxt 3, SSR, Pinia, REST API, GIT, Docker </span>
                    <span>Опыт: 2 года+</span>
                    <span>Занятость: Разработка и поддержка фронтенд-части веб-продуктов различного назначения</span>
                    <span>Фокус: Архитектура, производительность, UX, CI/CD </span>
                </template>
            </UiCard>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.about {
    position: relative;
    width: 100vw;
    height: 100vh;
    box-shadow: 0 8px 32px -8px rgba(255, 29, 29, 0.5);
    z-index: 99;
    background-color: $red;

    & > .container {
        flex-direction: column;

        & > .ui-card {
            display: flex;
            flex-direction: column;
            gap: 20px;
            color: $white;
        }
    }
}
</style>
