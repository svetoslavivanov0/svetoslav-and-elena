<template>
    <header
        class="header"
        :class="{'has-background': hasBackground}"
    >
        <!-- Burger Icon -->
        <div
            class="burger-icon"
            @click="toggleMenu"
            v-if="isMobile"
        >
            <div
                class="line top-line"
                :class="{'active': menuOpen}"
            ></div>
            <div
                class="line middle-line"
                :class="{'active': menuOpen}"
            ></div>
            <div
                class="line bottom-line"
                :class="{'active': menuOpen}"
            ></div>
        </div>

        <!-- Actions -->
        <div
            class="header-actions"
            v-show="!isMobile || menuOpen"
        >
            <div
                class="header-action"
                @click="scrollToSection('about')"
            >
                Начало
            </div>
            <div
                class="header-action"
                @click="scrollToSection('timeline-section')"
            >
                Програма
            </div>
            <div
                class="header-action"
                @click="scrollToSection('support')"
            >
                Кауза
            </div>
            <div
                class="header-action"
                @click="scrollToSection('venue')"
            >
                Локация
            </div>
            <div
                class="header-action"
                @click="scrollToSection('form-section')"
            >
                Потвърди присъствие
            </div>
        </div>
    </header>
</template>

<script>
import { h, onMounted, ref, onUnmounted } from 'vue';

export default {
    methods: { h },
    setup() {
        const hasBackground = ref(false);
        const menuOpen = ref(false);
        const isMobile = ref(window.innerWidth <= 961);

        const handleScroll = () => {
            const place = window.scrollY;
            hasBackground.value = place >= 100;
        };

        const toggleMenu = () => {
            menuOpen.value = !menuOpen.value;
        };

        const checkMobile = () => {
            isMobile.value = window.innerWidth <= 961;
        };

        const scrollToSection = (section) => {
            const target = document.getElementById(section);
            if (target) {
                const yOffset = -70;
                const yPosition =
                    target.getBoundingClientRect().top + window.scrollY + yOffset;
                window.scrollTo({ top: yPosition, behavior: "smooth" });
            }
            menuOpen.value = false;
        };

        onMounted(() => {
            window.addEventListener('scroll', handleScroll);
            window.addEventListener('resize', checkMobile);
        });

        onUnmounted(() => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', checkMobile);
        });

        return {
            hasBackground,
            menuOpen,
            isMobile,
            toggleMenu,
            scrollToSection,
        };
    }
};
</script>

<style scoped>
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    padding: 20px;
    display: flex;
    justify-content: center;
    gap: 10px;
    font-family: "TheArtist", serif;
    transition: all .6s;
    background: #fffbf7;
}

.header.has-background {
    background: #f9f1e7;
}

.header-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
}

.header-action {
    font-weight: 300;
    font-size: 50px;
    cursor: pointer;
    transition: all .5s;
    color: #7e4847;
}

.header-action:hover {
    opacity: .3;
}

.burger-icon {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 40px;
    height: 30px;
    cursor: pointer;
}

.line {
    width: 100%;
    height: 4px;
    background-color: #7e4847;
    transition: all 0.5s;
}

.line.top-line.active {
    transform: translateY(13px) rotate(45deg);
}

.line.middle-line.active {
    opacity: 0;
}

.line.bottom-line.active {
    transform: translateY(-13px) rotate(-45deg);
}

@media (max-width: 961px) {
    .header-actions {
        flex-direction: column;
        align-items: center;
        gap: 20px;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: #fffbf7;
        padding: 20px 0;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    }

    .header-action {
        font-size: 30px;
    }
}
</style>
