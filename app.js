import { validateExpense, calculateTotal, formatCurrency } from './utils.js';

const expenses = [];

const form = document.querySelector('#expense-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const description = document.querySelector('#description').value.trim();
  const amount = Number(document.querySelector('#amount').value);
  const category = document.querySelector('#category').value;


  const expense = {
    description: description,
    amount: amount,
    category: category
  };

  if (!validateExpense(expense)) {
    alert('Please enter a valid expense.');
    return;
  }

  expenses.push(expense);
  form.reset();
  render();
});

function render() {
  const list = document.querySelector('#expense-list');
  const total = document.querySelector('#expense-total');

  list.innerHTML = '';

  expenses.forEach((expense) => {
    const item = document.createElement('li');
    item.textContent = `${expense.description} - ${expense.category} - ${formatCurrency(expense.amount)}`;
    list.appendChild(item);
  });

  total.textContent = `Total: ${formatCurrency(calculateTotal(expenses))}`;
}