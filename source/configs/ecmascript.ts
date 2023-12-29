import eslintJs from '@eslint/js';
import { getGlobals, type GlobalsEnvironment } from '../common/globals.js';
import { type FlatConfig, type ParserOptions, type RulesRecord } from '../common/types.js';

export type EcmascriptFilesOptions = {
  ts?: boolean | undefined;
  jsx?: boolean | undefined;
};

export type EcmascriptOptions = EcmascriptFilesOptions & {
  rules?: RulesRecord | undefined;
  globals?: GlobalsEnvironment[] | undefined;
  ecmaVersion?: ParserOptions['ecmaVersion'];
  sourceType?: 'module' | 'commonjs' | undefined;
};

export function ecmascriptFiles(options: EcmascriptFilesOptions = {}): string[] {
  const { ts = false, jsx = false } = options;

  return [`**/*.?([cm])${ts ? '[jt]' : 'j'}s${jsx ? '?(x)' : ''}`];
}

export function ecmascript(options: EcmascriptOptions = {}): FlatConfig[] {
  const {
    rules = {},
    ts = false,
    jsx = false,
    ecmaVersion = 2022,
    sourceType = 'module',
    globals = ['node', 'browser'],
  } = options;

  globals.unshift(`es${ecmaVersion}`);

  return [
    {
      files: ecmascriptFiles({ ts, jsx }),
      languageOptions: {
        sourceType,
        ecmaVersion,
        parserOptions: {
          ecmaVersion,
          sourceType: sourceType === 'module' ? 'module' : 'script',
          ecmaFeatures: {
            jsx,
          },
        },
        globals: getGlobals(globals),
      },
      rules: {
        ...eslintJs.configs.recommended.rules,
        'no-alert': 'error',
        'no-console': 'warn',
        'no-debugger': 'warn',
        ...rules,
      },
    },
  ];
}
