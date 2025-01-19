<template>
  <div class="wrapper" id="support">
      <div class="shell">
          <h3>Нашата кауза</h3>

          <h4>Вместо цветя, подай лапа</h4>

          <section class="split-section" id="text-section">
              <div class="text-section">
                  <div class="text-content">
                      <h5>Учтиво ви молим да не носите цветя за нашата сватба, а да подкрепите благотворителната ни кауза.</h5>
                  </div>
              </div>
              <div class="image-section image-1">
                  <img src="../assets/Cat-Paw-Print-3.svg" alt=''>
              </div>
          </section>

          <section class="split-section">
              <div class="image-section image-2">
                  <img src="../assets/Icons8-Windows-8-Animals-Dog-House.512.svg" alt=''>
              </div>
              <div class="text-section">
                  <div class="text-content">
                      <h5>
                          Ще подкрепим организации за спасяване и грижа на бездомни животни в нужда.
                          <br>
                          Точно както нашите любимки Ая и Нала бяха спасени от тежкия живот на улицата, така бихме искали да помогнем на други клети животинки като тях!
                      </h5>

                  </div>
              </div>
          </section>
      </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.wrapper {
    background: #f9f1e8;
    text-align: center;
    color: #7e4847;
    padding: 70px 0;

    h3 {
        font-size: 35px;
        margin-bottom: 0;
        color: #bea994
    }

    h4 {
        font-size: 35px;

        @media (max-width: 961px) {
            font-size: 30px;
            margin-bottom: 0;
        }
    }

    h5 {
        font-size: 20px;

        @media (max-width: 961px) {
            margin-bottom: 10px;
        }
    }

    @media (max-width: 961px) {
        padding: 35px 20px;
    }
}

.split-section {
    display: flex;
    font-family: "Forum", sans-serif;
    text-align: center;
}


h2 {
    font-size: 40px;
    text-align: center;
    margin-bottom: 50px;
}

.text-section {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9f1e8;
}

.text-content {
  text-align: center;
  padding: 20px;

    @media (max-width: 961px) {
        padding: 0;
    }
}

.text-content h2 {
  font-size: 28px;
  margin-bottom: 10px;
}

.image-section {
    flex: 1;

    img {
        max-width: 200px;
    }

    @media (max-width: 961px) {
        display: none;
    }
}

</style>
