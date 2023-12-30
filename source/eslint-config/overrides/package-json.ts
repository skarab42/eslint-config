import { type ConfigOverride } from '../types';

export function packageJson(): ConfigOverride {
  return {
    files: ['**/package.json'],
    rules: {
      'jsonc/sort-array-values': [
        'error',
        {
          order: { type: 'asc' },
          pathPattern: '^files$',
        },
      ],
      'jsonc/sort-keys': [
        'error',
        {
          order: [
            'name',
            'description',
            'version',

            'license',
            'publisher',
            'author',
            'funding',
            'homepage',
            'repository',
            'bugs',

            'type',
            'main',
            'module',
            'types',
            'bin',
            'exports',

            'private',
            'publishConfig',
            'files',
            'keywords',

            'scripts',

            'peerDependencies',
            'peerDependenciesMeta',
            'optionalDependencies',
            'dependencies',
            'devDependencies',

            'overrides',
            'resolutions',

            'pnpm',
            'engines',
            'packageManager',

            'husky',
            'prettier',
            'lint-staged',
            'simple-git-hooks',
            'eslintConfig',
          ],
          pathPattern: '^$',
        },
        {
          order: { type: 'asc' },
          pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies(Meta)?$',
        },
        {
          order: { type: 'asc' },
          pathPattern: '^(?:resolutions|overrides|pnpm.overrides)$',
        },
        {
          order: ['types', 'import', 'require', 'default'],
          pathPattern: '^exports.*$',
        },
      ],
    },
  };
}
