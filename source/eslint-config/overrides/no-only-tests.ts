import { testFiles } from '../constants';
import { type ConfigOverride } from '../types';

export function noOnlyTests(): ConfigOverride {
  return {
    files: [...testFiles],
    plugins: ['no-only-tests'],
    rules: {
      'no-only-tests/no-only-tests': ['error', { fix: true }],
    },
  };
}
