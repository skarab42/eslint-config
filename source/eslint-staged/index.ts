/* eslint-disable no-console */
import { ESLint } from 'eslint';

async function ESLintStaged(): Promise<void> {
  const parameters = process.argv.slice(2);
  const eslint = new ESLint();
  const files: string[] = [];

  for (const parameter of parameters) {
    if (parameter.startsWith('-') === false && (await eslint.isPathIgnored(parameter)) === false) {
      files.push(parameter);
    }
  }

  const results = await eslint.lintFiles(files);
  const formatter = await eslint.loadFormatter('stylish');
  const resultText = await formatter.format(results);

  if (resultText.length > 0) {
    console.log(resultText);
    process.exitCode = 1;
  }
}

ESLintStaged().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
