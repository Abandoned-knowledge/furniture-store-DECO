<script setup lang="ts"></script>

<template>

    <section class="newsletter">
        <section class="newsletter__title">
            <h2 class="h2-text">Newsletter</h2>
            <p class="body-text body-text_bold body-text_lighten">Subscribe for latest stories and promotions.</p>
        </section>
        <form action="#" class="newsletter__form">
            <input type="text" class="newsletter__input body-text body-text_bold" placeholder="Your email adress...">
            <button class="newsletter__button title-text">Subscribe</button>
        </form>
    </section>

</template>

<style scoped lang="scss">
@import '@/scss/main';

.newsletter {
    box-sizing: border-box;
    width: 100vw;
    background-color: lighten($colorGrey, 15);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 75px 12.5%;
    margin-top: 150px;

    &__title {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    &__form {
        display: flex;
        width: 50%;
    }

    &__input {
        width: 100%;
        padding: 20px;
        background-color: white;
        border: none;
        border-radius: 10px;
    }

    &__button {
        padding: 0 20px;
        background-color: $colorAccent;
        color: white;
        border: none;
        border-radius: 10px;
        transform: translateX(-25px);
    }
}

@include mQ(nb) {
    .newsletter {
        flex-direction: column;
        gap: 40px;

        &__title {
            align-items: center;
            text-align: center;
        }

        &__form {
            width: 100%;
        }
    }
}

@include mQ(tt) {
    .newsletter {
        padding: 75px 5%;

        &__form {
            width: 100%;
        }
    }
}

@include mQ(mob) {
    .newsletter {
        padding: 75px 2%;
    }
}
</style>