<template>
<div id="list-demo">
  <button v-on:click="add">Agregar</button>
  <button v-on:click="remove">Remover</button>
  <transition name="fade">
  <transition-group name="list" tag="p">
    <span v-for="item in items" v-bind:key="item" class="list-item">
      {{ item }}
    </span>
  </transition-group>
</transition>


</div>
</template>


<script>
export default {
  el: '#list-demo',
  data: function() {
  return {
    items: [1,2,3,4,5,6,7,8,9],
    nextNum: 10
  };
  },
  methods: {
    randomIndex: function () {
      return Math.floor(Math.random() * this.items.length)
    },
    //async add() {
    add: function () {
      this.items.splice(this.randomIndex(), 0, this.nextNum++)
    },
    //async remove() {
    remove: function () {
      this.items.splice(this.randomIndex(), 1)
    },
  },
  mounted() {
    try {
      this.add()
  } catch (e) {
      console.error(e)
    }
  }
}

</script>


<style scoped>
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>