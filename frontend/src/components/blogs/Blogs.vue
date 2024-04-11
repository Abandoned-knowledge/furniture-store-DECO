<script setup lang="ts">
import BlogItem from './BlogItem.vue';

export interface blogsInfoInter {
    id: number,
    title: string,
    description: string,
    photo: string,
    author: string,
    date: string,
    commentsCount: number,
}

const blogsInfo: blogsInfoInter[] = [
    {
        id: 1,
        title: "Trending Furniture Styles For 2024",
        description: "Brings out the natural beauty of the wood, making it a stunning piece for any room.",
        photo: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        author: "admin",
        date: "April 4, 2024",
        commentsCount: 11,
    },
    {
        id: 2,
        title: "A Journey Through Timeless Furniture",
        description: "Brings out the natural beauty of the wood, making it a stunning piece for any room.",
        photo: "https://images.unsplash.com/photo-1529336953128-a85760f58cb5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        author: "admin",
        date: "April 4, 2024",
        commentsCount: 2,
    },
    {
        id: 3,
        title: "Sofa Chronicles of Comfort and Style",
        description: "Brings out the natural beauty of the wood, making it a stunning piece for any room.",
        photo: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        author: "admin",
        date: "April 4, 2024",
        commentsCount: 2,
    },
];

</script>

<template>
    <section class="container">
        <h2 class="h2-text" style="width: fit-content;">The Blog</h2>
        <section class="blogs">

            <BlogItem 
            v-for="item in blogsInfo"
            :key="item.id"
            :id="item.id"
            :title="item.title"
            :photo="item.photo"
            :description="item.description"
            :author="item.author"
            :date="item.date"
            :comments-count="item.commentsCount"
            />

            <!-- <article class="blog" v-for="item in blogsInfo" :key="item.id">
                <img :src="item.photo" alt="blog's image" class="blog__img">
                <section class="blog__content">
                    <section class="blog__creature">
                        <p class="blog__creature-info body-text">
                            <CalendarIcon class="icon"/> {{ item.date }}
                        </p>
                        <p class="blog__creature-info body-text">
                            <EditIcon class="icon"/> {{ item.author }}
                        </p>
                        <p class="blog__creature-info body-text">
                            <CommentIcon class="icon"/> 0{{ item.commentsCount }}
                        </p>
                    </section>

                    <section class="blog__title">
                        <p class="title-text">{{ item.title }}</p>
                        <p class="body-text body-text_lighten">{{ item.description }}</p>
                    </section>

                    <a class="blog__btn title-text">Read More</a>
                </section>
            </article> -->

        </section>
    </section>
</template>

<style scoped lang="scss">
@import '@/scss/main';

.container {
    display: flex;
    flex-direction: column;
    gap: 50px;
    margin-top: 150px;
}

.blogs {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 30px;


    @include mQ(nb) {
        grid-template-columns: repeat(2, 1fr);
        padding: 0 5%;
        row-gap: 70px;
    }

    @include mQ(tt) {
        grid-template-columns: 1fr;
        padding: 0 5%;
    }
}
</style>