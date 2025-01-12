<template>
<h1>
BENVINGUTS A MUSIC CRAVE, ON TROBARÀS LES ÚLTIMES NOTÍCIES MUSICALS DEL PANORAMA ACTUAL! 
</h1>
<section>
<div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
<div class="carousel-inner">
  <div class="carousel-item active">
    <a href="https://ibb.co/Drg8hXQ">
      <img
        src="https://i.ibb.co/rdfcYPH/billie.png"
        class="d-block w-100"
        alt="La cantant Billie Eilish somrient durant un dels seus concerts. Superposada a ella esta el logo de music crave."
      />
    </a>
  </div>
  <div class="carousel-item">
    <a href="https://ibb.co/kgMRqZD">
      <img
        src="https://i.ibb.co/vxD7L9d/omega.png"
        class="d-block w-100"
        alt="La cantant Rosalía i el Ralphie Choo posant per a una foto promocional de la seva nova cançó. Superposada a aquesta imatge esta el logo de music crave."
      />
    </a>
  </div>
  <div class="carousel-item">
    <a href="https://ibb.co/QN1ypq7">
      <img
        src="https://i.ibb.co/hWt3Lnx/chappell.png"
        class="d-block w-100"
        alt="La cantant Chappel Roan agafant aire i subjectant el microfon durant un concert. Superposada a ella esta el logo de music crave."
      />
    </a>
  </div>
</div>
<button
  class="carousel-control-prev"
  type="button"
  data-bs-target="#carouselExampleAutoplaying"
  data-bs-slide="prev"
  aria-label="Anterior"
>
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Previous</span>
</button>
<button
  class="carousel-control-next"
  type="button"
  data-bs-target="#carouselExampleAutoplaying"
  data-bs-slide="next"
  aria-label="Següent"
>
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Next</span>
</button>
</div>
      </section>

</template>

<script>
export default {
name: 'Home',
}
</script>

<style scoped>
@font-face {
font-family: 'Mifuente'; 
src: url('../assets/fonts/horizon.ttf') format('truetype'); 
font-weight: normal;
font-style: normal;
}

#home {
}

.content-container {
margin-left: 6%; 
margin-right: 6%;
margin-top: 3%;
}

h1 {
color: #0066ff;
font-family: 'Mifuente', sans-serif; 
margin-top:3%;
text-align:center;
font-size:100%;
}

p{
  margin-top:3%;
  text-align:center;
  margin-right:10%;
  margin-left:10%;
  color: #0066ff;
  font-weight:bold; 
}

#carouselExampleAutoplaying {
  margin-top:0; 
}
</style> 