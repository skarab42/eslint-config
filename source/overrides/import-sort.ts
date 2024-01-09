import { type ConfigOptions } from '../config';
import { type ConfigOverride } from '../types';
import { getFiles } from '../utils';

export function importSort(options: ConfigOptions = {}): ConfigOverride {
  const { ts = false, jsx = false } = options;

  return {
    files: getFiles({ ts, jsx }).ecmascriptFiles,
    plugins: ['simple-import-sort'],
    rules: {
      'simple-import-sort/imports': 'warn',
      'simple-import-sort/exports': 'warn',
    },
  };
}
