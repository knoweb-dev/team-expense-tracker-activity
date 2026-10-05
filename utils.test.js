// Tests for utils.js, run with `npm test` (Node's built-in test runner).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { validateExpense, calculateTotal, formatCurrency } from './utils.js';

test('utils.js exports the expected functions', () => {
  assert.equal(typeof validateExpense, 'function');
  assert.equal(typeof calculateTotal, 'function');
  assert.equal(typeof formatCurrency, 'function');
});

// TODO (Issue #2): Replace each test.todo with real tests as you implement the functions.
test.todo('validateExpense accepts a valid expense');
test.todo('validateExpense rejects an empty description');
test.todo('validateExpense rejects a zero or negative amount');
test.todo('calculateTotal returns 0 for an empty list');
test.todo('calculateTotal adds up all amounts');
test.todo('formatCurrency formats to two decimal places');
