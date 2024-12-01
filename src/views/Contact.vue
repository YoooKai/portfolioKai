<template>
  <div>
    <!-- Importación del Navbar -->
    <Navbar />

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
              <div class="col-lg-6">
                <input v-model="name" type="text" class="form-control" placeholder="Nombre" />
              </div>
              <div class="col-lg-6">
                <input v-model="email" type="email" class="form-control" placeholder="Email" />
              </div>
              <div class="col-lg-12">
                <input v-model="subject" type="text" class="form-control" placeholder="Asunto" />
              </div>
              <div class="col-lg-12">
                <textarea v-model="message" class="form-control" placeholder="Mensaje" rows="5"></textarea>
              </div>
              <div class="col-12">
                <label>
                  <input v-model="terms" type="checkbox" /> Acepto los términos y condiciones
                </label>
              </div>
              <div class="col-12">
                <button class="btn btn-dark" type="submit">Enviar Formulario</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Importación del Footer -->
    <Footer />
  </div>
</template>

<script>
import { db } from '../firebase'; 
import { doc, setDoc } from 'firebase/firestore'; 
import Navbar from '../components/Navbar.vue';  
import Footer from '../components/Footer.vue';  

export default {
  components: {
    Navbar, 
    Footer
  },
  data() {
    return {
      name: '',
      email: '',
      subject: '',
      message: '',
      terms: false,
      formSubmitted: false
    };
  },
  methods: {
    async handleSubmit() {
      // Validar que todos los campos estén llenos
      if (!this.name || !this.email || !this.subject || !this.message || !this.terms) {
        alert("Por favor, complete todos los campos y acepte los términos.");
        return;
      }

      // Preparar los datos del formulario
      const formData = {
        name: this.name,
        email: this.email,
        subject: this.subject,
        message: this.message,
        terms: this.terms,
        timestamp: new Date()
      };

      try {
        // Crear un nuevo documento en la colección "contacts" con un ID generado automáticamente
        const docRef = await addDoc(collection(db, "contacts"), formData);

        console.log("Formulario enviado y guardado en Firestore con ID:", docRef.id);

        // Mostrar que el formulario fue enviado
        this.formSubmitted = true;

        // Limpiar el formulario después de enviarlo
        this.name = '';
        this.email = '';
        this.subject = '';
        this.message = '';
        this.terms = false;

        alert('Formulario enviado exitosamente');
      } catch (error) {
        console.error("Error al guardar los datos en Firebase: ", error);
        alert('Hubo un error al enviar el formulario. Por favor, intenta nuevamente.');
      }
    }
  }
};
</script>

<style scoped>
#contact {
  background-color: #f9f9f9;
}

.intro {
  margin-bottom: 30px;
}

.hr-line {
  width: 80px;
  height: 3px;
  background-color: #f39c12;
  margin: 20px auto;
}

h1.display-4 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.form-control {
  border-radius: 5px;
  padding: 15px;
  font-size: 1rem;
}

.btn-dark {
  background-color: #333;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1.2rem;
  border-radius: 5px;
  cursor: pointer;
}

.btn-dark:hover {
  background-color: #555;
}

label {
  font-size: 1rem;
  display: flex;
  align-items: center;
}
</style>
