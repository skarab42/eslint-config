import { type ESLint } from 'eslint';

import { ignorePatterns } from './constants';
import { ecmascript, imports, importSort, prettier, typescript, unicorn } from './overrides';
import { type ConfigOverride, type EcmaVersion, type SourceType } from './types';
import { type EnvironmentOption, packageExists } from './utils';

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
