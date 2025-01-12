<template>
<div>
  <h1>PRESENTACIÓ DEL PROJECTE</h1>
  <p>
    Music Crave es una web de temàtica músical en la que mitjançant la diferent disposició de la multimèdia i informació, es presenten diferents barreres d'accés a la plataforma. Aquestes estan dirigides de forma directa a usuaris sense discapacitat amb la finalitat que al interactuar amb aquestes dificultats, empatitzin amb els problemes habituals que presenten els usuaris amb discapacitat al utilitzar la tecnologia. D'aquesta manera, l'usuari s'endinsa en una experiència memorable. 
  </p>
  <h2>LLISTAT DE BARRERES</h2>


  <table class="table">
    <thead>
      <tr>
        <th v-for="(header, index) in tableHeaders" :key="index">{{ header }}</th>
      </tr>
    </thead>
    <tbody class="table-group-divider">
      <tr v-for="row in tableRows" :key="row.id">
        <td>{{ row.discapacitat }}</td>
        <td>{{ row.explicacio }}</td> 
        <td>
        <router-link :to="row.route">{{ row.handle }}</router-link>
      </td>
      </tr>
    </tbody>
  </table>
  <h2>REFLEXIÓ DE LA PRÀCTICA</h2>
  <p>
  El desenvolupament d'aquesta web reflecteix la importància de trencar barreres digitals i garantir l'accessibilitat per a tothom. És un exemple de com el disseny inclusiu pot promoure la igualtat d'oportunitats, sensibilitzant sobre les dificultats que sovint passen desapercebudes i fomentant una societat més empàtica i justa.
  </p>
</div> 
</template>

<script>
import { ref, onMounted } from "vue";
import jsonData from "./data.json"; 

export default {
name: "About",
setup() {
  const tableHeaders = ref([]);
  const tableRows = ref([]);

  onMounted(() => {
    tableHeaders.value = jsonData.headers; 
    tableRows.value = jsonData.rows; 
  });

  return {
    tableHeaders,
    tableRows,
  };
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

h2 {
  font-family: 'Mifuente', sans-serif;
  color: #0066ff;
  margin-top: 5%;
  text-align: center;
  margin-right: 10%;
  margin-left: 10%;
  font-size: 150%;
}

p {
  font-family: 'Gill Sans', 'Gill Sans MT', 'Trebuchet MS', sans-serif;
  text-align: justify;
  margin-right: 10%;
  margin-left: 10%;
}

table {
  width: 80%;
  margin: 3% auto 10%;
  border-collapse: collapse; 
  table-layout: fixed;
}

th, td {
  padding: 15px;
  text-align: center; 
  word-wrap: break-word; 
}

thead th {
  font-weight: bold;
}

td {
  text-align: center; 
}

table tr td:nth-child(2) {
  text-align: justify;
}
</style>