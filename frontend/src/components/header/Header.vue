<script setup lang="ts">
import { RouterLink } from 'vue-router';
import LogoIcon from '@/components/icons/LogoIcon.vue';
import SearchIcon from '@/components/icons/header/SearchIcon.vue';
import ProfileIcon from '@/components/icons/header/ProfileIcon.vue';
import LikeHeartIcon from '@/components/icons/header/LikeHeartIcon.vue';
import BagIcon from '@/components/icons/header/BagIcon.vue';
import type { Component } from 'vue';

interface MainNav { id: number | string, text: string, route: string }
const mainNav: MainNav[] = [
    { id: 1, text: "Furniture", route: "/furniture", },
    { id: 2, text: "Homewares", route: "/homewares", },
    { id: 3, text: "Chairs and stools", route: "/chairs", },
    { id: 4, text: "Tables and desks", route: "/tables", },
    { id: 5, text: "About", route: "/about", },
];
</script>

<template>
    <header class="header">
        <section class="header__wrapper container">
            <RouterLink to="/">
                <LogoIcon class="logo-icon" />
            </RouterLink>

            <!-- <nav class="nav">
                <RouterLink v-for="item in mainNav" :to="item.route" :key="item.id" class="body-text">{{ item.text }}</RouterLink>
            </nav> -->

            <nav class="nav add-nav">
                <button class="add-nav__search"><SearchIcon class="icon" /></button>

                <RouterLink to="/profile"><ProfileIcon class="icon" /></RouterLink>
                
                <RouterLink to="/liked">
                    <div class="add-nav__liked-mark"></div>
                    <LikeHeartIcon class="icon" />
                </RouterLink>
                
                <RouterLink to="/bag">
                    <div class="bag-count"></div>
                    <BagIcon class="icon" />
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

.add-nav__search {
    border: none;
    background-color: transparent;
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
