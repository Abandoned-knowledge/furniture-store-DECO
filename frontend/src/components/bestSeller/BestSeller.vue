<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue';

interface SwitcherItems { id: number, title: string, };

const switcherItem = ref([]);

let switcherItemActiveIndex: Ref<number | undefined> = ref(0);

function selectSwitcherItem(index: number) {
    let value: any[] = switcherItem.value;
    value.forEach((el: any) => el.classList.remove("switcher__item_active"));
    value[index - 1].classList.add("switcher__item_active");  

    switcherItemActiveIndex.value = index;
}

onMounted(() => {
    selectSwitcherItem(1);
})

const switcherItems: SwitcherItems[] = [
    { id: 1, title: "New Arrivals" },
    { id: 2, title: "Best Seller" },
    { id: 3, title: "Top Rates" },
]
</script>

<template>
    <article class="container page">
        <h2 class="h2-text"> Our Best Seller</h2>

        <article class="switcher">
            <p 
            v-for="item in switcherItems" 
            :key="item.id" 
            class="switcher__item body-text" 
            ref="switcherItem"
            @click="selectSwitcherItem(item.id)"
            >{{ item.title }}</p>

        </article>
    </article>
</template>

<style scoped lang="scss">
@import '@/scss/main';

.container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 30px;
    margin-top: 75px;
}

.switcher {
    background-color: lighten($colorGrey, 35);
    display: flex;
    align-items: center;
    width: fit-content;
    border-radius: 10px;

    &__item {
        padding: 10px 20px;
        border-radius: 10px;
        position: relative;
        display: flex;
        align-items: center;
        cursor: pointer;

        // &::before {
        //     content: '';
        //     position: absolute;
        //     height: 20px;
        //     height: 50%;
        //     width: 2px;
        //     background-color: lighten($colorGrey, 10);
        //     left: 0;
        // }
        &_active {
            background-color: $colorAccent;
            color: white;

            // &::before {
            //     display: none;
            // }
        }
    }
}
</style>