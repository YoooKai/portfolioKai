<template>

  <Navbar class="bg-dark"/>
  <!-- CONTACT -->
  <section id="contact">
    <div class="container">
      <div class="row">
        <div class="col-12" data-aos="fade-up">
          <div class="intro text-center">
            <div class="hr-line"></div>
            <h1 class="display-4">Ponte ya <br> en contacto</h1>
            <p class="mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ea possimus voluptatem
               deleniti dolorem ut odit eveniet.</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8 mx-auto" data-aos="fade-up">
          <!-- Formulario de Contacto -->
          <form @submit.prevent="handleSubmit" class="row gy-3">
            <!-- Campo de Nombre -->
            <div class="col-lg-6">
              <input v-model="name" type="text" class="form-control" placeholder="Nombre" />
            </div>

            <!-- Campo de Email -->
            <div class="col-lg-6">
              <input v-model="email" type="email" class="form-control" placeholder="Email" />
            </div>

            <!-- Campo de Asunto -->
            <div class="col-lg-12">
              <input v-model="subject" type="text" class="form-control" placeholder="Asunto" />
            </div>

            <!-- Campo de Mensaje -->
            <div class="col-lg-12">
              <textarea v-model="message" class="form-control" placeholder="Mensaje" rows="5"></textarea>
            </div>

            <!-- Aceptar términos -->
            <div class="col-12">
              <label>
                <input v-model="terms" type="checkbox" /> Acepto los términos y condiciones
              </label>
            </div>

            <!-- Botón de Enviar -->
            <div class="col-12">
              <button class="btn btn-dark" type="submit">Enviar Formulario</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- Datos Enviados -->
  <section v-if="formSubmitted">
    <div class="container">
      <h3>Datos Enviados:</h3>
      <p><strong>Nombre:</strong> {{ name }}</p>
      <p><strong>Email:</strong> {{ email }}</p>
      <p><strong>Asunto:</strong> {{ subject }}</p>
      <p><strong>Mensaje:</strong> {{ message }}</p>
      <p><strong>Términos aceptados:</strong> {{ terms ? 'Sí' : 'No' }}</p>
    </div>
  </section>

  <Footer />
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';


export default {
  data() {
    return {
      name: '',
      email: '',
      subject: '',
      message: '',
      terms: false,
      formSubmitted: false,
    };
  },
  components: {
 Navbar,
 Footer 
},
  methods: {
    handleSubmit() {
      // Validar que todos los campos estén llenos
      if (!this.name || !this.email || !this.subject || !this.message || !this.terms) {
        alert("Por favor, complete todos los campos y acepte los términos.");
        return;
      }
      
      // Procesar los datos (puedes enviarlos al servidor aquí)
      console.log({
        name: this.name,
        email: this.email,
        subject: this.subject,
        message: this.message,
        terms: this.terms
      });

      // Mostrar que el formulario fue enviado
      this.formSubmitted = true;

      // Limpiar el formulario después de enviarlo (opcional)
      this.name = '';
      this.email = '';
      this.subject = '';
      this.message = '';
      this.terms = false;
    }
  }
};
</script>

<style scoped>
 #contact {
  background-color: #f9f9f9;
 }
</style>
