import { yamlExtensions } from '../constants';
import { type ConfigOverride } from '../types';

export function yaml(): ConfigOverride {
  return {
    files: [...yamlExtensions],
    extends: ['plugin:yml/standard', 'plugin:yml/prettier'],
    parser: 'yaml-eslint-parser',
  };
}
