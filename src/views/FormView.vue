<template>
  <h1>{{ formTitle }}</h1>
  <form @submit.prevent="handleSubmit">
    <!-- Create DynamicFormFields for each field found within the form config json-->
    <div v-for="(field, index) in fields" :key="index">
      <DynamicFormField :field="field" />
    </div>
    <p v-if="overallFormValidationError" class="error">{{ overallFormValidationError }}</p>
    <button type="submit">Submit</button>
  </form>
</template>

<script lang="ts" src="./FormView.ts"></script>
