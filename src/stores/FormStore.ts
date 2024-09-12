import { defineStore } from 'pinia'

interface FieldState {
  value: any
  valid: boolean
}

/**
 * Form store to manage the state of the form. Used pinia for state management within this Vue app.
 * This state keeps track of the value of each field and if each field is valid or not
 *
 */
export const useFormStore = defineStore('form', {
  state: () => ({
    fields: {} as Record<string, FieldState>
  }),

  getters: {
    /**
     * Get the state of a field
     * @param state
     * @returns
     */
    getFieldState: (state) => (fieldName: string) => state.fields[fieldName],

    /**
     * Check if the form is valid
     * @param state
     * @returns
     */
    isFormValid: (state) => {
      return Object.values(state.fields).every((field) => field.valid)
    }
  },

  actions: {
    /**
     * Update the value of a field
     * @param fieldName
     * @param value
     */
    updateFieldValue(fieldName: string, value: any | null) {
      this.fields[fieldName].value = value
    },
    /**
     * Update the validity of a field
     * @param fieldName
     * @param valid
     */
    updateFieldValidity(fieldName: string, valid: boolean) {
      this.fields[fieldName].valid = valid
    },

    /**
     * Initialize a field
     * @param fieldName
     * @param defaultValue
     */
    initializeField(fieldName: string, defaultValue: boolean) {
      this.fields[fieldName] = {
        value: null,
        valid: defaultValue
      }
    }
  }
})
