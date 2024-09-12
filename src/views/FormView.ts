import formConfigData from '@/form-config.json'
import DynamicFormField from '@/components/DynamicFormField.vue'
import { useFormStore } from '@/stores/FormStore'
import { ref } from 'vue'

export default {
  name: 'FormView',
  components: { DynamicFormField },
  setup(_, { emit }: any) {
    const formConfig = formConfigData
    const formStore = useFormStore()

    const fields = formConfig.formFields
    const formTitle = formConfig.formTitle

    const overallFormValidationError = ref('')

    fields.forEach((field: any) => {
      formStore.initializeField(field.name, field.defaultValidity)
    })

    const handleSubmit = () => {
      if (formStore.isFormValid) {
        overallFormValidationError.value = ''
        emit('form-submitted')
      } else {
        overallFormValidationError.value = 'Please fill out all required fields correctly.'
      }
    }

    return { formTitle, fields, handleSubmit, overallFormValidationError }
  }
}
