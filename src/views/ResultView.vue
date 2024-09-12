<template>
  <h1>Results from {{ formTitle }}</h1>
  <ul>
    <li v-for="(field, index) in fieldsWithLabelsAndValues" :key="index">
      <strong>{{ field.label }}:</strong> {{ field.value }}
    </li>
  </ul>
</template>

<script lang="ts" src="./ResultView.ts"></script>

<style scooped lang="scss" src="./ResultView.scss"></style>
