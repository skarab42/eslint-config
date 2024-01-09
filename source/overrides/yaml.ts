import { yamlFiles } from '../constants';
import { type ConfigOverride } from '../types';

export function yaml(): ConfigOverride {
  return {
    files: [...yamlFiles],
    extends: ['plugin:yml/standard', 'plugin:yml/prettier'],
    parser: 'yaml-eslint-parser',
  };
}
