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

    const onBlur = (event: Event) => {
      const value = (event.target as HTMLInputElement).value
      validate(value)
      formStore.updateFieldValue(props?.field?.name, value)
    }

    const validate = (value: string) => {
      const numberRegex = /^[0-9]+$/ // only allow numbers
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
