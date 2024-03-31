<script setup lang="ts">

</script>

<template>
    <article class="slider">
        <section class="slider__pagination">
            <div class="slider__pagination_circle slider__pagination_selected"></div>
            <div class="slider__pagination_circle"></div>
            <div class="slider__pagination_circle"></div>
        </section>
        <section class="slider__item">
            <section class="slider__text">
                <h1 class="h1-text white">A NEW SLANT</h1>
                <a href="/" class="h2-text white">shop sofas</a>
            </section>
            <img src="../assets/photo2.jpg" class="slider__photo" alt="slider__item sofa">
        </section>
    </article>
</template>

<style scoped lang="scss">
@import '../scss/_colors';
@import '../scss/_other';

.slider {
    display: flex;
    width: 100%;
    height: 700px;
    overflow: hidden;
    position: relative;

    &__pagination {
        position: absolute;
        display: flex;
        gap: 10px;
        bottom: 0;
        z-index: 5;

        &_circle {
            cursor: pointer;
            height: 20px;
            width: 20px;
            border: 3px solid white;
            border-radius: 9999px;
        }
        &_selected {
            background-color: white;
        }
    }

    &__item {
        min-width: 100%;
        height: 100%;
        position: relative;
    }

    &__text {
        position: absolute;
        left: 5%;
        bottom: 30%;
        display: flex;
        flex-direction: column;
    }

    &__photo {
        min-width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>