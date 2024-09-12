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

    // get the dynamic fields that will be rendered out
    const fields = formConfig.formFields

    // get the form title
    const formTitle = formConfig.formTitle

    // Message that popped up if user attempts to submit an invalid form
    const overallFormValidationError = ref('')

    // Initialize the form fields
    fields.forEach((field: any) => {
      formStore.initializeField(field.name, field.defaultValidity)
    })

    /**
     * Handle form submission.
     * If the form is valid, emit an event to switch to the results view.
     * If the form is invalid, display an error message.
     */
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
