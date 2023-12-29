import { type ESLint } from 'eslint';
import { getFiles } from './get-files';
import { ignorePatterns } from './constants';
import { type SourceType, type EcmaVersion } from './types';
import { type EnvironmentOption, environment } from './environement';

export type ConfigOptions = {
  ts?: boolean | undefined;
  jsx?: boolean | undefined;
  sourceType?: SourceType | undefined;
  ecmaVersion?: EcmaVersion | undefined;
  reportUnusedDisableDirectives?: boolean;
  ignores?: readonly string[] | undefined;
  environments?: EnvironmentOption[] | undefined;
};

export function config(options: ConfigOptions = {}): ESLint.ConfigData {
  const {
    ts = true,
    jsx = false,
    ecmaVersion = 2022,
    sourceType = 'module',
    environments = ['node'],
    ignores = ignorePatterns,
    reportUnusedDisableDirectives = true,
  } = options;

  const files = getFiles({ ts, jsx });

  return {
    reportUnusedDisableDirectives,
    ignorePatterns: [...ignores],
    overrides: [
      {
        files: files.scriptFiles,
        extends: 'eslint:recommended',
        env: environment(['builtin', `es${ecmaVersion}`, ...environments]),
        parserOptions: { sourceType, ecmaVersion, ecmaFeatures: { jsx } },
        rules: {
          'no-alert': 'error',
          'no-console': 'warn',
          'no-debugger': 'warn',
        },
        overrides: [
          {
            files: files.javascriptFiles,
          },
          {
            files: files.typescriptFiles,
            extends: [
              'plugin:@typescript-eslint/recommended-type-checked',
              'plugin:@typescript-eslint/stylistic-type-checked',
            ],
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
          },
        ],
      },
    ],
  };
}
