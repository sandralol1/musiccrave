<template>
<div>
  <h1>Página Cognitiva</h1>
  <p>Secció de xat. Comenta sobre música, artistes, entrevistes i més amb la nostra comunitat musical subscribin-te! </p>

  <div class="card">
    <div class="card-header">
      Nadia • 1k Likes
    </div>
    <div class="card-body">
      <TextoParpadea />

    </div>
    <div class="card-footer text-body-secondary">
      2 days ago
    </div>
  </div>
  <ModalForm></ModalForm>

</div>
</template>

<script>
import CognitivoListaCae from '../components/CognitivoListaCae.vue'
import CognitivoToast from '../components/CognitivoToast.vue' 
import TextoParpadea from "../components/TextoParpadea.vue"
import AnimatedSVG from "../components/AnimatedSVG.vue"
import ToastMovimiento from '../components/ToastMovimiento.vue'
import ModalForm from "../components/ModalForm.vue"


export default {
  name: 'Cognitivo',
  data() {
    return {
    show: true
  }
  },
  props: {  
   name: {
      type: String,
      default: 'cognitivo'
    }
  },
  components: {
    CognitivoListaCae, 
    CognitivoToast,
    TextoParpadea,
    AnimatedSVG,
    ModalForm,
    ToastMovimiento

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
  color: white;
  text-align: center;
  font-size:100%;
  padding:1%;
  margin:0%;
}

.card {
  max-width: 70%;
  display: flex;
  justify-content: center;
  margin-left: auto; 
  margin-right: auto;
  margin-top: 3%;
  margin-bottom: 5%;
}

p {
  margin-top: 3%;
  text-align: center;
  margin-right: 10%;
  margin-left: 10%;
  color: black;
  font-weight: bold;
} 

.card-body p {
  font-weight: normal;
  text-align: justify;
  margin: 0%;
}

.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(5);
  }
  100% {
    transform: scale(10);
  }
}

</style>
