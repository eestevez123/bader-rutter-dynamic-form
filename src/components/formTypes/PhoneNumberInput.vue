<template>
  <div class="form-field-container">
    <label :for="field.label">{{ field.label }}</label>
    <input type="tel" :id="field.label" :placeholder="field.placeholder" @blur="onBlur" />
    <p v-if="validationError" class="error">{{ validationError }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useFormStore } from '@/stores/FormStore'

/**
 * This component is responsible for rendering a phone number input field
 */
export default defineComponent({
  name: 'PhoneNumberInput',
  props: {
    field: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const phoneNumber = ref('')
    const validationError = ref('')
    const formStore = useFormStore()

    // on blur, get the value of the current input, update the ref value, and check validation
    const onBlur = (event: Event) => {
      const value = (event.target as HTMLInputElement).value
      validate(value)
      formStore.updateFieldValue(props?.field?.name, value)
    }

    // validate the input value
    const validate = (value: string) => {
      const numberRegex = /^[0-9]+$/ // Regex for only numbers
      if (props.field?.validations?.mustOnlyAllowNumbers) {
        if (!numberRegex.test(value)) {
          validationError.value = 'Phone number can only have numbers'
        } else {
          validationError.value = ''
        }
      }
      formStore.updateFieldValidity(props?.field?.name, validationError.value == '')
    }

    return { phoneNumber, onBlur, validationError, validate }
  }
})
</script>

<style scoped lang="sass" src="./PhoneNumberInput.scss"></style>
