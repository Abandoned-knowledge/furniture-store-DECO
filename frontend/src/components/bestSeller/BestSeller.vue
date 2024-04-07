<script setup lang="ts">
import { onBeforeMount, onMounted, ref, type Ref } from 'vue';
import BestSellerItem from '@/components/productItem/BestSellerItem.vue';

let switcherItem = ref([]);

let switcherItemActiveIndex: Ref<number> = ref(1);

function selectSwitcherItem(index: number) {
    let value: any[] = switcherItem.value;
    value.forEach((el: any) => el.classList.remove("switcher__item_active"));
    value[index - 1].classList.add("switcher__item_active");
    switcherItemActiveIndex.value = index;
}

onMounted(() => {
    selectSwitcherItem(1);
})

interface itemInter { productPhoto: string, title: string, price: number, };
interface SwitcherItemsInter { id: number, title: string, items: itemInter[] };

const switcherItems: SwitcherItemsInter[] = [
    {
        id: 1,
        title: "New Arrivals",
        items: [
            {
                productPhoto: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                title: "white sofa",
                price: 54
            },
            {
                productPhoto: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                title: "white sofa",
                price: 54
            },
            {
                productPhoto: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                title: "white sofa",
                price: 54
            },
            {
                productPhoto: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                title: "white sofa",
                price: 54
            },
            {
                productPhoto: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                title: "white sofa",
                price: 54
            }
        ],
    },
    {
        id: 2,
        title: "Best Seller",
        items: [
            {
                productPhoto: "https://images.unsplash.com/photo-1550226891-ef816aed4a98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
                title: "orange furniture",
                price: 23
            },
            {
                productPhoto: "https://images.unsplash.com/photo-1550226891-ef816aed4a98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
                title: "orange furniture",
                price: 23
            },
            {
                productPhoto: "https://images.unsplash.com/photo-1550226891-ef816aed4a98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
                title: "orange furniture",
                price: 23
            },
        ],
    },
    {
        id: 3,
        title: "Top Rates",
        items: [
            {
                productPhoto: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                title: "lamps",
                price: 15,
            },
            {
                productPhoto: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                title: "lamps",
                price: 15,
            },
            {
                productPhoto: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                title: "lamps",
                price: 15,
            },
        ],
    },
]
</script>

<template>
    <section class="container">
        <h2 class="h2-text"> Our Best Seller</h2>

        <article class="switcher">
            <p v-for="item in switcherItems" :key="item.id" class="switcher__item body-text" ref="switcherItem"
                @click="selectSwitcherItem(item.id)">{{ item.title }}</p>
        </article>

        <section class="items">
            <BestSellerItem
            v-for="productItem in switcherItems[switcherItemActiveIndex - 1].items"
            :photo="productItem.productPhoto"
            :title="productItem.title" 
            :price="productItem.price" 
            />

        </section>
    </section>


</template>

<style scoped lang="scss">
@import '@/scss/main';

.container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 30px;
    margin-top: 150px;
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

.items {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
}
</style>