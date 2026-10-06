// Pure helper functions for the expense tracker.
// No DOM code in this file, so everything here can be unit tested in Node.

// Return true if the expense has a non-empty description
// and a positive numeric amount, otherwise false.
export function validateExpense(expense) {
  if (!expense || typeof expense !== 'object') {
    return false;
  }

  const hasValidDescription =
    typeof expense.description === 'string' && expense.description.trim().length > 0;

  const hasValidAmount =
    typeof expense.amount === 'number' && !Number.isNaN(expense.amount) && expense.amount > 0;

  return hasValidDescription && hasValidAmount;
}

// Return the sum of the `amount` of every expense in the array.
// An empty array should return 0.
export function calculateTotal(expenses) {
  if (!Array.isArray(expenses) || expenses.length === 0) {
    return 0;
  }

  return expenses.reduce((total, expense) => total + (expense.amount || 0), 0);
}

// Format a number as currency with two decimal places,
// e.g. formatCurrency(12.5) -> "$12.50".
export function formatCurrency(amount) {
  return `$${Number(amount).toFixed(2)}`;
}
git add .
git commit -m "Fix bug in calculateTotal and add regression test"
git push -u origin fix/7-fix-bug
