<script setup lang="ts">


</script>

<template>
    <article class="container info-block">
        <img src="@/assets/BigSalePhoto.jpg" class="info-block__image" alt="">
        <section class="info-block__content">
            <p class="body-text info-block__subtitle">BIG SALE</p>
            <h1 class="h1-text info-block__title">
                Up to off 70% <br>
                Furniture & Decor
            </h1>
            <RouterLink to="/" class="body-text info-block__btn">Shop Now</RouterLink>
        </section>
    </article>
</template>

<style scoped lang="scss">
@import '@/scss/main';


.info-block {
    height: 700px;
    position: relative;
    margin-top: 150px;

    @include mQ(tt) {
        display: none;
    }

    &__image {
        width: 100%;
        height: 100%;
        border-radius: 15px;
        object-fit: cover;
        filter: brightness(.6);
    }

    &__content {
        display: flex;
        flex-direction: column;
        gap: 30px;
        position: absolute;
        top: 10%;
        left: 5%;
    }

    &__subtitle {
        color: white;
        font-weight: 500;
        margin: 0;
    }

    &__title {
        font-weight: 600;
    }

    &__btn {
        color: $colorDark;
        padding: 15px 30px;
        background-color: #fff;
        border-radius: 10px;
        width: fit-content;
        font-weight: 500;
    }
}
</style>