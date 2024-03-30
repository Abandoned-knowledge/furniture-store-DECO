<script setup lang="ts">
import { RouterLink } from 'vue-router';
import LogoIcon from './icons/LogoIcon.vue';
import SearchIcon from './icons/header/SearchIcon.vue';
import ProfileIcon from './icons/header/ProfileIcon.vue';
import LikeHeartIcon from './icons/header/LikeHeartIcon.vue';
import BagIcon from './icons/header/BagIcon.vue';
</script>

<template>
    <header class="header">
        <section class="header__wrapper container">
            <RouterLink to="/">
                <LogoIcon class="logo-icon" />
            </RouterLink>

            <nav class="nav">
                <RouterLink to="/furniture" class="body-text">Furniture</RouterLink>
                <RouterLink to="/homewares" class="body-text">Homewares</RouterLink>
                <RouterLink to="/chairs" class="body-text">Chairs and stools</RouterLink>
                <RouterLink to="/tables" class="body-text">Tables and desks</RouterLink>
                <RouterLink to="/about" class="body-text">About</RouterLink>
            </nav>

            <nav class="nav add-nav">
                <button class="add-nav__search">
                    <SearchIcon class="icon" />
                </button>
                <RouterLink to="/profile">
                    <ProfileIcon class="icon" />
                </RouterLink>
                <RouterLink to="/liked">
                    <div class="add-nav__liked-mark"></div>
                    <LikeHeartIcon class="icon" />
                </RouterLink>
                <RouterLink to="/bag">
                    <BagIcon class="icon" />
                </RouterLink>
            </nav>
        </section>
    </header>
</template>


<style scoped lang="scss">
@import '../scss/_colors.scss';
@import '../scss/_other.scss';

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
./icons/header/BagIcon.vue./icons/header/LikeHeartIcon.vue./icons/header/ProfileIcon.vue./icons/header/SearchIcon.vue