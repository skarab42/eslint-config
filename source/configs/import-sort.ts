import { type ConfigOptions } from '../config';
import { getFiles } from '../utils/get-files';
import { type ConfigOverride } from '../utils/types';

export function importSort(options: ConfigOptions = {}): ConfigOverride {
  const { ts = false, jsx = false } = options;

  const files = getFiles({ ts, jsx }).ecmascriptFiles;

  return {
    files,
    plugins: ['simple-import-sort'],
    rules: {
      'simple-import-sort/imports': 'warn',
      'simple-import-sort/exports': 'warn',
    },
  };
}
