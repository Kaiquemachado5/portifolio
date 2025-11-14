lucide.createIcons();

/* Acessibilidade ao Trocar */

document.querySelectorAll('.trocar input').forEach(input => {
  input.addEventListener('change', e => {
    const checked = e.target.checked;
    const label = e.target.closest('.trocar');
    label.setAttribute('aria-checked', checked);
  });
});