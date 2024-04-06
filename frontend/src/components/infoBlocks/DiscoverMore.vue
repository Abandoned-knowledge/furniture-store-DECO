<script setup lang="ts">

</script>

<template>
    <article class="discover container">
        <section class="discover__content">
            <h2 class="h2-text">Deco-Modern Furniture</h2>
            <p class="body-text body-text_lighten">Your one-stop destination for stylish and affordable furniture. We
                offer a wide range of high-quality pieces, from classic to contemporary, designed to enhance every room
                in your home.</p>
            <RouterLink to="/" class="title-text accent">Discover More</RouterLink>
        </section>
        <img src="@/assets/photo4.jpg" alt="furniture photo" class="discover__img">
    </article>
</template>

<style scoped lang="scss">
@import '@/scss/main';

.discover {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 60px;
    margin-top: 150px;

    &__content {
        display: flex;
        flex-direction: column;
        width: 40%;
        gap: 30px;
    }

    &__img {
        width: 50%;
        height: 350px;
        border-radius: 20px;
        object-fit: cover;
    }

    .title-text {
        position: relative;
        display: flex;
        align-items: center;
        gap: 20px;

        &::after {
            content: '';
            height: 3px;
            width: 100px;
            min-width: 40px;
            background-color: $colorAccent;
        }
    }

    @media screen and (max-width: 1024px) {
        display: none;
    }
}
</style>