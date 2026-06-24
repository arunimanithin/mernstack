// ── State ──────────────────────────────────────────────────
let tasks = [];
let nextId = 1;

// ── DOM References ─────────────────────────────────────────
const taskInput    = document.getElementById('taskInput');
const addBtn       = document.getElementById('addBtn');
const taskList     = document.getElementById('taskList');
const emptyState   = document.getElementById('emptyState');
const clearDoneBtn = document.getElementById('clearDoneBtn');
const statTotal    = document.getElementById('statTotal');
const statDone     = document.getElementById('statDone');
const statPending  = document.getElementById('statPending');

// ── Add Task ───────────────────────────────────────────────
function addTask() {
  const name = taskInput.value.trim();

  if (!name) {
    taskInput.focus();
    taskInput.style.borderColor = '#DC2626';
    setTimeout(() => (taskInput.style.borderColor = ''), 800);
    return;
  }

  tasks.push({ id: nextId++, name, done: false });
  taskInput.value = '';
  taskInput.focus();
  render();
}

// ── Toggle Complete ────────────────────────────────────────
function toggleTask(id) {
  const task = tasks.find(t => t.id === id);
  if (task) task.done = !task.done;
  render();
}

// ── Delete Task ────────────────────────────────────────────
function deleteTask(id) {
  const li = document.querySelector(`[data-id="${id}"]`);
  if (li) {
    li.style.transition = 'opacity .2s, transform .2s';
    li.style.opacity    = '0';
    li.style.transform  = 'translateX(12px)';
    setTimeout(() => {
      tasks = tasks.filter(t => t.id !== id);
      render();
    }, 200);
  }
}

// ── Clear Completed ────────────────────────────────────────
function clearCompleted() {
  tasks = tasks.filter(t => !t.done);
  render();
}

// ── Render ─────────────────────────────────────────────────
function render() {
  // Remove existing task items (preserve emptyState node)
  Array.from(taskList.querySelectorAll('.task-item')).forEach(el => el.remove());

  const total   = tasks.length;
  const done    = tasks.filter(t => t.done).length;
  const pending = total - done;

  // Update stats
  statTotal.textContent   = `${total} task${total !== 1 ? 's' : ''}`;
  statDone.textContent    = `${done} completed`;
  statPending.textContent = `${pending} remaining`;

  // Show/hide empty state
  emptyState.style.display = total === 0 ? 'block' : 'none';

  // Build task items
  tasks.forEach(task => {
    const li      = document.createElement('li');
    li.className  = `task-item${task.done ? ' done' : ''}`;
    li.dataset.id = task.id;

    li.innerHTML = `
      <button class="btn-complete" aria-label="${task.done ? 'Mark incomplete' : 'Mark complete'}">
        <svg class="check-icon" width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2 6l3 3 5-5" stroke="#fff" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <span class="task-name">${escapeHTML(task.name)}</span>
      <button class="btn-delete" aria-label="Delete task">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2"
             stroke-linecap="round" stroke-linejoin="round">
          <polyline points="3 6 5 6 21 6"/>
          <path d="M19 6l-1 14H6L5 6"/>
          <path d="M10 11v6M14 11v6"/>
          <path d="M9 6V4h6v2"/>
        </svg>
      </button>
    `;

    li.querySelector('.btn-complete').addEventListener('click', () => toggleTask(task.id));
    li.querySelector('.btn-delete').addEventListener('click',   () => deleteTask(task.id));

    taskList.appendChild(li);
  });
}

// ── Helpers ────────────────────────────────────────────────
function escapeHTML(str) {
  return str
    .replace(/&/g,  '&amp;')
    .replace(/</g,  '&lt;')
    .replace(/>/g,  '&gt;')
    .replace(/"/g,  '&quot;')
    .replace(/'/g,  '&#39;');
}

// ── Event Listeners ────────────────────────────────────────
addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keydown', e => { if (e.key === 'Enter') addTask(); });
clearDoneBtn.addEventListener('click', clearCompleted);

// ── Init ───────────────────────────────────────────────────
render();
