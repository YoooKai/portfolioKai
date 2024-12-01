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
          <li><button @click="changeLanguage('en')">English</button></li>
          <li><button @click="changeLanguage('es')">Español</button></li>
        </ul>

        <div class="social-links ms-auto">
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
    router.push({ name: route.name, params: { ...route.params, lang } }); // Actualizar URL con el nuevo idioma
  }
};
</script>

<style scoped>
</style>
