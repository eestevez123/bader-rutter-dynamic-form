<template>
  <div class="form-field-container">
    <label :for="field.label">{{ field.label }}</label>
    <input
      :id="field.label"
      type="text"
      @blur="onBlur"
      @input="onInput"
      :placeholder="field.placeholder"
    />
    <p v-if="validationError" class="error">{{ validationError }}</p>
    <p v-if="shouldShowCharsRemaining" class="remaining-chars">
      {{ remainingChars }} characters remaining
    </p>
  </div>
</template>

<script lang="ts">
import { ref, computed, defineComponent } from 'vue'
import { useFormStore } from '@/stores/FormStore'

export default defineComponent({
  name: 'TextInput',
  props: {
    field: Object
  },
  setup(props) {
    const inputValue = ref('')
    const validationError = ref('')
    const formStore = useFormStore()
    const shouldShowCharsRemaining = props.field?.validations?.shouldShowRemainingChars

    const remainingChars = computed(() => {
      let usecChars = 0
      if (inputValue?.value?.length) {
        usecChars = inputValue.value.length
      }
      if (shouldShowCharsRemaining && props.field?.validations?.maxLength) {
        if (props.field.validations.maxLength - usecChars <= 0) {
          return 0
        }
        return props.field.validations.maxLength - usecChars
      }
      return 0
    })

    const validate = (value: string | undefined) => {
      if (props.field?.validations?.mustHaveValue && !value) {
        validationError.value = 'This field is required'
      } else if (
        props.field?.validations?.minLength &&
        value &&
        value.length < props.field.validations.minLength
      ) {
        validationError.value = `This field must be at least ${props.field.validations.minLength} characters long`
      } else if (
        props.field?.validations?.maxLength &&
        value &&
        value.length > props.field.validations.maxLength
      ) {
        validationError.value = `This field must be at most ${props.field.validations.maxLength} characters long`
      } else {
        // Input is valid
        validationError.value = ''
      }

      formStore.updateFieldValidity(props?.field?.name, validationError.value == '')
    }

    // Validation should occur after the user edits the field
    const onBlur = () => {
      formStore.updateFieldValue(props?.field?.name, inputValue.value)
      validate(inputValue.value)
    }

    // we keep track of the current input of the field
    const onInput = (event: any) => {
      inputValue.value = (event.target as HTMLInputElement).value
    }

    return {
      inputValue,
      onBlur,
      validationError,
      shouldShowCharsRemaining,
      remainingChars,
      onInput
    }
  }
})
</script>

<style scoped lang="sass" src="./TextInput.scss"></style>
