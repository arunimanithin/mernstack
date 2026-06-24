# 📋 Simple Task Manager

A clean, interactive Task Manager web app built with vanilla HTML, CSS, and JavaScript — no frameworks or libraries required.

---

## 🚀 Features

| Feature | Description |
|---|---|
| ➕ Add Task | Type a task and click **Add Task** or press **Enter** |
| ✅ Complete Task | Click the circle button to mark a task done (strikethrough applied) |
| 🗑️ Delete Task | Click the trash icon to remove any task |
| 🧹 Clear Completed | One-click button to remove all finished tasks |
| 📊 Live Stats | Counts for total, completed, and remaining tasks update instantly |

---

## 🗂️ Project Structure

```
task-manager/
├── index.html   # All HTML, CSS, and JavaScript in one file
└── README.md    # This file
```

> The entire application lives in `index.html` — a single self-contained file with no dependencies.

---

## 🛠️ How to Run

1. **Clone or download** this repository.
2. Open `index.html` in any modern web browser.
3. That's it — no build steps, no installs.

```bash
# Or via a local server (optional)
npx serve .
# then open http://localhost:3000
```

---

## 💡 Usage

1. **Add a task** — type in the input field and press `Enter` or click **Add Task**.
2. **Complete a task** — click the circle ⭕ on the left of any task; it turns green with a checkmark and the text gets a strikethrough.
3. **Delete a task** — click the 🗑️ trash icon on the right of any task.
4. **Clear all done tasks** — click **Clear completed** at the bottom of the card.

---

## 🧰 Technologies Used

- **HTML5** — semantic structure (`ul`, `li`, `input`, `button`)
- **CSS3** — custom properties, flexbox, transitions, animations
- **Vanilla JavaScript** — DOM manipulation, event handling, array state management

---

## 📐 Technical Highlights

- **State array** — tasks stored in a JS array; UI re-renders on every state change.
- **Keyboard support** — `Enter` key triggers task addition.
- **XSS-safe rendering** — user input is HTML-escaped before insertion.
- **Animated feedback** — tasks slide in on add and fade out on delete.
- **Accessible buttons** — `aria-label` attributes on icon-only buttons.

---

## 📸 Screenshot

> Open `index.html` in a browser to see the live UI.

---

## 👤 Author

*Submitted as Assignment 1 — Simple Task Manager*
