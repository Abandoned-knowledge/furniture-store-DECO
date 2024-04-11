<script setup lang="ts">
import { ref } from 'vue';


const isHidden = ref<boolean>(true);
const seeMore = ref<string>("See More");

</script>

<template>

    <article class="container details">
        <section class="details__content">
            <h2 class="h2-text">Details About The Company</h2>
            <p class="body-text body-text_lighten">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum provident magnam qui. Quas et sit
                repellendus veniam dolor fugiat velit veritatis sint obcaecati facilis quod, ea totam, dolorum
                architecto nihil incidunt voluptate molestiae repellat qui. Corrupti, libero! Nemo neque perferendis,
                in, porro esse repudiandae provident libero qui perspiciatis vero ullam minus aliquam ducimus nulla
                beatae amet similique facere
                <span :class="{ 'details-text_hidden': isHidden }">
                    tempora. Praesentium nulla totam perferendis cupiditate maxime pariatur
                    voluptatem, iste error eligendi, placeat iure quasi quae omnis nostrum qui doloribus eaque sapiente
                    esse
                    id laborum porro possimus.
                    Reiciendis possimus perferendis, earum consectetur quasi in est! Ex est
                    possimus quis aut atque odio maiores quia quas autem veniam harum laborum dicta quaerat facere,
                    animi
                    dolorum impedit vitae, excepturi officiis! Consequatur itaque ipsum nostrum iusto hic ex rerum
                    accusamus
                    alias explicabo id magni sint quos incidunt rem, delectus fugit laudantium at? Saepe, obcaecati
                    assumenda autem possimus debitis odit temporibus dicta magnam doloremque dignissimos dolorum?
                </span>
                <span @click="isHidden = !isHidden"
                    class="details__see-more body-text body-text_bold body-text_underline accent">
                    {{ isHidden ? 'See More' : ' Close' }}
                </span>
            </p>
            <button class="details__btn body-text white">Learn More</button>
        </section>

        <img src="@/assets/CompanyRoomPhoto.jpg" alt="company furniture" class="details__img">
    </article>

</template>

<style scoped lang="scss">
@import '@/scss/main';

.details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 100px;
    margin-top: 150px;

    @include mQ(nb) {
        flex-direction: column-reverse;
        gap: 20px;
    }

    &__content {
        display: flex;
        flex-direction: column;
        gap: 50px;
        width: 100%;
        padding-right: 5%;

        @include mQ(nb) {
            padding-right: 0px;
            align-items: center;
            gap: 20px;
        }
    }

    &-text_hidden {
        display: none;
    }

    &__btn {
        width: fit-content;
        background-color: $colorAccent;
        padding: 15px 35px;
        border: none;
        border-radius: 10px;
    }

    &__img {
        width: 100%;
        height: 500px;
        border-radius: 10px;
        object-fit: cover;

        @include mQ(nb) { height: 400px; };
        @include mQ(tt) { height: 300px; };
        @include mQ(mob) { height: 200px; };
    }

    &__see-more {
        cursor: pointer;
    }
}
</style>