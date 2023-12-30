import { type ConfigOptions } from '../config';
import { jsExtensions, jsxExtensions, tsExtensions, tsxExtensions } from '../constants';

export type ConfigFiles = {
  javascriptFiles: string[];
  typescriptFiles: string[];
  ecmascriptFiles: string[];
};

function wildcard(extensions: readonly string[]): string[] {
  return extensions.map((extension) => `*${extension}`);
}

export function getFiles(options: ConfigOptions): ConfigFiles {
  const javascriptFiles = wildcard(jsExtensions);
  const typescriptFiles = wildcard(tsExtensions);
  const ecmascriptFiles = javascriptFiles;

  if (options.jsx) {
    javascriptFiles.push(...wildcard(jsxExtensions));
    typescriptFiles.push(...wildcard(tsxExtensions));
  }

  if (options.ts) {
    ecmascriptFiles.push(...typescriptFiles);
  }

  return { javascriptFiles, typescriptFiles, ecmascriptFiles };
}
