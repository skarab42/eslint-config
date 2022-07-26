import prout from 'prout';

console.log('prout', prout);

const plop = 42;

function emptyFunction() {}

function toArray<T>(elements: ArrayLike<T>) {
  return [...elements];
}

export function third<Aaa, Baa, Caa>(a: unknown, b: Baa, c: Caa): Caa {
  return c;
}

interface Prout {
  name: string;
}

throw 'Kaboom!';

export { barType } from './foo';
