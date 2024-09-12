<template>
  <div class="form-container">
    <!-- Switch between views once the form is submitted -->
    <component :is="currentView" @form-submitted="handleFormSubmitted"></component>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import FormView from './views/FormView.vue'
import ResultView from './views/ResultView.vue'

export default {
  name: 'App',
  components: {
    FormView,
    ResultView
  },
  setup() {
    const currentView = ref('FormView')

    // Once the form has been submitted, switch to the results view
    const handleFormSubmitted = () => {
      currentView.value = 'ResultView'
    }

    return {
      currentView,
      handleFormSubmitted
    }
  }
}
</script>

<style lang="scss" src="./App.scss"></style>
