import * as constants from './constants';

export type GetFilesOptions = { ts: boolean; jsx: boolean };

export type GetFilesResult = {
  javascriptFiles: string[];
  typescriptFiles: string[];
  scriptFiles: string[];
};

function wildcard(extensions: readonly string[]): string[] {
  return extensions.map((ext) => `*${ext}`);
}

export function getFiles(options: GetFilesOptions): GetFilesResult {
  const javascriptFiles = wildcard(constants.jsExtensions);
  const typescriptFiles = wildcard(constants.tsExtensions);
  const scriptFiles = javascriptFiles;

  if (options.jsx) {
    javascriptFiles.push(...javascriptFiles);
    typescriptFiles.push(...typescriptFiles);
  }

  if (options.ts) {
    scriptFiles.push(...typescriptFiles);
  }

  return { scriptFiles, javascriptFiles, typescriptFiles };
}
