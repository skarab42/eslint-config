import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import type { ESLintPlugin, FlatConfig, ParserModule, RulesRecord } from '../common/types.js';

export type TypescriptFilesOptions = {
  jsx?: boolean | undefined;
};

export type TypescriptOptions = {
  rules?: RulesRecord | undefined;
  tsconfigPath?: string | string[] | undefined;
  filesOptions?: TypescriptFilesOptions | undefined;
};

export function typescriptFiles(options: TypescriptFilesOptions = {}): string[] {
  const { jsx = false } = options;

  return [`**/*.?([cm])ts${jsx ? '?(x)' : ''}`];
}

export function typescript(options: TypescriptOptions = {}): FlatConfig[] {
  const { rules = {}, tsconfigPath = ['**/tsconfig.json', '**/tsconfig.*.json'], filesOptions = {} } = options;
  const { jsx = false } = filesOptions;

  const resetRules = (tsPlugin.configs['eslint-recommended']?.rules ?? {}) as RulesRecord;
  const strictRules = tsPlugin.configs['strict-type-checked']?.rules as RulesRecord;

  return [
    {
      files: typescriptFiles({ jsx }),
      plugins: {
        '@typescript-eslint': tsPlugin as unknown as ESLintPlugin,
      },
      languageOptions: {
        parser: tsParser as ParserModule,
        parserOptions: {
          sourceType: 'module',
          project: tsconfigPath,
          tsconfigRootDir: process.cwd(),
        },
      },
      rules: {
        ...resetRules,
        ...strictRules,
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
        ...rules,
      },
    },
  ];
}
