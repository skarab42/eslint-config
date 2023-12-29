import { type Linter } from 'eslint';

export type ConfigOverride = Linter.ConfigOverride;
export type SourceType = Linter.ParserOptions['sourceType'];
export type EcmaVersion = 2015 | 2016 | 2017 | 2018 | 2019 | 2020 | 2021 | 2022 | 2023 | 2024 | 'latest';
