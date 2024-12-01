<template>
  <Navbar />
  
  <section id="hero">
     <div class="container">
         <div class="row">
             <div class="col-lg-6">
                 <h1 class="display-1" data-aos="fade-up">KAI RODRÍGUEZ GARCÍA</h1>
                 <p data-aos="fade-up" data-aos-delay="300">
                  <strong class="h4 shadow">Diseñador y desarrollador web en constante evolución.</strong>
                  <br>
                  Creo sitios web que unen creatividad y tecnología, con un enfoque en soluciones funcionales y estéticas que cuentan historias únicas.
                 </p>
                     <a href="https://github.com/YoooKai?tab=repositories" class="btn btn-outline-light" data-aos="fade-up" data-aos-delay="500" >Explora mis proyectos</a>
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
           <h1 class="display-4">Un poco sobre mí</h1>
         </div>
         <p>¡Hola! Soy un desarrollador web con base en Tenerife, España. Mi trayectoria es un reflejo de creatividad y evolución, desde mis inicios en Bellas Artes hasta mi actual enfoque en el desarrollo digital. Aunque siempre me he considerado una persona creativa, descubrí que mi verdadera pasión radica en combinar diseño y funcionalidad para construir experiencias únicas en la web.</p>
          <p>Con un enfoque detallista y una mentalidad resolutiva, afronto los retos de la programación como un constante aprendizaje. Si bien la lógica no siempre es mi punto fuerte, me impulsa el deseo de mejorar y crear algo significativo. Este equilibrio entre lo técnico y lo creativo me permite aportar soluciones que no solo funcionan, sino que también tienen carácter y estética.</p>
          <p>Fuera del ámbito profesional, me describo como alguien que aprecia las cosas simples: la naturaleza, la compañía de mis cuatro perros y los momentos de introspección. Aunque soy introvertido por naturaleza, mi curiosidad me lleva a explorar nuevos horizontes, ya sea a través de proyectos, videojuegos o sueños de viajar por el mundo.</p>
          <p>Construir mi propio sitio web ha sido una experiencia transformadora. Me ha ayudado a redescubrir el placer de crear desde cero y me ha recordado la importancia de avanzar con propósito. Mi objetivo como desarrollador es no solo crecer en mi campo, sino también ofrecer soluciones que inspiren y conecten con las personas.</p>
          <a href="#" class="btn btn-outline-dark">Contáctame</a>
       </div>
       <div class="col-lg-6 offset-lg-1" >
         <img src="../assets/img/portrait.jpg">
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