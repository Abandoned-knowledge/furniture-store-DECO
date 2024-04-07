<script setup lang="ts">
import DeliveryIcon from '../icons/benefits/DeliveryIcon.vue';
import BoxIcon from '../icons/benefits/BoxIcon.vue';
import SwatchIcon from '../icons/benefits/SwatchIcon.vue';
import PaymentIcon from '../icons/benefits/PaymentIcon.vue';
import { type Component } from 'vue';

interface BenefitsItems { title: string, subtitle: string, icon: Component, };

const BenefitsItems: BenefitsItems[] = [
    { title: "Free Shipping", subtitle: "Capped at 39$ per order", icon: DeliveryIcon },
    { title: "Secure Payments", subtitle: "Up to 12 months installments", icon: PaymentIcon },
    { title: "14-Day Returns", subtitle: "Shop with confidence", icon: BoxIcon },
    { title: "Free Fabric Swatches", subtitle: "Delivered to your door", icon: SwatchIcon },
];
</script>

<template>

    <section class="container benefits">
        <article v-for="item in BenefitsItems" class="benefit">
            <component :is="item.icon" class="benefit__icon" />
            <p class="title-text">{{ item.title }}</p>
            <p class="body-text body-text_lighten">{{ item.subtitle }}</p>
        </article>
    </section>

</template>


<style scoped lang="scss">
@import '@/scss/main';

.benefits {
    display: flex;
    gap: 50px;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 75px;
}

.benefit {
    box-sizing: border-box;
    width: 20%;
    display: grid;
    grid-template-columns: repeat(2, auto);
    align-items: center;
    background: lighten($colorGrey, 35);
    border-radius: 15px;
    gap: 20px;
    padding: 20px;

    &__icon {
        grid-row: span 2;
        height: 40px;
        width: auto;
        fill: $colorAccent;
    }

    @include mQ(nb) {
        width: 40%;
    }

    @include mQ(tt) {
        width: 100%;
        margin-left: 50px;
        margin-right: 50px;
    }
}
</style>