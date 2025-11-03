<script lang="ts" setup></script>

<template>
    <section class="hero">
        <div class="container">
            <div class="text">
                <h1>Алексей Рыжов <br /><span>Frontend Devoloper</span></h1>
                <!-- <span>Добром пожаловать на мой сайт</span> -->
            </div>
            <div class="buttons">
                <UiButton label="Обо мне"> </UiButton>
                <UiButton label="Скиллы"> </UiButton>
                <UiButton label="Проекты"> </UiButton>
                <UiButton label="Контакты"> </UiButton>
            </div>
        </div>

        <div
            class="scroll-mouse"
            aria-hidden="true"
        >
            <div class="mouse">
                <div class="wheel"></div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.hero {
    position: relative;
    width: 100vw;
    height: 100vh;
    box-shadow: 0 8px 32px -8px rgba(0, 0, 0, 10);
    border-radius: 0 0 10px 10px;
    z-index: 100;
    
    & > .container {
        height: 100%;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 40px;

        & > .text {
            display: flex;
            flex-direction: column;
            gap: 20px;

            & > h1 {
                font-size: 50px;
                text-align: center;
                color: $white;
                line-height: 150%;
                margin: 0;

                // text-shadow: 0 0 3px #ffffff, 0 0 5px #ef3124;

                & > span {
                    color: #ef3124;
                    // text-shadow: 0 0 3px #ef3124, 0 0 5px #ef3124;
                }
            }

            & > span {
                text-align: center;
                font-size: 20px;
                line-height: 150%;
            }
        }

        & > .buttons {
            display: flex;
            gap: 20px;
        }
    }

    & > .scroll-mouse {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 28px;
        width: 34px;
        height: 56px;
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: none;
        animation: mouse-bob 2s ease-in-out infinite;

        & > .mouse {
            width: 30px;
            height: 48px;
            border-radius: 20px;
            border: 2px solid rgba(255, 255, 255, 0.85);
            box-sizing: border-box;
            position: relative;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            background: transparent;

            & > .wheel {
                width: 4px;
                height: 8px;
                background: #ffffff;
                border-radius: 2px;
                position: absolute;
                top: 8px;
                left: 50%;
                transform: translateX(-50%);
                animation: wheel-blink 1.4s infinite;
            }
        }
    }

    @keyframes mouse-bob {
        0% {
            transform: translateX(-50%) translateY(0);
        }
        50% {
            transform: translateX(-50%) translateY(12px);
        }
        100% {
            transform: translateX(-50%) translateY(0);
        }
    }

    @keyframes wheel-blink {
        0% {
            opacity: 1;
        }
        40% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
}
</style>
