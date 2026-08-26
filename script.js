document.addEventListener('DOMContentLoaded', () => {
  console.log('¡DevOps Trio Script Cargado!');

  // 1. Botón para alternar Modo Oscuro / Claro
  const themeBtn = document.createElement('button');
  themeBtn.textContent = '🌙 / ☀️';
  themeBtn.className = 'theme-toggle';
  document.body.appendChild(themeBtn);

  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
  });

  // 2. Efecto interactivo en las tarjetas de los integrantes
  const cards = document.querySelectorAll('.card');

  cards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      card.style.borderColor = 'var(--accent-color)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.borderColor = 'rgba(255, 255, 255, 0.05)';
    });
  });
});