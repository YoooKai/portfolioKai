<template>
  <Navbar  />
  
  <section id="proyectos" class="py-5">
    <div class="container">
      <div class="row">
        <div class="col-12" data-aos="fade-up">
          <div class="intro text-center">
            <div class="mt-5"></div>
            <h1 class="display-4">{{ $t("projectsSection.sectionTitle") }}</h1>
            <p class="mx-auto">{{ $t("projectsSection.intro") }}</p>
          </div>
        </div>
      </div>

      <!-- Tarjetas de proyectos -->
      <div class="row gy-4">
        <div class="col-lg-6" v-for="proyecto in proyectos" :key="proyecto.title" data-aos="fade-up" data-aos-delay="300">
          <div class="service">
            <div class="icon">
              <i class="ri-code-s-slash-line"></i>
            </div>
            <div>
              <h5>{{ proyecto.title[locale] }}</h5>
              <p>{{ proyecto.description[locale] }}</p>
              <a :href="proyecto.link" class="link-arrow">{{ $t("projectsSection.viewProject") }} <i class="ri-arrow-right-up-line"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Footer />
</template>

<script>
import data from "@/assets/data.json";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Proyectos",
  components: { Navbar, Footer },
  data() {
    return {
      proyectos: data.proyectos,
      locale: this.$i18n.locale  // Obtenemos el idioma actual de la app
    };
  },
  watch: {
    // Actualizamos el locale si cambia el idioma
    '$i18n.locale'(newLocale) {
      this.locale = newLocale;
    }
  }
};
</script>

<style scoped>
#proyectos {
  background-color: #f9f9f9;
}

#proyectos h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
}

#proyectos p {
  font-size: 1.125rem;
  color: #777;
  margin-top: 10px;
}

.intro .hr-line {
  border-top: 2px solid #007bff;
  width: 50px;
  margin: 20px auto;
}

.service {
  display: flex;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 32px;
  background-color: white;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service:hover {
  transform: translateY(-10px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
}

.service .icon {
  width: 30px;
  height: 30px;
  background-color: #007bff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: white;
  border-radius: 50%;
  margin-right: 20px;
}

.service h5 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
}

.service p {
  font-size: 1rem;
  color: #555;
  margin-bottom: 20px;
}

.link-arrow {
  display: flex;
  align-items: center;
  font-weight: 500;
  color: #007bff;
  text-decoration: none;
  transition: all 0.3s ease;
}

.link-arrow i {
  transition: transform 0.3s ease;
  margin-left: 5px;
}

.link-arrow:hover {
  color: #0056b3;
}

.link-arrow:hover i {
  transform: translate(5px, -5px);
}

/* Estilos para el diseño responsivo */
@media (max-width: 768px) {
  .service {
    padding: 24px;
  }

  .service .icon {
    width: 50px;
    height: 50px;
    font-size: 25px;
  }

  .service h5 {
    font-size: 1.25rem;
  }

  .service p {
    font-size: 0.9rem;
  }
}
</style>
