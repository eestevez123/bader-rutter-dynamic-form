import formConfigData from '@/form-config.json'
import { useFormStore } from '@/stores/FormStore'
import { defineComponent } from 'vue'

/**
 * This view shows the results from the submitted form
 */
export default defineComponent({
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
})
