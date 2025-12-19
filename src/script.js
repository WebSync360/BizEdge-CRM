  const navButtons = document.querySelectorAll('.nav-btn');
  const sections = document.querySelectorAll('main section');
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.target;

      // Hide all sections
      sections.forEach(sec => sec.classList.add('hidden'));

      // Show active section
      document.getElementById(target).classList.remove('hidden');

      // Active state
      navButtons.forEach(b => b.classList.remove('active'));
      navButtons.forEach(b => {
        if (b.dataset.target === target) b.classList.add('active');
      });

      // Close mobile menu
      mobileMenu.classList.add('hidden');
    });
  });

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
      mobileMenu.classList.add('hidden');
    }
  });