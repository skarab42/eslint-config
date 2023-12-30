import { type ConfigOverride } from '../types';

export function yaml(): ConfigOverride {
  return {
    files: ['*.yml', '*.yaml'],
    extends: ['plugin:yml/standard', 'plugin:yml/prettier'],
    parser: 'yaml-eslint-parser',
  };
}
