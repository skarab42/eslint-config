# My shared ESLint config

## Installation

```bash
pnpm add -D typescript eslint @skarab/eslint-config
```

## Usage

Add `@skarab/eslint-config` to the extends section of your ESLint configuration file.

```json
{
  "extends": ["some-other-config-you-use", "@skarab/eslint-config"]
}
```

Or if you want a (slightly) less hardcore version (no pain, no gain), use:

```json
"@skarab/eslint-config/recommended"
```

## What are the plugins used in this package?

> 🔹 recommended 🔸 hardcore

`rc/base.json` 🔹

- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
- [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)

`rc/import.json` 🔹

- [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)
- [eslint-import-resolver-typescript](https://github.com/import-js/eslint-import-resolver-typescript)

`rc/node.json` 🔹

- [eslint-plugin-n](https://github.com/weiran-zsd/eslint-plugin-node) (aka [eslint-plugin-node](https://github.com/mysticatea/eslint-plugin-node))

`rc/typescript.json` 🔹

- [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/parser)
- [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin)
- [eslint-plugin-no-explicit-type-exports](https://github.com/intuit/eslint-plugin-no-explicit-type-exports)

`rc/test.json` 🔹

- [eslint-plugin-no-only-tests](https://github.com/levibuzolic/eslint-plugin-no-only-tests)

`rc/hardcore.json` 🔹🔸

- [eslint-plugin-etc](https://github.com/cartant/eslint-plugin-etc)
- [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise)
- [eslint-plugin-no-use-extend-native](https://github.com/dustinspecker/eslint-plugin-no-use-extend-native)
