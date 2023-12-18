import { expect, test } from 'vitest';

test('import.meta.resolve', () => {
  const path = import.meta.resolve('vitest');
  expect(path).toBe(expect.stringContaining('vitest'));
});
