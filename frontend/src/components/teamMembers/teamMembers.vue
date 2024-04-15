<script setup lang="ts">
import type { Component } from 'vue';
import TelegramIcon from '../icons/social-media/TelegramIcon.vue';
import VKIcon from '../icons/social-media/VKIcon.vue';
import TeamMembersItem from './teamMembersItem.vue';

interface socialLinks {
    id: number,
    component: Component,
    link: string,
}

interface membersInter {
    id: number,
    name: string,
    photo: string,
    post: string,
    socialLinks: socialLinks[],
}

const members: membersInter[] = [
    {
        id: 1,
        name: "David Johnson",
        photo: "https://images.unsplash.com/photo-1600878459138-e1123b37cb30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdvcmtpbmclMjBtYW58ZW58MHx8MHx8fDA%3D",
        post: "CEO, Deco",
        socialLinks: [
            {
                id: 1,
                component: TelegramIcon,
                link: "https://web.telegram.org/k/",
            },
            {
                id: 2,
                component: VKIcon,
                link: "https://vk.com",
            },
        ],
    },
    {
        id: 2,
        name: "Will Smith",
        photo: "https://images.unsplash.com/photo-1556817977-00e61f659427?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFsZSUyMGVtcGxveWVlfGVufDB8fDB8fHww",
        post: "Web Developer, Deco",
        socialLinks: [
            {
                id: 1,
                component: TelegramIcon,
                link: "https://web.telegram.org/k/",
            },
            {
                id: 2,
                component: VKIcon,
                link: "https://vk.com",
            },
        ],
    },
    {
        id: 3,
        name: "Rayan Re",
        photo: "https://images.unsplash.com/photo-1549045337-967927d923c0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        post: "Designer, Deco",
        socialLinks: [
            {
                id: 1,
                component: TelegramIcon,
                link: "https://web.telegram.org/k/",
            },
            {
                id: 2,
                component: VKIcon,
                link: "https://vk.com",
            },
        ],
    },
    {
        id: 1,
        name: "Kirm Evd",
        photo: "https://images.unsplash.com/photo-1498758536662-35b82cd15e29?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        post: "Manager, Deco",
        socialLinks: [
            {
                id: 1,
                component: TelegramIcon,
                link: "https://web.telegram.org/k/",
            },
            {
                id: 2,
                component: VKIcon,
                link: "https://vk.com",
            },
        ],
    },
];
</script>

<template>


    <section class="members">
        <h2 class="members__title h2-text container">Introducing Our Creative Team Members</h2>

        <section class="members__wrapper">
            <section class="members__container container">
                <TeamMembersItem v-for="item in members" :key="item.id" :name="item.name" :photo="item.photo"
                    :post="item.post" :socialLinks="item.socialLinks" />
            </section>
        </section>
    </section>

</template>

<style scoped lang="scss">
@import '@/scss/main';

.members {
    margin-top: 150px;
    display: flex;
    flex-direction: column;
    gap: 50px;


    &__wrapper {
        background-color: lighten($colorGrey, 10);
        padding: 75px 0;

    }

    &__container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        column-gap: 30px;
        row-gap: 50px;
    }
}
</style>