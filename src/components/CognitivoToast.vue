<template>
<b-container fluid>
  <div class="CognitivoToast">

<div class="mt-5 mb-5">
    <Toast/>
</div>

<b-button class="mb-2" variant="primary" @click="$bvToast.show('example-toast2')">
    Boton que abre todos los datos    
  </b-button>
    <div class="mt-5 mb-5">
        <div v-for="proyecto in proyectos" :key="proyecto.id">
            <h4>{{ proyecto.titulo }}</h4>
            <br>
            <b-img :src="proyecto.srcimg" fluid :alt="proyecto.alt"></b-img>
            <ToastArray :textoBoton="proyecto.titulo" :mensaje ="proyecto.texto" :url="proyecto.url"/>
        </div>
    </div>

</div>

</b-container>
 
</template>

<script>
import Toast from './Toast.vue' 
import ToastArray from './ToastArray.vue' 

const lstProysJson = 'https://raw.githubusercontent.com/afrikiudl/proyectoswd2425/refs/heads/main/WD_Practica1_2425.json';


export default {
name: 'CognitivoToast',
props: {  
name: {
  type: String,
  default: 'cognitivoToast'
}
},
components: {
    Toast, 
    ToastArray,
},
data() {
  return {
    proyectos:[],
    mostrar: false
  }
},
mounted() {
  this.fetchData()
},
methods: {
    async fetchData() {
      const res = await fetch (lstProysJson);
      const val= await res.json();
      this.proyectos=val;
      console.log(val);
    }
}
}
</script>