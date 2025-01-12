<template>
<div class="p-3 bg-secondary">
  <b-toast 
    id="example-toast2"
    :title="titulo"  
    static auto-hide-delay="5ms"
    no-auto-hide
    :href="url"
  >
    <b-button class="mb-2" variant="primary" @click="$bvToast.show('example-toast2')">
      Botón    
    </b-button>
  </b-toast>
</div>
</template> 

<script>
export default {
name: 'ToastArray',
props: {
  textoBoton: String,
  mensaje: String,
  url: String
}
}
</script>

<style scoped>
</style>
