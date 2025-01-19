<template>
    <section class="wedding-info" id="info-section">
        <div class="overlay">
            <h2>
                Светослав и Елена
                <br>
                12.07.2025
            </h2>
            <p>{{ countdown }}</p>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

// Wedding date
const weddingDate = new Date("2025-07-12T00:00:00"); // Replace with your wedding date

// Countdown string
const countdown = ref('');

// Function to update the countdown
const updateCountdown = () => {
    const now = new Date();
    const timeDifference = weddingDate - now; // Get time difference in milliseconds

    if (timeDifference <= 0) {
        countdown.value = "Очакваме ви днес";
        clearInterval(countdownInterval);
    } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

        countdown.value = `${days} дни ${hours} часа ${minutes} минути`;
    }
};

// Update the countdown every second
let countdownInterval;
onMounted(() => {
    updateCountdown(); // Update initially
    countdownInterval = setInterval(updateCountdown, 1000); // Update every second
});
</script>

<style scoped>
.wedding-info {
    width: 100%;
    height: 100vh;
    background-image: url('@/assets/background.jpeg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    font-family: "Forum", sans-serif;
}

.overlay {
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black overlay */
    padding: 50px;
    border-radius: 10px;
    color: white;
    text-align: center;
}

.wedding-info h2 {
    font-size: 48px; /* Larger font size for better visibility */
    color: white;
    margin: 0;
}

.wedding-info p {
    font-size: 32px; /* Font size for the countdown */
    color: white;
    margin-top: 10px;
}
</style>
