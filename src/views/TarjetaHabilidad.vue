<template>
  <div class="card habilidad-card">
    <img :src="habilidad.logo" :alt="habilidad.name" class="logo" />
    <h3>{{ habilidad.name }}</h3>
    <p>{{ habilidad.description[currentLang] }}</p>
    <div class="nivel">
      Nivel: 
      <span v-for="n in habilidad.level" :key="n" class="star">⭐</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TarjetaHabilidad",
  props: {
    habilidad: {
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
.habilidad-card {
  border: 1px solid #ccc;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 8px;
  text-align: center;
}

.habilidad-card .logo {
  max-width: 50px;
  margin-bottom: 8px;
}

.nivel .star {
  color: #f39c12;
}
</style>
