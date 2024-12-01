<template>
  <Navbar />

  <section id="hero">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h1 class="display-1" data-aos="fade-up">{{ $t("hero.title") }}</h1>
          <p data-aos="fade-up" data-aos-delay="300">
            <strong class="h4 shadow">{{ $t("hero.subtitle") }}</strong>
            <br />
            {{ $t("hero.description") }}
          </p>
          <a
            href="https://github.com/YoooKai?tab=repositories"
            class="btn btn-outline-light"
            data-aos="fade-up"
            data-aos-delay="500"
            >{{ $t("hero.cta") }}</a
          >
        </div>
      </div>
    </div>
  </section>

  <!-- ABOUT -->
  <section id="about">
    <div class="container">
      <div class="row" data-aos="fade-up">
        <div class="col-lg-5">
          <div class="intro mb-4">
            <div class="hr-line"></div>
            <h1 class="display-4">{{ $t("aboutSection.sectionTitle") }}</h1>
          </div>
          <p>{{ $t("aboutSection.intro") }}</p>
         
          <p>{{ $t("aboutSection.detail1") }}</p>
          <p>{{ $t("aboutSection.detail2") }}</p>
          <p>{{ $t("aboutSection.detail3") }}</p>
           
          
          <a href="#" class="btn btn-outline-dark">{{ $t("aboutSection.contactButton") }}</a>
        </div>
        <div class="col-lg-6 offset-lg-1">
          <img src="../assets/img/portrait.jpg" alt="portrait" />
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
  name: 'Aboutme',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
#about{
  background-color: #f9f9f9;
}
</style>
