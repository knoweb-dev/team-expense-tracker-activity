// DOM wiring for the expense tracker.
import { validateExpense, calculateTotal, formatCurrency, removeExpense } from './utils.js';

let expenses = [];

const form = document.getElementById('expense-form');
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const categorySelect = document.getElementById('category');
const expenseList = document.getElementById('expense-list');
const expenseTotal = document.getElementById('expense-total');

function render() {
  if (!expenseList || !expenseTotal) return;

  expenseList.innerHTML = '';

  expenses.forEach((expense) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span><strong>${expense.description}</strong> (${expense.category}) - ${formatCurrency(expense.amount)}</span>
      <button class="delete-btn" data-id="${expense.id}">Delete</button>
    `;

    const deleteBtn = li.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
      expenses = removeExpense(expenses, expense.id);
      render();
    });

    expenseList.appendChild(li);
  });

  const total = calculateTotal(expenses);
  expenseTotal.textContent = `Total: ${formatCurrency(total)}`;
}

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const expense = {
      id: Date.now(), // Unique ID for Task 4
      description: descriptionInput.value.trim(),
      amount: parseFloat(amountInput.value),
      category: categorySelect.value
    };

    if (!validateExpense(expense)) {
      alert('Please enter a valid description and a positive amount.');
      return;
    }

    expenses.push(expense);
    form.reset();
    render();
  });
}

render();
