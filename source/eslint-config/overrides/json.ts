import { jsonFiles } from '../constants';
import { type ConfigOverride } from '../types';

export function json(): ConfigOverride {
  return {
    files: [...jsonFiles],
    extends: ['plugin:jsonc/recommended-with-jsonc', 'plugin:jsonc/prettier'],
    parser: 'jsonc-eslint-parser',
  };
}
