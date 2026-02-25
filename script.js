document.addEventListener('DOMContentLoaded', function() {
  const openBtn = document.getElementById('openMenu');
  const closeBtn = document.getElementById('closeMenu');
  const menu = document.getElementById('sideMenu');
  const overlay = document.getElementById('menuOverlay');

  function toggleMenu() {
    menu.classList.toggle('is-open');
    overlay.classList.toggle('is-visible');
    // Блокируем скролл страницы, когда меню открыто
    document.body.style.overflow = menu.classList.contains('is-open') ? 'hidden' : '';
  }

  if (openBtn && closeBtn && menu && overlay) {
    openBtn.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);
  } else {
    console.error("Один из элементов меню не найден. Проверь ID в HTML.");
  }
});