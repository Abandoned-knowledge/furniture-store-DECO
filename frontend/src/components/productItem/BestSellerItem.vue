<script setup lang="ts">
interface Props {
    photo: string,
    title: string,
    price: number,
}
const props = defineProps<Props>();
</script>

<template>
    <article class="item">
        <img :src="$props.photo" alt="" class="item__photo">
        <p class="title-text">{{ $props.title }}</p>
        <p class="title-text accent">$ {{ $props.price }}.00</p>
    </article>
</template>

<style scoped lang="scss">
@import '@/scss/main';

.item {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 300px;
    // height: auto;

    &__photo {
        width: 100%;
        height: 400px;
        object-fit: cover;
        border-radius: 15px;
    }
}
</style>