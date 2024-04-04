<script setup lang="ts">
import { ref, type Ref } from 'vue';
import type { MainNav } from './Header.vue';
import type { AddNav } from './Header.vue';

let isActive: Ref<boolean | undefined> = ref(true);

interface Props {
    mainNav: MainNav[],
    addNav: AddNav[]
}

const props = defineProps<Props>()

</script>

<template>
    <article class="burger-icon" :class="{ 'burger-icon_active': isActive }" @click="isActive = !isActive">
        <div class="burger-icon_line burger-icon_line-1"></div>
        <div class="burger-icon_line burger-icon_line-2"></div>
        <div class="burger-icon_line burger-icon_line-3"></div>
    </article>

    <nav class="nav" :class="{ 'nav_active': isActive }">
        <RouterLink v-for="item in props.mainNav" :to="item.route" :key="item.id" class="body-text ">{{ item.text }}
        </RouterLink>

        <RouterLink v-for="item in props.addNav" :to="item.route" :key="item.id" class="body-text nav__item">
            {{ item.name }}
            <component :is="item.icon" />
        </RouterLink>
    </nav>
</template>


<style scoped lang="scss">
@import '@/scss/_colors.scss';
@import '@/scss/_other.scss';

.burger-icon {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    margin-right: 30px;
    height: 25px;
    width: 25px;
    padding: 2px;
    overflow: hidden;

    &_active {

        .burger-icon_line-1 {
            transform-origin: top left;
            rotate: 45deg;
            width: 110%;
        }

        .burger-icon_line-3 {
            transform-origin: bottom left;
            rotate: -45deg;
            width: 110%;
        }

        .burger-icon_line-2 {
            transform: translateX(-150%);
            opacity: 0;
            visibility: hidden;
        }
    }

    &_line {
        width: 100%;
        height: 3px;
        background-color: $colorDark;
        border-radius: 100px;
        transition: all .3s ease;
    }

}

.nav {
    background-color: white;
    position: absolute;
    top: 100%;
    z-index: 10;
    min-width: 100%;
    display: flex;
    flex-direction: column;
    padding: 30px;
    display: none;

    gap: 30px;

    &__item {
        display: flex;
        align-items: center;
        gap: 20px;
    }

    &_active {
        display: flex;
    }
}
</style>