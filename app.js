import { validateExpense, calculateTotal, formatCurrency, filterByCategory } from './utils.js';

const expenses = [];

const form = document.querySelector('#expense-form');
const categoryFilter = document.querySelector('#category-filter');

categoryFilter.addEventListener('change', render);

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
  const selectedCategory = categoryFilter.value;
  const visibleExpenses = filterByCategory(expenses, selectedCategory);

  list.innerHTML = '';

  visibleExpenses.forEach((expense) => {
    const item = document.createElement('li');
    item.textContent = `${expense.description} - ${expense.category} - ${formatCurrency(expense.amount)}`;
    list.appendChild(item);
  });

  total.textContent = `Total: ${formatCurrency(calculateTotal(visibleExpenses))}`;
}