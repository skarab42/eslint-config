import { ESLint } from 'eslint';
import { getFiles } from './get-files';
import { ignorePatterns } from './constants';
import { SourceType, EcmaVersion } from './types';
import { EnvironmentOption, environment } from './environement';

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
    ts = false,
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
          },
        ],
      },
    ],
  };
}
