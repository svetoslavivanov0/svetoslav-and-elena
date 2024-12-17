<template>
  <section class="rsvp-form" id="form-section">
    <div class="shell">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeXCLgWzMxO5XOm64DbH4ZhwDIttHt-QAkCDHzfH2huIHzc5A/viewform?embedded=true" width="100%" height="1200" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.rsvp-form {
    background: #f9f1e7;
    padding: 50px 0;

    h2 {
        color: #7e4847;
    }

    iframe {
        max-width: 600px;

        @media (max-width: 961px) {
            max-width: 350px;
        }
    }
}
</style>
