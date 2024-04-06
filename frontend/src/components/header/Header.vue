<script setup lang="ts">
import { RouterLink } from 'vue-router';
import LogoIcon from '@/components/icons/LogoIcon.vue';
import SearchIcon from '@/components/icons/header/SearchIcon.vue';
import ProfileIcon from '@/components/icons/header/ProfileIcon.vue';
import LikeHeartIcon from '@/components/icons/header/LikeHeartIcon.vue';
import BagIcon from '@/components/icons/header/BagIcon.vue';
import BurgerMenu from "./BurgerMenu.vue";
import { ref, type Component, onMounted, onUnmounted } from 'vue';

export interface MainNav { id: number | string, text: string, route: string };
const mainNav: MainNav[] = [
    { id: 1, text: "Furniture", route: "/furniture", },
    { id: 2, text: "Homewares", route: "/homewares", },
    { id: 3, text: "Chairs and stools", route: "/chairs", },
    { id: 4, text: "Tables and desks", route: "/tables", },
    { id: 5, text: "About", route: "/about", },
];
export interface AddNav { id: number | string, route: string, name: string, icon: Component, hasAddElement: boolean, elementClass: string };
const addNav: AddNav[] = [
    { id: 1, route: "/profile", name: "Profile", icon: ProfileIcon, hasAddElement: false, elementClass: "" },
    { id: 2, route: "/liked", name: "Liked", icon: LikeHeartIcon, hasAddElement: true, elementClass: "add-nav__liked-mark" },
    { id: 2, route: "/bag", name: "Bag", icon: BagIcon, hasAddElement: true, elementClass: "bag-count" },
];

let screenWidth = ref(window.innerWidth);
let isScreenMore1024 = ref();

function updateScreenWidth() {
    screenWidth.value = window.innerWidth;
    isScreenMore1024.value = (screenWidth.value < 1024) ? false : true;
}

onMounted(() => {
    window.addEventListener("DOMContentLoaded", updateScreenWidth);
    window.addEventListener("resize", updateScreenWidth);
})

onUnmounted(() => {
    window.addEventListener("DOMContentLoaded", updateScreenWidth);
    window.removeEventListener("resize", updateScreenWidth);
})

</script>

<template>
    <header class="header">
        <section class="header__wrapper" :class="{ 'container': isScreenMore1024 }">

            <RouterLink to="/">
                <LogoIcon class="logo-icon" />
            </RouterLink>

            <BurgerMenu :main-nav="mainNav" :add-nav="addNav" v-if="screenWidth < 1024" />
            <nav class="nav" v-if="screenWidth > 1024">
                <!-- <RouterLink v-for="item in mainNav" :to="item.route" :key="item.id" class="body-text">{{ item.text }}</RouterLink> -->
            </nav>

            <nav class="nav add-nav" v-if="screenWidth > 1024">
                <button class="add-nav__search">
                    <SearchIcon class="icon" />
                </button>

                <!-- <RouterLink v-for="item in addNav" :to="item.route">
                    <component :is="item.icon" class="icon" />
                    <div v-if="item.hasAddElement" :class="item.elementClass"></div>
                </RouterLink> -->
            </nav>
        </section>
    </header>
</template>


<style scoped lang="scss">
@import '@/scss/main';

.header {
    border-bottom: 1px solid lighten($colorGrey, 25);

    &__wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 40px 0;
        position: relative;
    }
}

.nav {
    display: flex;
    align-items: center;
    gap: 30px;

    &__item {
        text-decoration: none;
    }
}

.add-nav {
    &__search {
        border: none;
        background-color: transparent;
    }

    &__liked-mark {
        width: 7px;
        height: 7px;
        background-color: $colorAccent;
        border-radius: 100px;
    }

    [href="/liked"] {
        display: flex;
        gap: 3px;
    }
}

.logo-icon {
    fill: $colorDark;
    width: 120px;
    height: auto;
}
</style>
