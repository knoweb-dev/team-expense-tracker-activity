# Team Expense Tracker

A small browser app for logging shared team expenses: add an expense, see the list, and see the running total.

This repo is a team exercise in the **pull request workflow**. Nobody pushes to `main` directly. Every change goes through a branch, a PR, a passing test run, and one approving review.

---

## Features (Version 1.0.0)

- 📝 **Add Expenses:** Log team expenses with description, positive amount, and category (`Food`, `Travel`, `Supplies`, `Other`).
- 💵 **Live Total:** Automatically calculates and formats the total team spending in real-time.
- 🗑️ **Delete Expenses:** Easily remove individual expenses from the list.
- 🔍 **Filter by Category:** Filter expenses by category or view all at once.
- 💾 **Automatic Storage:** Saves expenses directly in `localStorage` so data stays even after refreshing or closing the browser.
- 📱 **Mobile Responsive:** Clean, modern layout that looks great on both phones and computers.

---

## Project structure

```
team-expense-tracker/
├── index.html              # Page markup: form + expense list + total
├── styles.css              # All styling
├── app.js                  # DOM wiring: reads the form, renders the list, uses utils.js
├── utils.js                # Pure logic functions (no DOM) — these are unit tested
├── utils.test.js           # Tests for utils.js (Node's built-in test runner)
├── package.json            # Defines `npm test`
├── .gitignore
├── docs/
│   └── TASKS.md            # Every task for the team, round by round
└── .github/
    ├── workflows/
    │   └── test.yml        # CI: runs the tests on every PR and every push to main
    ├── ISSUE_TEMPLATE/     # Templates for new issues (feature / bug)
    └── pull_request_template.md
```

📋 **All tasks are listed in [docs/TASKS.md](docs/TASKS.md).** Find the one assigned to you there.

**Why split `utils.js` from `app.js`?** Anything that touches the page (`document`, buttons, inputs) goes in `app.js`. Anything that's just calculation or validation goes in `utils.js`, so it can be tested without a browser.

---

## Getting started

You need [Git](https://git-scm.com/) and [Node.js](https://nodejs.org/) 20 or newer. There are no packages to install.

```bash
git clone https://github.com/<owner>/team-expense-tracker.git
cd team-expense-tracker
npm test
```

To view the app, open `index.html` in a browser. Because `app.js` uses ES modules, some browsers block it when opened as a `file://` URL. If that happens, serve the folder locally:

```bash
npx serve .
# or, with the VS Code "Live Server" extension: right-click index.html → Open with Live Server
```

---

## Team workflow

Follow these steps for every task.

### 1. Start from an up-to-date `main`

```bash
git checkout main
git pull
```

### 2. Create a branch for your issue

Name it `<type>/<issue-number>-<short-description>`:

```bash
git checkout -b feature/2-expense-form
```

| Prefix      | Use for                        |
|-------------|--------------------------------|
| `feature/`  | New functionality              |
| `fix/`      | Bug fixes                      |
| `docs/`     | README or comment-only changes |

### 3. Commit small, clear changes

```bash
git add index.html styles.css
git commit -m "Add expense form markup and basic styling"
```

Write commit messages in the imperative ("Add…", "Fix…", "Update…"), not "Added stuff".

### 4. Run the tests before you push

```bash
npm test
```

### 5. Push your branch and open a PR

```bash
git push -u origin feature/2-expense-form
```

Then open a Pull Request on GitHub:

- **Base:** `main` ← **Compare:** your branch
- **Title:** a short summary of the change
- **Description:** GitHub fills it with the PR template. Complete each section and tick the checklist. Keep `Closes #<issue-number>` so the issue closes when the PR merges
- **Reviewer:** request a review from a teammate

### 6. Review and merge

- The **test** check must pass (green ✔). If it fails, fix it on your branch and push again. The PR updates automatically.
- At least **one teammate must approve**.
- Once both are done, merge the PR and delete the branch.

### 7. Keep your branch current

If `main` moved on while you were working:

```bash
git checkout main
git pull
git checkout feature/2-expense-form
git merge main
# resolve any conflicts, commit, then push
```

---

## Reviewing a teammate's PR

1. Read the **Files changed** tab.
2. Leave comments on specific lines when something is unclear or could be better. Be specific and kind.
3. Pull the branch and try it yourself if you can:
   ```bash
   git fetch
   git checkout feature/2-expense-form
   ```
4. Choose **Approve**, or **Request changes** with a clear explanation.

---

## Rules of the repo

- ❌ No direct pushes to `main`. Branch protection blocks them.
- ✅ Every PR needs one approval and a passing **test** check.
- ✅ One issue per branch, one branch per PR.
- ✅ If you change `utils.js`, add or update tests in `utils.test.js`.
