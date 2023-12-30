import { type ConfigOptions } from '../config';
import { getFiles } from '../utils/get-files';
import { type ConfigOverride } from '../utils/types';

export function prettier(options: ConfigOptions = {}): ConfigOverride {
  const { ts = false, jsx = false } = options;

  const files = getFiles({ ts, jsx }).ecmascriptFiles;

  return {
    files,
    extends: ['prettier'],
  };
}
