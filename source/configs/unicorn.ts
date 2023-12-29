// @ts-expect-error - Could not find a declaration file for module 'eslint-plugin-unicorn'.
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import type { ESLintPlugin, FlatConfig, RulesRecord } from '../common/types.js';
import { ecmascriptFiles, type EcmascriptFilesOptions } from './ecmascript.js';

export type UnicornOptions = EcmascriptFilesOptions;

export function unicorn(options: UnicornOptions = {}): FlatConfig[] {
  const { ts = false, jsx = false } = options;

  return [
    {
      files: ecmascriptFiles({ ts, jsx }),
      plugins: {
        unicorn: eslintPluginUnicorn as ESLintPlugin,
      },
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      rules: eslintPluginUnicorn.configs['flat/recommended'].rules as RulesRecord,
    },
  ];
}
