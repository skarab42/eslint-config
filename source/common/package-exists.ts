import { createRequire } from 'module';

export function packageExists(specifier: string): boolean {
  try {
    createRequire(import.meta.url).resolve(specifier);
    return true;
  } catch {
    return false;
  }
}
