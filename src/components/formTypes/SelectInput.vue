<template>
  <div class="form-field-container select-input-container">
    <label :for="field.label">{{ field.label }}</label>
    <select :id="field.label" v-model="selectedValue" @change="onChange">
      <option value="">{{ field.placeholder }}</option>
      <option v-for="option in field.options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
    <p v-if="validationError" class="error">{{ validationError }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useFormStore } from '@/stores/FormStore'

export default defineComponent({
  name: 'SelectInput',
  props: {
    modelValue: {
      type: String,
      required: true
    },
    field: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const selectedValue = ref('')
    const validationError = ref('')
    const formStore = useFormStore()

    const onChange = (event: Event) => {
      const value = (event.target as HTMLSelectElement).value
      selectedValue.value = value
      validate(value)
      formStore.updateFieldValue(props?.field?.name, value)
    }

    const validate = (value: string) => {
      if (props.field?.validations?.mustHaveValidOption && !value) {
        validationError.value = 'This field is required'
      } else {
        validationError.value = ''
      }
      formStore.updateFieldValidity(props?.field?.name, validationError.value == '')
    }

    return { selectedValue, onChange, validationError, validate }
  }
})
</script>

<style scoped lang="sass" src="./SelectInput.scss"></style>
