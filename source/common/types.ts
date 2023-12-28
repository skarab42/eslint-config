import type { ESLint, Linter } from 'eslint';

export type ESLintPlugin = ESLint.Plugin;
export type FlatConfig = Linter.FlatConfig;
export type RulesRecord = Linter.RulesRecord;
export type ParserModule = Linter.ParserModule;
export type ParserOptions = Linter.ParserOptions;
export type LinterOptions = Exclude<FlatConfig['linterOptions'], undefined>;
