import { type ESLint } from 'eslint';

import { ecmascript } from './configs/ecmascript';
import { importSort } from './configs/import-sort';
import { imports } from './configs/imports';
import { prettier } from './configs/prettier';
import { typescript } from './configs/typescript';
import { unicorn } from './configs/unicorn';
import { ignorePatterns } from './utils/constants';
import { type EnvironmentOption } from './utils/environement';
import { packageExists } from './utils/package-exists';
import { type ConfigOverride, type EcmaVersion, type SourceType } from './utils/types';

export type ConfigOptions = {
  ts?: boolean | undefined;
  jsx?: boolean | undefined;
  type?: SourceType | undefined;
  ecmaVersion?: EcmaVersion | undefined;
  reportUnusedDisableDirectives?: boolean;
  ignores?: readonly string[] | undefined;
  environments?: EnvironmentOption[] | undefined;
};

export function config(options: ConfigOptions = {}): ESLint.ConfigData {
  const { ts = packageExists('typescript'), ignores = ignorePatterns, reportUnusedDisableDirectives = true } = options;

  const pluginOptions = { ts, ...options };
  const ecmascriptOverrides: ConfigOverride[] = [];

  if (ts) {
    ecmascriptOverrides.push(typescript(pluginOptions));
  }

  ecmascriptOverrides.push(
    imports(pluginOptions),
    importSort(pluginOptions),
    unicorn(pluginOptions),
    // Turns off all rules that are unnecessary or might conflict with Prettier.
    // Prettier should be last, so it gets the chance to override other configs.
    prettier(pluginOptions),
  );

  return {
    reportUnusedDisableDirectives,
    ignorePatterns: [...ignores],
    overrides: [
      {
        ...ecmascript(pluginOptions),
        overrides: ecmascriptOverrides,
      },
    ],
  };
}
