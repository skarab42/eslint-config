import { type ConfigOptions } from '../config';
import * as constants from '../constants';
import { type ConfigOverride } from '../types';
import { getFiles } from '../utils';

export function imports(options: ConfigOptions = {}): ConfigOverride {
  const { ts = false, jsx = false } = options;

  const allJsExtensions = [...constants.jsExtensions, ...constants.jsxExtensions];
  const allTsExtensions = [...constants.tsExtensions, ...constants.tsxExtensions];

  if (ts === false) {
    return {
      files: getFiles({ ts, jsx }).ecmascriptFiles,
      extends: ['plugin:import/recommended'],
      settings: {
        'import/resolver': {
          node: { extensions: allJsExtensions },
        },
      },
    };
  }

  return {
    files: getFiles({ ts, jsx }).ecmascriptFiles,
    extends: ['plugin:import/recommended', 'plugin:import/typescript'],
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': allTsExtensions,
      },
      'import/resolver': {
        node: { extensions: allJsExtensions },
        typescript: { alwaysTryTypes: true, extensions: allTsExtensions },
      },
    },
  };
}
