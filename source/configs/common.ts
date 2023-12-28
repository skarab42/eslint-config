import type { FlatConfig, LinterOptions, RulesRecord } from '../common/types.js';

export type CommonOptions = {
  rules?: RulesRecord | undefined;
  ignores?: FlatConfig['ignores'];
  reportUnusedDisableDirectives?: LinterOptions['reportUnusedDisableDirectives'];
};

export const IGNORE_GLOBS = [
  '**/node_modules',
  '**/package-lock.json',
  '**/pnpm-lock.yaml',
  '**/yarn.lock',
  '**/bun.lockb',
  '**/dist',
  '**/build',
  '**/output',
  '**/coverage',
  '**/__snapshots__',
];

export function common(options: CommonOptions = {}): FlatConfig[] {
  const { rules = {}, ignores = IGNORE_GLOBS, reportUnusedDisableDirectives = 'error' } = options;

  return [
    { ignores },
    {
      rules,
      linterOptions: {
        reportUnusedDisableDirectives,
      },
    },
  ];
}
