<script setup lang="ts">
import DealsDayItem from '@/components/productItem/DealsDayItem.vue';

interface itemsInter {
    id: number,
    title: string,
    price: number,
    description: string,
    photo: string,
}

const items: itemsInter[] = [
    {
        id: 1,
        title: "Classic Suede Sofa",
        price: 95,
        description: "Natural beauty of the world, making it a stunnig piece for any room.",
        photo: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 2,
        title: "Modern Swiver Chair",
        price: 85,
        description: "Natural beauty of the world, making it a stunnig piece for any room.",
        photo: "https://images.unsplash.com/photo-1486946255434-2466348c2166?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
];

</script>

<template>
    <section class="container">
        <h2 class="h2-text h2-text_underline">Deals Of The Day</h2>

        <section class="items">
            <DealsDayItem v-for="item in items" :id="item.id" :title="item.title" :price="item.price"
                :description="item.description" :photo="item.photo" />
        </section>
    </section>
</template>

<style scoped lang="scss">
@import '@/scss/main';

.container {
    margin-top: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;
}

.items {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 1fr;
    gap: 30px;

    @include mQ(nb) {
        grid-template-columns: 1fr;
    }
}
</style>