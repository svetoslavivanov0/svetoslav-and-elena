<template>
    <section class="timeline-section" id="timeline-section">
        <h3>Как ще протече денят:</h3>
        <div class="timeline">
            <div class="container left">
                <div class="content">
                    <h3>15:00</h3>
                    <p>
                        <span>
                            Църковен брак
                            <br>
                            Храм "Свето Успение Богородично"
                            <br>
                            Каварна
                        </span>
                    </p>
                </div>
            </div>

            <div class="container right">
                <div class="content">
                    <h3>17:00</h3>
                    <p>
                        <span>
                            Изнесен ритуал
                            <br>
                            Комплекс "Кедъра"
                            <br>
                            Варна
                        </span>
                    </p>
                </div>
            </div>

            <div class="container left">
                <div class="content">
                    <h3>18:00</h3>
                    <p>
                        <span>
                            Снимки и поздравления
                            <br>
                            Комплекс "Кедъра"
                            <br>
                            Варна
                        </span>
                    </p>
                </div>
            </div>

            <div class="container right">
                <div class="content">
                    <h3>19:00</h3>
                    <p>
                        <span>
                            Сватбена вечеря
                            <br>
                            Комплекс "Кедъра"
                            <br>
                            Варна
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// You can use data or props here if you prefer dynamic content
</script>

<style scoped>
/* The container for the entire timeline */

h2 {
    font-size: 50px;
    font-family: "Forum", sans-serif;
}

.timeline-section {
    background-color: #fffbf7;
    padding: 120px 0;
    text-align: center;
    color: #bea994;

    h3,
    p {
        font-family: "Forum", sans-serif;
        font-size: 18px;
    }

    @media screen and (max-width: 961px) {
        padding: 50px 0;
    }
}

.timeline-section h3 {
    font-size: 36px;
    margin-bottom: 30px;
}

.timeline {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
}

.timeline:after {
    content: '';
    position: absolute;
    width: 6px;
    background-color: #b2b2b3;
    top: 0;
    bottom: 0;
    left: 50%;
    display: block; /* Ensure pseudo-element renders */
}

    @media (max-width: 961px) {
    .timeline:after {
        display: none;
    }
}


/* Container for each event */
.container {
    position: relative;
    background-color: inherit;
    width: calc(50% - 55px);
    margin-top: 50px;

    @media screen and (max-width: 961px) {
        width: auto;
        margin-left: 10%;
        margin-right: 10%;
    }
}

/* Circle that appears for each event */
.container:after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    right: -17px;
    background-color: white;
    border: 4px solid #e0dbc4;
    border-radius: 50%;
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);
    right: -46px;
}

@media screen and (max-width: 961px) {
    .container:after {
        top: auto;
        bottom: 0;
        width: 5px;
        height: 50px;
        right: auto;
        transform: translate(0, 100%);
        border: 0;
        border-radius: 0;
        background-color: #b2b2b3;
    }

    .container:last-child:after {
        display: none;
    }

    .right:after {
        left: auto !important;
    }

    .right {
        left: auto !important;
    }
}

/* Left-side event */
.left {
    left: 30px;

    @media screen and (max-width: 961px) {
        left: auto;
    }
}

/* Right-side event */
.right {
    left: calc(50% + 30px);
}

/* Arrows pointing towards the timeline */
.left:before {
    display: none;
    content: " ";
    height: 0;
    position: absolute;
    top: 9px;
    width: 0;
    z-index: 1;
    right: 30px;
    border: medium solid white;
    border-width: 10px 0 10px 10px;
    border-color: transparent transparent transparent white;
}

.right:before {
    display: none;
    content: " ";
    height: 0;
    position: absolute;
    top: 15px;
    width: 0;
    z-index: 1;
    left: 30px;
    border: medium solid white;
    border-width: 10px 10px 10px 0;
    border-color: transparent white transparent transparent;
}

/* Fix position for circles on the right */
.right:after {
    left: -46px;
}

/* Event content styling */
.content {
    padding: 20px 30px;
    background-color: white;
    position: relative;
    border-radius: 20px;
    margin-top: 30px;

    &:first-child {
        margin-top: 0;
    }

    @media screen and (max-width: 961px) {
        padding: 30px 0;
    }
}
</style>
