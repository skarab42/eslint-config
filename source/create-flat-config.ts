import { ecmascript, type EcmascriptOptions } from './configs/ecmascript.js';
import { linter } from './configs/linter.js';
import type { FlatConfig, LinterOptions, ParserOptions } from './common/types.js';
import { packageExists } from './common/package-exists.js';
import { unicorn, type UnicornOptions } from './configs/unicorn.js';
import type { TypescriptOptions } from './index.js';
import { ignores, type IgnoresOptions } from './configs/ignores.js';

export type CommonFlatConfigSettings = {
  ts?: boolean | undefined;
  jsx?: boolean | undefined;
  ecmaVersion?: ParserOptions['ecmaVersion'];
  sourceType?: 'module' | 'commonjs' | undefined;
};

export type CreateFlatConfigOptions = CommonFlatConfigSettings & {
  linterOptions?: LinterOptions | undefined;
  ignoresOptions?: IgnoresOptions | undefined;
  ecmascriptOptions?: EcmascriptOptions | undefined;
  typescriptOptions?: TypescriptOptions | undefined;
  unicornOptions?: UnicornOptions | undefined;
};

export async function createFlatConfig(options: CreateFlatConfigOptions = {}): Promise<FlatConfig[]> {
  const { linterOptions, ignoresOptions, ecmascriptOptions, typescriptOptions, unicornOptions } = options;
  const { jsx = false, ts = packageExists('typescript'), ecmaVersion = 2022, sourceType = 'module' } = options;

  const configs = [
    linter(linterOptions),
    ignores(ignoresOptions),
    ecmascript({ ts, jsx, sourceType, ecmaVersion, ...ecmascriptOptions }),
    unicorn({ ts, jsx, ...unicornOptions }),
  ];

  if (ts) {
    const { typescript } = await import('./configs/typescript.js');

    configs.push(typescript({ jsx, sourceType, ecmaVersion, ...typescriptOptions }));
  }

  return configs.flat();
}
