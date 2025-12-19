    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('main section');
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    navButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.target;

        sections.forEach(sec => sec.classList.add('hidden'));
        document.getElementById(target).classList.remove('hidden');

        navButtons.forEach(b => b.classList.remove('active'));
        document
          .querySelectorAll(`[data-target="${target}"]`)
          .forEach(b => b.classList.add('active'));

        mobileMenu.classList.add('hidden');
      });
    });

    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('hidden');
    });

    mobileMenu.addEventListener('click', (e) => {
      if (e.target === mobileMenu || e.target.classList.contains('bg-black/40')) {
        mobileMenu.classList.add('hidden');
      }
    });