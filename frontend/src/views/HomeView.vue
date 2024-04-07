<script setup lang="ts">
import Slider from '@/components/slider/Slider.vue';
import Benefits from '@/components/benefits/Benefits.vue';
import DiscoverMore from '@/components/infoBlocks/DiscoverMore.vue';
import BestSeller from '@/components/bestSeller/BestSeller.vue';
import BigSale from '@/components/infoBlocks/BigSale.vue';
</script>

<template>
    <Slider />
    <Benefits />
    <DiscoverMore />
    <BestSeller />
    <BigSale />

</template>

<style scoped lang="scss">
@import '@/scss/main';
</style>