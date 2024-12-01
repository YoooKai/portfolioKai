<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <router-link :to="{ name: 'about', params: { lang: currentLang } }" class="navbar-brand">Yookai</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-lg-4">
          <li class="nav-item">
            <router-link :to="{ name: 'about', params: { lang: currentLang } }" class="nav-link">{{ $t("about") }}</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'projects', params: { lang: currentLang } }" class="nav-link">{{ $t("projects") }}</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'skills', params: { lang: currentLang } }" class="nav-link">{{ $t("skills") }}</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'experience', params: { lang: currentLang } }" class="nav-link">{{ $t("experience") }}</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'contact', params: { lang: currentLang } }" class="nav-link">{{ $t("contact") }}</router-link>
          </li>
         

          
        </ul>

        <div class="social-links ms-auto">
            <!-- Botón para inglés -->
        <button @click="changeLanguage('en')" class="btn btn-link text-light">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg" alt="English Flag" class="lang-icon" />
          English
        </button>

        <!-- Botón para español -->
        <button @click="changeLanguage('es')" class="btn btn-link text-light">
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg" alt="Español Flag" class="lang-icon" />
          Español
        </button>
          <a href="https://www.facebook.com/" class="social-icon"><i class="ri-facebook-fill"></i></a>
          <a href="https://x.com/" class="social-icon"><i class="ri-twitter-fill"></i></a>
          <a href="https://myaccount.google.com/" class="social-icon"><i class="ri-google-fill"></i></a>
          <a href="https://www.instagram.com/_mossypaws_/" class="social-icon"><i class="ri-instagram-fill"></i></a>
          <a href="https://github.com/YoooKai" class="social-icon"><i class="ri-github-fill"></i></a>
          
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter, useRoute } from "vue-router";

// Usar vue-i18n
const { locale, t } = useI18n();
const router = useRouter();
const route = useRoute();

// Obtenemos el idioma actual desde los parámetros de la ruta o por defecto 'es'
const currentLang = computed(() => route.params.lang || 'es');

// Función para cambiar el idioma
const changeLanguage = (lang) => {
  if (locale.value !== lang) {
    locale.value = lang;  // Cambiar idioma en Vue I18n
    localStorage.setItem('language', lang); // Guardar idioma en localStorage
    router.push({ name: route.name, params: { ...route.params, lang } }); 
  }
};
</script>

<style scoped>
.navbar {
  transition: background-color 0.3s ease;
}

@media (max-width: 992px) {
  .navbar {
    background-color: var(--white); 
  }
}

@media (min-width: 992px) {
  .navbar {
    background-color: #293349; 
  }
}

.social-links {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.social-links button {
  font-size: 1rem;
  font-weight: 600;
  border: none;
  background-color: transparent;
  color: #fff;
  padding: 8px 12px;
  border-radius: 5px;
  margin-right: 10px; /* Espacio entre los botones */
  display: flex;
  align-items: center; /* Alinea el texto y la bandera */
  transition: background-color 0.3s, color 0.3s;
}

.social-links button:hover {
  background-color: #5b688d; /* Color de fondo al hacer hover */
  color: #202631; /* Color de texto al hacer hover */
}

.social-links button .lang-icon {
  width: 20px; /* Ajusta el tamaño de la bandera */
  height: 15px;
  margin-right: 5px; /* Espacio entre la bandera y el texto */
}

.social-links .social-icon {
  width: 36px;
  height: 36px;
  background-color: var(--white);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  font-size: 18px;
  margin-left: 5px;
  transition: background-color 0.3s, transform 0.3s;
}

.social-links .social-icon:hover {
  background-color: #6570da; 
  transform: scale(1.1); 
}

.social-links .social-icon i {
  color: var(--dark);
}

.social-links .social-icon:hover i {
  color: #fff; 
}


</style>
