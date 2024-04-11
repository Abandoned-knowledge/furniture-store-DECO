<script setup lang="ts">
import CalendarIcon from '@/components/icons/blogs/CalendarIcon.vue';
import CommentIcon from '@/components/icons/blogs/CommentIcon.vue';
import EditIcon from '@/components/icons/blogs/EditIcon.vue';
import { type blogsInfoInter } from "./Blogs.vue";
import { computed } from 'vue';

const commentsCount = computed(() => (props.commentsCount >= 10) ? props.commentsCount : `0${props.commentsCount}`);

const props = defineProps<blogsInfoInter>();
</script>

<template>

    <article class="blog">
        <img :src="$props.photo" alt="blog's image" class="blog__img">
        <section class="blog__content">
            <section class="blog__creature">
                <p class="blog__creature-info body-text">
                    <CalendarIcon class="icon" /> {{ $props.date }}
                </p>
                <p class="blog__creature-info body-text">
                    <EditIcon class="icon" /> {{ $props.author }}
                </p>
                <p class="blog__creature-info body-text">
                    <CommentIcon class="icon" /> {{ commentsCount }}
                </p>
            </section>

            <section class="blog__title">
                <p class="title-text">{{ $props.title }}</p>
                <p class="body-text body-text_lighten">{{ $props.description }}</p>
            </section>

            <a class="blog__btn title-text">Read More</a>
        </section>
    </article>

</template>

<style scoped lang="scss">
@import '@/scss/main';

.blog {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;

    @include mQ(tt) {
        gap: 20px;
    }

    &__content {
        display: flex;
        flex-direction: column;
        gap: 30px;
        padding-right: 10%;

        @include mQ(tt) {
            gap: 15px;
        }
    }

    &__img {
        width: 100%;
        height: auto;
        border-radius: 15px;
        object-fit: cover;
    }

    &__creature {
        display: flex;
        gap: 30px;
    }

    &__creature-info {
        display: flex;
        align-items: center;
        gap: 5px;
    }

    &__title {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    &__btn {
        cursor: pointer;
        width: fit-content;
    }
}
</style>