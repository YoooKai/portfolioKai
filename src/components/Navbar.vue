<template>
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <a class="navbar-brand" href="#">YooKai</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-lg-4">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Sobre Mí</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/projects" class="nav-link">Proyectos</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/abilities" class="nav-link">Habilidades</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/experience" class="nav-link">Experiencia</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link">Contacto</router-link>
            </li>
          </ul>
  
          <div class="social-links ms-auto">
              <a href="#" class="social-icon"><i class="ri-facebook-fill"></i></a>
              <a href="#" class="social-icon"><i class="ri-twitter-fill"></i></a>
              <a href="#" class="social-icon"><i class="ri-google-fill"></i></a>
              <a href="#" class="social-icon"><i class="ri-instagram-fill"></i></a>
              <a href="#" class="social-icon"><i class="ri-github-fill"></i></a>
          </div>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar'
  }
  </script>
  
  <style scoped>
  /* Aquí podrías agregar más estilos si es necesario */
  </style>
  