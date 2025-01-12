<template>
<!-- https://bootstrap-vue.org/docs/components/modal-->
<div class="card-container">
  <b-button 
    v-b-modal.modal-prevent-closing 
    variant="custom-white" 
    size="lg"
    class="custom-button"
  >
    SUBSCRIU-TE AQUI PER COMENTAR I LLEGIR MÉS!
  </b-button>

  <div class="mt-3 nom-container">
    Nom 
    <div v-if="submittedNames.length === 0">--</div>
    <ul v-else class="mb-0 pl-3">
      <li v-for="name in submittedNames" :key="name.id">{{ name }}</li>
    </ul>
  </div>

  <b-modal
    id="modal-prevent-closing"
    ref="modal"
    title="Escriu el teu nom"
    @show="resetModal"
    @hidden="resetModal"
    @ok="handleOk"
  >
    <form ref="form" @submit.stop.prevent="handleSubmit">
      <b-form-group
        label="Nom"
        label-for="name-input"
        invalid-feedback="El nom es obligatori"
        :state="nameState"
      >
        <b-form-input
          id="name-input"
          v-model="name"
          :state="nameState"
          required
        ></b-form-input>
      </b-form-group>
    </form>
  </b-modal>
</div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      nameState: null,
      submittedNames: []
    }
  },
  methods: {
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity()
      this.nameState = valid
      return valid
    },
    resetModal() {
      this.name = ''
      this.nameState = null
    },
    handleOk(bvModalEvent) {
      // Prevent modal from closing
      bvModalEvent.preventDefault()
      // Trigger submit handler
      this.handleSubmit()
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return
      }
      // Push the name to submitted names
      this.submittedNames.push(this.name)
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide('modal-prevent-closing')
      })
    }
  }
}
</script>

<style>
.card-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px; 
  background-color: #f8f8f8; 
  font-family: 'Mifuente', sans-serif;
  margin-bottom: 5%;
}


.card-container .custom-button:hover {
  text-decoration: underline !important; 
}


.card-container:hover {
  background-color: #f8f8f8; 
  color: inherit; 
  text-decoration: none; 
}

.nom-container {
  margin-top: 20px; 
  text-align: center; 
  text-decoration: none; 
  font-size:13px;
}


</style>
