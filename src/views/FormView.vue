<template>
  <h1>{{ formTitle }}</h1>
  <form @submit.prevent="handleSubmit">
    <div v-for="(field, index) in fields" :key="index">
      <DynamicFormField :field="field" />
    </div>
    <p v-if="overallFormValidationError" class="error">{{ overallFormValidationError }}</p>
    <button type="submit">Submit</button>
  </form>
</template>

<script lang="ts" src="./FormView.ts"></script>
