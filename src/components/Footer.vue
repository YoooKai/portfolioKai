<template>
    <section id="footer" class="pb-0">
      <footer>
        <div class="container footer-top">
          <div class="row justify-content-between">
            <div class="col-auto">
              <div>
                <p class="mb-0">EMAIL</p>
              <h2><a href="#">kairodrigarcia@gmail.com</a></h2>
              </div>
              <div>
                <p class="mb-0">TELÉFONO</p>
              <h2><a href="#">+663452532</a></h2>
              </div>
            </div>
            <div class="col-auto">
              <h5 class="mb-3"> Sígueme en:</h5>
                <div class="social-links ms-auto">
                <a href="https://www.facebook.com/"><i class="ri-facebook-fill"></i></a>
                <a href="https://x.com/"><i class="ri-twitter-fill"></i></a>
                <a href="https://myaccount.google.com/"><i class="ri-google-fill"></i></a>
                <a href="https://www.instagram.com/_mossypaws_/"><i class="ri-instagram-fill"></i></a>
                <a href="https://github.com/YoooKai"><i class="ri-github-fill"></i></a>
            </div>
          
            </div>
          </div>
        </div>

        <div class="container footer-bottom">
          <div class="row justify-content-between">
            <div class="col-auto">
              <p class="mb-0">Copyright© todos los derechos reservados.</p>
            </div>
            <div class="col-auto">
              <p class="mb-0">Diseñado por <a href="#">Kai</a></p>
              
            </div>
          
            </div>
          </div>
      </footer>
    </section>
</template>
<script>
export default {
  name: 'Footer'
}
</script>
<style>
/* footer */
footer .social-links a{
    border: var(--border-width)  solid var(--border-color);
}

.footer-top{
    padding-bottom: 30px;
    border-bottom: var(--border-width) solid var(--border-color);
}
.footer-bottom{
    padding-top: 30px;
    padding-bottom: 30px;
}
</style>