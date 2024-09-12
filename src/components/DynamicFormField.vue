<template>
  <component :is="fieldComponent" :modelValue="modelValue" :field="field" />
</template>

<script lang="ts" src="./DynamicFormField.ts"></script>

<style lang="scss" src="./DynamicFormField.scss"></style>
