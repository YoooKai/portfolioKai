<template>
    <div class="card proyecto-card">
      <h3>{{ proyecto.title }}</h3>
      <p>{{ proyecto.description }}</p>
      <a :href="proyecto.link" target="_blank" class="btn btn-primary">Ver Proyecto</a>
    </div>
  </template>
  
  <script>
  export default {
    name: "TarjetaProyecto",
    props: {
      proyecto: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .proyecto-card {
    border: 1px solid #ccc;
    padding: 16px;
    margin-bottom: 16px;
    border-radius: 8px;
  }
  </style>
  