import { type ConfigOptions } from '../config';
import { getFiles } from '../utils/get-files';
import { type ConfigOverride } from '../utils/types';

export function unicorn(options: ConfigOptions = {}): ConfigOverride {
  const { ts = false, jsx = false, type = 'module' } = options;

  const files = getFiles({ ts, jsx }).ecmascriptFiles;
  const commonjs = type === 'commonjs';

  return {
    files,
    extends: ['plugin:unicorn/recommended'],
    rules: {
      'unicorn/prefer-module': commonjs ? 'off' : 'error',
    },
  };
}
