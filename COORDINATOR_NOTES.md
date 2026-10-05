# Coordinator Notes (not part of the repo)

## Setup checklist

1. Create `team-expense-tracker` on GitHub, initialized with a README.
2. Push the skeleton in `team-expense-tracker/` to `main` (see commands below).
3. Settings → Branches → add a protection rule for `main`:
   - Require a pull request before merging
   - Require 1 approval
   - Require status checks to pass → select **test** (it only shows up after the workflow has run once)
4. Create the three issues below and assign one to each developer.
5. Settings → Collaborators → add all three developers.

## Pushing the skeleton

```bash
cd team-expense-tracker
git init -b main
git add .
git commit -m "Add project skeleton, tests, and CI workflow"
git remote add origin https://github.com/<owner>/team-expense-tracker.git
git pull origin main --allow-unrelated-histories   # merges the README GitHub created
# if README.md conflicts, keep this version, then: git add README.md && git commit
git push -u origin main
```

Or create the repo **without** a README, skip the `git pull` line, and push. `main` still exists after the first push.

---

## Issue #1: Build the expense form and list layout
**Assignee:** Developer A
**Files:** `index.html`, `styles.css`

- Add a form with `id="expense-form"`: description (text), amount (number), category (select: Food, Travel, Supplies, Other), and an Add button.
- Add an empty list with `id="expense-list"` and a total display with `id="expense-total"`.
- Style the page so it's readable and works on a phone-width screen.

**Done when:** the form and list render correctly in the browser and the PR is approved.

---

## Issue #2: Implement and test the utility functions
**Assignee:** Developer B
**Files:** `utils.js`, `utils.test.js`

- Implement `validateExpense`, `calculateTotal`, and `formatCurrency` as described in the comments in `utils.js`.
- Replace each `test.todo` in `utils.test.js` with a real test, and add any edge cases you think of.

**Done when:** `npm test` passes locally and in CI, with no remaining `test.todo`.

---

## Issue #3: Wire up the form and render the expense list
**Assignee:** Developer C
**Files:** `app.js`

- Handle the form submit: build `{ description, amount, category }`, check it with `validateExpense`, add it to `expenses`, and clear the form.
- Implement `render()` to show every expense in `#expense-list` and the formatted total in `#expense-total`.
- Coordinate with Developer A on element ids and with Developer B on function behaviour.

**Done when:** adding an expense in the browser updates the list and the total.

> Note: Issue #3 depends on #1 and #2. Developer C can start right away against the ids and function signatures already in the skeleton. It's a good chance to practise keeping a branch up to date with `git merge main`.
