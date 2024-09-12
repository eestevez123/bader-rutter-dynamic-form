import { computed } from 'vue'
import TextInput from './formTypes/TextInput.vue'
import PhoneNumberInput from './formTypes/PhoneNumberInput.vue'
import CheckboxGroup from './formTypes/CheckboxGroup.vue'
import SelectInput from './formTypes/SelectInput.vue'

export default {
  name: 'DynamicFormField',
  components: {
    TextInput,
    PhoneNumberInput,
    CheckboxGroup,
    SelectInput
  },
  props: {
    field: Object, // Contains field information (type, label, validation, etc.)
    modelValue: [String, Array] // For v-model binding
  },
  setup(props: any) {
    const fieldComponent = computed(() => {
      switch (props.field.type) {
        case 'text':
          return 'TextInput'
        case 'tel':
          return 'PhoneNumberInput'
        case 'dropdown':
          return 'SelectInput'
        case 'checkbox-group':
          return 'CheckboxGroup'
        default:
          return null
      }
    })

    const fieldProps = computed(() => ({
      ...props.field,
      modelValue: props.modelValue
    }))

    return { fieldComponent, fieldProps }
  }
}
