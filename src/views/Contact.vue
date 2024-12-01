<template>
  <div>
    <!-- Importación del Navbar -->
    <Navbar />
    
    <section id="contactform">
      <div class="container">
        <div class="row">
          <div class="col-12" data-aos="fade-up">
            <div class="intro text-center">
              <div class="hr-line"></div>
              <!-- Título dinámico -->
              <h1 class="display-4">{{ $t("contactform.title") }}</h1>
              <p class="mx-auto">{{ $t("contactform.description") }}</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-8 mx-auto" data-aos="fade-up">
            <!-- Formulario de Contacto -->
            <form @submit.prevent="handleSubmit" class="row gy-3">
              <div class="col-lg-6">
                <input v-model="name" type="text" class="form-control" :placeholder="$t('contactform.name')" />
              </div>
              <div class="col-lg-6">
                <input v-model="email" type="email" class="form-control" :placeholder="$t('contactform.email')" />
              </div>
              <div class="col-lg-12">
                <input v-model="subject" type="text" class="form-control" :placeholder="$t('contactform.subject')" />
              </div>
              <div class="col-lg-12">
                <textarea v-model="message" class="form-control" :placeholder="$t('contactform.message')" rows="5"></textarea>
              </div>
              <div class="col-12">
                <label>
                  <input v-model="terms" type="checkbox" /> {{ $t('contactform.terms') }}
                </label>
              </div>
              <div class="col-12">
                <button class="btn btn-dark" type="submit">{{ $t('contactform.submitButton') }}</button>
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
import { collection, addDoc } from 'firebase/firestore'; 
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

      // Guardar en Firebase
      try {
        const messagesCollection = collection(db, "messages"); // Nombre de la colección
        await addDoc(messagesCollection, {
          name: this.name,
          email: this.email,
          subject: this.subject,
          message: this.message,
          termsAccepted: this.terms,
          timestamp: new Date() 
        });

        // Resetear el formulario tras el envío
        this.name = '';
        this.email = '';
        this.subject = '';
        this.message = '';
        this.terms = false;
        this.formSubmitted = true;

        alert("Formulario enviado con éxito.");
      } catch (error) {
        console.error("Error al enviar el formulario:", error);
        alert("Ocurrió un error al enviar el formulario.");
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
