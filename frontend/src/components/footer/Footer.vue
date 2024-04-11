<script setup lang="ts">
import FooterList from './FooterList.vue';
import LogoIcon from '@/components/icons/LogoIcon.vue';
import MasterCardIcon from '@/components/icons/payment/MasterCardIcon.vue';
import PayPalIcon from '@/components/icons/payment/PayPalIcon.vue';
import VisaIcon from '@/components/icons/payment/VisaIcon.vue';
import BehanceIcon from '@/components/icons/social-media/BehanceIcon.vue';
import DribbbleIcon from '@/components/icons/social-media/DribbbleIcon.vue';
import TelegramIcon from '@/components/icons/social-media/TelegramIcon.vue';

const footerLists = [
    {
        id: 1,
        title: "Help & Information",
        links: [
            "Support Center",
            "Delivery & Returns",
            "Terms & Conditions",
            "Products Return",
            "Wholesale Policy",
        ]
    },
    {
        id: 2,
        title: "Quick Shop",
        links: [
            "Pagination",
            "About Us",
            "Contact Us",
            "Investor Site",
            "Term of use",
        ]
    },
    {
        id: 3,
        title: "Categories",
        links: [
            "Living Room Furniture",
            "Accent Furniture",
            "Home office Furniture",
            "Kid's Furniture",
            "Dining Room Furniture",
        ]
    }
];

const sitesIcons = [
    { id: 1, link: "https://www.behance.net", comp: BehanceIcon },
    { id: 2, link: "https://dribbble.com/", comp: DribbbleIcon },
    { id: 3, link: "https://web.telegram.org", comp: TelegramIcon },
];

const paymentIcons = [
    { id: 1, comp: VisaIcon },
    { id: 2, comp: MasterCardIcon },
    { id: 3, comp: PayPalIcon },
];

</script>

<template>
    <footer class="footer">

        <section class="footer-up">
            <section class="container footer-up__wrapper">
                <article class="footer__discover">
                    <LogoIcon class="logo-icon" />
                    <p class="body-text body-text_lighten">
                        Our commitment to craftsmanship, sustainability, and customer satisfaction sets us apart.
                        Descover the Deco difference today!
                    </p>
                    <ul class="list social-media">
                        <li v-for="item in sitesIcons" :key="item.id">
                            <a :href="item.link" target="_blank">
                                <component :is="item.comp" class="icon" />
                            </a>
                        </li>
                    </ul>
                </article>

                <FooterList v-for="list in footerLists" :title="list.title" :key="list.id">
                    <RouterLink v-for="link in list.links" to="/" class="body-text body-text_lighten">{{ link }}
                    </RouterLink>
                </FooterList>
            </section>
        </section>

        <div class="footer__line"></div>

        <section class="footer-down">
            <section class="container footer-down__wrapper">
                <p class="body-text" style="text-align: center;">©Copyright 2024 | Deco Powered by Elevate UX Squad</p>

                <ul class="list payments">
                    <li v-for="item in paymentIcons" :key="item.id">
                        <component :is="item.comp" class="icon" />
                    </li>
                </ul>
            </section>
        </section>

    </footer>
</template>

<style scoped lang="scss">
@import '@/scss/main';

.footer {
    display: flex;
    flex-direction: column;
    gap: 50px;
    margin-top: 150px;
    margin-bottom: 50px;

    &-up__wrapper {
        display: flex;
        justify-content: space-between;

        @include mQ(nb) {
            width: max-content;
            display: grid;
            grid-template-columns: repeat(2, auto);
            gap: 50px;
        }

        @include mQ(tt) {
            width: max-content;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 50px;
        }

        p {
            line-height: 2rem;
        }
    }

    &__discover {
        display: flex;
        flex-direction: column;
        width: 400px;
        gap: 30px;

        @include mQ(tt) {
            width: 350px;
            text-align: center;
            align-items: center;
        }

        @include mQ(mob) {
            width: 300px;
            text-align: center;
            align-items: center;
        }

        .social-media {
            display: flex;
            align-items: center;
            gap: 20px;
        }
    }

    &-down__wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .payments {
            display: flex;
            align-items: center;
            gap: 40px;
        }

        @include mQ(tt) {
            flex-direction: column;
            justify-content: center;
        }
    }

    &__line {
        height: 2px;
        background-color: lighten($colorGrey, 30);
    }

    .logo-icon {
        width: 80%;
        height: auto;
    }
}
</style>