<template>
<div class="container">
  <h1>AUDITIVA</h1>

  <div v-if="isPlaying" class="audio-container">
    <iframe
      width="640"
      height="480"
      :src="videoUrl"
      title="sonido de pitido intermitente"
      frameborder="0"
      allow="autoplay; encrypted-media"
      allowfullscreen
      class="hidden-iframe"
    ></iframe>
  </div>

  <p> Dona un cop d'ull als últims concerts en directe. </p>

  <div class="video-container">
    <iframe 
      class="custom-iframe" 
      src="https://www.youtube.com/embed/cxQB7hQr-Nk" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerpolicy="strict-origin-when-cross-origin" 
      allowfullscreen
    ></iframe>
  </div>

  <p>Gaudeix de les novetats d'última hora!</p>

  <div class="container d-flex justify-content-center align-items-center" style="margin-bottom:10%">
    <div class="card">
      <div class="card-header">
        <i class="fas fa-circle fa-1x" style="color:#0066ff;"></i>
        NOVETAT - Videoclip 'Drive', SZA
      </div>

      <button 
        class="btn btn-primary" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#collapseExample" 
        aria-expanded="false" 
        aria-controls="collapseExample" 
        @click="startAudio"
      >
        Fes click per obrir el vídeo
      </button>

      <div class="collapse" id="collapseExample">
        <div class="card card-body">
          <iframe 
            class="custom-iframe" 
            src="https://www.youtube.com/embed/1Wdzodfx87s?si=B4CaurnCAdSlI2Gc" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
import { ref } from 'vue';

const isPlaying = ref(false);

const videoUrl = 'https://www.youtube.com/embed/BADTy87PGYw?autoplay=1&mute=0';


function startAudio() {
if (!isPlaying.value) {
  isPlaying.value = true; 
}
}
</script>

<style scoped>
.container {
display: flex;
flex-direction: column;
align-items: center;
}

h1 {
font-family: 'Mifuente', sans-serif;
color: #0066ff;
margin-top: 5%;
text-align: center;
margin-right: 10%;
margin-left: 10%;
}

.video-container {
width: 90%; 
max-width: 1000px; 
margin: 0 auto;
}

.card {
width: 100%;
max-width: 600px; 
}

.card-body iframe {
width: 100%; 
height: 350px; 
}

.custom-iframe {
width: 100%; 
height: 350px; 
border: none;
}

p {
margin-top: 3%;
text-align: center;
margin-right: 10%;
margin-left: 10%;
color: black;
font-weight: bold; 
}

.video {
display: flex; 
justify-content: center; 
align-items: center;
margin-top: 0%;
}

.collapse {
margin-bottom: 0%;
}

.isPlaying {
margin: 0%;
}

.audio-container {
margin: 0;
}

.hidden-iframe {
display: none; 
}

.container{
  width:190%;
}
</style>
