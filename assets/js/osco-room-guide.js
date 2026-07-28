
(() => {
  const body = document.body;
  const root = document.querySelector('.osco-room-guide');
  if (!root) return;
  const menuButton = root.querySelector('.menu-button');
  const drawer = root.querySelector('.menu-drawer');
  const overlay = root.querySelector('.menu-overlay');
  const closeButton = root.querySelector('.drawer-close');
  const links = root.querySelectorAll('.drawer-link');
  function openMenu() {
    body.classList.add('osco-menu-open');
    menuButton.setAttribute('aria-expanded','true');
    drawer.setAttribute('aria-hidden','false');
    const firstLink = drawer.querySelector('a');
    if (firstLink) firstLink.focus({preventScroll:true});
  }
  function closeMenu() {
    body.classList.remove('osco-menu-open');
    menuButton.setAttribute('aria-expanded','false');
    drawer.setAttribute('aria-hidden','true');
    menuButton.focus({preventScroll:true});
  }
  menuButton.addEventListener('click', openMenu);
  overlay.addEventListener('click', closeMenu);
  closeButton.addEventListener('click', closeMenu);
  links.forEach(link => link.addEventListener('click', () => body.classList.remove('osco-menu-open')));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && body.classList.contains('osco-menu-open')) closeMenu();
  });
})();
