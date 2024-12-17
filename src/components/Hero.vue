<template>
    <div class="wrapper">
        <div class="shell">
            <div class="text-image">
                <div class="image">
                    <img src='../assets/IMG_5044.jpg' alt=''>
                </div>

                <div class="text">
                    <span>
                        Светослав
                        <br>
                        и
                        <br>
                        Елена
                    </span>
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
    padding: 180px 0 100px;
    font-family: "TheArtist", serif;
    font-size: 80px;

    .text-image {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
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
            margin: 0 auto 95px;
        }
    }

    .text span {
        color: #bea994
    }
}
</style>
