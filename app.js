// DOM wiring and localStorage persistence for the expense tracker.
import { validateExpense, calculateTotal, formatCurrency } from './utils.js';

const STORAGE_KEY = 'expenses';

// --- Task 5: LocalStorage Helpers ---

// Safe loader: returns parsed array, or [] if empty/invalid/corrupted
function loadExpenses() {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        if (!data) return [];
        const parsed = JSON.parse(data);
        return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
        console.error('Failed to load expenses from localStorage:', error);
        return [];
    }
}

// Safe saver: writes current expenses to localStorage
function saveExpenses() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
    } catch (error) {
        console.error('Failed to save expenses to localStorage:', error);
    }
}

// Initialize state from localStorage
let expenses = loadExpenses();

// --- DOM Elements ---
const form = document.getElementById('expense-form');
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const categorySelect = document.getElementById('category');
const expenseList = document.getElementById('expense-list');
const expenseTotal = document.getElementById('expense-total');

// --- Render Function ---
function render() {
    if (!expenseList || !expenseTotal) return;

    // Clear existing items
    expenseList.innerHTML = '';

    // Render each expense
    expenses.forEach((expense) => {
        const li = document.createElement('li');
        li.innerHTML = `
      <span><strong>${expense.description}</strong> (${expense.category})</span>
      <span>${formatCurrency(expense.amount)}</span>
    `;
        expenseList.appendChild(li);
    });

    // Calculate and display formatted total
    const total = calculateTotal(expenses);
    expenseTotal.textContent = `Total: ${formatCurrency(total)}`;
}

// --- Form Submit Handler ---
if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const expense = {
            description: descriptionInput.value.trim(),
            amount: parseFloat(amountInput.value),
            category: categorySelect.value,
        };

        if (!validateExpense(expense)) {
            alert('Please enter a valid description and a positive amount.');
            return;
        }

        expenses.push(expense);
        saveExpenses(); // Persist to localStorage
        form.reset();
        render();
    });
}

// Initial render so saved expenses show when page opens
render();
