import formConfigData from '@/form-config.json'
import DynamicFormField from '@/components/DynamicFormField.vue'
import { useFormStore } from '@/stores/FormStore'
import { ref, defineComponent } from 'vue'

/**
 * Main Form view, holds the actual form
 */
export default defineComponent({
  name: 'FormView',
  components: { DynamicFormField },
  setup(_, { emit }: any) {
    const formConfig = formConfigData // import on the form data in json
    const formStore = useFormStore() // state management

    const fields = formConfig.formFields // get the dynamic fields that will be rendered out
    const formTitle = formConfig.formTitle // get the title of the form

    const overallFormValidationError = ref('') // Message that popped up if user attempts to submit an invalid form

    fields.forEach((field: any) => {
      // initialize state for each field
      formStore.initializeField(field.name, field.defaultValidity)
    })

    const handleSubmit = () => {
      if (formStore.isFormValid) {
        overallFormValidationError.value = ''
        emit('form-submitted') // emit event to indicate it's time to switch over to the results view
      } else {
        overallFormValidationError.value = 'Please fill out all required fields correctly.'
      }
    }

    return { formTitle, fields, handleSubmit, overallFormValidationError }
  }
})
