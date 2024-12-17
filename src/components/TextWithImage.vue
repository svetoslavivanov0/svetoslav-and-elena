<template>
    <div class="wrapper">
        <div class="shell">
            <div class="text-image">
                <div class="text">
                    <h4>Поканени сте на нашия специален ден!</h4>

                    <span>
                        12 юли 2025 г.
                        <br>
                        17:00
                        <br>
                        Комплекс "Кедъра"
                        <br>
                        Варна, м-ст Бялата чешма
                    </span>
                </div>

                <div class="image">
                    <img src='../assets/background.jpeg' alt=''>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
</script>
<style scoped>
.wrapper {
    background-color: #f9f1e7;
    padding: 120px 0;

    .text-image {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        overflow: hidden;

        @media (max-width: 961px) {
           display: block;
        }
    }

    .image {
        width: 350px;
        height: 450px;
        border-radius: 50%;
        position: relative;
        border: 3px solid #bea994;
        padding: 3px;

        &:after,
        &:before {
            position: absolute;
            width: 304px;
            height: 215px;
            content: '';
            background: url("../assets/rustic.png");
        }

        &:before {
            left: -150px;
            bottom: -72px;
            transform: rotate(-187deg);
        }

        &:after {
            right: -170px;
            top: -50px;
            transform: rotate(-1deg);
        }

        img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }

        @media (max-width: 961px) {
            margin: 0 auto 70px;
        }
    }

    .text {

        h4 {
            color: #bea994;
            font-family: "Forum", sans-serif;
        }

        span {
            font-family: "Forum", sans-serif;
            font-size: 30px;
            font-weight: 700;
            color: #7e4847;
        }

        @media (max-width: 961px) {
            margin-bottom: 50px;
        }
    }

    @media (max-width: 961px) {
        padding: 30px 0 0;
    }
}
</style>

