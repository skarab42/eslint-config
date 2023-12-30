import { type ConfigOptions } from '../config';
import { type ConfigOverride } from '../types';
import { environment, type EnvironmentName, getFiles } from '../utils';

export function ecmascript(options: ConfigOptions = {}): ConfigOverride {
  const { ts = false, jsx = false, type = 'module', ecmaVersion = 2022, environments = ['node'] } = options;
  const sourceType = type === 'commonjs' ? 'script' : type;

  const computedEnvironments: EnvironmentName[] = ['builtin', `es${ecmaVersion}`];

  if (type === 'commonjs') {
    computedEnvironments.push('commonjs');
  }

  computedEnvironments.push(...environments);

  return {
    files: getFiles({ ts, jsx }).ecmascriptFiles,
    env: environment(computedEnvironments),
    parserOptions: { sourceType, ecmaVersion, ecmaFeatures: { jsx } },
    extends: 'eslint:recommended',
    rules: {
      'no-alert': 'error',
      'no-console': 'warn',
      'no-debugger': 'warn',
    },
  };
}
