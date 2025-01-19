<template>
    <section class="venue" id="venue">
        <div class="inner">
            <div class="shell">
                <div class='content'>
                    <h2>
                        Локацията
                    </h2>

                    <p>
                        Сватбеното тържество ще се проведе в комплекс "Кедъра". Той се намира в покрайнините на град Варна, местност Бялата Чешма.<br>
                        Разположен е в борова гора и в непосредствена близост до природен парк Златни пясъци. На територията на комплекса има осигурен паркинг, а удобната локация позволява предвижване с такси.<br>
                    </p>

                    <p>
                        Подгответе удобни обувки и добро настроение.
                    </p>
                </div>
            </div>

            <Carousel v-bind="carouselConfig">
                <Slide>
                    <div class="carousel__item">
                        <img src="../assets/kedara.jpg" alt="kedara">
                    </div>
                </Slide>

                <Slide>
                    <div class="carousel__item">
                        <img src="../assets/kedara-forest.jpg" alt="kedara-terrace">
                    </div>
                </Slide>

                <Slide>
                    <div class="carousel__item">
                        <img src="../assets/kedara-garden.jpg" alt="kedara-map">
                    </div>
                </Slide>

                <Slide>
                    <div class="carousel__item">
                        <img src="../assets/kedara-parking.jpg" alt="kedara-parking">
                    </div>
                </Slide>

                <Slide>
                    <div class="carousel__item">
                        <img src="../assets/kedara-terrace.jpg" alt="kedara-terrace">
                    </div>
                </Slide>

                <Slide>
                    <div class="carousel__item">
                        <img src="../assets/kedara-terrace-wedding.jpg" alt="kedara-terrace-wedding">
                    </div>
                </Slide>

                <Slide>
                    <div class="carousel__item">
                        <img src="../assets/kedara-map.jpg" alt="kedara-map">
                    </div>
                </Slide>

                <template #addons>
                    <Navigation />
                </template>
            </Carousel>
        </div>
    </section>
</template>
<script>
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

export default {
    name: 'Venue',
    components: {
      Carousel,
      Slide,
      Navigation,
    },
    setup() {
        const carouselConfig = {
            itemsToShow: 1,
            gap: 30,
            wrapAround: true,
            breakpoints: {
                750: {
                    itemsToShow: 2,
                }
            }
        }

        return {
            carouselConfig,
        }
    }
}
</script>
<style scoped>
.venue {
    background: #fffbf8;
    padding: 50px 0 70px;

    h2 {
        color: #7e4847;
    }

    .content {
        padding: 0 20px 30px;
    }

    p {
        font-size: 20px;
        font-family: "Forum", sans-serif;
        color: #7e4847;
        margin-bottom: 30px;
    }

    @media (max-width: 961px) {
        padding: 35px 0;
    }
}
.carousel__item {
    img {
        width: 100%;
        max-height: 450px;
    }
}
</style>
