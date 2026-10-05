# Team Tasks

All the work for the Team Expense Tracker, split into three rounds. Each task becomes one GitHub Issue, one branch, and one Pull Request.

| Round | Focus |
|-------|-------|
| **1** | Build the app. Each developer works in separate files. |
| **2** | Add features that overlap on purpose, so we practise merge conflicts. |
| **3** | Real-team habits: fixing a bug and shipping a release. |

**Developers:** A, B, C. The coordinator fills in names when creating the issues.

---

## Round 1: Build the app

Suggested merge order: **#2 → #1 → #3**.

### Task #1: Build the expense form and list layout
- **Assignee:** Developer A
- **Branch:** `feature/1-expense-form`
- **Files:** `index.html`, `styles.css`

**What to do**
- Add a form with `id="expense-form"` containing:
  - description: text input
  - amount: number input
  - category: select with Food, Travel, Supplies, Other
  - an **Add** button
- Add an empty list with `id="expense-list"`.
- Add a total display with `id="expense-total"`.
- Style the page so it's readable and works on a phone-width screen.

**Done when**
- [ ] The form, list, and total display in the browser
- [ ] The ids match the ones above exactly (Developer C depends on them)
- [ ] The PR is approved

---

### Task #2: Implement and test the utility functions
- **Assignee:** Developer B
- **Branch:** `feature/2-utils`
- **Files:** `utils.js`, `utils.test.js`

**What to do**
- `validateExpense(expense)`: returns `true` only if the description isn't empty and the amount is a positive number.
- `calculateTotal(expenses)`: returns the sum of all amounts, or `0` for an empty list.
- `formatCurrency(amount)`: returns a string with two decimal places, e.g. `12.5` becomes `"$12.50"`.
- Replace every `test.todo` in `utils.test.js` with a real test. Add edge cases such as negative amounts and whitespace-only descriptions.

**Done when**
- [ ] `npm test` passes locally and in CI
- [ ] No `test.todo` lines remain
- [ ] The PR is approved

---

### Task #3: Connect the form to the list
- **Assignee:** Developer C
- **Branch:** `feature/3-app-wiring`
- **Files:** `app.js`

**What to do**
- Handle the form's submit event:
  - Build `{ description, amount, category }`. Convert `amount` to a number.
  - Check it with `validateExpense`. If it's invalid, show a message and stop.
  - Add it to `expenses` and clear the form.
- Implement `render()` to:
  - show every expense in `#expense-list`
  - show the total in `#expense-total` using `calculateTotal` and `formatCurrency`

**Done when**
- [ ] Adding an expense in the browser updates the list and the total
- [ ] Invalid input does not get added
- [ ] Your branch has been updated with `git merge main` after #1 and #2 merged
- [ ] The PR is approved

---

## Round 2: Overlapping features

All three tasks change `app.js`, so **merge conflicts are expected**. Whoever merges second and third must update their branch with `git merge main`, resolve the conflicts, and push again.

Developers rotate so that everyone works in a part of the code they haven't touched yet.

### Task #4: Delete an expense
- **Assignee:** Developer B
- **Branch:** `feature/4-delete-expense`
- **Files:** `utils.js`, `utils.test.js`, `app.js`, `styles.css`

**What to do**
- Give each new expense a unique `id`, e.g. `Date.now()`.
- Add `removeExpense(expenses, id)` to `utils.js`. It returns a **new** array without that expense and doesn't change the original.
- Add tests for `removeExpense`.
- Add a **Delete** button to each row in the list. Clicking it removes the expense and re-renders.

**Done when**
- [ ] Deleting a row updates the list and the total
- [ ] `removeExpense` has tests and they pass
- [ ] The PR is approved

---

### Task #5: Save expenses in the browser
- **Assignee:** Developer A
- **Branch:** `feature/5-save-expenses`
- **Files:** `app.js`

**What to do**
- Save the `expenses` array to `localStorage` every time it changes.
- Load it from `localStorage` when the page opens.
- If `localStorage` is empty or holds broken data, start with an empty list instead of crashing.

**Done when**
- [ ] Expenses are still there after refreshing the page
- [ ] Clearing site data in the browser gives an empty list, not an error
- [ ] The PR is approved

---

### Task #6: Filter by category
- **Assignee:** Developer C
- **Branch:** `feature/6-category-filter`
- **Files:** `utils.js`, `utils.test.js`, `index.html`, `app.js`

**What to do**
- Add `filterByCategory(expenses, category)` to `utils.js`. It returns only the matching expenses, or all of them when `category` is `"All"`.
- Add tests for `filterByCategory`.
- Add a category dropdown above the list: All, Food, Travel, Supplies, Other.
- The list and the total show only the selected category.

**Done when**
- [ ] Choosing a category updates the list and the total
- [ ] `filterByCategory` has tests and they pass
- [ ] The PR is approved

---

## Round 3: Real-team habits

### Task #7: Fix a reported bug
- **Assignee:** whichever developer the coordinator picks
- **Branch:** `fix/7-<short-description>`
- **Files:** depends on the bug

The coordinator introduces a small bug on `main` through their own PR, for example `calculateTotal` ignoring the last item. They then file it using the **Bug report** issue template.

**What to do**
- Reproduce the bug and find its cause.
- **Write a failing test first** that shows the bug.
- Fix the code so the test passes.

**Done when**
- [ ] The new test fails before the fix and passes after it
- [ ] The PR description explains the cause of the bug
- [ ] The PR is approved

---

### Task #8: Release version 1.0
- **Assignee:** Coordinator, with the whole team
- **Files:** `README.md`

**What to do**
- One developer updates `README.md` through a PR to describe the finished features.
- Once it's merged, the coordinator creates a release on GitHub: **Releases → Draft a new release → tag `v1.0.0`**, with a short list of what's included.

**Done when**
- [ ] All issues #1–#7 are closed
- [ ] Release `v1.0.0` is published

---

## Rules for every task

- Create a branch from an up-to-date `main`. Never commit to `main` directly.
- Put `Closes #<number>` in your PR description.
- Fill in the PR template checklist.
- Request a review from a teammate. Every developer should review at least one PR per round.
- **Reviewers must ask for at least one change** before approving, even a small one, so authors practise pushing follow-up commits.
- Merge only when the **test** check is green and the PR is approved, then delete your branch.
