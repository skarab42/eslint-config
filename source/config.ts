import { type ESLint } from 'eslint';
import { ignorePatterns } from './utils/constants';
import { type SourceType, type EcmaVersion, type ConfigOverride } from './utils/types';
import { type EnvironmentOption } from './utils/environement';
import { typescript } from './configs/typescript';
import { ecmascript } from './configs/ecmascript';
import { packageExists } from './utils/package-exists';
import { imports } from './configs/imports';

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

  ecmascriptOverrides.push(imports({ ts, ...options }));

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
