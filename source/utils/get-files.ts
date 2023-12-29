import { type ConfigOptions } from '../config';
import * as constants from './constants';

export type ConfigFiles = {
  javascriptFiles: string[];
  typescriptFiles: string[];
  ecmascriptFiles: string[];
};

function wildcard(extensions: readonly string[]): string[] {
  return extensions.map((ext) => `*${ext}`);
}

export function getFiles(options: ConfigOptions): ConfigFiles {
  const javascriptFiles = wildcard(constants.jsExtensions);
  const typescriptFiles = wildcard(constants.tsExtensions);
  const ecmascriptFiles = javascriptFiles;

  if (options.jsx) {
    javascriptFiles.push(...javascriptFiles);
    typescriptFiles.push(...typescriptFiles);
  }

  if (options.ts) {
    ecmascriptFiles.push(...typescriptFiles);
  }

  return { javascriptFiles, typescriptFiles, ecmascriptFiles };
}
