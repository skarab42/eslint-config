import { type ConfigOptions } from '../config';
import { getFiles } from '../utils/get-files';
import { type ConfigOverride } from '../utils/types';

export function unicorn(options: ConfigOptions = {}): ConfigOverride {
  const { ts = false, jsx = false, type = 'module' } = options;

  const commonjs = type === 'commonjs';

  return {
    files: getFiles({ ts, jsx }).ecmascriptFiles,
    extends: ['plugin:unicorn/recommended'],
    rules: {
      'unicorn/prefer-module': commonjs ? 'off' : 'error',
    },
  };
}
