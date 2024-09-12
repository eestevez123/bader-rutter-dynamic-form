import { defineStore } from 'pinia'

interface FieldState {
  value: any
  valid: boolean
}

/**
 * Used pinia for state management within this Vue app. This state keeps track of the value of each
 * field and if each field is valid or not
 *
 */
export const useFormStore = defineStore('form', {
  state: () => ({
    fields: {} as Record<string, FieldState>
  }),

  getters: {
    getFieldState: (state) => (fieldName: string) => state.fields[fieldName],
    isFormValid: (state) => {
      return Object.values(state.fields).every((field) => field.valid)
    }
  },

  actions: {
    updateFieldValue(fieldName: string, value: any | null) {
      this.fields[fieldName].value = value
    },

    updateFieldValidity(fieldName: string, valid: boolean) {
      this.fields[fieldName].valid = valid
    },

    initializeField(fieldName: string, defaultValue: boolean) {
      this.fields[fieldName] = {
        value: null,
        valid: defaultValue
      }
    }
  }
})
