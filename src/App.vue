<template>
    <div id="app">
        <Header @scroll-to="scrollToSection"/>
        <Hero/>
        <History/>
        <TextWithImage/>
        <Footer/>
        <WeddingInfo/>
        <ParallaxSection/>
        <RSVPForm/>
    </div>

</template>

<script>
import Header from "@/components/Header.vue";
import WeddingInfo from "@/components/WeddingInfo.vue";
import RSVPForm from "@/components/RSVPForm.vue";
import ParallaxSection from "@/components/ParallaxSection.vue";
import Footer from "@/components/Footer.vue";
import Hero from '@/components/Hero.vue';
import History from '@/components/History.vue';
import TextWithImage from '@/components/TextWithImage.vue';

export default {
    name: 'App',
    components: {
        Header,
        Footer,
        RSVPForm,
        WeddingInfo,
        ParallaxSection,
        Hero,
        History,
        TextWithImage,
    },
    setup() {
        const scrollToSection = (sectionId) => {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        };

        return {
            scrollToSection,
        };
    }
};
</script>

<style>
/* Global Font Application */

@font-face {
    font-family: "TheArtist";
    src: url("./assets/font.otf");
}

@font-face {
    font-family: "Forum";
    src: url("./assets/Forum-Regular.ttf")
}

.shell {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
}
body {
    font-family: 'Roboto', sans-serif; /* For body text */
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
}

h3 {
    font-size: 60px;
    margin-top: 0;
}

h4 {
    font-size: 30px;
}

button {
    font-family: 'Roboto', sans-serif; /* For buttons */
}

header {
    font-family: 'Roboto', sans-serif; /* For header */
}

p {
    font-family: 'Roboto', sans-serif; /* For paragraphs */
}

</style>
