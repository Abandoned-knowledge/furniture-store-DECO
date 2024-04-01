<script setup lang="ts">
import { RouterLink } from 'vue-router';
import LogoIcon from '@/components/icons/LogoIcon.vue';
import SearchIcon from '@/components/icons/header/SearchIcon.vue';
import ProfileIcon from '@/components/icons/header/ProfileIcon.vue';
import LikeHeartIcon from '@/components/icons/header/LikeHeartIcon.vue';
import BagIcon from '@/components/icons/header/BagIcon.vue';
import BurgerMenu from "./BurgerMenu.vue";
import type { Component } from 'vue';

interface MainNav { id: number | string, text: string, route: string };
const mainNav: MainNav[] = [
    { id: 1, text: "Furniture", route: "/furniture", },
    { id: 2, text: "Homewares", route: "/homewares", },
    { id: 3, text: "Chairs and stools", route: "/chairs", },
    { id: 4, text: "Tables and desks", route: "/tables", },
    { id: 5, text: "About", route: "/about", },
];


interface addNav { id: number | string, route: string, icon: Component, hasAddElement: boolean, elementClass: string };
const addNav: addNav[] = [
    { id: 1, route: "/profile", icon: ProfileIcon, hasAddElement: false, elementClass: "" },
    { id: 2, route: "/liked", icon: LikeHeartIcon, hasAddElement: true, elementClass: "add-nav__liked-mark" },
    { id: 2, route: "/bag", icon: BagIcon, hasAddElement: true, elementClass: "bag-count" },
];
</script>

<template>
    <header class="header">
        <section class="header__wrapper container">

            <RouterLink to="/">
                <LogoIcon class="logo-icon" />
            </RouterLink>

            <BurgerMenu />

            <nav class="nav">
                <RouterLink v-for="item in mainNav" :to="item.route" :key="item.id" class="body-text">{{ item.text }}</RouterLink>
            </nav>

            <nav class="nav add-nav">
                <button class="add-nav__search">
                    <SearchIcon class="icon" />
                </button>

                <RouterLink v-for="item in addNav" :to="item.route">
                    <component :is="item.icon" class="icon" />
                    <div v-if="item.hasAddElement" :class="item.elementClass"></div>
                </RouterLink>
            </nav>
        </section>
    </header>
</template>


<style scoped lang="scss">
@import '@/scss/_colors.scss';
@import '@/scss/_other.scss';

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


.icon {
    fill: $colorDark;
}

.logo-icon {
    fill: $colorDark;
    width: 120px;
    height: auto;
}
</style>
