<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import Card2 from './components/Card2.vue';

const proyectos = ref(null);
fetch(
  'https://raw.githubusercontent.com/afrikiudl/proyectoswd2425/refs/heads/main/WD_Practica1_2425.json'
)
  .then((response) => response.json())
  .then((data) => (proyectos.value = data));
</script>

<template>
<div class="d-flex flex-column min-vh-100">
  <nav class="navbar navbar-expand-lg navbar-light navbar-custom">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">
      <img src="./assets/images/logotip.png" alt="MUSIC CRAVE" width="150" height="auto" />
    </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

<div class="collapse navbar-collapse" id="navbarSupportedContent">
<ul class="nav nav-underline navbar-nav me-auto mb-2 mb-lg-0">
  <li class="nav-item">
    <a href="/" class="nav-link" style="color: #ffffff;">Inici</a>
  </li>
  <li class="nav-item">
    <a href="/about" class="nav-link" style="color: #ffffff;">Informació</a>
  </li>
  <li class="nav-item">
    <a href="/visual" class="nav-link large-item" style="color: #ffffff;">Visual total</a>
  </li>
  <li class="nav-item">
    <a href="/visio" class="nav-link large-item" style="color: #ffffff;">Baixa visió</a>
  </li>
  <li class="nav-item">
    <a href="/auditiva" class="nav-link" style="color: #ffffff;">Auditiva</a>
  </li>
  <li class="nav-item">
    <a href="/motriu" class="nav-link" style="color: #ffffff;">Motriu</a>
  </li>
  <li class="nav-item">
    <a href="/cognitiva" class="nav-link" style="color: #ffffff;">Cognitiva</a>
  </li>
</ul>
</div>
</div>
</nav>


  <div class="flex-grow-1">
    <router-view></router-view>
  </div>

  <footer class="footer py-3 text-center mt-auto">
  <div class="container text-center">
    <div class="row">
      <div class="col-12 col-md-4 d-flex flex-column align-items-center order-1 order-md-1">
        <h5 class="footer-title">CONTACTA</h5>
        <p class="footer-text">973 56 56 69</p>
        <p class="footer-text">info@musicrave.com</p>
      </div>

      <div class="col-12 col-md-4 d-flex flex-column align-items-center order-2 order-md-2">
        <h5 class="footer-title">SECCIONS</h5>
        <a href="/about" class="nav-link footer-link">Informació</a>
        <a href="/visual" class="nav-link footer-link">Visual total</a>
        <a href="/visio" class="nav-link footer-link">Baixa visió</a>
        <a href="/auditiva" class="nav-link footer-link">Auditiva</a>
        <a href="/motriu" class="nav-link footer-link">Motriu</a>
        <a href="/cognitiva" class="nav-link footer-link">Cognitiva</a>
      </div>

      <div class="col-12 col-md-4 d-flex flex-column align-items-center order-3 order-md-3">
        <h5 class="footer-title">XARXES SOCIALS</h5>
        <div class="social-icons">
          <a href="https://www.instagram.com/your-instagram-handle" target="_blank" class="social-icon">
            <i class="fab fa-instagram fa-2x"></i>
          </a>
          <a href="https://www.tiktok.com/@your-tiktok-handle" target="_blank" class="social-icon">
            <i class="fab fa-tiktok fa-2x"></i>
          </a>
          <a href="https://www.facebook.com/your-facebook-handle" target="_blank" class="social-icon">
            <i class="fab fa-facebook fa-2x"></i>
          </a>
        </div>
      </div>
    </div>

    <div class="mt-4">
      <p class="footer-text">&copy; 2025 MUSIC CRAVE. Tots els drets reservats.</p>
    </div>
  </div>
</footer>

</div>
</template>

<style>
a {
  margin-left: 4%;
}

.navbar-custom {
  background-color: #0066ff; 
  margin-bottom: 0;
}

body {
  margin-top: 0; 
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; 
}

html, body {
  height: 100%;
}

.navbar-collapse {
  padding-left: 30%;
  margin-left: 0%;
}

.large-item {
  font-size: 1.2rem;
  white-space: nowrap;
}

.navbar-toggler-icon {
  background-color: #ffffff;
  border-radius: 3px;
  border-color: white;
}

footer {
  background-color: #0066ff;
  color: white;
}

footer p,
footer .footer-title,
footer .footer-text {
  color: white; 
  font-weight: bold;
}

footer .footer-title {
  font-family: 'Mifuente', sans-serif;
  margin-top: 6%;
  margin-left: 3%;
  margin-bottom: 3%;
  text-align: center;
}

footer .footer-text {
  font-weight: bold;
  line-height: 15%;
  margin-top: 2%;
  font-size: 1rem;
}

footer .footer-link {
  color: white;
  font-weight: bold;
  margin-top: 0;
  text-decoration: none;
}

footer .footer-link:hover {
  color: white;
  text-decoration: underline;
  font-weight: bold;
}

footer .col-4 {
  display: flex;
  flex-direction: column;
  align-items: center; 
  text-align: center; 
  gap: 10px; 
  font-weight: bold;
}

footer .social-icons {
  display: flex;
  justify-content: center;
  gap: 15px; 
  margin-top: 5px;
}

footer .social-icon {
  color: #ffffff;
  transition: color 0.3s ease;
}

footer .social-icon:hover {
  color: #ff7f50;
}

.fab {
  font-size: 2rem;
}

.nav-link {
  font-weight: normal; 
  text-decoration: none; 
  color: #ffffff;
}

.nav-link:hover {
  text-decoration: underline; 
  font-weight: bold;
}

</style>
