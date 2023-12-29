import { type ConfigOptions } from '../config';
import * as constants from '../utils/constants';
import { getFiles } from '../utils/get-files';
import { type ConfigOverride } from '../utils/types';

export function imports(options: ConfigOptions = {}): ConfigOverride {
  const { ts = false, jsx = false } = options;

  const files = getFiles({ ts, jsx }).ecmascriptFiles;

  const allJsExtensions = [...constants.jsExtensions, ...constants.jsxExtensions];
  const allTsExtensions = [...constants.tsExtensions, ...constants.tsxExtensions];

  if (ts === false) {
    return {
      files,
      extends: ['plugin:import/recommended'],
      settings: {
        'import/resolver': {
          node: { extensions: allJsExtensions },
        },
      },
    };
  }

  return {
    files,
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
