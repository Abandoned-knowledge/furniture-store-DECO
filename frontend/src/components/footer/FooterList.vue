<script setup lang="ts">

interface Props {
    title: string,
}

const props = defineProps<Props>()
</script>

<template>
    <article class="footer-up__list">
        <p class="body-text body-text_title">{{ props.title }}</p>
        <div class="accent-line"></div>
        <ul class="list">
            <slot></slot>
        </ul>
    </article>
</template>


<style scoped lang="scss">
@import '@/scss/_colors.scss';
@import '@/scss/_other.scss';

.footer-up__list {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .accent-line {
        width: 100px;
        padding-bottom: 10px;
        border-top: 1.5px solid $colorAccent;
    }

    p {
        margin: 0;
        position: relative;
    }

    .list {
        display: flex;
        flex-direction: column;
        margin: 0;
        gap: 20px;
    }
}
</style>