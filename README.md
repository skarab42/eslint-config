# My shared ESLint config

## Installation

```bash
pnpm add -D typescript eslint @skarab/eslint-config
```

## Basic usage

Add `@skarab/eslint-config/recommended` or `@skarab/eslint-config/recommended-commonjs` to the extends section of your ESLint configuration file.

```json
{
  "extends": ["some-other-config-you-use", "@skarab/eslint-config/recommended"]
}
```

## Advenced usages

This ESLint configuration is designed to be highly customizable, allowing for flexible setup options that cater to different environments and scenarios, including automatic detection of TypeScript.

### Importing and Configuring

To start, in your `.eslintrc.js`, import the `config` function:

```ts
const { config } = require('@skarab/eslint-config');
```

### Configuring options

The `config` function accepts an object of type `ConfigOptions`, enabling you to customize the ESLint setup for your project. The configuration supports **automatic TypeScript detection** but also allows you to explicitly enable or disable TypeScript support based on your requirements.

Here's an example of configuring the ESLint setup:

```ts
// .eslintrc.js
// ...
module.exports = config({
  ts: true,
  jsx: true,
  node: true,
  browser: false,
  type: 'module',
  ecmaVersion: 2020,
  environments: ['jest'],
  reportUnusedDisableDirectives: true,
  ignores: ['**/dist/**', '**/node_modules/**'],
});
```

### Example Usage

#### Basic Configuration for Node.js

For a simple Node.js project using ECMAScript modules:

```ts
const basicConfig = config({
  node: true,
  type: 'module',
});
```

#### TypeScript Project

For a project using TypeScript, where TypeScript is detected automatically:

```ts
const tsConfig = config({
  // TypeScript is automatically detected
  jsx: true,
  ecmaVersion: 2020,
});
```

To explicitly disable TypeScript support:

```ts
const tsConfigExplicit = config({
  ts: false,
  jsx: true,
  ecmaVersion: 2020,
});
```

#### Browser Environment

For a project tailored to run in a browser environment:

```ts
const browserConfig = config({
  browser: true,
  node: false,
});
```

## Using [lint-staged](https://github.com/lint-staged/lint-staged) with `@skarab/eslint-config` and `eslint-staged`

`@skarab/eslint-config` is designed to seamlessly integrate with `lint-staged`, offering an efficient pre-commit file handling and linting process. When instaling the package it includes `eslint-staged`, a script that enhances the ESLint process.

```json
"lint-staged": {
  "*": [
    "pnpm eslint-staged --fix --max-warnings=0",
    "pnpm prettier --write --ignore-unknown"
  ]
}
```

### How `eslint-staged` works

`eslint-staged` acts as a wrapper around ESLint, enhancing its functionality. It processes files passed by `lint-staged` and applies ESLint rules, but with an added advantage: it respects ignore patterns defined in .eslintignore files or in the ESLint configuration `.eslintrc.js` under the `ignorePatterns` property. This means `eslint-staged` **will only lint files that are not explicitly ignored**, streamlining the linting process and ensuring only relevant files are checked.

# My other shared configurations

- [@skarab/prettier-config](https://github.com/skarab42/prettier-config)
- [@skarab/typescript-config](https://github.com/skarab42/typescript-config)
