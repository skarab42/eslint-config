import type { FlatConfig, LinterOptions } from '../common/types.js';

export function linter(options: LinterOptions = {}): FlatConfig[] {
  const { noInlineConfig = false, reportUnusedDisableDirectives = 'error' } = options;

  return [
    {
      linterOptions: {
        noInlineConfig,
        reportUnusedDisableDirectives,
      },
    },
  ];
}
