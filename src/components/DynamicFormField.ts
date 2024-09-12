import { computed, defineComponent } from 'vue'
import TextInput from './formTypes/TextInput.vue'
import PhoneNumberInput from './formTypes/PhoneNumberInput.vue'
import CheckboxGroup from './formTypes/CheckboxGroup.vue'
import SelectInput from './formTypes/SelectInput.vue'

/**
 * Placeholder object that determines what kind of form field element is needed
 */
export default defineComponent({
  name: 'DynamicFormField',
  components: {
    TextInput,
    PhoneNumberInput,
    CheckboxGroup,
    SelectInput
  },
  props: {
    field: Object // Contains field information (type, label, validation, etc.)
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
      ...props.field
    }))

    return { fieldComponent, fieldProps }
  }
})
