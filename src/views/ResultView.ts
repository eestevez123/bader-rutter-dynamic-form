import formConfigData from '@/form-config.json'
import { useFormStore } from '@/stores/FormStore'

export default {
  name: 'ResultView',

  setup() {
    const formConfig = formConfigData
    const formStore = useFormStore()

    const formTitle = formConfig.formTitle

    const fieldsWithLabelsAndValues = formConfigData.formFields.map((field: any) => {
      const fieldState = formStore.getFieldState(field.name)
      return {
        label: field.label,
        value: fieldState ? fieldState.value : ''
      }
    })

    return { formTitle, fieldsWithLabelsAndValues }
  }
}
