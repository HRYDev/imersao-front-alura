const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement; // body root element

const CURRENT_THEME = 'theme';

function setTheme(theme) {
  document.body.classList.remove('dark-mode', 'light-mode');
  document.body.classList.add(`${theme}-mode`);
  localStorage.setItem(CURRENT_THEME, theme);
  themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
}

function getPreferredTheme() {
  const saved = localStorage.getItem(CURRENT_THEME);
  if (saved === 'dark' || saved === 'light') {
    return saved;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

const initialTheme = getPreferredTheme();
setTheme(initialTheme);

themeToggle.addEventListener('click', () => {
  const current = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
  setTheme(current === 'dark' ? 'light' : 'dark');
});
