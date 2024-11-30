<template>
  <Navbar />
  
  <section id="hero">
     <div class="container">
         <div class="row">
             <div class="col-lg-6">
                 <h1 class="display-1" data-aos="fade-up">KAI RODRÍGUEZ</h1>
                 <p data-aos="fade-up" data-aos-delay="300">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                     Voluptate, maxime, ea iste sint illo aspernatur esse nemo 
                     tempora unde explicabo veritatis numquam. Minima quia ut aut, 
                     consectetur maxime impedit consequuntur!</p>
                     <a href="" class="btn btn-outline-light" data-aos="fade-up" data-aos-delay="500" >Explore my work</a>
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
           <h1 class="display-4">Little bit about me</h1>
         </div>
         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
           Dolorum ea asperiores tempora consequuntur recusandae voluptates cum.
            Ipsam animi molestiae vel sed aliquid consequatur incidunt omnis eum aspernatur adipisci. 
            Provident, error.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis ducimus repudiandae
              tempore nemo maxime sint dolorem quod? Explicabo voluptatum, unde, odit laudantium, quasi 
              eos quos vitae qui debitis dolor culpa.</p>
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