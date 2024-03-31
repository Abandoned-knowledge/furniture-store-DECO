<script setup lang="ts">
import FooterList from './FooterList.vue';
import LogoIcon from '../icons/LogoIcon.vue';
import MasterCardIcon from '../icons/payment/MasterCardIcon.vue';
import PayPalIcon from '../icons/payment/PayPalIcon.vue';
import VisaIcon from '../icons/payment/VisaIcon.vue';
import BehanceIcon from '../icons/social-media/BehanceIcon.vue';
import DribbbleIcon from '../icons/social-media/DribbbleIcon.vue';
import TelegramIcon from '../icons/social-media/TelegramIcon.vue';


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

                <FooterList title="Help & Information">
                    <RouterLink to="/" class="body-text body-text_lighten">Support Center</RouterLink>
                    <RouterLink to="/" class="body-text body-text_lighten">Delivery & Returns</RouterLink>
                    <RouterLink to="/" class="body-text body-text_lighten">Terms & Conditions</RouterLink>
                    <RouterLink to="/" class="body-text body-text_lighten">Products Return</RouterLink>
                    <RouterLink to="/" class="body-text body-text_lighten">Wholesale Policy</RouterLink>
                </FooterList>
                <FooterList title="Quick Shop">
                    <RouterLink to="/" class="body-text body-text_lighten">Pagination</RouterLink>
                    <RouterLink to="/" class="body-text body-text_lighten">About Us</RouterLink>
                    <RouterLink to="/" class="body-text body-text_lighten">Contact Us</RouterLink>
                    <RouterLink to="/" class="body-text body-text_lighten">Investor Site</RouterLink>
                    <RouterLink to="/" class="body-text body-text_lighten">Term of use</RouterLink>
                </FooterList>
                <FooterList title="Categories">
                    <RouterLink to="/" class="body-text body-text_lighten">Living Room Furniture</RouterLink>
                    <RouterLink to="/" class="body-text body-text_lighten">Accent Furniture</RouterLink>
                    <RouterLink to="/" class="body-text body-text_lighten">Home office Furniture</RouterLink>
                    <RouterLink to="/" class="body-text body-text_lighten">Kid's Furniture</RouterLink>
                    <RouterLink to="/" class="body-text body-text_lighten">Dining Room Furniture</RouterLink>
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

        .payments{
            display: flex;
            align-items: center;
            gap: 40px;
        }
    }
    .icon {
        fill: $colorDark;
    }
    &__line{
        height: 2px;
        background-color: lighten($colorGrey, 30);
    }
    .logo-icon {
        width: 300px;
        height: auto;
    }
}
</style>