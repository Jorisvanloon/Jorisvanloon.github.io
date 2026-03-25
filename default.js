const toggle = document.querySelector('.theme-toggle');
const root   = document.documentElement;

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
root.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
updateToggle();

toggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme');
  const next    = current === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  updateToggle();
});

function updateToggle() {
  const isDark = root.getAttribute('data-theme') === 'dark';
  toggle.setAttribute('aria-label', isDark ? 'Schakel naar lichte modus' : 'Schakel naar donkere modus');
  toggle.setAttribute('aria-pressed', String(!isDark));
  toggle.querySelector('[aria-hidden]').textContent = isDark ? '☀' : '☾';
}

// Luister naar systeemwijzigingen terwijl de pagina open is
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  root.setAttribute('data-theme', e.matches ? 'dark' : 'light');
  updateToggle();
});