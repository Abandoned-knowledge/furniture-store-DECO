<script setup lang="ts">
import FooterList from './FooterList.vue';
import LogoIcon from '../icons/LogoIcon.vue';
import MasterCardIcon from '../icons/payment/MasterCardIcon.vue';
import PayPalIcon from '../icons/payment/PayPalIcon.vue';
import VisaIcon from '../icons/payment/VisaIcon.vue';
import BehanceIcon from '../icons/social-media/BehanceIcon.vue';
import DribbbleIcon from '../icons/social-media/DribbbleIcon.vue';
import TelegramIcon from '../icons/social-media/TelegramIcon.vue';

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

</script>

<template>
    <footer class="footer">

        <article class="footer-up">
            <section class="container footer-up__wrapper">

                <article class="footer__discover">
                    <LogoIcon class="logo-icon" />
                    <p class="body-text body-text_lighten">
                        Our commitment to craftsmanship, sustainability, and customer satisfaction sets us apart.
                        Descover the Deco difference today!
                    </p>
                    <ul class="list social-media">
                        <li>
                            <a href="https://www.behance.net" target="_blank">
                                <BehanceIcon class="icon" />
                            </a>
                        </li>
                        <li>
                            <a href="https://dribbble.com/" target="_blank">
                                <DribbbleIcon class="icon" />
                            </a>
                        </li>
                        <li>
                            <a href="https://web.telegram.org" target="_blank">
                                <TelegramIcon class="icon" />
                            </a>
                        </li>
                    </ul>
                </article>

                <FooterList v-for="list in footerLists" :title="list.title" :key="list.id">
                    <RouterLink v-for="link in list.links" to="/" class="body-text body-text_lighten">{{ link }}</RouterLink>
                </FooterList>

            </section>
        </article>

        <div class="footer__line"></div>

        <article class="footer-down">
            <section class="container footer-down__wrapper">
                <p class="body-text">©Copyright 2024 | Deco Powered by Elevate UX Squad</p>

                <ul class="list payments">
                    <li>
                        <VisaIcon class="payments__visa icon" />
                    </li>
                    <li>
                        <PayPalIcon class="icon" />
                    </li>
                    <li>
                        <MasterCardIcon class="icon" />
                    </li>
                </ul>
            </section>
        </article>

    </footer>
</template>

<style scoped lang="scss">
@import '../../scss/_colors.scss';
@import '../../scss/_other.scss';

.footer {
    display: flex;
    flex-direction: column;
    gap: 50px;
    margin-top: 300px;

    &-up__wrapper {
        display: flex;
        justify-content: space-between;

        p {
            line-height: 2rem;
        }
    }

    &__discover {
        display: flex;
        flex-direction: column;
        width: 400px;

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
    }

    .icon {
        fill: $colorDark;
    }

    &__line {
        height: 2px;
        background-color: lighten($colorGrey, 30);
    }

    .logo-icon {
        width: 300px;
        height: auto;
    }
}
</style>