<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue';

interface SliderContent {
    id: number | string,
    title: string,
    route: string,
    routeName: string,
    imgSrc: string,
}

const sliderContent: SliderContent[] = [
    {
        id: 1,
        title: "A NEW SLANT",
        route: "/",
        routeName: "shop sofas",
        imgSrc: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 2,
        title: "AMAZING CHAIR",
        route: "/",
        routeName: "shop chairs",
        imgSrc: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 3,
        title: "BEAUTIFUL SHOP",
        route: "/",
        routeName: "home",
        imgSrc: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
];

let slideIndex: Ref<number> = ref(0);

let paginationItem = ref([]);

function selectPaginationItem(index: number) {
    let pagArr = paginationItem.value;
    if (pagArr) {
        pagArr.forEach((el: any) => {
            el.classList.remove("slider__pagination_selected");
        })
        pagArr[index].classList.add("slider__pagination_selected");
    }
}

onMounted(() => {
    selectPaginationItem(0);
})
</script>

<template>
    <section class="slider">
        <section v-if="sliderContent.length > 0" class="slider__pagination">
            <div v-for="n in sliderContent.length" class="slider__pagination_circle"
                @click="[slideIndex = n - 1, selectPaginationItem(n - 1)]" :key="n" ref="paginationItem"></div>
        </section>

        <article v-for="content in sliderContent" :key="content.id" class="slider__item"
            :style="{ transform: `translateX(-${slideIndex}00%)` }">
            <section class="slider__text">
                <h1 class="h1-text">{{ content.title }}</h1>
                <a :href="content.route" class="slider__link">{{ content.routeName }}</a>
            </section>
            <img :src="content.imgSrc" class="slider__photo" :alt="content.title">
        </article>

    </section>
</template>

<style scoped lang="scss">
@import '@/scss/main';

.slider {
    display: flex;
    width: 100%;
    height: 700px;
    overflow: hidden;
    position: relative;

    &__link {
        font-family: $font;
        color: white;
        font-size: 30px;
        text-decoration: underline;
    }

    &__pagination {
        position: absolute;
        display: flex;
        gap: 10px;
        bottom: 15%;
        left: 5%;
        z-index: 5;

        &_circle {
            cursor: pointer;
            height: 15px;
            width: 15px;
            border: 2px solid white;
            border-radius: 9999px;
        }

        &_selected {
            background-color: white;
        }
    }

    &__item {
        min-width: 100%;
        height: 100%;
        position: relative;
        transition: all .5s ease;
    }

    &__text {
        position: absolute;
        left: 5%;
        bottom: 30%;
        display: flex;
        flex-direction: column;
        gap: 40px;
        z-index: 5;
    }

    &__photo {
        min-width: 100%;
        height: 100%;
        object-fit: cover;
        filter: brightness(0.6);
    }
}
</style>