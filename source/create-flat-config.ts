import { ecmascript } from './configs/ecmascript.js';
import { common } from './configs/common.js';
import type { FlatConfig } from './common/types.js';
import { packageExists } from './common/package-exists.js';
import { unicorn } from './configs/unicorn.js';

export async function createFlatConfig(): Promise<FlatConfig[]> {
  const ts = packageExists('typescript');
  const jsx = false;

  const configs = [common(), ecmascript({ filesOptions: { ts, jsx } }), unicorn({ filesOptions: { ts, jsx } })];

  if (ts) {
    const { typescript } = await import('./configs/typescript.js');

    configs.push(typescript({ filesOptions: { jsx } }));
  }

  return configs.flat();
}
