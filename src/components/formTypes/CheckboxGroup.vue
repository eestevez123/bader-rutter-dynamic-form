<template>
  <div class="form-field-container checkbox-group-container">
    <label>{{ field.label }}</label>
    <div v-for="option in field.options" :key="option">
      <input
        type="checkbox"
        :id="option"
        :value="option"
        v-model="selectedValues"
        @change="onChange"
      />
      <label :for="option" class="checkbox-option-label">{{ option }}</label>
    </div>
    <p v-if="validationError" class="error">{{ validationError }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useFormStore } from '@/stores/FormStore'

export default defineComponent({
  name: 'CheckboxGroup',
  props: {
    field: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const selectedValues = ref([])
    const validationError = ref('')
    const formStore = useFormStore()

    const onChange = () => {
      validate(selectedValues?.value)
      formStore.updateFieldValue(props?.field?.name, selectedValues?.value)
    }

    const validate = (values: string[]) => {
      if (props.field?.validations?.mustHaveValidOption && values.length === 0) {
        validationError.value = 'Must have a valid selection'
      } else {
        validationError.value = ''
      }
      formStore.updateFieldValidity(props?.field?.name, validationError.value == '')
    }

    return { selectedValues, onChange, validationError, validate }
  }
})
</script>

<style scoped lang="sass" src="./CheckboxGroup.scss"></style>
