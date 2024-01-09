import { type ConfigOptions } from '../config';
import { type ConfigOverride } from '../types';
import { getFiles } from '../utils';

export function promise(options: ConfigOptions = {}): ConfigOverride {
  const { ts = false, jsx = false } = options;

  return {
    files: getFiles({ ts, jsx }).ecmascriptFiles,
    extends: ['plugin:promise/recommended'],
  };
}
