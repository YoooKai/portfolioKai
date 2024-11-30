<template>
  <div class="container d-flex flex-column justify-content-center align-items-center min-vh-100 text-center">
    <div class="error-code display-1 text-danger fw-bold">404</div>
    <h3 class="error-message mb-3">Page Not Found</h3>
    <p class="error-description text-muted mb-4">Sorry, the page you're looking for doesn't exist.</p>
    <router-link to="/" class="btn btn-primary btn-lg">Go Back to Home</router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style scoped>
.error-code {
  font-size: 10rem;
}

.error-message {
  font-size: 2rem;
  font-weight: 600;
}

.error-description {
  font-size: 1.2rem;
}

.btn {
  font-size: 1.1rem;
}
</style>
