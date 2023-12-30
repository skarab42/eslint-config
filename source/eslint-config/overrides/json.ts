import { type ConfigOverride } from '../types';

export function json(): ConfigOverride {
  return {
    files: ['*.json', '*.json5', '*.jsonc'],
    extends: ['plugin:jsonc/recommended-with-jsonc', 'plugin:jsonc/prettier'],
    parser: 'jsonc-eslint-parser',
  };
}
