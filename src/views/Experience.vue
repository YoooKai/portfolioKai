<template>
  <Navbar  />
  <section id="experience">
    <div class="container">
      <div class="row">
        <div class="col-12" data-aos="fade-up">
          <div class="intro text-center">
            <div class="hr-line"></div>
            <h1 class="display-4">{{ $t("experienceSection.sectionTitle") }}</h1>
            <p class="mx-auto">{{ $t("experienceSection.intro") }}</p>
          </div>
        </div>
      </div>

      <!-- Mostrar el PDF con iframe -->
      <div class="row">
        <div class="col-12" data-aos="fade-up">
          <iframe
            src="/cv.pdf"
            width="100%"
            height="600px"
            title="Currículum"
          ></iframe>
        </div>
      </div>

      <!-- Botón para descargar el PDF -->
      <div class="row">
        <div class="col-12 text-center" data-aos="fade-up">
          <a
            href="/cv.pdf"
            download="cv-kai-rodriguez.pdf"
            class="btn btn-dark"
          >
            {{ $t("experienceSection.downloadCV") }}
          </a>
        </div>
      </div>
    </div>
  </section>

  <Footer />
</template>
  <script>
  import Navbar from '../components/Navbar.vue';
  import Footer from '../components/Footer.vue';

  export default {
    components: {
    Navbar,
    Footer 
    },
    name: "Experience",
  };
  </script>
  
  <style scoped>
  #experience {
    padding: 60px 0;
  }
  
  #experience iframe {
    border: none;
  }
  
  button {
    margin-top: 20px;
  }
  </style>
  