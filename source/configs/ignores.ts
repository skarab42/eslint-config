import type { FlatConfig } from '../common/types.js';

export type IgnoresOptions = {
  ignores?: FlatConfig['ignores'];
};

export const defaultIgnores = [
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

export function ignores(options: IgnoresOptions = {}): FlatConfig[] {
  const { ignores = defaultIgnores } = options;

  return [{ ignores }];
}
