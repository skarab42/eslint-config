export const jsExtensions = ['.js', '.cjs', '.mjs'] as const;
export const jsxExtensions = ['.jsx', '.cjsx', '.mjsx'] as const;
export const tsExtensions = ['.ts', '.cts', '.mts'] as const;
export const tsxExtensions = ['.tsx', '.ctsx', '.mtsx'] as const;
export const ignorePatterns = [
  '**/node_modules',
  '**/package-lock.json',
  '**/pnpm-lock.yaml',
  '**/yarn.lock',
  '**/bun.lockb',
  '**/license',
  '**/dist',
  '**/build',
  '**/output',
  '**/coverage',
  '**/__snapshots__',
  // TODO: remove when handled by eslint plugins
  '*.ts',
  '*.md',
  '*.json',
  '*.yaml',
] as const;
