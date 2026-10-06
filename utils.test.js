// Tests for utils.js, run with `npm test` (Node's built-in test runner).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { validateExpense, calculateTotal, formatCurrency } from './utils.js';

test('utils.js exports the expected functions', () => {
  assert.equal(typeof validateExpense, 'function');
  assert.equal(typeof calculateTotal, 'function');
  assert.equal(typeof formatCurrency, 'function');
});

test('validateExpense accepts a valid expense', () => {
  const expense = { description: 'Lunch', amount: 15.5, category: 'Food' };
  assert.equal(validateExpense(expense), true);
});

test('validateExpense rejects an empty description', () => {
  assert.equal(validateExpense({ description: '', amount: 10 }), false);
  assert.equal(validateExpense({ description: '   ', amount: 10 }), false);
  assert.equal(validateExpense({ amount: 10 }), false);
});

test('validateExpense rejects a zero or negative amount', () => {
  assert.equal(validateExpense({ description: 'Coffee', amount: 0 }), false);
  assert.equal(validateExpense({ description: 'Coffee', amount: -5 }), false);
  assert.equal(validateExpense({ description: 'Coffee', amount: NaN }), false);
  assert.equal(validateExpense({ description: 'Coffee' }), false);
});

test('calculateTotal returns 0 for an empty list', () => {
  assert.equal(calculateTotal([]), 0);
});

test('calculateTotal adds up all amounts', () => {
  const expenses = [
    { description: 'Lunch', amount: 12.5 },
    { description: 'Taxi', amount: 20 },
    { description: 'Supplies', amount: 2.5 }
  ];
  assert.equal(calculateTotal(expenses), 35);
});

test('formatCurrency formats to two decimal places', () => {
  assert.equal(formatCurrency(12.5), '$12.50');
  assert.equal(formatCurrency(10), '$10.00');
  assert.equal(formatCurrency(0), '$0.00');
  assert.equal(formatCurrency(99.99), '$99.99');
});
test('calculateTotal correctly adds all items including the last one', () => {
  const expenses = [{ amount: 10 }, { amount: 20 }, { amount: 30 }];
  assert.equal(calculateTotal(expenses), 60);
});
