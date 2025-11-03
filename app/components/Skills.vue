<script lang="ts" setup>
const { skills } = useMoki()
</script>

<template>
    <section class="skills">
        <div class="container">
            <h2>Навыки и технологии</h2>

            <!-- <div class="skills-wrapper">
                <div
                    v-for="(skill, index) in skills"
                    class="skill"
                >
                    <img
                        :src="skill.icon"
                        alt=""
                    />
                </div>
            </div> -->
        </div>
    </section>
</template>

<style lang="scss" scoped>
.skills {
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: $white;

    & > .container {
        flex-direction: column;

        & > h2 {
            color: $black;
        }

        & > .skills-wrapper {
            display: flex;
            gap: 20px;

            & > .skill {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 20px;
                background-color: $white;
                border-radius: 12px;
                width: fit-content;
                border: 2px solid rgba(255, 116, 116, 0.18);
                transition: 0.3s ease-in-out;
                cursor: pointer;

                &:hover {
                    transform: translateY(-6px); /* эффект “вскакивания” */
                    transition: 0.3s ease-in-out;
                }

                & > img {
                    width: 70px;
                    height: 70px;
                }
                & > span {
                    color: $black;
                }
            }
        }
    }
}
</style>
