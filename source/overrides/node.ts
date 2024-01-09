import { type ConfigOptions } from '../config';
import { type ConfigOverride } from '../types';
import { getFiles } from '../utils';

export function node(options: ConfigOptions = {}): ConfigOverride {
  const { ts = false, jsx = false, type = 'module' } = options;

  const sourceType = type === 'commonjs' ? 'script' : type;

  return {
    files: getFiles({ ts, jsx }).ecmascriptFiles,
    extends: [`plugin:n/recommended-${sourceType}`],
    rules: {
      'n/no-missing-import': 'off', // same as import/no-unresolved
      'n/no-process-exit': 'off', // same as unicorn/no-process-exit
    },
  };
}
