import { type ESLint } from 'eslint';

import { ecmascript } from './configs/ecmascript';
import { importSort } from './configs/import-sort';
import { imports } from './configs/imports';
import { typescript } from './configs/typescript';
import { unicorn } from './configs/unicorn';
import { ignorePatterns } from './utils/constants';
import { type EnvironmentOption } from './utils/environement';
import { packageExists } from './utils/package-exists';
import { type ConfigOverride, type EcmaVersion, type SourceType } from './utils/types';

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
  const { ts = packageExists('typescript'), ignores = ignorePatterns, reportUnusedDisableDirectives = true } = options;

  const ecmascriptOverrides: ConfigOverride[] = [];

  if (ts) {
    ecmascriptOverrides.push(typescript(options));
  }

  ecmascriptOverrides.push(imports({ ts, ...options }), importSort({ ts, ...options }), unicorn({ ts, ...options }));

  return {
    reportUnusedDisableDirectives,
    ignorePatterns: [...ignores],
    overrides: [
      {
        ...ecmascript({ ts, ...options }),
        overrides: ecmascriptOverrides,
      },
    ],
  };
}
