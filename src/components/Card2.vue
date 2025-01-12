<template>
  <div>
    <b-card
      :title="titulo"
      :img-src="srcimg"
      :img-alt="alt"
      img-top
      :footer="autor"
      tag="proyecto"
      style="max-width: 20rem"
      class="mb-2"
    >

      <b-card-text>
        {{ texto }}
      </b-card-text>

      <b-button
        v-b-tooltip.hover
        title="Acceso a la página web"
        variant="secondary"
        :href="url"
        >Ir al proyecto</b-button
      >
    </b-card>
  </div>
</template>

<script>
export default {
  props: ['id', 'autor', 'titulo', 'srcimg', 'alt', 'texto', 'url'],
};
</script>

<style scoped></style>
