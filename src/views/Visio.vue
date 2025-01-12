<template>
<div>
  <h1>Baixa visió</h1>
  <p>Conèix informació exclusiva sobre els teus artistes preferits. Curiositats, anuncis de nova música i més... </p>
</div>

<div class="card2">
  <div class="card-body">ENTREVISTA A LANA DEL REY</div>
</div>

<div class="card">
<p class="card-text1">No habías sacado nada desde Honeymoon, en 2015. ¿Cómo sabés que estás lista para editar un disco nuevo?</p>
<p class="card-text2"><small>Mi problema no es comenzar, es detenerme. Incluso cuando ya debería haber terminado un disco, quedo entusiasmada y siempre quiero agregar una canción más, y después otra.</small></p>
<p class="card-text">Entonces no conocés el síndrome de la hoja en blanco.</p>
<p class="card-text2"><small>Es un temor que me agobiaba antes de empezar a grabar mis primeros discos. Lo tenía más presente antes de ser conocida, cuando grababa solo por placer, cuando escribía sola, en mi casa. Tenía la certeza de que la inspiración iba a abandonarme, y me ocurría seguido, a veces pasaba seis meses sin escribir. Pero estos últimos diez años encuentro la inspiración con facilidad, o más bien ella me encuentra a mí.</small></p>
<p class="card-text">De adolescente, tenías la reputación de ser un poco rebelde. ¿Cómo lo tomás hoy en día?</p>
<p class="card-text2"><small>Mis desafíos no son más físicos, acepto los riesgos de otra manera. A los dieciocho, manejaba como una loca, me iba de gira y no dormía durante días enteros. Era más libre, más espontánea, no pensaba en las consecuencias…</small></p>
<p class="card-text">¿Qué entendés por “riesgos musicales”?</p>
<p class="card-text2"><small>Que en el mismo álbum convivan canciones complejas como “Lust for Life” con otras desérticas como “Yosemite”, no es muy racional. Trataron de convencerme y me dijeron que los contrastes eran extremos, pero amo las dos canciones como para excluir una por culpa de la otra.</small></p>
<p class="card-text">¿Te volviste más paciente con el paso del tiempo?</p>
<p class="card-text2"><small>Sí, lo hice. Hoy me dedico mucho más tiempo a mí misma. Puedo ir al estudio cuando quiera, a cualquier hora, no tengo que soportar más la presión de un deadline. Digamos que me dejé llevar un poco por “Lust for Life”…</small></p>
  <img src="https://i.ibb.co/1X5rRXR/Dise-o-sin-t-tulo.png" class="card-img" alt="...">
</div>
</template>

<script>
export default {
name: "Visio",
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

.card {
display: flex;
justify-content: center;
align-items: center;
max-width: 70%;
margin: 1% auto;
margin-bottom: 10%;
}

.card2 {
display: flex;
justify-content: center;
align-items: center;
max-width: 70%;
margin: 3% auto;
margin-bottom: 0%;
text-align: center;
background-color: #0066ff;
border-radius: 5px;
padding-top: 1%;
padding-bottom: 1%;
font-weight: bold;
color: #3485ff;
font-size: 130%;
font-family: 'Mifuente', sans-serif;
}

.card-text {
margin-top: 1%;
text-align: left;
font-weight: bold;
font-size: 70%;
color:#f0f0f0;

}

.card-text1 {
margin-top: 4%;
text-align: left;
font-weight: bold;
font-size: 70%;
color:#f0f0f0;

}

.card-text2 {
margin-top: 1%;
text-align: right;
font-weight: normal;
font-size: 70%;
color:#f0f0f0;
}

</style>
