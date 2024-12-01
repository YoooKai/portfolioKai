<template>
  <div class="card proyecto-card">
    <h3>{{ proyecto.title[currentLang] }}</h3>
    <p>{{ proyecto.description[currentLang] }}</p>
    <a :href="proyecto.link" target="_blank" class="btn btn-primary">{{ $t("viewProject") }}</a>
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
  },
  computed: {
    currentLang() {
      return this.$i18n.locale; // Obtén el idioma actual
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
  