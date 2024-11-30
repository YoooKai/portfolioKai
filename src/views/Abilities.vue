<template>
  <Navbar class="bg-dark" />
  
  <section id="habilidades">
    <h1>Habilidades</h1>
    <p class="mx-auto mb-5 w-50">Aquí puedes ver algunas de las habilidades técnicas que he desarrollado a lo largo de mi carrera. Cada una refleja mi capacidad para trabajar con tecnologías modernas y resolver desafíos complejos.</p>

    <div class="row">
      <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="habilidad in habilidades" :key="habilidad.name">
        <TarjetaHabilidad :habilidad="habilidad" />
      </div>
    </div>
  </section>
  
  <Footer />
</template>

<script>
import data from "@/assets/data.json";
import TarjetaHabilidad from "./TarjetaHabilidad.vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Habilidades",
  components: { TarjetaHabilidad, Navbar, Footer },
  data() {
    return {
      habilidades: data.habilidades
    };
  }
};
</script>

<style scoped>
/* General */
#habilidades {
  padding: 80px 0;
  background-color: #f9f9f9; 
  text-align: center;
}

#habilidades h1 {
  font-size: 2.5rem;
  font-weight: 800;
  margin: 30px 0 20px;
  color: var(--dark);
}

.card {
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}

.card .logo {
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-bottom: 16px;
  border-radius: 50%;
}

.card h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--dark);
}

.card p {
  font-size: 1rem;
  color: var(--body);
  margin-bottom: 20px;
}

.card .nivel {
  display: flex;
  align-items: center;
}

.card .nivel .star {
  color: #f39c12;
  margin-right: 4px;
}

/* Grid */
.row {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
</style>
