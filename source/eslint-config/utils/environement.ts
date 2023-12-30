export type EsEnvironmentFromGlobalsPackage = 'builtin' | 'es5' | 'es2015' | 'es2017' | 'es2020' | 'es2021';

export type EnvironmentFromGlobalsPackage =
  | EsEnvironmentFromGlobalsPackage
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

export type MissingEnvironmentFromGlobalsPackage =
  | 'es2016'
  | 'es2018'
  | 'es2019'
  | 'es2022'
  | 'es2023'
  | 'es2024'
  | 'eslatest';

export type EnvironmentName = EnvironmentFromGlobalsPackage | MissingEnvironmentFromGlobalsPackage;

export type EnvironmentOption = Exclude<
  EnvironmentName,
  'commonjs' | EsEnvironmentFromGlobalsPackage | MissingEnvironmentFromGlobalsPackage
>;

export const latest = 'es2024';

export function environment<Environment extends EnvironmentName>(
  environments: Environment[] = [],
): Record<Environment, true> {
  return Object.fromEntries(
    environments.map((environment) => {
      environment = environment.toLocaleLowerCase() as Environment;
      return [environment === 'eslatest' ? latest : environment, true];
    }),
  ) as Record<Environment, true>;
}
