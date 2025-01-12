<template>
<div>
  <h1>VISUAL TOTAL</h1>
  <p>
Llegeix les resenyes dels nous llançaments dels teus artistes preferits.
</p>
</div>
<div class="container-fluid d-flex justify-content-center align-items-center" style="min-height: 60vh;">
  <div class="card mb-3" style="max-width: 80%; width: 80%;"> 
    <div class="row g-0">
      <div class="col-md-4">
        <img src="https://img.freepik.com/foto-gratis/fondo-oscuro-abstracto_1048-1920.jpg?semt=ais_hybrid" alt="finneas" class="img-fluid" style="object-fit: cover; height: 230px; width: 100%;">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h3>FOR CRYIN' OUT LOUD!</h3>
          <h2>FINNEAS O'CONNELL</h2>
        </div>
      </div>
      <div class="card-footer text-body-secondary">
        <button class="btn btn-light" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample1" aria-expanded="false" aria-controls="multiCollapseExample1" style="color: #f8f9fa; margin-bottom:2%;">
          Més informació
        </button>
        <div class="collapse multi-collapse1" id="multiCollapseExample1">
          <div class="card-text" style="width: 100%;"> 
            <p class="card-text text-primary" style="font-weight:bold; text-align: justify; font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; font-size: 100%">63/100 - Metacritic · 39:56 min · Intimate alternative pop</p>
            <p class="card-text" style="margin-bottom:4%;text-align: justify; font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif">Per Cryin' Out Loud! és el segon àlbum d'estudi de FINNEAS, que es va publicar el 4 d'octubre de 2024. L'àlbum segueix el seu debut el 2021, Optimist. Precedit d'un fragment dos mesos abans del llançament, el senzill principal de l'àlbum és la cançó principal, que es va publicar amb un vídeo musical. FINNEAS també va mostrar la llista de cançons, llançant nombrosos fragments de "Same Old Story", "Little Window" i "Lotus Eater" a Instagram.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="container-fluid d-flex justify-content-center align-items-center" style="min-height: 60vh; margin-bottom:5%;">
  <div class="card mb-3" style="max-width: 80%; width: 80%;"> 
    <div class="row g-0">
      <div class="col-md-4">
        <img src="https://img.freepik.com/foto-gratis/fondo-oscuro-abstracto_1048-1920.jpg?semt=ais_hybrid" alt="finneas" class="img-fluid" style="object-fit: cover; height: 230px; width: 100%;">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h3>BRAT AND IT'S COMPLETELY DIFFERENT BUT ALSO STILL BRAT
        </h3>
          <h2>CHARLI XCX</h2>
        </div>
      </div>
      <div class="card-footer text-body-secondary">
        <button class="btn btn-light" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample3" aria-expanded="false" aria-controls="multiCollapseExample3" style="color: #f8f9fa; margin-bottom:2%;">
          Més informació
        </button>
        <div class="collapse multi-collapse3" id="multiCollapseExample3">
          <div class="card-text" style="width: 100%;"> 
            <p class="card-text text-primary" style="font-weight:bold; text-align: justify; font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; font-size: 100%">89/100 - Metacritic · 1h 38min · Electropop          </p>
            <p class="card-text" style="margin-bottom:4%; text-align: justify; font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif">Brat and It's Completely Different but Also Still Brat és el primer àlbum de remixes de la cantant anglesa Charli XCX. Va ser llançat l'11 d'octubre de 2024 per Atlantic Records. L'àlbum conté remixes de setze temes de la versió de luxe del seu sisè àlbum d'estudi, Brat and It's the Same But There's Three More Songs So It's Not (2024), però també inclou les cançons originals, servint així com un àlbum doble.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>


<script>
export default {
name: "Visual",
};
</script>

<style scoped>
h1 {
font-family: 'Mifuente', sans-serif;
color: #0066ff;
margin-top: 5%;
text-align: center;
margin-right: 10%;
margin-left: 10%;
}

h2{
  font-family: 'Mifuente', sans-serif;
  margin-top: 4%;
  color:white;
  font-size:80%;
}

.card-body {
background-color: #0066ff;
padding-bottom: 2px;
padding-top: 2px;
margin:5%;
justify-content:center;
align-items:center;
}

h3{
  font-family: 'Mifuente', sans-serif;
  margin-top: 4%;
  color:white;
  margin:1%;
}

.logo1 img {
max-width: 50%;
display: flex;
margin-left: 15%;
margin-right: 0%;
}

.button {
text-align: center;
}

#visual {}

.card .mb-3{
margin:0;
display:flex;
justify-content:center;
align-items:center;
}

p {
  margin-top: 3%;
  text-align: center;
  margin-right: 10%;
  margin-left: 10%;
  color: black;
  font-weight: bold;
} 
</style>
