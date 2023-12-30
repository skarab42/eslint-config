import { type ConfigOptions } from '../config';
import { getFiles } from '../utils/get-files';
import { type ConfigOverride } from '../utils/types';

export function typescript(options: ConfigOptions = {}): ConfigOverride {
  const { jsx = false } = options;

  return {
    files: getFiles({ ts: true, jsx }).typescriptFiles,
    extends: ['plugin:@typescript-eslint/recommended-type-checked', 'plugin:@typescript-eslint/stylistic-type-checked'],
    plugins: ['@typescript-eslint'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: ['**/tsconfig.json', '**/tsconfig.*.json'],
    },
    rules: {
      '@typescript-eslint/no-throw-literal': 'error',
      '@typescript-eslint/prefer-ts-expect-error': 'warn',
      '@typescript-eslint/explicit-function-return-type': ['warn', { allowExpressions: true }],
      '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        {
          prefer: 'type-imports',
          disallowTypeAnnotations: true,
          fixStyle: 'inline-type-imports',
        },
      ],
    },
  };
}
