import { ecmascript, type EcmascriptOptions } from './configs/ecmascript.js';
import { linter } from './configs/linter.js';
import type { FlatConfig, LinterOptions } from './common/types.js';
import { packageExists } from './common/package-exists.js';
import { unicorn, type UnicornOptions } from './configs/unicorn.js';
import type { TypescriptOptions } from './index.js';
import { ignores, type IgnoresOptions } from './configs/ignores.js';

export type CreateFlatconfigOptions = {
  linterOptions?: LinterOptions | undefined;
  ignoresOptions?: IgnoresOptions | undefined;
  ecmascriptOptions?: EcmascriptOptions | undefined;
  typescriptOptions?: TypescriptOptions | undefined;
  unicornOptions?: UnicornOptions | undefined;
};

export async function createFlatConfig(): Promise<FlatConfig[]> {
  const ts = packageExists('typescript');
  const jsx = false;

  const configs = [
    linter(),
    ignores(),
    ecmascript({ filesOptions: { ts, jsx } }),
    unicorn({ filesOptions: { ts, jsx } }),
  ];

  if (ts) {
    const { typescript } = await import('./configs/typescript.js');

    configs.push(typescript({ filesOptions: { jsx } }));
  }

  return configs.flat();
}
