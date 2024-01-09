export function packageExists(identifier: string): boolean {
  try {
    return Boolean(require.resolve(identifier));
  } catch {
    return false;
  }
}
