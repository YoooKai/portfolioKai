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
                <p class="mb-0">PHONE</p>
              <h2><a href="#">+663452532</a></h2>
              </div>
            </div>
            <div class="col-auto">
              <h5 class="mb-3"> Follow me on</h5>
                <div class="social-links ms-auto">
                <a href="#"><i class="ri-facebook-fill"></i></a>
                <a href="#"><i class="ri-twitter-fill"></i></a>
                <a href="#"><i class="ri-google-fill"></i></a>
                <a href="#"><i class="ri-instagram-fill"></i></a>
                <a href="#"><i class="ri-github-fill"></i></a>
            </div>
          
            </div>
          </div>
        </div>

        <div class="container footer-bottom">
          <div class="row justify-content-between">
            <div class="col-auto">
              <p class="mb-0">Copyright rights reserved</p>
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