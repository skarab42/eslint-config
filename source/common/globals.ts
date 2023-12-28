import originalGlobals from 'globals';

let { es5, es2015, es2017, es2020, es2021 } = originalGlobals as GlobalsRecord;

export type EnvironmentValue = boolean | 'off' | 'writable' | 'readonly';
export type EnvironmentRecord = Record<string, EnvironmentValue>;
export type GlobalsRecord = Record<GlobalsEnvironment, EnvironmentRecord>;

const globals: GlobalsRecord = {
  ...(originalGlobals as GlobalsRecord),
  es3: es5,
  es6: es2015,
  es7: es2015,
  es8: es2017,
  es9: es2017,
  es10: es2017,
  es11: es2020,
  es12: es2021,
  es13: es2021,
  es14: es2021,
  es15: es2021,
  es2016: es2015,
  es2018: es2017,
  es2019: es2017,
  es2022: es2021,
  es2023: es2021,
  es2024: es2021,
  eslatest: es2021,
};

export type GlobalsEnvironment =
  | 'es3'
  | 'es6'
  | 'es7'
  | 'es8'
  | 'es9'
  | 'es10'
  | 'es11'
  | 'es12'
  | 'es13'
  | 'es14'
  | 'es15'
  | 'es2016'
  | 'es2018'
  | 'es2019'
  | 'es2022'
  | 'es2023'
  | 'es2024'
  | 'eslatest'
  // ---
  | 'builtin'
  | 'es5'
  | 'es2015'
  | 'es2017'
  | 'es2020'
  | 'es2021'
  | 'browser'
  | 'worker'
  | 'node'
  | 'nodeBuiltin'
  | 'commonjs'
  | 'amd'
  | 'mocha'
  | 'jasmine'
  | 'jest'
  | 'qunit'
  | 'phantomjs'
  | 'couch'
  | 'rhino'
  | 'nashorn'
  | 'wsh'
  | 'jquery'
  | 'yui'
  | 'shelljs'
  | 'prototypejs'
  | 'meteor'
  | 'mongo'
  | 'applescript'
  | 'serviceworker'
  | 'atomtest'
  | 'embertest'
  | 'protractor'
  | 'shared-node-browser'
  | 'webextensions'
  | 'greasemonkey'
  | 'devtools';

export function getGlobals<Environment extends GlobalsEnvironment>(environments: Environment[]): EnvironmentRecord {
  let output: EnvironmentRecord = {};

  for (const environment of environments) {
    output = { ...output, ...globals[environment] };
  }

  return output;
}
