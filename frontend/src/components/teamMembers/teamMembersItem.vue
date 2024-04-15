<script setup lang="ts">
import type { Component } from 'vue';


interface socialLinks {
    id: number,
    component: Component,
    link: string,
}

interface membersInter {
    name: string,
    photo: string,
    post: string,
    socialLinks: socialLinks[],
}

const props = defineProps<membersInter>();
</script>

<template>

    <article class="member">
        <img :src="$props.photo" alt="member" class="member__photo">
        <section class="member__content">
            <p class="member__title title-text">{{ $props.name }}</p>
            <p class="body-text body-text_lighten">{{ $props.post }}</p>
        </section>

        <section class="member__socials">
            <a v-for="link in $props.socialLinks" :key="link.id" :href="link.link" class="link">
                <component :is="link.component" class="member__link-icon icon" />
            </a>
        </section>
    </article>

</template>

<style scoped lang="scss">
@import '@/scss/main';

.member {
    width: 100%;
    height: fit-content;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: end;
    align-items: center;
    row-gap: 40px;

    &:first-child {
        .member {
            &__photo {
                height: 400px;
            }

            &__title {
                color: $colorAccent;
            }
        }

    }

    &__photo {
        grid-column: 2 span;
        width: 100%;
        height: 350px;
        object-fit: cover;
        border-radius: 10px;
    }

    &__content {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    &__socials {
        width: fit-content;
        height: fit-content;
        justify-self: end;
        display: flex;
        gap: 20px;
    }

    &__link-icon {
        width: 32px;
        height: auto;
    }
}
</style>