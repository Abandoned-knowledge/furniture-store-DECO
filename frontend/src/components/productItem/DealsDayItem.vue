<script setup lang="ts">
import LikeHeartIcon from '../icons/header/LikeHeartIcon.vue';
import CloakIcon from '../icons/other/CloakIcon.vue';
import SquaresIcon from '../icons/other/SquaresIcon.vue';

interface itemsInter {
    id: number,
    title: string,
    price: number,
    description: string,
    photo: string,
}

const props = defineProps<itemsInter>()

</script>

<template>

    <article class="item">
        <section class="item__up">
            <img :src="$props.photo" alt="" class="item__img">
            <section class="item__content">

                <section class="item__title">
                    <p class="title-text">{{ $props.title }}</p>
                    <p class="body-text body-text_bold accent">${{ $props.price }}.00</p>
                </section>

                <hr>

                <p class="body-text body-text_lighten">{{ $props.description }}</p>

                <section class="item__btns">
                    <button class="item__btn body-text">Add To Cart</button>
                    <button class="item__btn"> <LikeHeartIcon class="icon" /> </button>
                    <button class="item__btn"> <SquaresIcon class="icon" /> </button>
                </section>

            </section>
        </section>

        <section class="item__down">
            <section class="item__time body-text body-text_bold accent">
                <CloakIcon />
                Hungry Up!
            </section>
            <section class="item__offer">
                <span class="body-text body-text_bold">Offer End in:</span>
                <span class="body-text item__offer_value">Expired</span>
            </section>
        </section>
    </article>
</template>

<style scoped lang="scss">
@import '@/scss/main';

.item {
    box-sizing: border-box;
    width: 100%;
    border: 1px solid $colorGrey;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 40px;
    box-shadow: 0px 0px 5px #0000002b;

    &__up {
        display: flex;
        gap: 30px;
        padding-bottom: 25px;
        border-bottom: 1px solid $colorGrey;

        @include mQ(mob) {
            flex-direction: column;
        }
    }

    &__content {
        display: flex;
        flex-direction: column;
        gap: 25px;

        hr {
            margin: 0;
            width: 70%;
            color: lighten($colorGrey, 70);
        }
    }

    &__title {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    &__img {
        width: 100%;
        height: 300px;
        border-radius: 10px;
        object-fit: cover;
    }

    &__btns {
        display: flex;
        gap: 10px;
    }

    &__btn {
        padding: 10px 15px;
        border: 1px solid $colorDark;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        cursor: pointer;
    }

    &__down {
        display: flex;
        justify-content: space-between;
        padding: 0 5%;
        align-items: center;
    }

    &__time {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    &__offer {
        display: flex;
        align-items: center;
        gap: 10px;

        &_value {
            color: $colorAdd;
            border: 1px solid $colorAdd;
            padding: 10px;
            border-radius: 100px;
        }
    }
}
</style>