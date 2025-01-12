<!-- <script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
-->

<template>
  <div id="app">
    <!--
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
-->
    <Card></Card>
    <HelloBootstrap></HelloBootstrap>
    <Card2></Card2>

    <!--<router-view/> -->
  </div>
</template>

<script>
import Card from './components/Card.vue';
import HelloBootstrap from './components/HelloBootstrap.vue';
import Card2 from './components/Card2.vue';

/*const lstProysJson =
  'https://raw.githubusercontent.com/afrikiudl/proyectoswd2324/main/WD_Practica2_2425.json';
  */

const lstProysJson =
  'https://raw.githubusercontent.com/afrikiudl/proyectoswd2425/refs/heads/main/WD_Practica1_2425.json';

/*
export default {
  name: 'app',
  components: {
    Card,
    HelloBootstrap,
  },
};

*/

export default {
  name: 'app',
  components: {
    Card,
    HelloBootstrap,
    Card2,
  },
  props: {
    name: {
      type: String,
      default: 'ListaProyectos',
    },
  },
  components: {
    Card2,
  },
  data() {
    return {
      proyectos: [],
      githubPage: 1,
      page: 1,
      loading: false,
      perPage: 5,
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const res = await fetch(lstProysJson);
      const val = await res.json();
      this.proyectos = val;
      console.log(val);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
