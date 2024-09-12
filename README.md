# bader-rutter-dynamic-form

This project demonstrates the creation of a dynamic, data-driven form using Vue 3's Composition API.

## See it in action!

This app was [deployed](https://badger-rutter-dynamic-form.netlify.app/) on Netlify!

# Form Input Types and Validations

> **Editing the form-config.json:** In order to function correctly, each field should be given a unique _name_. This way, you can have fields with the same label, but correspond to different values.

## Simple Text Input (`text`)

### Possible Validations

- `mustHaveValue: boolean` - Whether or not the field is required
- `minLength: number` - Minimum length of the input
- `maxLength: number` - Maximum length of the input

## Phone Number Input (`tel`)

### Possible Validations

- `mustOnlyAllowNumbers: boolean` - Whether or not to allow only numbers

## Dropdown Selector (`dropdown`)

### Possible Validations

- `mustHaveValidOption: boolean` - Whether or not input needs to be a valid option

## Multiline Text Input (`textarea`)

### Possible Validations

- `mustHaveValue: boolean` - Whether or not the field is required
- `minLength: number` - Minimum length of the input
- `maxLength: number` - Maximum length of the input
- `shouldShowRemainingChars: boolean` - Whether or not to show remaining characters from maxLength. `maxLength` is required.

## Group of Checkbox Inputs (`checkbox-group`)

### Possible Validations

- `mustHaveValidOption: boolean` - Whether or not input needs to be a valid option

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/)

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
