<script setup lang="ts">
import Slider from '@/components/slider/Slider.vue';
import Benefits from '@/components/benefits/Benefits.vue';
import DiscoverMore from '@/components/infoBlocks/DiscoverMore.vue';
import BestSeller from '@/components/bestSeller/BestSeller.vue';
import BigSale from '@/components/infoBlocks/BigSale.vue';
import DealsDay from '@/components/dealsDay/DealsDay.vue';
import Blogs from '@/components/blogs/Blogs.vue';
import Newsletter from '@/components/newsletter/Newsletter.vue';
</script>

<template>
    <Slider />
    <Benefits />
    <DiscoverMore />
    <BestSeller />
    <BigSale />
    <DealsDay />
    <Blogs />
    <Newsletter />
</template>

<style scoped lang="scss">
@import '@/scss/main';
</style>