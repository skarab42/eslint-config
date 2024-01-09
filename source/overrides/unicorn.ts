import { type ConfigOptions } from '../config';
import { type ConfigOverride } from '../types';
import { getFiles } from '../utils';

export function unicorn(options: ConfigOptions = {}): ConfigOverride {
  const { ts = false, jsx = false, type = 'module' } = options;

  const commonjs = type === 'commonjs';

  return {
    files: getFiles({ ts, jsx }).ecmascriptFiles,
    extends: ['plugin:unicorn/recommended'],
    rules: {
      'unicorn/prefer-module': commonjs ? 'off' : 'error',
      'unicorn/prefer-top-level-await': commonjs ? 'off' : 'error',
    },
  };
}
