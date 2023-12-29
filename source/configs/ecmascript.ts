import { type ConfigOptions } from '../config';
import { environment } from '../utils/environement';
import { getFiles } from '../utils/get-files';
import { type ConfigOverride } from '../utils/types';

export function ecmascript(options: ConfigOptions = {}): ConfigOverride {
  const { ts = false, jsx = false, ecmaVersion = 2022, sourceType = 'module', environments = ['node'] } = options;

  return {
    files: getFiles({ ts, jsx }).ecmascriptFiles,
    env: environment(['builtin', `es${ecmaVersion}`, ...environments]),
    parserOptions: { sourceType, ecmaVersion, ecmaFeatures: { jsx } },
    extends: 'eslint:recommended',
    rules: {
      'no-alert': 'error',
      'no-console': 'warn',
      'no-debugger': 'warn',
    },
  };
}
