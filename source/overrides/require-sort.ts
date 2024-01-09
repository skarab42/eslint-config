import { type ConfigOptions } from '../config';
import { type ConfigOverride } from '../types';
import { getFiles } from '../utils';

export function requireSort(options: ConfigOptions = {}): ConfigOverride {
  const { jsx = false } = options;

  return {
    files: getFiles({ jsx }).javascriptFiles,
    plugins: ['require-sort'],
    rules: {
      'require-sort/require-sort': 'error',
    },
  };
}
