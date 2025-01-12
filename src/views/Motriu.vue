<template>
<div>
  <div>
    <h1>MOTRIU</h1>
    <p>Estigues alerta d'esdeveniments propers. Coneix la informació essencial: artista, localització, durada... Clica al link per comprar. </p>

  </div>

  <div class="card-group">
  <div class="card">
  <img src="https://cdn.pixabay.com/photo/2020/02/06/08/19/band-4823341_1280.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">THE NATIONAL</h5>
      <p class="card-text">Palau San Jordi / Barcelona</p>
      <p class="card-text">dj., 16 de gener 2025, 20:00</p>

      <div :class="{ shake: disabled }">
      <p>
        <a href="https://www.ticketmaster.es/artist/the-national-entradas/29978"  tabindex="2" @mouseover="warnDisabled">Compra tickets aqui!</a>
      </p>
    </div>
    </div>
  </div>
  <div class="card">
    <img src="https://cdn.pixabay.com/photo/2016/11/19/11/11/dua-lipa-1838653_960_720.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">DUA LIPA</h5>
      <p class="card-text">Movistar Arena / Madrid</p>
      <p class="card-text">dl., 12 de maig 2025, 21:00</p>

      <div :class="{ shake: disabled }">
      <p>
        <a href="https://www.ticketmaster.es/event/dua-lipa-radical-optimism-tour-entrades/42273"  tabindex="3" @mouseover="warnDisabled">Compra tickets aqui!</a>
      </p>
    </div>
  </div>
</div>
  <div class="card">
    <img src="https://cdn.pixabay.com/photo/2016/11/18/15/44/audience-1835431_1280.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">COLDPLAY</h5>
      <p class="card-text">Zayed Sports City / Abu Dhabi</p>
      <p class="card-text">Tue Jan 14 6:00 pm </p>

      <div :class="{ shake: disabled }">
      <p>
        <a href="https://www.ticketmaster.ae/event/coldplay-music-of-the-spheres-world-tour-delivered-by-dhl-entrades/11007?_gl=1*17ewwv9*_gcl_au*NDUzNDU3NTg1LjE3MzY1NTQwODA.&referrer=https%3A%2F%2Fwww.ticketmaster.ae%2Fevent%2Fcoldplay-music-of-the-spheres-world-tour-delivered-by-dhl-entrades%2F11007%3F_gl%3D1*17ewwv9*_gcl_au*NDUzNDU3NTg1LjE3MzY1NTQwODA."  tabindex="1" @mouseover="warnDisabled">Compra tickets aqui!</a>
      </p>
    </div>
    </div>
  </div>
</div>
  </div>
</template>

<script>
export default {
name: "Motriu",
data() {
  return {
    disabled: false,
  };
},
methods: {
  warnDisabled() {
    this.disabled = true;
    setTimeout(() => {
      this.disabled = false;
    }, 1500);
  },
},
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

p {
  margin-top: 3%;
  text-align: center;
  margin-right: 10%;
  margin-left: 10%;
  color: black;
  font-weight: bold;
  }  

.motriz {
margin: 20px;
padding: 20px;
background-color: #f9f9f9;
border: 1px solid #ddd;
border-radius: 8px;
}

.shake {
animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
transform: translate3d(0, 0, 0);
}

h5{
  background-color:#0066ff;
  font-family: 'Mifuente', sans-serif;
  text-align: center;
  padding: 5%;
  color:white;
}

.card-group {
  max-width: 70%; 
  display: flex;
  justify-content: center; 
  margin-left:auto; 
  margin-right:auto;
  margin-top:3%;
  margin-bottom:3%;
}

.card-group P{
  color:black;
  text-align:justify;
  margin-left:0%;
  margin-right:0%;
  margin:0%;
}

@keyframes shake {
  10%, 90% {
    transform: translate3d(-5px, -2px, 0); 
  }
  20%, 80% {
    transform: translate3d(10px, 4px, 0); 
  }
  30%, 50%, 70% {
    transform: translate3d(-15px, -6px, 0); 
  }
  40%, 60% {
    transform: translate3d(15px, 6px, 0); 
  }
}

div a {
  font-size: 80%;
  color: #0066ff; 
  text-decoration: none; 
  font-weight: normal; 
  transition: color 0.3s ease, transform 0.3s ease; 
  margin:0%;
}
</style>
