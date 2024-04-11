<script setup lang="ts">
import Details from '@/components/about/Details.vue';
import Benefits from '@/components/benefits/Benefits.vue';
</script>

<template>

    <article class="about">
        <section class="about__content">
            <h2 class="h2-text white">About Us</h2>
            <p class="body-text white">We are here to furnish your dreams</p>
        </section>
        <img src="@/assets/AboutUsPhoto.jpg" alt="office table with chairs" class="about__img">
    </article>


    <Details />
    <Benefits />
</template>

<style scoped lang="scss">
@import '@/scss/main';

.about {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 500px;

    &__img {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        object-fit: cover;
        z-index: -1;
        filter: brightness(.5);
    }

    &__content {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }
}
</style>